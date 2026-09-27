# H2H Eventos — Locação de Equipamentos e Produção de Eventos

Site oficial da **H2H Eventos**, focado em locação de equipamentos audiovisuais, iluminação, sonorização, palcos, tendas e mobiliário, além da realização técnica de eventos e destaque para a atração **Henkz DJ**.

---

## 🎯 Funcionalidades

- **Catálogo Interativo de Equipamentos:** navegação por categorias (Sonorização, Iluminação, Palcos e Estruturas, Audiovisual, Tendas e Coberturas, Mobiliário), busca em tempo real e ordenação.
- **Simulador de Orçamento & Carrinho no Frontend:**
  - Adição/remoção de itens com controle de quantidade.
  - Seleção da quantidade de diárias de locação com recálculo automático.
  - Campos opcionais para data, local e nome do cliente.
  - Cálculos financeiros precisos utilizando centavos inteiros (evitando imprecisões de ponto flutuante).
  - Identificação clara de itens com valor sob consulta e transparência nos preços.
  - Persistência de carrinho no `localStorage`.
- **Encaminhamento Direto para WhatsApp (+55 71 8258-0141):** geração automática da mensagem formatada com itens, quantidades, diárias e valores estimados.
- **Páginas de Detalhes Dinâmicas:** rotas dinâmicas (`/equipamentos/[slug]`) com especificações técnicas completas, itens inclusos e recomendações de eventos.
- **Sessão Especial — Realização de Eventos:** apresentação dos serviços de infraestrutura e produção de eventos sociais e corporativos.
- **Sessão Especial — Henkz DJ:** espaço comercial integrado para contratação de apresentações musicais.
- **Design Moderno e Responsivo:** paleta escura profissional com acentos dourados/âmbar e ciano, tipografia nítida e componentes adaptáveis a qualquer tela.

---

## 🛠️ Stack Tecnológica

- **Framework:** Next.js 16 (App Router)
- **Linguagem:** TypeScript (tipagem estrita)
- **Estilização:** Tailwind CSS v4
- **Ícones:** Lucide React
- **Gerenciador de Pacotes:** pnpm

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js 18+ ou 20+
- pnpm (`corepack enable pnpm` ou `npm i -g pnpm`)

### Instalação

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build de Produção

```bash
# Executar verificação de lint e build estático
pnpm lint
pnpm build

# Testar o build de produção localmente
pnpm start
```

---

## 📁 Estrutura do Projeto

```text
├── app/
│   ├── layout.tsx              # Layout raiz com Font, Metadados e CartProvider
│   ├── page.tsx                # Landing page principal
│   ├── globals.css             # Tema Tailwind CSS e utilitários
│   ├── equipamentos/
│   │   ├── page.tsx            # Catálogo com filtros, busca e ordenação
│   │   └── [slug]/page.tsx     # Página dinâmica de detalhes do equipamento
│   ├── eventos/
│   │   └── page.tsx            # Realização e produção técnica de eventos
│   ├── contato/
│   │   └── page.tsx            # Canais oficiais de atendimento
│   └── orcamento/
│       └── page.tsx            # Simulador de orçamento e envio via WhatsApp
├── components/
│   ├── layout/                 # Navbar e Footer
│   ├── home/                   # Hero, Henkz DJ, Event Production, Categorias, Como Funciona
│   ├── equipment/              # Cards, Filtros e Detalhes
│   └── budget/                 # Simulador de Orçamento
├── context/
│   └── cart-context.tsx        # Estado global do carrinho e persistência LocalStorage
├── lib/
│   ├── data/equipment.ts       # Dados centralizados do catálogo
│   ├── pricing.ts              # Regras de cálculo financeiro (centavos)
│   ├── whatsapp.ts             # Gerador de links e mensagens do WhatsApp (+55 71 8258-0141)
│   ├── types.ts                # Interfaces TypeScript estritas
│   └── utils.ts                # Utilitários de classes
└── public/
    ├── logo.jpeg               # Logotipo oficial H2H Eventos
    └── Henkz.jpg               # Imagem oficial Henkz DJ
```

---

## 📋 Informações Comerciais a Preencher / Atualizar

Para futura expansão e atualização de dados reais:
1. **Preços Reais dos Equipamentos:** atualizar os valores em `lib/data/equipment.ts` (`priceInCents`).
2. **Fotografias Adicionais:** adicionar novas fotos de equipamentos reais em `public/` e referenciá-las nos itens.
3. **Novos Equipamentos & Estoque:** adicionar novos registros na lista `EQUIPMENTS`.
