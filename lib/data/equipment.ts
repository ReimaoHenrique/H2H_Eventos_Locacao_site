import { CategoryInfo, Equipment, EquipmentCategory } from '../types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'sonorizacao',
    name: 'Sonorização',
    description: 'Sistemas de som profissionais, caixas acústicas, subwoofers e mesas digitais para shows, festas e conferências.',
    iconName: 'Volume2',
    badge: 'Áudio Pro',
  },
  {
    id: 'iluminacao',
    name: 'Iluminação Cênica & Pista',
    description: 'Moving heads, refletores LED PAR, lasers, strobo e efeitos especiais para atmosferas imersivas.',
    iconName: 'Sparkles',
    badge: 'Show de Luzes',
  },
  {
    id: 'palcos-estruturas',
    name: 'Palcos & Estruturas',
    description: 'Grids em alumínio Box Truss (Q30/Q20), praticáveis modulares e estruturas seguras para suporte técnico.',
    iconName: 'Layers',
    badge: 'Estruturas',
  },
  {
    id: 'audiovisual',
    name: 'Equipamentos Audiovisuais',
    description: 'Painéis de LED de alta resolução, projetores potentes, TVs e switcher para apresentações e vídeos.',
    iconName: 'MonitorPlay',
    badge: 'Vídeo & LED',
  },
  {
    id: 'tendas-coberturas',
    name: 'Tendas & Coberturas',
    description: 'Tendas piramidais e coberturas reforçadas com proteção UV e lona anti-chamas para áreas abertas.',
    iconName: 'Tent',
    badge: 'Coberturas',
  },
  {
    id: 'mobiliario',
    name: 'Mobiliário para Eventos',
    description: 'Mesas bistrô, banquetas, lounges confortáveis e suportes para eventos sociais e corporativos.',
    iconName: 'Armchair',
    badge: 'Conforto & Estilo',
  },
];

export const EQUIPMENTS: Equipment[] = [
  // Sonorização
  {
    id: 'som-kit-dj-pro',
    slug: 'kit-sonorizacao-dj-completo',
    name: 'Kit Sonorização DJ & Pista Completo',
    shortDescription: 'Sistema completo com 2 caixas de alta potência + 2 subwoofers ativos + mesa de som digital.',
    fullDescription: 'Kit de sonorização profissional dimensionado para festas de 100 a 300 pessoas. Proporciona graves profundos, médios claros e agudos nítidos, ideal para casamentos, formaturas, aniversários e apresentações de DJ.',
    categoryId: 'sonorizacao',
    categoryName: 'Sonorização',
    image: '/logo.jpeg',
    priceInCents: 45000, // R$ 450,00
    billingUnit: 'diaria',
    isDemo: true,
    stockNote: 'Item demonstrativo da categoria sonorização. Preços e configurações sob confirmação.',
    specs: [
      '2x Caixas Ativas Bi-amplificadas 15" 1000W RMS',
      '2x Subwoofers Ativos 18" 1200W RMS',
      '1x Mesa de Som Digital 8 canais com Bluetooth',
      'Pedestais reforçados para caixas de som',
      'Cabeamento completo XLR balanceado e energia',
    ],
    recommendedFor: ['Festas de 15 anos', 'Casamentos', 'Pista de Dança', 'Eventos Corporativos'],
    includedItems: ['Cabos de conexão', 'Pedestais tripé', 'Mesa de controle'],
    featured: true,
  },
  {
    id: 'som-caixa-ativa-15',
    slug: 'caixa-de-som-ativa-15-pol',
    name: 'Caixa de Som Ativa 15" Profissional',
    shortDescription: 'Caixa acústica bi-amplificada com alta pressão sonora e conexão Bluetooth/XLR.',
    fullDescription: 'Caixa de som ativa de alta performance indicada para discursos, apresentações, voz e violão ou reforço sonoro. Possui equalizador embutido e múltiplas entradas para microfones e instrumentos.',
    categoryId: 'sonorizacao',
    categoryName: 'Sonorização',
    image: '/logo.jpeg',
    priceInCents: 12000, // R$ 120,00
    billingUnit: 'diaria',
    isDemo: true,
    stockNote: 'Item demonstrativo da categoria sonorização.',
    specs: [
      'Potência: 600W RMS / 1200W Pico',
      'Alto-falante: 15" com driver de titânio',
      'Resposta de frequência: 45Hz - 20kHz',
      'Entradas: XLR / P10 / RCA / Bluetooth',
      'Acompanha tripé de suporte',
    ],
    recommendedFor: ['Palestras', 'Coquetéis', 'Pequenas Reuniões', 'Retorno de Palco'],
    featured: true,
  },
  {
    id: 'som-subwoofer-18',
    slug: 'subwoofer-ativo-18-pol',
    name: 'Subwoofer Ativo 18" 1200W',
    shortDescription: 'Subwoofer de alta fidelidade para impacto e reforço de frequências graves.',
    fullDescription: 'Subwoofer profissional com gabinete acústico projetado para graves firmes e sem distorção. Perfeito para complementar caixas altas e transformar a experiência musical do público.',
    categoryId: 'sonorizacao',
    categoryName: 'Sonorização',
    image: '/logo.jpeg',
    priceInCents: 18000, // R$ 180,00
    billingUnit: 'diaria',
    isDemo: true,
    stockNote: 'Item demonstrativo da categoria sonorização.',
    specs: [
      'Woofer: 18 polegadas com bobina de alta excursão',
      'Potência: 1200W RMS',
      'Crossover ativo integrado ajustável (80Hz - 150Hz)',
      'Gabinete em compensado naval com pintura epóxi',
    ],
    recommendedFor: ['Baladas', 'Shows ao Vivo', 'Pista Henkz DJ', 'Festas Universitárias'],
    featured: false,
  },
  {
    id: 'som-microfone-sem-fio-duplo',
    slug: 'kit-microfone-sem-fio-duplo-uhf',
    name: 'Kit Microfones Sem Fio Duplo UHF',
    shortDescription: 'Dois bastões sem fio com receptor digital UHF de longo alcance e sem interferências.',
    fullDescription: 'Kit composto por dois microfones sem fio de alta sensibilidade, ideal para cerimonialistas, palestrantes, cantores e apresentadores. Alta autonomia de bateria e alcance de até 80 metros sem perda.',
    categoryId: 'sonorizacao',
    categoryName: 'Sonorização',
    image: '/logo.jpeg',
    priceInCents: 9000, // R$ 90,00
    billingUnit: 'diaria',
    isDemo: true,
    stockNote: 'Item demonstrativo de microfonia profissional.',
    specs: [
      'Frequência de operação: UHF com múltiplos canais selecionáveis',
      'Alcance: até 80 metros em linha de visada',
      'Cápsula cardióide anti-feedback',
      'Alimentação: 2 pilhas AA por microfone',
    ],
    recommendedFor: ['Cerimônias de Casamento', 'Palestras', 'Apresentações', 'Karaokê Pro'],
    featured: false,
  },

  // Iluminação
  {
    id: 'luz-moving-head-beam-230',
    slug: 'moving-head-beam-7r-230w',
    name: 'Moving Head Beam 7R 230W',
    shortDescription: 'Canhão de luz robótico com feixe concentrado, prismas rotativos e gobos dinâmicos.',
    fullDescription: 'O clássico efeito Beam que projeta feixes cortantes no ar com grande alcance e definição. Indispensável para estruturas de pista, palcos de shows e efeitos cênicos de alto impacto visual.',
    categoryId: 'iluminacao',
    categoryName: 'Iluminação Cênica & Pista',
    image: '/logo.jpeg',
    priceInCents: 15000, // R$ 150,00
    billingUnit: 'diaria',
    isDemo: true,
    stockNote: 'Item demonstrativo de iluminação inteligente.',
    specs: [
      'Lâmpada: 7R 230W alta intensidade',
      'Gobos: 17 desenhos + aberto',
      'Cores: 14 cores dicroicas + branco',
      'Prisma: rotativo de 8/16 faces com zoom e foco motorizado',
      'Controle: DMX512 (16 ou 20 canais)',
    ],
    recommendedFor: ['Pistas de Dança', 'Palcos', 'Festas Eletrônicas', 'Casamentos Modernos'],
    featured: true,
  },
  {
    id: 'luz-par-led-64-rgbw',
    slug: 'refletor-par-led-18x18w-rgbwa-uv',
    name: 'Refletor Par LED 18x18W RGBWA+UV',
    shortDescription: 'Refletor para iluminação cênica e decorativa com milhões de combinações de cores.',
    fullDescription: 'Projetor LED versátil para iluminação de ambientes, fachadas, paredes, pilares ou iluminação de palco. Alto brilho e baixo consumo de energia, com transição suave de cores.',
    categoryId: 'iluminacao',
    categoryName: 'Iluminação Cênica & Pista',
    image: '/logo.jpeg',
    priceInCents: 4000, // R$ 40,00
    billingUnit: 'diaria',
    isDemo: true,
    stockNote: 'Item demonstrativo de iluminação decorativa.',
    specs: [
      'LEDs: 18 lâmpadas de 18W (6 em 1)',
      'Mistura de cores: Vermelho, Verde, Azul, Branco, Âmbar e Ultravioleta',
      'Ângulo de abertura: 25 graus',
      'Modos: DMX, Automático, Ativação Sonora e Master/Slave',
    ],
    recommendedFor: ['Iluminação Cênica', 'Fachadas', 'Hall de Entrada', 'Mesas de Bolo'],
    featured: true,
  },
  {
    id: 'luz-maquina-fumaca-1500w',
    slug: 'maquina-de-fumaca-1500w-com-led',
    name: 'Máquina de Fumaça 1500W com DMX',
    shortDescription: 'Gera névoa uniforme para realçar feixes de lasers e moving heads.',
    fullDescription: 'Máquina de fumaça de alta vazão para valorizar todos os efeitos de luz e feixes no ambiente. Inclui fluido atóxico à base d\'água de alta densidade.',
    categoryId: 'iluminacao',
    categoryName: 'Iluminação Cênica & Pista',
    image: '/logo.jpeg',
    priceInCents: 8000, // R$ 80,00
    billingUnit: 'diaria',
    isDemo: true,
    stockNote: 'Item demonstrativo de efeitos especiais.',
    specs: [
      'Potência do aquecedor: 1500W',
      'Tempo de primeiro aquecimento: 4-5 minutos',
      'Capacidade do tanque: 2.5 litros',
      'Acompanha controle sem fio e 1 litro de fluido especial',
    ],
    recommendedFor: ['Baladas', 'Shows', 'Pistas de Dança'],
    featured: false,
  },
  {
    id: 'luz-laser-rgb-animado',
    slug: 'laser-show-rgb-3000mw-animacao',
    name: 'Laser Show Gráfico RGB 3W',
    shortDescription: 'Projetor laser de alta potência com textos, túneis, planos 3D e animações.',
    fullDescription: 'Laser profissional de alta velocidade capaz de desenhar gráficos, formas geométricas tridimensionais, ondas e efeitos volumétricos que sincronizam com a batida da música.',
    categoryId: 'iluminacao',
    categoryName: 'Iluminação Cênica & Pista',
    image: '/logo.jpeg',
    priceInCents: 20000, // R$ 200,00
    billingUnit: 'diaria',
    isDemo: true,
    stockNote: 'Item demonstrativo de efeitos especiais.',
    specs: [
      'Potência total: 3000mW (RGB)',
      'Scanners galvo: 25kpps de alta precisão',
      'Controle: ILDA, DMX512, Som e Automático',
      'Mais de 128 padrões gráficos embutidos',
    ],
    recommendedFor: ['Festas Eletrônicas', 'Reveillon', 'Grandes Formaturas', 'Baladas'],
    featured: false,
  },

  // Palcos e Estruturas
  {
    id: 'est-grid-box-truss-trave',
    slug: 'trave-box-truss-q30-4x3m',
    name: 'Trave Box Truss Q30 em Alumínio (4m x 3m)',
    shortDescription: 'Estrutura em alumínio reforçado para suporte de iluminação, banners e TVs.',
    fullDescription: 'Trave estrutural modelo Q30 com sapatas de apoio pesadas e travas de segurança. Permite a fixação aérea de refletores, moving heads, painel de LED ou banner de patrocinadores/fotografia.',
    categoryId: 'palcos-estruturas',
    categoryName: 'Palcos & Estruturas',
    image: '/logo.jpeg',
    priceInCents: 35000, // R$ 350,00
    billingUnit: 'diaria',
    isDemo: true,
    stockNote: 'Estruturas modulares com montagem e dimensões personalizáveis.',
    specs: [
      'Perfil: Alumínio estrutural liga 6082-T6',
      'Dimensão: 4 metros de largura x 3 metros de altura',
      'Capacidade de carga distribuída: até 400 kg',
      'Inclui bases pesadas estabilizadoras e parafusos de encaixe',
    ],
    recommendedFor: ['Fundo de Palco', 'Pista de Dança', 'Backdrop Fotográfico', 'Entradas'],
    featured: true,
  },
  {
    id: 'est-praticavel-palco-modular',
    slug: 'praticavel-de-palco-modular-2x1m',
    name: 'Praticável de Palco Telescópico 2m x 1m',
    shortDescription: 'Módulo de palco em alumínio com piso antiderrapante e altura regulável (40cm a 100cm).',
    fullDescription: 'Módulos resistentes e de montagem rápida para palcos de bandas, DJs, oradores ou passarelas. Permite formar palcos de qualquer tamanho (ex: 4x3m, 6x4m, etc.).',
    categoryId: 'palcos-estruturas',
    categoryName: 'Palcos & Estruturas',
    image: '/logo.jpeg',
    priceInCents: 8500, // R$ 85,00 por módulo
    billingUnit: 'diaria',
    isDemo: true,
    stockNote: 'Preço por módulo 2x1m. Consulte quantidade necessária para a área do seu evento.',
    specs: [
      'Tamanho por placa: 2,00m x 1,00m (2 m²)',
      'Piso: Compensado naval 18mm com acabamento antiderrapante preto',
      'Pés telescópicos ajustáveis com sapatas niveladoras',
      'Capacidade de carga: 750 kg/m²',
    ],
    recommendedFor: ['Palcos para Bandas', 'Mesas de DJ', 'Palanques', 'Premiações'],
    featured: false,
  },
  {
    id: 'est-grid-box-truss-box-quadrado',
    slug: 'box-truss-gol-quadrado-pista-6x6m',
    name: 'Grid Quadrado Box Truss Q30 para Pista (6m x 6m)',
    shortDescription: 'Estrutura completa em 4 colunas para pista de dança com iluminação suspensa.',
    fullDescription: 'Estrutura completa em formato cubo/box para circundar a pista de dança, permitindo posicionar iluminação de 360 graus, efeitos, globos espelhados e sonorização aérea.',
    categoryId: 'palcos-estruturas',
    categoryName: 'Palcos & Estruturas',
    image: '/logo.jpeg',
    priceInCents: 95000, // R$ 950,00
    billingUnit: 'diaria',
    isDemo: true,
    stockNote: 'Montagem técnica sob responsabilidade de equipe especializada.',
    specs: [
      'Dimensões: 6,00m x 6,00m x 3,50m de altura',
      '4 Torres com bases em aço e braços franceses estabilizadores',
      'Material: Alumínio tubular Q30',
    ],
    recommendedFor: ['Pista Central de Casamento', 'Formaturas', 'Festas de 15 Anos'],
    featured: false,
  },

  // Audiovisual
  {
    id: 'av-painel-led-p39',
    slug: 'painel-de-led-alta-definicao-p39-outdoor-indoor',
    name: 'Painel de LED P3.9 High Definition',
    shortDescription: 'Painel de LED modular de alto brilho para transmissão ao vivo, vídeos e vinhetas.',
    fullDescription: 'Painel de LED com gabinetes modulares de 50x50cm, altíssima taxa de atualização (3840Hz) e contraste excepcional mesmo em ambientes iluminados. Acompanha processadora de vídeo profissional.',
    categoryId: 'audiovisual',
    categoryName: 'Equipamentos Audiovisuais',
    image: '/logo.jpeg',
    priceInCents: null, // Sob Consulta
    billingUnit: 'sob_consulta',
    isDemo: true,
    stockNote: 'Configuração sob medida conforme as dimensões (ex: 3x2m, 4x2.5m, 5x3m) e resolução desejada.',
    specs: [
      'Pitch de pixel: 3.91mm',
      'Brilho: 4500 nits (ótima visibilidade diurna/noturna)',
      'Taxa de atualização: 3840Hz (livre de cintilação em câmeras)',
      'Inclui Send Box / Processadora de Vídeo com entradas HDMI/SDI',
    ],
    recommendedFor: ['Fundo de Palco', 'Conferências Corporativas', 'Transmissões Ao Vivo', 'Shows'],
    featured: true,
  },
  {
    id: 'av-projetor-5000-lumens',
    slug: 'projetor-multimidia-5000-ansi-lumens',
    name: 'Projetor Multimídia 5.000 Lumens Full HD',
    shortDescription: 'Projetor de alta luminosidade para auditórios, conferências e reuniões corporativas.',
    fullDescription: 'Projetor profissional potente com resolução nativa Full HD (1920x1080), foco motorizado e alto contraste, garantindo leitura perfeita de textos, gráficos e vídeos.',
    categoryId: 'audiovisual',
    categoryName: 'Equipamentos Audiovisuais',
    image: '/logo.jpeg',
    priceInCents: 22000, // R$ 220,00
    billingUnit: 'diaria',
    isDemo: true,
    stockNote: 'Item demonstrativo da linha audiovisual.',
    specs: [
      'Brilho: 5.000 ANSI Lumens',
      'Resolução: Full HD 1080p',
      'Conectividade: 2x HDMI, VGA, USB, Áudio In/Out',
      'Acompanha cabos de sinal de longa distância (15m)',
    ],
    recommendedFor: ['Congressos', 'Reuniões Corporativas', 'Retrospectivas em Festas'],
    featured: false,
  },
  {
    id: 'av-smart-tv-65',
    slug: 'smart-tv-4k-65-com-pedestal-de-chao',
    name: 'Smart TV 65" 4K com Pedestal de Chão Móvel',
    shortDescription: 'Monitor TV de 65 polegadas em pedestal ajustável com rodízios para estandes e recepção.',
    fullDescription: 'Televisor 4K de alta definição montado em pedestal de chão profissional com regulagem de altura e prateleira para notebook. Excelente para estandes em feiras, halls de recepção e painéis informativos.',
    categoryId: 'audiovisual',
    categoryName: 'Equipamentos Audiovisuais',
    image: '/logo.jpeg',
    priceInCents: 16000, // R$ 160,00
    billingUnit: 'diaria',
    isDemo: true,
    stockNote: 'Item demonstrativo da linha audiovisual.',
    specs: [
      'Tela: LED 65 polegadas Resolução 4K Ultra HD',
      'Suporte: Pedestal metálico reforçado com rodízios traváveis',
      'Entradas: HDMI, USB para reprodução de mídia em loop contínuo',
      'Prateleira de apoio para computador ou player',
    ],
    recommendedFor: ['Feiras e Estandes', 'Recepção de Convidados', 'Auditórios'],
    featured: false,
  },

  // Tendas e Coberturas
  {
    id: 'tenda-piramidal-5x5',
    slug: 'tenda-piramidal-5x5m-reforcada',
    name: 'Tenda Piramidal 5m x 5m Reforçada (25m²)',
    shortDescription: 'Tenda em lona anti-chamas branca com estrutura de aço galvanizado.',
    fullDescription: 'Tenda modelo piramidal com 25 metros quadrados de área coberta. Lona vulcanizada de alta durabilidade com tratamento anti-mofo e proteção solar UV, perfeita para áreas externas.',
    categoryId: 'tendas-coberturas',
    categoryName: 'Tendas & Coberturas',
    image: '/logo.jpeg',
    priceInCents: 38000, // R$ 380,00
    billingUnit: 'diaria',
    isDemo: true,
    stockNote: 'Fechamentos laterais disponíveis sob consulta.',
    specs: [
      'Dimensão: 5,00m x 5,00m (Pé direito 3,00m / Altura central 4,50m)',
      'Estrutura: Aço galvanizado com encaixes rápidos e reforçados',
      'Lona: PVC semi-blackout com tratamento antichamas (Auto-extinguível)',
      'Fixação por estacas de solo ou contrapesos de segurança',
    ],
    recommendedFor: ['Festas ao Ar Livre', 'Áreas de Alimentação', 'Feiras Gastronômicas'],
    featured: true,
  },
  {
    id: 'tenda-piramidal-10x10',
    slug: 'tenda-piramidal-10x10m-grande-porte',
    name: 'Tenda Piramidal 10m x 10m (100m²)',
    shortDescription: 'Grande cobertura para eventos ao ar livre com capacidade para até 150 pessoas.',
    fullDescription: 'Tenda de grande porte para recepções, palcos ou áreas de convidados ao ar livre. Estrutura tubular robusta resistente a intempéries.',
    categoryId: 'tendas-coberturas',
    categoryName: 'Tendas & Coberturas',
    image: '/logo.jpeg',
    priceInCents: null, // Sob consulta
    billingUnit: 'sob_consulta',
    isDemo: true,
    stockNote: 'Locação com cálculo logístico de montagem e fixação estrutural.',
    specs: [
      'Área total: 100 m² (10m x 10m)',
      'Lona branca com bloqueio térmico',
      'Pé direito: 3,50 metros',
      'Fixação reforçada com laudo de ancoragem',
    ],
    recommendedFor: ['Casamentos em Chácaras', 'Eventos Corporativos Abertos', 'Festivais'],
    featured: false,
  },

  // Mobiliário
  {
    id: 'mob-mesa-bistro-com-banquetas',
    slug: 'kit-mesa-bistro-madeira-com-3-banquetas',
    name: 'Kit Mesa Bistrô Alta com 3 Banquetas',
    shortDescription: 'Conjunto bistrô em ferro e madeira rústica ou acabamento preto para áreas de circulação.',
    fullDescription: 'Kit de mesa alta com 3 banquetas estofadas ou em madeira, ideal para lounges, pistas de dança, bares e áreas de coquetel onde os convidados circulam dinamicamente.',
    categoryId: 'mobiliario',
    categoryName: 'Mobiliário para Eventos',
    image: '/logo.jpeg',
    priceInCents: 4500, // R$ 45,00 por conjunto
    billingUnit: 'diaria',
    isDemo: true,
    stockNote: 'Item demonstrativo de mobiliário funcional.',
    specs: [
      '1x Mesa Bistrô alta (1,05m de altura x 60cm diâmetro)',
      '3x Banquetas altas com apoio para os pés',
      'Estrutura em metal reforçado com tampo de alta qualidade',
    ],
    recommendedFor: ['Área de Bar', 'Coquetéis', 'Lounges de Pista', 'Eventos Corporativos'],
    featured: false,
  },
  {
    id: 'mob-puff-ilha-modular',
    slug: 'puff-ilha-modular-para-lounge',
    name: 'Conjunto Lounge com Puffs e Mesa de Centro',
    shortDescription: 'Lounge completo para acomodar 8 a 10 convidados em couro sintético preto ou branco.',
    fullDescription: 'Composição de estar moderna para áreas VIP e lounges de eventos, proporcionando conforto e elegância para os convidados relaxarem durante a festa.',
    categoryId: 'mobiliario',
    categoryName: 'Mobiliário para Eventos',
    image: '/logo.jpeg',
    priceInCents: 15000, // R$ 150,00
    billingUnit: 'diaria',
    isDemo: true,
    stockNote: 'Item demonstrativo de ambientação.',
    specs: [
      '2x Puffs retangulares duplos (1,00m x 0,50m)',
      '4x Puffs individuais quadrados (45x45cm)',
      '1x Mesa de centro com acabamento espelhado ou madeira',
      'Estofamento resistente em corano de fácil higienização',
    ],
    recommendedFor: ['Área VIP', 'Camarotes', 'Casamentos', 'Festas de 15 Anos'],
    featured: false,
  },
];

export function getAllEquipments(): Equipment[] {
  return EQUIPMENTS;
}

export function getFeaturedEquipments(): Equipment[] {
  return EQUIPMENTS.filter((item) => item.featured);
}

export function getEquipmentBySlug(slug: string): Equipment | undefined {
  return EQUIPMENTS.find((item) => item.slug === slug);
}

export function getEquipmentsByCategory(categoryId: EquipmentCategory): Equipment[] {
  return EQUIPMENTS.filter((item) => item.categoryId === categoryId);
}

export function getCategoryInfo(categoryId: EquipmentCategory): CategoryInfo | undefined {
  return CATEGORIES.find((cat) => cat.id === categoryId);
}
