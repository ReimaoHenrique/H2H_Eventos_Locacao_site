'use client';

import React, { createContext, useContext, useEffect, useState, useSyncExternalStore } from 'react';
import { CartItem, Equipment, BudgetCustomerInfo, BudgetSummary } from '@/lib/types';
import { calculateBudgetSummary } from '@/lib/pricing';

interface CartContextType {
  items: CartItem[];
  customerInfo: BudgetCustomerInfo;
  isLoaded: boolean;
  totalItemsCount: number;
  summary: BudgetSummary;
  addItem: (equipment: Equipment, quantity?: number) => void;
  removeItem: (equipmentId: string) => void;
  updateQuantity: (equipmentId: string, quantity: number) => void;
  setDurationDays: (days: number) => void;
  updateCustomerInfo: (info: Partial<BudgetCustomerInfo>) => void;
  clearCart: () => void;
}

const STORAGE_KEY_ITEMS = 'h2h_eventos_cart_items_v1';
const STORAGE_KEY_CUSTOMER = 'h2h_eventos_customer_info_v1';

const defaultCustomerInfo: BudgetCustomerInfo = {
  name: '',
  phone: '',
  eventDate: '',
  eventLocation: '',
  eventDurationDays: 1,
  notes: '',
};

function subscribeToWindow(callback: () => void) {
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
}

function getClientLoadedSnapshot() {
  return true;
}

function getServerLoadedSnapshot() {
  return false;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const isLoaded = useSyncExternalStore(
    subscribeToWindow,
    getClientLoadedSnapshot,
    getServerLoadedSnapshot
  );

  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const savedItems = localStorage.getItem(STORAGE_KEY_ITEMS);
      return savedItems ? JSON.parse(savedItems) : [];
    } catch {
      return [];
    }
  });

  const [customerInfo, setCustomerInfo] = useState<BudgetCustomerInfo>(() => {
    if (typeof window === 'undefined') return defaultCustomerInfo;
    try {
      const savedCustomer = localStorage.getItem(STORAGE_KEY_CUSTOMER);
      return savedCustomer
        ? { ...defaultCustomerInfo, ...JSON.parse(savedCustomer) }
        : defaultCustomerInfo;
    } catch {
      return defaultCustomerInfo;
    }
  });

  // Save items to LocalStorage on change
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(STORAGE_KEY_ITEMS, JSON.stringify(items));
    } catch (e) {
      console.warn('Failed to save cart items to localStorage:', e);
    }
  }, [items, isLoaded]);

  // Save customer info to LocalStorage on change
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(STORAGE_KEY_CUSTOMER, JSON.stringify(customerInfo));
    } catch (e) {
      console.warn('Failed to save customer info to localStorage:', e);
    }
  }, [customerInfo, isLoaded]);

  const addItem = (equipment: Equipment, quantity: number = 1) => {
    const validQty = Math.max(1, quantity);
    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.equipment.id === equipment.id
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + validQty,
        };
        return updated;
      }

      return [...prevItems, { equipment, quantity: validQty }];
    });
  };

  const removeItem = (equipmentId: string) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.equipment.id !== equipmentId)
    );
  };

  const updateQuantity = (equipmentId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(equipmentId);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.equipment.id === equipmentId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const setDurationDays = (days: number) => {
    const validDays = Math.max(1, Math.floor(days || 1));
    setCustomerInfo((prev) => ({
      ...prev,
      eventDurationDays: validDays,
    }));
  };

  const updateCustomerInfo = (info: Partial<BudgetCustomerInfo>) => {
    setCustomerInfo((prev) => ({
      ...prev,
      ...info,
    }));
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItemsCount = items.reduce((acc, curr) => acc + curr.quantity, 0);

  const summary = calculateBudgetSummary(
    items,
    customerInfo.eventDurationDays || 1
  );

  return (
    <CartContext.Provider
      value={{
        items,
        customerInfo,
        isLoaded,
        totalItemsCount,
        summary,
        addItem,
        removeItem,
        updateQuantity,
        setDurationDays,
        updateCustomerInfo,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
