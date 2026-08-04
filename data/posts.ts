import type { MarketingPost } from "@/lib/marketing-os/types";

const defaultChecklist = [
  "Limpar notificações",
  "Preparar conta de demonstração",
  "Conferir dados sensíveis",
  "Gravar tela",
  "Gravar fala",
  "Adicionar legenda",
  "Revisar",
  "Publicar"
];

const baseHashtags = [
  "#Framja",
  "#NegóciosDeBeleza",
  "#GestãoDeSalão",
  "#SistemaParaSalão"
];

export const posts: MarketingPost[] = [
  {
    id: "content-01",
    slug: "o-framja-que-voce-conheceu-ja-nao-e-o-mesmo",
    day: 1,
    title: "O Framja que você conheceu já não é mais o mesmo",
    format: "reels",
    objective:
      "Reposicionar o produto para pessoas que já testaram ou conheceram o Framja anteriormente.",
    audience:
      "Pessoas que já conheceram o Framja antes e precisam enxergar a evolução recente do produto.",
    summary:
      "Peça de reativação para mostrar que o Framja mudou no onboarding, na visão do negócio e na leitura financeira.",
    categoryId: "evolucao",
    featureLabel: "Visão geral",
    publicationStatus: "published",
    duration: "35 a 45 segundos",
    difficulty: "low",
    productionTime: 30,
    responsible: ["Fundador ou integrante do time"],
    hook: "Se você testou o Framja há algum tempo, vale a pena olhar de novo.",
    scenes: [
      {
        id: "scene-01",
        title: "Cena 1",
        duration: "0–5 segundos",
        speaker: "Fundador ou integrante do time",
        speech:
          "Se você testou o Framja há algum tempo, vale a pena olhar de novo.",
        onScreenText: "O Framja evoluiu.",
        visual: "Pessoa falando diretamente para a câmera.",
        recordingDirection:
          "Plano médio, fundo simples e luz frontal.",
        editingDirection: "Corte seco logo após a frase."
      },
      {
        id: "scene-02",
        title: "Cena 2",
        duration: "5–13 segundos",
        speech:
          "Nos últimos meses, a gente mudou bastante a forma como o sistema ajuda você a começar e a entender o negócio.",
        onScreenText: "Mais clareza desde o primeiro acesso.",
        visual: "Gravação rápida do Passo a Passo.",
        editingDirection: "Aplicar zoom leve nas etapas."
      },
      {
        id: "scene-03",
        title: "Cena 3",
        duration: "13–23 segundos",
        speech:
          "Criamos o Passo a Passo, o Olho do Gato e um novo relatório de Fluxo de Caixa.",
        onScreenText: "Passo a Passo • Olho do Gato • Fluxo de Caixa",
        visual: "Alternar entre as três telas.",
        editingDirection:
          "Usar transições simples, sem efeitos chamativos."
      },
      {
        id: "scene-04",
        title: "Cena 4",
        duration: "23–34 segundos",
        speech:
          "E isso é só parte do que já mudou. Agenda, financeiro e pagamentos também estão no nosso radar.",
        onScreenText: "E tem mais sendo construído.",
        visual: "Pessoa falando ou imagens desfocadas do produto.",
        editingDirection:
          "Não mostrar funcionalidades incompletas como se estivessem disponíveis."
      },
      {
        id: "scene-05",
        title: "Cena 5",
        duration: "34–42 segundos",
        speech: "Talvez seja hora de conhecer o Framja de novo.",
        onScreenText: "Conheça o Framja novamente.",
        visual: "Retorno para a câmera ou tela com a marca.",
        editingDirection:
          "Encerrar com a CTA na tela.",
        recordingDirection: "Finalizar com enquadramento limpo."
      }
    ],
    captures: [
      {
        id: "capture-01",
        screen: "Passo a Passo",
        instruction:
          "Mostrar a tela inicial e as etapas principais em sequência curta.",
        hideSensitiveData: true,
        shouldAppear: [
          "Lista das etapas conhecidas",
          "Progresso do usuário",
          "Contexto de início do uso"
        ],
        shouldHide: [
          "Dados reais de clientes",
          "Informações financeiras",
          "Notificações do navegador"
        ],
        mockData: [
          "Profissionais com nomes fictícios",
          "Serviços genéricos",
          "Agenda de demonstração limpa"
        ],
        framing: "Landscape, com zoom leve nas etapas."
      },
      {
        id: "capture-02",
        screen: "Olho do Gato",
        instruction:
          "Percorrer a dashboard o suficiente para deixar clara a mudança de visão do produto.",
        hideSensitiveData: true,
        shouldAppear: [
          "Visão geral do negócio",
          "Leitura visual limpa",
          "Blocos principais da dashboard"
        ],
        shouldHide: [
          "Valores sensíveis",
          "Identificação real de clientes",
          "Qualquer dado que pareça produção real"
        ],
        mockData: [
          "Indicadores fictícios",
          "Dados de exemplo equilibrados"
        ],
        framing: "Landscape, com pausa breve nas áreas mais legíveis."
      },
      {
        id: "capture-03",
        screen: "Relatório de Fluxo de Caixa",
        instruction:
          "Alternar rapidamente para provar a evolução financeira sem aprofundar demais.",
        hideSensitiveData: true,
        shouldAppear: [
          "Entradas e saídas organizadas",
          "Leitura de movimentação",
          "Cabeçalho do relatório"
        ],
        shouldHide: [
          "Dados reais de caixa",
          "Identificadores de contas",
          "Dados fiscais sensíveis"
        ],
        mockData: [
          "Lançamentos fictícios",
          "Período curto de demonstração"
        ],
        framing: "Landscape, com cortes simples entre blocos."
      }
    ],
    materials: [
      "Celular com câmera",
      "Conta de demonstração limpa",
      "Capturas do Passo a Passo, Olho do Gato e Fluxo de Caixa",
      "Ambiente simples para fala direta"
    ],
    caption:
      "Talvez a sua última impressão do Framja já esteja desatualizada.\n\nNos últimos meses, criamos novas formas de ajudar negócios de beleza a configurar o sistema, acompanhar a operação e entender melhor o próprio caixa.\n\nO produto continua evoluindo — e ainda temos muita coisa sendo construída.\n\nSe você já conheceu ou testou o Framja, chama a gente para ver o que mudou.",
    cta: "Chame a gente para ver o que mudou.",
    hashtags: baseHashtags,
    checklist: defaultChecklist,
    notes: [
      "Não tratar agenda, financeiro ou pagamentos em desenvolvimento como entregas prontas.",
      "Essa peça funciona melhor com cortes rápidos e fala direta."
    ]
  },
  {
    id: "content-02",
    slug: "seu-negocio-esta-cheio-mas-voce-sabe-o-que-esta-acontecendo",
    day: 2,
    title: "Seu negócio está cheio. Mas você sabe o que está acontecendo?",
    format: "reels",
    objective:
      "Apresentar a necessidade de visão gerencial e introduzir o Olho do Gato.",
    audience:
      "Gestores de negócios de beleza que já têm movimento, mas ainda administram pela sensação.",
    summary:
      "Conteúdo do dia para mostrar que agenda cheia não resolve a falta de visão gerencial sozinha.",
    categoryId: "clareza",
    featureId: "olho-do-gato",
    featureLabel: "Olho do Gato",
    publicationStatus: "ready",
    productStatus: "available",
    duration: "25 a 35 segundos",
    difficulty: "low",
    productionTime: 25,
    responsible: ["Narração do time"],
    hook: "Agenda cheia é ótimo. Mas ela não conta a história inteira.",
    scenes: [
      {
        id: "scene-01",
        title: "Cena 1",
        speech:
          "Agenda cheia é ótimo. Mas ela não conta a história inteira.",
        onScreenText: "Movimento não é clareza.",
        visual: "Tela de agenda com vários horários.",
        recordingDirection:
          "Gravar a agenda já preenchida, sem mostrar dados reais."
      },
      {
        id: "scene-02",
        title: "Cena 2",
        speech:
          "Quando as informações ficam espalhadas, o gestor precisa montar o quebra-cabeça sozinho.",
        onScreenText:
          "Quanto entrou? O que mudou? O que merece atenção?",
        visual: "Navegação rápida entre áreas do sistema.",
        editingDirection:
          "Cortes curtos para dar sensação de procura."
      },
      {
        id: "scene-03",
        title: "Cena 3",
        speech: "Foi por isso que a gente criou o Olho do Gato.",
        onScreenText: "Olho do Gato.",
        visual: "Abertura da dashboard."
      },
      {
        id: "scene-04",
        title: "Cena 4",
        speech:
          "Uma visão mais clara para você parar de administrar o negócio apenas pela sensação.",
        onScreenText: "Enxergue antes de decidir.",
        visual: "Percorrer a dashboard lentamente.",
        editingDirection:
          "Encerrar com ritmo mais calmo e leitura da interface."
      }
    ],
    captures: [
      {
        id: "capture-01",
        screen: "Agenda",
        instruction:
          "Abrir uma agenda preenchida para mostrar movimento sem precisar narrar detalhes.",
        hideSensitiveData: true,
        shouldAppear: [
          "Horários ocupados",
          "Blocos visuais de atendimento",
          "Sensação de rotina em andamento"
        ],
        shouldHide: [
          "Nomes reais",
          "Telefones",
          "Observações internas"
        ],
        mockData: [
          "Clientes fictícios",
          "Serviços genéricos"
        ],
        framing: "Landscape, com scroll mínimo."
      },
      {
        id: "capture-02",
        screen: "Olho do Gato",
        instruction:
          "Abrir a dashboard como resolução visual do problema apresentado nas cenas anteriores.",
        hideSensitiveData: true,
        shouldAppear: [
          "Visão consolidada",
          "Blocos de leitura rápida",
          "Cabeçalho do Olho do Gato"
        ],
        shouldHide: [
          "Valores reais",
          "Identificadores de clientes"
        ],
        mockData: [
          "Indicadores fictícios e consistentes"
        ],
        framing: "Landscape, com navegação lenta."
      }
    ],
    materials: [
      "Conta de demonstração com agenda preenchida",
      "Gravação do Olho do Gato",
      "Texto de narração pronto",
      "Ambiente silencioso para captação de voz"
    ],
    caption:
      "Uma agenda movimentada mostra que existe trabalho acontecendo.\n\nMas administrar um negócio exige enxergar além do movimento.\n\nO Olho do Gato foi criado para reunir uma visão mais clara da operação e ajudar o gestor a entender melhor o que está acontecendo.",
    cta: "Abra o Framja e veja seu negócio com outros olhos.",
    hashtags: [
      "#Framja",
      "#OlhoDoGato",
      "#NegóciosDeBeleza",
      "#GestãoDeSalão"
    ],
    checklist: defaultChecklist,
    notes: [
      "Este é o conteúdo programado para hoje, terça-feira, 21 de julho de 2026.",
      "Se a agenda estiver com muita informação, reduzir para não perder legibilidade no vídeo."
    ]
  },
  {
    id: "content-03",
    slug: "por-que-o-nome-olho-do-gato",
    day: 3,
    title: "Por que o nome Olho do Gato?",
    format: "reels",
    objective:
      "Humanizar a marca e criar memória em torno do nome da dashboard.",
    audience:
      "Pessoas que já ouviram falar do Olho do Gato e precisam entender a ideia por trás do nome.",
    summary:
      "Vídeo informal entre duas pessoas para explicar o conceito da dashboard sem parecer apresentação comercial.",
    categoryId: "clareza",
    featureId: "olho-do-gato",
    featureLabel: "Olho do Gato",
    publicationStatus: "planned",
    productStatus: "available",
    duration: "30 a 45 segundos",
    difficulty: "medium",
    productionTime: 35,
    responsible: ["Pessoa 1", "Pessoa 2"],
    hook: "Tá, mas por que uma dashboard se chama Olho do Gato?",
    scenes: [
      {
        id: "scene-01",
        speaker: "Pessoa 1",
        speech: "Tá, mas por que a dashboard do Framja se chama Olho do Gato?",
        onScreenText: "Por que Olho do Gato?",
        visual: "Duas pessoas em conversa informal.",
        recordingDirection:
          "Sentar em ângulo leve, com conversa natural e sem leitura dura."
      },
      {
        id: "scene-02",
        speaker: "Pessoa 2",
        speech: "Porque a ideia não era criar mais uma tela cheia de número."
      },
      {
        id: "scene-03",
        speaker: "Pessoa 1",
        speech:
          "Era ajudar o gestor a enxergar o que normalmente passa batido."
      },
      {
        id: "scene-04",
        speaker: "Pessoa 2",
        speech:
          "Exatamente. O olho do gato enxerga bem mesmo quando o ambiente não está tão claro."
      },
      {
        id: "scene-05",
        speaker: "Pessoa 1",
        speech: "E administrar um negócio muitas vezes é assim."
      },
      {
        id: "scene-06",
        speaker: "Pessoa 2",
        speech:
          "Tem movimento, tem cliente, tem dinheiro entrando... mas nem sempre existe clareza."
      },
      {
        id: "scene-07",
        speech:
          "O Olho do Gato existe para deixar essa visão mais nítida.",
        onScreenText: "Não é sobre ter mais dados. É sobre enxergar melhor.",
        editingDirection:
          "Fechar com a frase da tela em destaque."
      }
    ],
    captures: [
      {
        id: "capture-01",
        screen: "Olho do Gato",
        instruction:
          "Usar como apoio visual rápido entre uma fala e outra, sem roubar a cena principal da conversa.",
        hideSensitiveData: true,
        shouldAppear: [
          "Dashboard aberta",
          "Leitura limpa",
          "Visual geral da funcionalidade"
        ],
        shouldHide: [
          "Valores sensíveis",
          "Dados de clientes",
          "Indicadores reais"
        ],
        mockData: [
          "Dados fictícios consistentes com o discurso"
        ],
        framing: "Landscape, com entrada breve entre falas."
      }
    ],
    materials: [
      "Dois participantes",
      "Microfone ou ambiente silencioso",
      "Apoio visual do Olho do Gato",
      "Roteiro impresso ou em teleprompter simples"
    ],
    caption:
      "O nome surgiu daquilo que queríamos que a funcionalidade representasse: uma visão mais clara mesmo quando a operação parece confusa.",
    cta: "Abra o Olho do Gato e veja essa lógica na prática.",
    hashtags: [
      "#Framja",
      "#OlhoDoGato",
      "#ProdutoDigital",
      "#NegóciosDeBeleza"
    ],
    checklist: defaultChecklist,
    notes: [
      "O tom precisa parecer conversa real, não esquete.",
      "Se a fala ficar longa, dividir em dois blocos de câmera."
    ]
  },
  {
    id: "content-04",
    slug: "o-primeiro-acesso-nao-deveria-parecer-uma-prova",
    day: 4,
    title: "O primeiro acesso não deveria parecer uma prova",
    format: "carousel",
    objective: "Apresentar o Passo a Passo.",
    audience:
      "Pessoas que travam nos primeiros minutos dentro de um sistema novo.",
    summary:
      "Carrossel para explicar por que o Passo a Passo existe e como ele organiza o começo da jornada.",
    categoryId: "onboarding",
    featureId: "passo-a-passo",
    featureLabel: "Passo a Passo",
    publicationStatus: "planned",
    productStatus: "available",
    duration: "7 slides",
    difficulty: "medium",
    productionTime: 45,
    responsible: ["Pessoa que monta carrossel"],
    hook: "O primeiro acesso a um sistema não deveria parecer uma prova.",
    scenes: [
      {
        id: "slide-01",
        title: "Slide 1",
        onScreenText:
          "O primeiro acesso a um sistema não deveria parecer uma prova."
      },
      {
        id: "slide-02",
        title: "Slide 2",
        onScreenText:
          "Você entra, vê um monte de menus e não sabe por onde começar."
      },
      {
        id: "slide-03",
        title: "Slide 3",
        onScreenText:
          "Sem horário, profissionais e serviços configurados, nenhuma agenda funciona direito."
      },
      {
        id: "slide-04",
        title: "Slide 4",
        onScreenText:
          "Por isso, o Framja agora mostra exatamente o que precisa ser feito primeiro."
      },
      {
        id: "slide-05",
        title: "Slide 5",
        onScreenText:
          "Definir horário de atendimento • Cadastrar profissionais • Cadastrar serviços • Personalizar a agenda online • Criar agendamento • Criar comanda"
      },
      {
        id: "slide-06",
        title: "Slide 6",
        onScreenText: "Você conclui as etapas e libera o Olho do Gato."
      },
      {
        id: "slide-07",
        title: "Slide 7",
        onScreenText:
          "Menos dúvida no começo. Mais rapidez para colocar o negócio para funcionar."
      }
    ],
    captures: [
      {
        id: "capture-01",
        screen: "Passo a Passo",
        instruction:
          "Usar uma captura limpa da tela para apoiar os slides centrais do carrossel.",
        hideSensitiveData: true,
        shouldAppear: [
          "Lista de etapas",
          "Ordem do processo",
          "Progresso do usuário"
        ],
        shouldHide: [
          "Dados reais",
          "Mensagens do navegador"
        ],
        mockData: [
          "Profissionais fictícios",
          "Serviços genéricos"
        ],
        framing: "Recorte estático em landscape para virar peça gráfica."
      }
    ],
    materials: [
      "Template do carrossel",
      "Captura limpa do Passo a Passo",
      "Texto final dos sete slides",
      "Conta de demonstração organizada"
    ],
    caption:
      "Uma das maiores dificuldades de qualquer sistema está nos primeiros minutos.\n\nO Passo a Passo do Framja organiza as configurações essenciais e mostra uma sequência clara para o usuário começar.",
    cta:
      "Menos dúvida no começo. Mais rapidez para colocar o negócio para funcionar.",
    hashtags: [
      "#Framja",
      "#PassoAPasso",
      "#Onboarding",
      "#NegóciosDeBeleza"
    ],
    checklist: defaultChecklist,
    notes: [
      "Este conteúdo fica melhor com texto grande e poucos elementos por slide.",
      "Não apertar a lista do slide 5: quebrar em duas linhas se necessário."
    ]
  },
  {
    id: "content-05",
    slug: "o-que-acontece-antes-do-olho-do-gato-aparecer",
    day: 5,
    title: "O que acontece antes do Olho do Gato aparecer?",
    format: "reels",
    objective: "Demonstrar o funcionamento do Passo a Passo.",
    audience:
      "Pessoas que precisam entender a lógica da jornada antes de enxergar a dashboard.",
    summary:
      "Gravação de tela narrada para mostrar que a visão vem depois da configuração da base.",
    categoryId: "onboarding",
    featureId: "passo-a-passo",
    featureLabel: "Passo a Passo",
    publicationStatus: "planned",
    productStatus: "available",
    duration: "30 segundos",
    difficulty: "medium",
    productionTime: 35,
    responsible: ["Narração do time"],
    hook: "O Olho do Gato não aparece por acaso.",
    scenes: [
      {
        id: "scene-01",
        speech:
          "Antes de mostrar uma visão do negócio, o Framja precisa entender como a sua operação funciona.",
        visual: "Tela inicial do Passo a Passo."
      },
      {
        id: "scene-02",
        speech:
          "Por isso, você configura horário, profissionais e serviços.",
        visual: "Destacar cada etapa.",
        editingDirection:
          "Usar destaques curtos sem excesso de animação."
      },
      {
        id: "scene-03",
        speech:
          "Depois personaliza sua agenda online e registra os primeiros atendimentos.",
        visual: "Destacar as últimas etapas."
      },
      {
        id: "scene-04",
        speech: "Ao finalizar o processo, o Olho do Gato é liberado.",
        visual: "Conclusão e entrada na dashboard."
      },
      {
        id: "scene-05",
        speech: "Primeiro organizamos a base. Depois mostramos a visão.",
        onScreenText: "Configurar. Usar. Enxergar.",
        editingDirection: "Encerrar com a frase em tela cheia."
      }
    ],
    captures: [
      {
        id: "capture-01",
        screen: "Passo a Passo",
        instruction:
          "Mostrar a sequência das etapas sem acelerar demais a leitura.",
        hideSensitiveData: true,
        shouldAppear: [
          "Etapas do fluxo",
          "Transição entre início e conclusão",
          "Contexto de configuração"
        ],
        shouldHide: [
          "Dados reais",
          "Notificações",
          "Informações de clientes"
        ],
        mockData: [
          "Conta de demonstração pronta para configuração"
        ],
        framing: "Landscape, com movimentos de mouse suaves."
      },
      {
        id: "capture-02",
        screen: "Entrada no Olho do Gato",
        instruction:
          "Registrar o momento em que a dashboard é liberada após o fim do fluxo.",
        hideSensitiveData: true,
        shouldAppear: [
          "Mudança de tela",
          "Entrada clara na dashboard"
        ],
        shouldHide: [
          "Indicadores reais"
        ],
        mockData: [
          "Dashboard com dados fictícios"
        ],
        framing: "Landscape, com pausa de um segundo na transição."
      }
    ],
    materials: [
      "Roteiro de narração",
      "Conta de demonstração preparada",
      "Passo a Passo configurado do início ao fim",
      "Captura da liberação do Olho do Gato"
    ],
    caption:
      "O Passo a Passo existe para organizar o começo.\n\nAntes de mostrar uma visão do negócio, o Framja orienta horário de atendimento, profissionais, serviços, agenda online, agendamento e comanda.\n\nPrimeiro organizamos a base. Depois mostramos a visão.",
    cta: "Comece pelo Passo a Passo.",
    hashtags: [
      "#Framja",
      "#PassoAPasso",
      "#Onboarding",
      "#OlhoDoGato"
    ],
    checklist: defaultChecklist,
    notes: [
      "A gravação precisa parecer progressão real, não montagem artificial.",
      "Se houver loading ou espera longa, cortar na edição."
    ]
  },
  {
    id: "content-06",
    slug: "dinheiro-entrando-nao-significa-dinheiro-sobrando",
    day: 6,
    title: "Dinheiro entrando não significa dinheiro sobrando",
    format: "reels",
    objective: "Introduzir o relatório de Fluxo de Caixa.",
    audience:
      "Gestores que confundem movimento de caixa com resultado real.",
    summary:
      "Fala direta com apoio de tela para mostrar por que o relatório de Fluxo de Caixa existe.",
    categoryId: "financeiro",
    featureId: "fluxo-de-caixa",
    featureLabel: "Relatório de Fluxo de Caixa",
    publicationStatus: "planned",
    productStatus: "available",
    duration: "25 a 35 segundos",
    difficulty: "low",
    productionTime: 30,
    responsible: ["Fundador ou integrante do time"],
    hook:
      "Uma das confusões mais perigosas na gestão é achar que dinheiro entrando significa lucro.",
    scenes: [
      {
        id: "scene-01",
        speech:
          "Uma das confusões mais perigosas na gestão é achar que dinheiro entrando significa lucro."
      },
      {
        id: "scene-02",
        speech:
          "O caixa pode estar movimentado e, ainda assim, as saídas estarem consumindo boa parte do resultado."
      },
      {
        id: "scene-03",
        speech:
          "Por isso, criamos um novo relatório de Fluxo de Caixa no Framja."
      },
      {
        id: "scene-04",
        speech:
          "Ele ajuda a visualizar entradas e saídas com mais clareza.",
        visual: "Tela do relatório."
      },
      {
        id: "scene-05",
        speech:
          "Antes de tomar uma decisão financeira, entenda o movimento do dinheiro.",
        editingDirection: "Encerrar em cima da tela do relatório."
      }
    ],
    captures: [
      {
        id: "capture-01",
        screen: "Relatório de Fluxo de Caixa",
        instruction:
          "Gravar uma navegação limpa que mostre entradas, saídas e leitura geral do caixa.",
        hideSensitiveData: true,
        shouldAppear: [
          "Entradas e saídas",
          "Estrutura organizada do relatório",
          "Período analisado"
        ],
        shouldHide: [
          "Valores reais",
          "Dados bancários",
          "Identificação de contas"
        ],
        mockData: [
          "Lançamentos fictícios",
          "Período curto de exemplo"
        ],
        framing: "Landscape, com cursor discreto."
      }
    ],
    materials: [
      "Ambiente silencioso para fala direta",
      "Relatório de Fluxo de Caixa com dados fictícios",
      "Texto na tela para reforço",
      "Conta de demonstração financeira"
    ],
    caption:
      "Movimentação financeira e resultado não são a mesma coisa.\n\nO relatório de Fluxo de Caixa ajuda a acompanhar entradas e saídas e oferece uma leitura mais organizada do dinheiro que passa pelo negócio.",
    cta: "Confira o Fluxo de Caixa no Framja.",
    hashtags: [
      "#Framja",
      "#FluxoDeCaixa",
      "#GestãoFinanceira",
      "#NegóciosDeBeleza"
    ],
    checklist: defaultChecklist,
    notes: [
      "A fala precisa ser firme, mas sem tom professoral.",
      "Não usar números fictícios grandes demais para não parecer promessa."
    ]
  },
  {
    id: "content-07",
    slug: "tres-perguntas-para-fazer-olhando-o-fluxo-de-caixa",
    day: 7,
    title: "Três perguntas para fazer olhando o Fluxo de Caixa",
    format: "carousel",
    objective: "Entregar conteúdo educativo usando a funcionalidade.",
    audience:
      "Gestores que querem usar o relatório como apoio para decidir com mais clareza.",
    summary:
      "Carrossel educativo ancorado no relatório de Fluxo de Caixa, sem exagerar na promessa.",
    categoryId: "financeiro",
    featureId: "fluxo-de-caixa",
    featureLabel: "Relatório de Fluxo de Caixa",
    publicationStatus: "planned",
    productStatus: "available",
    duration: "7 slides",
    difficulty: "medium",
    productionTime: 40,
    responsible: ["Pessoa que monta carrossel"],
    hook: "Três perguntas para fazer olhando o seu Fluxo de Caixa.",
    scenes: [
      {
        id: "slide-01",
        title: "Slide 1",
        onScreenText: "Três perguntas para fazer olhando o seu Fluxo de Caixa."
      },
      {
        id: "slide-02",
        title: "Slide 2",
        onScreenText: "Em quais períodos entra mais dinheiro?"
      },
      {
        id: "slide-03",
        title: "Slide 3",
        onScreenText: "Quais saídas mais pesam no caixa?"
      },
      {
        id: "slide-04",
        title: "Slide 4",
        onScreenText: "Existem dias em que o negócio fica mais apertado?"
      },
      {
        id: "slide-05",
        title: "Slide 5",
        onScreenText:
          "Há movimentações que você não percebe no dia a dia?"
      },
      {
        id: "slide-06",
        title: "Slide 6",
        onScreenText:
          "Os números não decidem por você. Mas ajudam você a decidir com mais clareza."
      },
      {
        id: "slide-07",
        title: "Slide 7",
        onScreenText:
          "Use o relatório de Fluxo de Caixa do Framja para acompanhar essa movimentação."
      }
    ],
    captures: [
      {
        id: "capture-01",
        screen: "Relatório de Fluxo de Caixa",
        instruction:
          "Gerar um print limpo para apoiar a capa ou o slide final do carrossel.",
        hideSensitiveData: true,
        shouldAppear: [
          "Estrutura visual do relatório",
          "Leitura organizada do caixa"
        ],
        shouldHide: [
          "Valores reais",
          "Dados fiscais e bancários"
        ],
        mockData: [
          "Movimentações fictícias com volume moderado"
        ],
        framing: "Recorte estático para peça gráfica."
      }
    ],
    materials: [
      "Template do carrossel",
      "Print do relatório",
      "Texto final dos sete slides",
      "Conta demo com dados financeiros fictícios"
    ],
    caption:
      "Olhar o Fluxo de Caixa não é só ver entradas e saídas.\n\nTambém é fazer perguntas melhores sobre o ritmo do negócio, sobre o peso das saídas e sobre aquilo que passa despercebido na rotina.\n\nOs números não decidem por você. Mas ajudam você a decidir com mais clareza.",
    cta:
      "Use o relatório de Fluxo de Caixa do Framja para acompanhar essa movimentação.",
    hashtags: [
      "#Framja",
      "#FluxoDeCaixa",
      "#GestãoFinanceira",
      "#ClarezaNaGestão"
    ],
    checklist: defaultChecklist,
    notes: [
      "Evitar excesso de texto por slide.",
      "A capa precisa funcionar mesmo sem ler a legenda."
    ]
  },
  {
    id: "content-08",
    slug: "como-gravar-conteudo-do-framja-sem-producao-profissional",
    day: 8,
    title: "Como gravar conteúdo do Framja sem produção profissional",
    format: "behind-the-scenes",
    objective:
      "Humanizar a operação de marketing e mostrar proximidade.",
    audience:
      "Pessoas que acompanham o Framja e valorizam um produto construído por gente de verdade.",
    summary:
      "Bastidor curto para mostrar a rotina enxuta do marketing e reforçar a proximidade do produto.",
    categoryId: "bastidores",
    featureLabel: "Não se aplica",
    publicationStatus: "planned",
    duration: "20 a 30 segundos",
    difficulty: "low",
    productionTime: 20,
    responsible: ["Time de marketing (2 pessoas)"],
    hook: "Esse vídeo foi gravado por uma equipe de marketing de duas pessoas.",
    scenes: [
      {
        id: "scene-01",
        speech:
          "Esse vídeo foi gravado por uma equipe de marketing de duas pessoas.",
        visual: "Mostrar celular, computador e ambiente real."
      },
      {
        id: "scene-02",
        speech:
          "Sem estúdio, sem equipe de edição e sem uma produção enorme.",
        visual: "Mostrar alguém gravando a tela."
      },
      {
        id: "scene-03",
        speech:
          "A gente prefere mostrar o produto funcionando e explicar por que ele foi criado.",
        visual: "Mostrar a funcionalidade do dia."
      },
      {
        id: "scene-04",
        speech:
          "O Framja é construído assim: próximo, simples e ouvindo quem usa.",
        visual: "Mostrar os dois integrantes.",
        editingDirection: "Encerrar com clima leve e sem polish excessivo."
      }
    ],
    captures: [
      {
        id: "capture-01",
        screen: "Tela da funcionalidade do dia",
        instruction:
          "Usar a mesma tela real que estiver sendo gravada para o conteúdo principal da semana.",
        hideSensitiveData: true,
        shouldAppear: [
          "Fluxo real de gravação",
          "Tela em uso durante o bastidor"
        ],
        shouldHide: [
          "Dados sensíveis",
          "Mensagens pessoais",
          "Abas irrelevantes"
        ],
        mockData: [
          "Conta de demonstração já preparada"
        ],
        framing: "Pode alternar entre vertical e landscape, mantendo a leitura."
      }
    ],
    materials: [
      "Celular",
      "Computador com a funcionalidade do dia aberta",
      "Ambiente real de trabalho",
      "Captação espontânea dos bastidores"
    ],
    caption:
      "Esse vídeo foi gravado por uma equipe de marketing de duas pessoas.\n\nSem estúdio, sem equipe grande e sem uma produção enorme.\n\nA gente prefere mostrar o produto funcionando e explicar por que ele foi criado.\n\nO Framja é construído assim: próximo, simples e ouvindo quem usa.",
    cta: "Acompanhe os próximos capítulos.",
    hashtags: [
      "#Framja",
      "#Bastidores",
      "#MarketingB2B",
      "#NegóciosDeBeleza"
    ],
    checklist: defaultChecklist,
    notes: [
      "Deixar imperfeições leves ajuda a sustentar a honestidade da peça.",
      "Não transformar o bastidor em making of sofisticado demais."
    ]
  },
  {
    id: "content-09",
    slug: "uma-funcionalidade-comeca-antes-do-codigo",
    day: 9,
    title: "Uma funcionalidade começa antes do código",
    format: "behind-the-scenes",
    objective: "Mostrar os bastidores do processo de produto.",
    audience:
      "Pessoas interessadas em entender como o Framja transforma problema de cliente em produto.",
    summary:
      "Conversa entre duas pessoas para mostrar que as funcionalidades nascem de problemas reais, não só de execução técnica.",
    categoryId: "bastidores",
    featureLabel: "Não se aplica",
    publicationStatus: "planned",
    duration: "30 a 40 segundos",
    difficulty: "medium",
    productionTime: 35,
    responsible: ["Pessoa 1", "Pessoa 2"],
    hook: "Quando a gente lança uma funcionalidade, o código não é o começo.",
    scenes: [
      {
        id: "scene-01",
        speaker: "Pessoa 1",
        speech: "Quando a gente lança uma funcionalidade, o código não é o começo."
      },
      {
        id: "scene-02",
        speaker: "Pessoa 2",
        speech: "O código normalmente começa depois."
      },
      {
        id: "scene-03",
        speaker: "Pessoa 2",
        speech:
          "Antes vem uma dúvida, uma dificuldade ou algo que o cliente precisa repetir todos os dias."
      },
      {
        id: "scene-04",
        speaker: "Pessoa 1",
        speech:
          "O Passo a Passo nasceu da dificuldade de saber o que configurar primeiro."
      },
      {
        id: "scene-05",
        speaker: "Pessoa 2",
        speech:
          "O Olho do Gato nasceu da necessidade de enxergar melhor o negócio."
      },
      {
        id: "scene-06",
        speaker: "Pessoa 1",
        speech:
          "E o Fluxo de Caixa nasceu da necessidade de organizar melhor a leitura financeira."
      },
      {
        id: "scene-07",
        speech:
          "Produto bom não começa na função. Começa no problema.",
        onScreenText: "Produto bom não começa na função. Começa no problema."
      }
    ],
    captures: [
      {
        id: "capture-01",
        screen: "Passo a Passo",
        instruction:
          "Usar como apoio breve quando a fala citar a origem da funcionalidade.",
        hideSensitiveData: true,
        shouldAppear: ["Etapas principais do fluxo"],
        shouldHide: ["Dados reais", "Notificações"],
        mockData: ["Conta demo preparada"],
        framing: "Landscape, recorte rápido."
      },
      {
        id: "capture-02",
        screen: "Olho do Gato",
        instruction:
          "Entrar rapidamente para reforçar a fala sobre clareza de gestão.",
        hideSensitiveData: true,
        shouldAppear: ["Dashboard aberta"],
        shouldHide: ["Indicadores reais"],
        mockData: ["Indicadores fictícios"],
        framing: "Landscape, corte rápido."
      },
      {
        id: "capture-03",
        screen: "Relatório de Fluxo de Caixa",
        instruction:
          "Mostrar a funcionalidade apenas o suficiente para sustentar a fala.",
        hideSensitiveData: true,
        shouldAppear: ["Entradas e saídas organizadas"],
        shouldHide: ["Valores sensíveis"],
        mockData: ["Lançamentos fictícios"],
        framing: "Landscape, recorte estático ou movimento leve."
      }
    ],
    materials: [
      "Dois participantes",
      "Apoio visual das três funcionalidades",
      "Roteiro curto em mãos",
      "Ambiente silencioso e informal"
    ],
    caption:
      "Quando uma funcionalidade aparece no produto, o código normalmente não é o começo.\n\nAntes vem uma dúvida, uma dificuldade ou algo que o cliente precisa repetir todos os dias.\n\nO Passo a Passo nasceu desse começo travado. O Olho do Gato nasceu da necessidade de enxergar melhor. E o Fluxo de Caixa nasceu da necessidade de organizar a leitura financeira.\n\nProduto bom não começa na função. Começa no problema.",
    cta: "Acompanhe os próximos bastidores do que estamos construindo.",
    hashtags: [
      "#Framja",
      "#ProdutoDigital",
      "#Bastidores",
      "#NegóciosDeBeleza"
    ],
    checklist: defaultChecklist,
    notes: [
      "Não teatralizar a conversa.",
      "Se a peça ficar longa, cortar respiro entre as falas, não o conteúdo central."
    ]
  },
  {
    id: "content-10",
    slug: "dia-semana-ou-mes-cada-visao-responde-uma-pergunta",
    day: 10,
    title: "Dia, semana ou mês: cada visão responde uma pergunta",
    format: "reels",
    objective:
      "Antecipar a evolução da agenda sem prometer lançamento.",
    audience:
      "Gestores que precisam alternar a leitura da agenda conforme a decisão do momento.",
    summary:
      "Conteúdo de futuro para falar sobre novas visualizações da agenda com honestidade sobre o estágio da funcionalidade.",
    categoryId: "futuro",
    featureId: "agenda-por-periodo",
    featureLabel: "Visualização de agenda por dia, semana e mês",
    publicationStatus: "planned",
    productStatus: "in-development",
    duration: "25 a 35 segundos",
    difficulty: "medium",
    productionTime: 35,
    responsible: ["Narração do time"],
    hook: "Nem sempre você precisa olhar a agenda do mesmo jeito.",
    scenes: [
      {
        id: "scene-01",
        speech:
          "A visão do dia ajuda a acompanhar a operação mais próxima."
      },
      {
        id: "scene-02",
        speech:
          "A visão da semana ajuda a perceber ritmo, espaços e distribuição."
      },
      {
        id: "scene-03",
        speech:
          "A visão do mês ajuda a enxergar o cenário mais amplo."
      },
      {
        id: "scene-04",
        speech:
          "É por isso que estamos trabalhando em novas visualizações para a agenda do Framja."
      },
      {
        id: "scene-05",
        speech:
          "Ainda não está disponível. Mas já é parte do que estamos construindo.",
        onScreenText: "Em desenvolvimento.",
        editingDirection:
          "O texto Em desenvolvimento precisa aparecer de forma explícita."
      }
    ],
    captures: [
      {
        id: "capture-01",
        screen: "Recorte conceitual da agenda",
        instruction:
          "Usar mockup ou tela parcial sem parecer funcionalidade já liberada.",
        hideSensitiveData: true,
        shouldAppear: [
          "Referência visual à agenda",
          "Mudança entre visões",
          "Texto Em desenvolvimento"
        ],
        shouldHide: [
          "Qualquer elemento que pareça entrega final",
          "Detalhes não confirmados"
        ],
        mockData: [
          "Agenda fictícia",
          "Recortes genéricos da interface"
        ],
        framing: "Landscape ou vertical, desde que o aviso de desenvolvimento permaneça legível."
      }
    ],
    materials: [
      "Mockup ou recorte controlado da agenda",
      "Texto Em desenvolvimento em arte",
      "Narração pronta",
      "Conta demo sem detalhes sensíveis"
    ],
    caption:
      "Nem sempre faz sentido olhar a agenda do mesmo jeito.\n\nA visão do dia responde uma pergunta. A da semana responde outra. A do mês abre um panorama diferente.\n\nEstamos trabalhando em novas visualizações para a agenda do Framja.\n\nAinda não está disponível. Mas já é parte do que estamos construindo.",
    cta: "Acompanhe o que ainda está em desenvolvimento no Framja.",
    hashtags: [
      "#Framja",
      "#Agenda",
      "#ProdutoDigital",
      "#EmDesenvolvimento"
    ],
    checklist: defaultChecklist,
    notes: [
      "Obrigatório: deixar claro que não está disponível em 21 de julho de 2026.",
      "Não mostrar interação que pareça produto pronto."
    ]
  },
  {
    id: "content-11",
    slug: "despesas-registradas-ou-contas-realmente-organizadas",
    day: 11,
    title: "Despesas registradas ou contas realmente organizadas?",
    format: "reels",
    objective:
      "Apresentar a evolução de Despesas para Contas a Pagar.",
    audience:
      "Gestores que sentem falta de mais organização antes do vencimento das contas.",
    summary:
      "Reels conceitual para mostrar a direção do produto sem prometer regras ou telas ainda não confirmadas.",
    categoryId: "futuro",
    featureId: "contas-a-pagar",
    featureLabel: "Contas a Pagar",
    publicationStatus: "planned",
    productStatus: "in-development",
    duration: "25 a 35 segundos",
    difficulty: "medium",
    productionTime: 35,
    responsible: ["Fundador ou integrante do time"],
    hook:
      "Registrar uma despesa e organizar uma conta a pagar não são exatamente a mesma coisa.",
    scenes: [
      {
        id: "scene-01",
        speech: "Registrar mostra o que aconteceu."
      },
      {
        id: "scene-02",
        speech:
          "Organizar contas a pagar também ajuda a acompanhar o que ainda precisa acontecer."
      },
      {
        id: "scene-03",
        speech:
          "Por isso, estamos repensando a área de despesas do Framja."
      },
      {
        id: "scene-04",
        speech:
          "A ideia é evoluí-la para uma experiência de Contas a Pagar."
      },
      {
        id: "scene-05",
        speech:
          "Ainda está em desenvolvimento, mas a direção é essa: mais clareza antes do vencimento, não apenas depois do pagamento."
      }
    ],
    captures: [
      {
        id: "capture-01",
        screen: "Recorte conceitual da área de despesas",
        instruction:
          "Usar tela parcial ou arte de apoio sem inventar campos, regras ou automações.",
        hideSensitiveData: true,
        shouldAppear: [
          "Contexto visual de despesas",
          "Texto Em desenvolvimento ou direção em construção"
        ],
        shouldHide: [
          "Campos não confirmados",
          "Promessas visuais de entrega pronta"
        ],
        mockData: [
          "Blocos neutros",
          "Valores fictícios mínimos"
        ],
        framing: "Recorte estático, com leitura limpa."
      }
    ],
    materials: [
      "Recorte visual controlado",
      "Texto Em desenvolvimento",
      "Roteiro curto",
      "Ambiente simples para fala direta"
    ],
    caption:
      "Registrar uma despesa e organizar uma conta a pagar não são exatamente a mesma coisa.\n\nRegistrar mostra o que aconteceu. Organizar também ajuda a acompanhar o que ainda precisa acontecer.\n\nÉ por isso que estamos repensando a área de despesas do Framja.\n\nAinda está em desenvolvimento, mas a direção é essa: mais clareza antes do vencimento, não apenas depois do pagamento.",
    cta: "Acompanhe essa evolução do Framja com a gente.",
    hashtags: [
      "#Framja",
      "#ContasAPagar",
      "#ProdutoDigital",
      "#EmDesenvolvimento"
    ],
    checklist: defaultChecklist,
    notes: [
      "Não demonstrar campos, regras ou automações não fornecidas.",
      "Se usar arte de apoio, ela precisa parecer conceito, não entrega pronta."
    ]
  },
  {
    id: "content-12",
    slug: "e-se-gestao-e-pagamento-conversassem-no-mesmo-lugar",
    day: 12,
    title: "E se gestão e pagamento conversassem no mesmo lugar?",
    format: "reels",
    objective:
      "Apresentar a visão do Framja Pay sem promessas.",
    audience:
      "Pessoas que entendem a fricção entre operação e pagamento e querem ver a direção do produto.",
    summary:
      "Vídeo de visão futura para introduzir o Framja Pay com honestidade, sem prazo e sem escopo inventado.",
    categoryId: "futuro",
    featureId: "framja-pay",
    featureLabel: "Framja Pay",
    publicationStatus: "planned",
    productStatus: "future",
    duration: "25 a 35 segundos",
    difficulty: "medium",
    productionTime: 35,
    responsible: ["Fundador ou integrante do time"],
    hook: "Hoje, gestão e pagamento muitas vezes vivem separados.",
    scenes: [
      {
        id: "scene-01",
        speech: "O atendimento acontece em um lugar."
      },
      {
        id: "scene-02",
        speech: "O pagamento acontece em outro."
      },
      {
        id: "scene-03",
        speech:
          "E a leitura financeira precisa juntar essas informações depois."
      },
      {
        id: "scene-04",
        speech:
          "Uma das visões que estamos estudando é aproximar essas etapas dentro do ecossistema do Framja."
      },
      {
        id: "scene-05",
        speech: "É daí que nasce a ideia do Framja Pay.",
        onScreenText: "Visão futura. Sem data de lançamento."
      },
      {
        id: "scene-06",
        speech:
          "Não é uma promessa de prazo. É a direção que estamos explorando."
      }
    ],
    captures: [
      {
        id: "capture-01",
        screen: "Visual conceitual do ecossistema Framja",
        instruction:
          "Usar apoio visual conceitual, sem sugerir que o produto já existe ou está em data de lançamento.",
        hideSensitiveData: true,
        shouldAppear: [
          "Texto Visão futura. Sem data de lançamento.",
          "Clima visual de direção do produto"
        ],
        shouldHide: [
          "Fluxos específicos não confirmados",
          "Promessas visuais de checkout ou meios de pagamento"
        ],
        mockData: [
          "Arte conceitual neutra"
        ],
        framing: "Visual limpo, sem parecer tela funcional."
      }
    ],
    materials: [
      "Arte conceitual neutra",
      "Texto obrigatório de visão futura",
      "Roteiro aprovado",
      "Ambiente calmo para captação"
    ],
    caption:
      "Hoje, gestão e pagamento muitas vezes vivem separados.\n\nO atendimento acontece em um lugar. O pagamento acontece em outro. E a leitura financeira precisa juntar essas informações depois.\n\nUma das visões que estamos estudando é aproximar essas etapas dentro do ecossistema do Framja.\n\nFramja Pay é uma visão futura. Sem data de lançamento.",
    cta: "Acompanhe a direção que estamos explorando no Framja.",
    hashtags: [
      "#Framja",
      "#FramjaPay",
      "#VisãoFutura",
      "#ProdutoDigital"
    ],
    checklist: defaultChecklist,
    notes: [
      "Obrigatório: deixar explícito que Framja Pay é visão futura em 21 de julho de 2026.",
      "Não prometer funcionalidades específicas."
    ]
  },
  {
    id: "content-13",
    slug: "o-produto-nao-ficou-parado-enquanto-voce-estava-longe",
    day: 13,
    title: "O produto não ficou parado enquanto você estava longe",
    format: "reels",
    objective: "Reativação de antigos leads.",
    audience:
      "Pessoas que saíram do radar do Framja e precisam entender rapidamente o que mudou.",
    summary:
      "Montagem rápida para mostrar mudanças já disponíveis e reforçar que ainda há evoluções a caminho.",
    categoryId: "evolucao",
    featureLabel: "Visão geral",
    publicationStatus: "planned",
    duration: "25 a 35 segundos",
    difficulty: "low",
    productionTime: 30,
    responsible: ["Time do Framja"],
    hook: "Você pode ter saído do Framja. Mas o Framja não ficou parado.",
    scenes: [
      {
        id: "scene-01",
        visual: "Mostrar Passo a Passo.",
        onScreenText: "Uma nova forma de começar."
      },
      {
        id: "scene-02",
        visual: "Mostrar Olho do Gato.",
        onScreenText: "Uma nova forma de enxergar."
      },
      {
        id: "scene-03",
        visual: "Mostrar Fluxo de Caixa.",
        onScreenText: "Uma nova forma de acompanhar o dinheiro."
      },
      {
        id: "scene-04",
        visual: "Mostrar aplicativo.",
        onScreenText: "Melhorias no uso diário."
      },
      {
        id: "scene-05",
        visual: "Mostrar telas ou cards de desenvolvimento.",
        onScreenText: "E mais mudanças a caminho."
      },
      {
        id: "scene-06",
        speech:
          "Talvez seja uma boa hora para olhar o Framja novamente.",
        editingDirection: "Fechamento com a CTA na tela."
      }
    ],
    captures: [
      {
        id: "capture-01",
        screen: "Passo a Passo",
        instruction:
          "Usar recorte curto que comunique o começo mais guiado.",
        hideSensitiveData: true,
        shouldAppear: ["Etapas principais"],
        shouldHide: ["Dados reais"],
        mockData: ["Conta demo limpa"],
        framing: "Landscape, com corte rápido."
      },
      {
        id: "capture-02",
        screen: "Olho do Gato",
        instruction:
          "Mostrar rapidamente a dashboard como sinal de evolução.",
        hideSensitiveData: true,
        shouldAppear: ["Dashboard aberta"],
        shouldHide: ["Indicadores reais"],
        mockData: ["Indicadores fictícios"],
        framing: "Landscape, com corte rápido."
      },
      {
        id: "capture-03",
        screen: "Relatório de Fluxo de Caixa",
        instruction:
          "Trazer como terceiro bloco da montagem.",
        hideSensitiveData: true,
        shouldAppear: ["Entradas e saídas organizadas"],
        shouldHide: ["Valores reais"],
        mockData: ["Movimentações fictícias"],
        framing: "Landscape, com corte rápido."
      },
      {
        id: "capture-04",
        screen: "Aplicativo Framja",
        instruction:
          "Usar apenas para indicar melhoria de uso diário, sem inventar detalhe técnico.",
        hideSensitiveData: true,
        shouldAppear: ["Uso diário do aplicativo"],
        shouldHide: ["Mensagens pessoais", "Dados sensíveis"],
        mockData: ["Conta demo mobile"],
        framing: "Vertical ou landscape, conforme melhor legibilidade."
      }
    ],
    materials: [
      "Recortes curtos das quatro áreas citadas",
      "Texto de apoio para cada bloco",
      "Conta demo web e mobile",
      "Fechamento falado ou em narração"
    ],
    caption:
      "Você pode ter saído do Framja. Mas o produto não ficou parado.\n\nTem uma nova forma de começar, uma nova forma de enxergar, uma nova forma de acompanhar o dinheiro e melhorias no uso diário.\n\nE ainda tem mais mudanças a caminho.\n\nTalvez seja uma boa hora para olhar o Framja novamente.",
    cta: "Fale com a gente para conhecer as novidades.",
    hashtags: [
      "#Framja",
      "#Reativação",
      "#ProdutoDigital",
      "#NegóciosDeBeleza"
    ],
    checklist: defaultChecklist,
    notes: [
      "Se usar cards de desenvolvimento, deixar claro que ainda não são funcionalidades disponíveis.",
      "Manter ritmo alto, mas sem virar vinheta caótica."
    ]
  },
  {
    id: "content-14",
    slug: "o-framja-que-estamos-construindo",
    day: 14,
    title: "O Framja que estamos construindo",
    format: "reels",
    objective:
      "Encerrar o ciclo de 14 dias e consolidar posicionamento.",
    audience:
      "Pessoas que acompanharam os 14 dias e precisam sair com uma leitura clara do que o Framja representa hoje.",
    summary:
      "Manifesto curto para fechar o ciclo mostrando o que já existe, o que está em desenvolvimento e a direção do produto.",
    categoryId: "evolucao",
    featureLabel: "Visão geral",
    publicationStatus: "planned",
    duration: "40 a 55 segundos",
    difficulty: "medium",
    productionTime: 40,
    responsible: ["Fundador ou integrante do time"],
    hook: "A gente não quer construir apenas uma agenda.",
    scenes: [
      {
        id: "scene-01",
        speech: "A gente não quer construir apenas uma agenda."
      },
      {
        id: "scene-02",
        speech:
          "Queremos ajudar negócios de beleza a organizar a operação, entender o financeiro e tomar decisões com mais clareza."
      },
      {
        id: "scene-03",
        speech: "O Passo a Passo ajuda você a começar."
      },
      {
        id: "scene-04",
        speech: "O Olho do Gato ajuda você a enxergar."
      },
      {
        id: "scene-05",
        speech:
          "O Fluxo de Caixa ajuda você a acompanhar o movimento do dinheiro."
      },
      {
        id: "scene-06",
        speech:
          "E as próximas evoluções aproximam agenda, contas e pagamentos."
      },
      {
        id: "scene-07",
        speech:
          "O Framja ainda está sendo construído. E é exatamente isso que queremos mostrar daqui para frente."
      }
    ],
    captures: [
      {
        id: "capture-01",
        screen: "Passo a Passo",
        instruction:
          "Usar como apoio visual rápido na parte sobre começo.",
        hideSensitiveData: true,
        shouldAppear: ["Etapas do Passo a Passo"],
        shouldHide: ["Dados reais"],
        mockData: ["Conta demo"],
        framing: "Landscape, recorte curto."
      },
      {
        id: "capture-02",
        screen: "Olho do Gato",
        instruction:
          "Usar como apoio visual rápido na parte sobre clareza.",
        hideSensitiveData: true,
        shouldAppear: ["Dashboard aberta"],
        shouldHide: ["Indicadores reais"],
        mockData: ["Dados fictícios"],
        framing: "Landscape, recorte curto."
      },
      {
        id: "capture-03",
        screen: "Relatório de Fluxo de Caixa",
        instruction:
          "Usar como apoio visual rápido na parte financeira.",
        hideSensitiveData: true,
        shouldAppear: ["Entradas e saídas organizadas"],
        shouldHide: ["Valores reais"],
        mockData: ["Movimentações fictícias"],
        framing: "Landscape, recorte curto."
      }
    ],
    materials: [
      "Pessoa para a fala principal",
      "Recortes curtos do Passo a Passo, Olho do Gato e Fluxo de Caixa",
      "Texto final revisado",
      "Ambiente simples com boa luz"
    ],
    caption:
      "O Framja não é um produto parado.\n\nEstamos construindo novas formas de ajudar negócios de beleza a organizar a rotina, entender a operação e enxergar com mais clareza.\n\nAlgumas mudanças já estão disponíveis. Outras ainda estão sendo desenvolvidas.\n\nPor aqui, vamos mostrar esse processo de forma aberta, simples e honesta.",
    cta: "Acompanhe a evolução do Framja.",
    hashtags: [
      "#Framja",
      "#ProdutoDigital",
      "#NegóciosDeBeleza",
      "#EvoluçãoDoProduto"
    ],
    checklist: defaultChecklist,
    notes: [
      "Encerrar o ciclo deixando claro que o produto segue em construção.",
      "Não transformar o manifesto em promessa exagerada."
    ]
  },
  {
    id: "content-15",
    slug: "cadastro-de-cliente-nao-e-ficha-e-memoria-de-atendimento",
    day: 15,
    title: "Cadastro de cliente não é ficha. É memória de atendimento.",
    format: "carousel",
    objective:
      "Reposicionar o cadastro de clientes como ferramenta de operação, personalização e recorrência.",
    audience:
      "Donos, recepcionistas e gestores de negócios de beleza que ainda usam cadastro só como lista de contato.",
    summary:
      "Carrossel para mostrar que um bom cadastro ajuda a lembrar histórico, vender melhor e atender com mais contexto.",
    categoryId: "clareza",
    featureId: "clientes",
    publicationStatus: "planned",
    duration: "7 slides",
    difficulty: "medium",
    productionTime: 40,
    responsible: ["Pessoa que monta carrossel"],
    hook:
      "Se o cadastro da cliente serve só para guardar telefone, você está perdendo dinheiro e contexto.",
    scenes: [
      {
        id: "slide-01",
        title: "Slide 1",
        onScreenText:
          "Se o cadastro da cliente serve só para guardar telefone, você está perdendo dinheiro e contexto."
      },
      {
        id: "slide-02",
        title: "Slide 2",
        onScreenText:
          "Cadastro raso faz o time perguntar tudo de novo e atender sem memória."
      },
      {
        id: "slide-03",
        title: "Slide 3",
        onScreenText:
          "Quando dados, agendamentos e comandas ficam juntos, o atendimento muda."
      },
      {
        id: "slide-04",
        title: "Slide 4",
        onScreenText:
          "Anamnese, pacotes, créditos e dívidas deixam de depender da memória da equipe."
      },
      {
        id: "slide-05",
        title: "Slide 5",
        onScreenText:
          "Isso ajuda a personalizar, vender com mais contexto e reduzir ruído na operação."
      },
      {
        id: "slide-06",
        title: "Slide 6",
        onScreenText:
          "No Framja, cliente não é só contato. É histórico, relacionamento e operação."
      },
      {
        id: "slide-07",
        title: "Slide 7",
        onScreenText:
          "Cadastro bom faz a cliente se sentir lembrada, não recomeçada."
      }
    ],
    captures: [
      {
        id: "capture-01",
        screen: "Lista de clientes",
        instruction:
          "Mostrar a busca por nome ou telefone, os indicadores da lista e a sensação de base organizada.",
        hideSensitiveData: true,
        shouldAppear: [
          "Busca por nome ou telefone",
          "Indicadores de total de clientes",
          "Lista limpa com nomes fictícios"
        ],
        shouldHide: [
          "Telefones reais",
          "Dados sensíveis",
          "Observações internas de clientes reais"
        ],
        mockData: [
          "Clientes fictícios",
          "Base demo com aniversariantes e inativos de exemplo"
        ],
        framing: "Recorte estático ou tela em landscape para virar peça gráfica."
      },
      {
        id: "capture-02",
        screen: "Perfil da cliente",
        instruction:
          "Capturar as abas do cadastro para mostrar profundidade sem poluir visualmente o carrossel.",
        hideSensitiveData: true,
        shouldAppear: [
          "Abas como dados, anamnese, agendamentos, comandas e pacotes",
          "Estrutura do cadastro",
          "Clareza visual entre as áreas"
        ],
        shouldHide: [
          "Dados reais de cliente",
          "Históricos pessoais",
          "Valores sensíveis"
        ],
        mockData: [
          "Perfil fictício",
          "Informações neutras e consistentes"
        ],
        framing: "Landscape com zoom leve nas abas e blocos principais."
      }
    ],
    materials: [
      "Template de carrossel",
      "Capturas limpas da lista de clientes e do perfil da cliente",
      "Conta de demonstração organizada",
      "Texto final dos sete slides"
    ],
    caption:
      "Cadastro de cliente não deveria ser só uma ficha de contato.\n\nQuando histórico, agendamentos, comandas, anamnese, pacotes e pendências ficam espalhados, o atendimento perde contexto e a operação vira memória improvisada.\n\nNo Framja, o cadastro da cliente ajuda o negócio a lembrar melhor, atender com mais clareza e vender com mais contexto.\n\nPorque cliente não é só contato. É relacionamento em operação.",
    cta: "Veja como o Framja transforma cadastro em operação.",
    hashtags: [
      ...baseHashtags,
      "#CadastroDeClientes",
      "#Recorrência",
      "#ExperiênciaDaCliente"
    ],
    checklist: defaultChecklist,
    notes: [
      "Esse carrossel funciona melhor com bastante respiro visual e um print limpo por bloco.",
      "Evitar telas muito carregadas; priorizar a ideia de profundidade do cadastro."
    ]
  },
  {
    id: "content-16",
    slug: "seu-link-de-agendamento-nao-deveria-ser-so-um-link",
    day: 16,
    title: "Seu link de agendamento não deveria ser só um link",
    format: "carousel",
    objective:
      "Mostrar o Link Agendamento como vitrine digital que reduz perguntas, transmite confiança e ajuda a cliente a concluir o agendamento.",
    audience:
      "Negócios de beleza que ainda dependem do WhatsApp para explicar quase tudo antes do agendamento.",
    summary:
      "Carrossel para mostrar que a página de agendamento também vende contexto, marca e confiança antes da conversa começar.",
    categoryId: "evolucao",
    featureId: "link-agendamento",
    publicationStatus: "planned",
    duration: "7 slides",
    difficulty: "medium",
    productionTime: 35,
    responsible: ["Pessoa que monta carrossel"],
    hook:
      "Quando a cliente precisa chamar no WhatsApp para entender tudo, o link ainda não está fazendo o trabalho dele.",
    scenes: [
      {
        id: "slide-01",
        title: "Slide 1",
        onScreenText:
          "Quando a cliente precisa chamar no WhatsApp para entender tudo, o link ainda não está fazendo o trabalho dele."
      },
      {
        id: "slide-02",
        title: "Slide 2",
        onScreenText:
          "Um bom link de agendamento não mostra só horário. Ele antecipa contexto."
      },
      {
        id: "slide-03",
        title: "Slide 3",
        onScreenText:
          "Marca, fotos, endereço, comodidades e formas de pagamento também ajudam a cliente a decidir."
      },
      {
        id: "slide-04",
        title: "Slide 4",
        onScreenText:
          "Regras claras de sinal, antecedência e cancelamento reduzem atrito antes da conversa começar."
      },
      {
        id: "slide-05",
        title: "Slide 5",
        onScreenText:
          "Menos dúvida significa menos mensagem repetida e mais decisão com confiança."
      },
      {
        id: "slide-06",
        title: "Slide 6",
        onScreenText:
          "No Framja, o link de agendamento conecta vitrine, regra comercial e operação."
      },
      {
        id: "slide-07",
        title: "Slide 7",
        onScreenText:
          "Agendar fica mais simples quando a cliente já entendeu o contexto antes de clicar."
      }
    ],
    captures: [
      {
        id: "capture-01",
        screen: "Configuração do Link Agendamento",
        instruction:
          "Mostrar a área de personalização visual e de dados institucionais para reforçar a ideia de vitrine digital.",
        hideSensitiveData: true,
        shouldAppear: [
          "Tema, logo ou fotos",
          "Campos de contato e redes sociais",
          "Estrutura visual da configuração"
        ],
        shouldHide: [
          "Telefones reais",
          "Endereços reais",
          "Links pessoais"
        ],
        mockData: [
          "Marca fictícia ou conta demo",
          "Contato e endereço neutros"
        ],
        framing: "Landscape com foco nos blocos mais visuais da configuração."
      },
      {
        id: "capture-02",
        screen: "Página pública de agendamento",
        instruction:
          "Usar recorte da página pública para mostrar que a experiência já comunica antes do agendamento começar.",
        hideSensitiveData: true,
        shouldAppear: [
          "Visual da página pública",
          "Serviços ou informações gerais",
          "Blocos de confiança e contexto"
        ],
        shouldHide: [
          "Dados reais de clientes",
          "Informações privadas",
          "Elementos sem confirmação visual"
        ],
        mockData: [
          "Serviços fictícios",
          "Dados de demonstração organizados"
        ],
        framing: "Recorte estático com leitura vertical ou landscape, conforme a arte final pedir."
      }
    ],
    materials: [
      "Template de carrossel",
      "Captura da configuração do Link Agendamento",
      "Captura da página pública de agendamento",
      "Conta demo com identidade visual organizada"
    ],
    caption:
      "Seu link de agendamento não deveria ser só um atalho para marcar horário.\n\nEle também precisa comunicar marca, reduzir dúvida, mostrar contexto e deixar claras as regras antes da cliente chamar no WhatsApp.\n\nNo Framja, o Link Agendamento aproxima vitrine e operação para a cliente entender melhor antes de decidir.\n\nPorque menos atrito antes do clique também é experiência.",
    cta: "Abra seu Link Agendamento e veja o que ainda falta comunicar.",
    hashtags: [
      ...baseHashtags,
      "#AgendamentoOnline",
      "#ExperiênciaDaCliente",
      "#LinkDeAgendamento"
    ],
    checklist: defaultChecklist,
    notes: [
      "Carrossel ideal para usar prints com bastante margem e texto curto por slide.",
      "Evitar parecer tutorial técnico; o foco é percepção de valor e clareza para a cliente."
    ]
  },
  {
    id: "content-17",
    slug: "quanto-custa-um-esquecimento-na-sua-agenda",
    day: 17,
    title: "Quanto custa um esquecimento na sua agenda?",
    format: "reels",
    objective:
      "Mostrar o valor operacional dos Lembretes Automáticos sem transformar a conversa em explicação técnica.",
    audience:
      "Gestores e recepcionistas de negócios de beleza que ainda confirmam atendimento no braço e lidam com faltas ou esquecimentos.",
    summary:
      "Reels para mostrar que lembrar a cliente no momento certo protege agenda, reduz retrabalho e dá previsibilidade para a rotina.",
    categoryId: "evolucao",
    featureId: "lembretes-automaticos",
    publicationStatus: "planned",
    productStatus: "available",
    duration: "25 a 35 segundos",
    difficulty: "medium",
    productionTime: 30,
    responsible: ["Narração do time"],
    hook: "Às vezes, o prejuízo da agenda não vem de um buraco grande. Vem de um esquecimento pequeno.",
    scenes: [
      {
        id: "scene-01",
        title: "Cena 1",
        speech:
          "Às vezes, o prejuízo da agenda não vem de um buraco grande. Vem de um esquecimento pequeno.",
        onScreenText: "Um esquecimento também custa.",
        visual: "Tela de agenda com horários organizados.",
        recordingDirection:
          "Abrir a agenda de demonstração com leitura limpa e poucos elementos."
      },
      {
        id: "scene-02",
        title: "Cena 2",
        speech:
          "Quando a confirmação depende só da memória da equipe, a operação fica mais frágil do que parece.",
        onScreenText: "Confirmação manual gera ruído.",
        visual: "Troca rápida entre agenda e rotina de atendimento.",
        editingDirection:
          "Cortes curtos para passar sensação de rotina corrida."
      },
      {
        id: "scene-03",
        title: "Cena 3",
        speech:
          "Foi por isso que o Framja criou uma área de Lembretes Automáticos com histórico e rastreio dos envios.",
        onScreenText: "Lembretes Automáticos.",
        visual: "Abrir o módulo de lembretes.",
        editingDirection:
          "Dar uma pausa breve no título do módulo."
      },
      {
        id: "scene-04",
        title: "Cena 4",
        speech:
          "Não é só sobre mandar mensagem. É sobre saber o que foi enviado, quando foi enviado e manter a agenda mais previsível.",
        onScreenText: "Menos esquecimento. Mais previsibilidade.",
        visual: "Percorrer log de mensagens e status.",
        editingDirection:
          "Encerrar com leitura mais calma para reforçar clareza."
      }
    ],
    captures: [
      {
        id: "capture-01",
        screen: "Agenda",
        instruction:
          "Usar a agenda apenas como contexto do problema, sem aprofundar em detalhes.",
        hideSensitiveData: true,
        shouldAppear: [
          "Horários ocupados",
          "Rotina visual de um dia de atendimento",
          "Leitura rápida da agenda"
        ],
        shouldHide: [
          "Nomes reais",
          "Telefones reais",
          "Observações internas"
        ],
        mockData: [
          "Agenda demo com clientes fictícios",
          "Serviços genéricos"
        ],
        framing: "Landscape com scroll mínimo."
      },
      {
        id: "capture-02",
        screen: "Lembretes Automáticos",
        instruction:
          "Mostrar créditos, histórico de mensagens e status dos envios para reforçar rastreabilidade.",
        hideSensitiveData: true,
        shouldAppear: [
          "Saldo ou total de créditos",
          "Histórico de mensagens enviadas",
          "Status dos envios"
        ],
        shouldHide: [
          "WhatsApps reais",
          "Mensagens pessoais",
          "Dados de clientes reais"
        ],
        mockData: [
          "Mensagens fictícias",
          "Contatos de demonstração"
        ],
        framing: "Landscape com foco nos blocos mais legíveis."
      }
    ],
    materials: [
      "Conta de demonstração com agenda preenchida",
      "Captura do módulo de Lembretes Automáticos",
      "Texto de narração pronto",
      "Ambiente silencioso para gravar voz"
    ],
    caption:
      "Nem todo prejuízo da agenda vem de um cancelamento grande.\n\nMuitas vezes, ele começa em um esquecimento pequeno, em uma confirmação que ficou para depois ou em uma mensagem que dependia da memória da equipe.\n\nOs Lembretes Automáticos do Framja ajudam a reduzir esse ruído com histórico de envios, rastreio e mais previsibilidade para a rotina.\n\nPorque comunicação organizada também é operação.",
    cta: "Abra o Framja e veja como seus lembretes estão sendo acompanhados hoje.",
    hashtags: [
      ...baseHashtags,
      "#LembretesAutomáticos",
      "#AgendaDeSalão",
      "#Recepção"
    ],
    checklist: defaultChecklist,
    notes: [
      "O ritmo do vídeo deve parecer rotina real, não tutorial técnico.",
      "Se o log de mensagens estiver visualmente poluído, usar recortes mais fechados."
    ]
  },
  {
    id: "content-18",
    slug: "o-caixa-do-dia-nao-deveria-ser-um-chute-no-fim-do-expediente",
    day: 18,
    title: "O caixa do dia não deveria ser um chute no fim do expediente",
    format: "reels",
    objective:
      "Apresentar o Caixa como ponto de encontro entre atendimento, venda e leitura financeira do dia.",
    audience:
      "Gestores e recepcionistas que ainda fecham o dia com informação espalhada entre agenda, comanda e pagamento.",
    summary:
      "Reels para mostrar que o caixa não serve só para cobrar: ele também organiza o fechamento e ajuda a entender o dia com mais clareza.",
    categoryId: "financeiro",
    featureId: "caixa",
    publicationStatus: "planned",
    productStatus: "available",
    duration: "30 a 40 segundos",
    difficulty: "medium",
    productionTime: 35,
    responsible: ["Narração do time"],
    hook: "Se o fechamento do dia depende de memória, papel solto e conversa paralela, o problema não está no fim do expediente. Está no fluxo inteiro.",
    scenes: [
      {
        id: "scene-01",
        title: "Cena 1",
        speech:
          "Se o fechamento do dia depende de memória, papel solto e conversa paralela, o problema não está no fim do expediente. Está no fluxo inteiro.",
        onScreenText: "Fechar o dia no chute custa caro.",
        visual: "Recorte rápido de agenda, atendimento e caixa.",
        recordingDirection:
          "Montagem inicial com ritmo ágil para criar contraste."
      },
      {
        id: "scene-02",
        title: "Cena 2",
        speech:
          "Porque o caixa não começa quando o salão fecha. Ele começa quando atendimento, pagamento e comanda passam a conversar.",
        onScreenText: "Caixa é fluxo, não só balcão.",
        visual: "Abrir o módulo de caixa.",
        editingDirection:
          "Reduzir o ritmo para começar a leitura da tela."
      },
      {
        id: "scene-03",
        title: "Cena 3",
        speech:
          "No Framja, a mesma área conecta comanda, forma de pagamento, pacote e leitura do resultado diário.",
        onScreenText: "Comanda • pagamento • pacote • resultado do dia",
        visual: "Percorrer área de nova comanda e comandas do dia.",
        editingDirection:
          "Usar zoom leve nos blocos que mostram valores e estrutura."
      },
      {
        id: "scene-04",
        title: "Cena 4",
        speech:
          "Isso ajuda o negócio a vender, receber e fechar o dia com mais clareza, sem transformar o caixa em adivinhação.",
        onScreenText: "Mais clareza no fechamento.",
        visual: "Mostrar resumo do dia no caixa.",
        editingDirection:
          "Encerrar com um quadro mais limpo do resumo diário."
      }
    ],
    captures: [
      {
        id: "capture-01",
        screen: "Caixa",
        instruction:
          "Mostrar a abertura de comanda ou área principal do caixa como início do fluxo.",
        hideSensitiveData: true,
        shouldAppear: [
          "Acesso ao caixa",
          "Estrutura de nova comanda",
          "Leitura clara do fluxo"
        ],
        shouldHide: [
          "Dados reais de clientes",
          "Valores sensíveis de operação real",
          "Observações internas"
        ],
        mockData: [
          "Cliente fictício",
          "Pagamentos e comandas de demonstração"
        ],
        framing: "Landscape com foco em leitura e não em velocidade."
      },
      {
        id: "capture-02",
        screen: "Resumo do dia no Caixa",
        instruction:
          "Usar o bloco de resumo para reforçar a ideia de fechamento com clareza.",
        hideSensitiveData: true,
        shouldAppear: [
          "Indicadores do dia",
          "Resumo de lucro, faturamento ou ticket médio",
          "Leitura visual organizada"
        ],
        shouldHide: [
          "Valores reais",
          "Identificadores de clientes",
          "Dados financeiros sensíveis"
        ],
        mockData: [
          "Indicadores fictícios consistentes",
          "Movimento demo do dia"
        ],
        framing: "Landscape com pausa breve nos blocos principais."
      }
    ],
    materials: [
      "Conta de demonstração com caixa preenchido",
      "Capturas da área de comanda e resumo do dia",
      "Narração pronta",
      "Roteiro aprovado pela equipe"
    ],
    caption:
      "O caixa do dia não deveria ser um chute no fim do expediente.\n\nQuando atendimento, pagamento e comanda ficam espalhados, o fechamento vira reconciliação manual e a clareza some justamente na hora de entender o resultado.\n\nNo Framja, o Caixa ajuda a conectar venda, recebimento e leitura do dia em um mesmo fluxo.\n\nPorque cobrar é só uma parte. Entender o que aconteceu também faz parte do caixa.",
    cta: "Abra o Caixa do Framja e veja se o seu fechamento está nascendo organizado.",
    hashtags: [
      ...baseHashtags,
      "#CaixaDoDia",
      "#FinanceiroDoSalão",
      "#Comandas"
    ],
    checklist: defaultChecklist,
    notes: [
      "Evitar transformar o vídeo em passo a passo de cobrança.",
      "O foco é percepção de organização e clareza financeira no dia a dia."
    ]
  },
  {
    id: "content-19",
    slug: "sua-ficha-de-cliente-lembra-o-que-a-equipe-esquece",
    day: 19,
    title: "Sua ficha de cliente lembra o que a equipe esquece?",
    format: "carousel",
    objective:
      "Mostrar que um cadastro completo preserva contexto, melhora o atendimento e cria oportunidades de recorrência.",
    audience:
      "Gestores e profissionais de beleza que ainda dependem da memória ou de anotações espalhadas para acompanhar clientes.",
    summary:
      "Carrossel educativo que transforma a ficha de cliente em memória operacional, comercial e de relacionamento.",
    categoryId: "clareza",
    featureId: "clientes",
    publicationStatus: "planned",
    productStatus: "available",
    duration: "7 telas",
    difficulty: "low",
    productionTime: 45,
    responsible: ["Time de marketing"],
    hook: "Se a profissional faltar amanhã, o histórico da cliente continua com o negócio?",
    scenes: [
      {
        id: "scene-01",
        title: "Capa",
        onScreenText:
          "Se a profissional faltar amanhã, o histórico da cliente continua com o negócio?",
        visual: "Capa limpa com uma ficha de cliente ao fundo."
      },
      {
        id: "scene-02",
        title: "Tela 2",
        onScreenText:
          "Quando tudo fica na memória, cada troca de profissional faz o atendimento começar do zero.",
        visual: "Ícones de conversa, caderno e memória desconectados."
      },
      {
        id: "scene-03",
        title: "Tela 3",
        onScreenText:
          "A ficha precisa reunir preferências, anamnese e histórico de agendamentos.",
        visual: "Recorte da aba de informações da cliente."
      },
      {
        id: "scene-04",
        title: "Tela 4",
        onScreenText:
          "Comandas e pacotes mostram o que ela comprou e o que ainda pode utilizar.",
        visual: "Recorte das áreas de comandas e pacotes."
      },
      {
        id: "scene-05",
        title: "Tela 5",
        onScreenText:
          "Pendências financeiras evitam conversas desconfortáveis baseadas em suposição.",
        visual: "Recorte da leitura financeira da cliente."
      },
      {
        id: "scene-06",
        title: "Tela 6",
        onScreenText:
          "Contexto organizado ajuda a atender melhor, vender com mais sentido e estimular o retorno.",
        visual: "Três benefícios apresentados em sequência."
      },
      {
        id: "scene-07",
        title: "Tela final",
        onScreenText:
          "No Framja, cadastro não é só contato. É relacionamento em operação.",
        visual: "Tela completa de Clientes com CTA."
      }
    ],
    captures: [
      {
        id: "capture-01",
        screen: "Detalhes da cliente",
        instruction:
          "Capturar informações, anamnese, agendamentos, comandas, pacotes e pendências em recortes separados.",
        hideSensitiveData: true,
        shouldAppear: [
          "Navegação entre as áreas da cliente",
          "Histórico fictício consistente",
          "Leitura clara dos blocos"
        ],
        shouldHide: [
          "Nome e telefone reais",
          "Informações clínicas reais",
          "Valores de clientes reais"
        ],
        mockData: [
          "Cliente fictícia Marina Alves",
          "Histórico e pacotes de demonstração"
        ],
        framing: "Capturas estáticas em proporção 4:5."
      }
    ],
    materials: [
      "Conta de demonstração com ficha completa",
      "Template de carrossel 4:5",
      "Capturas das seis áreas da cliente"
    ],
    caption:
      "Se o histórico da cliente existe apenas na memória de uma pessoa, o negócio perde contexto sempre que a rotina muda.\n\nPreferências, anamnese, agendamentos, comandas, pacotes e pendências ajudam a equipe a continuar o relacionamento sem começar do zero.\n\nNo Framja, a ficha de cliente funciona como memória operacional: mais contexto para atender, vender e estimular o retorno.",
    cta: "Abra uma ficha no Framja e veja quanto contexto da sua cliente já está organizado.",
    hashtags: [
      ...baseHashtags,
      "#GestãoDeClientes",
      "#ExperiênciaDaCliente",
      "#Fidelização"
    ],
    checklist: defaultChecklist,
    notes: [
      "Usar frases curtas e uma ideia principal por tela.",
      "Não exibir qualquer informação real de anamnese."
    ]
  },
  {
    id: "content-20",
    slug: "seu-link-de-agendamento-passa-nesse-teste",
    day: 20,
    title: "Seu link de agendamento passa nesse teste?",
    format: "stories",
    objective:
      "Gerar interação e mostrar que o Link Agendamento também funciona como vitrine digital do negócio.",
    audience:
      "Donos de salões e espaços de beleza que divulgam o agendamento online no Instagram e WhatsApp.",
    summary:
      "Sequência de Stories com enquete e checklist visual para avaliar clareza, confiança e facilidade antes do agendamento.",
    categoryId: "clareza",
    featureId: "link-agendamento",
    publicationStatus: "planned",
    productStatus: "available",
    duration: "5 stories",
    difficulty: "low",
    productionTime: 30,
    responsible: ["Time de marketing"],
    hook: "Abra seu link de agendamento como se você fosse uma cliente nova.",
    scenes: [
      {
        id: "scene-01",
        title: "Story 1 — convite",
        onScreenText:
          "Abra seu link como se você fosse uma cliente nova. Ele passa nesse teste?",
        visual: "Gravação de tela abrindo o link pelo perfil do Instagram."
      },
      {
        id: "scene-02",
        title: "Story 2 — identidade",
        onScreenText:
          "Em 3 segundos dá para reconhecer sua marca e entender o que você oferece?",
        visual: "Topo da página com logotipo, cores e informações do negócio."
      },
      {
        id: "scene-03",
        title: "Story 3 — decisão",
        onScreenText:
          "Serviços, profissionais, duração e regras estão claros antes do clique?",
        visual: "Navegação pela escolha de serviço e profissional."
      },
      {
        id: "scene-04",
        title: "Story 4 — enquete",
        onScreenText: "Sua cliente consegue agendar sem chamar no WhatsApp?",
        visual: "Adicionar enquete: “Sim” / “Ainda não”."
      },
      {
        id: "scene-05",
        title: "Story 5 — fechamento",
        onScreenText:
          "O Link Agendamento do Framja conecta sua vitrine à sua agenda.",
        visual: "Finalização de um agendamento fictício com CTA."
      }
    ],
    captures: [
      {
        id: "capture-01",
        screen: "Link Agendamento",
        instruction:
          "Gravar a jornada completa no celular, da abertura do link até a confirmação fictícia.",
        hideSensitiveData: true,
        shouldAppear: [
          "Identidade visual",
          "Serviços e profissionais fictícios",
          "Horários de demonstração"
        ],
        shouldHide: [
          "Agenda real",
          "Telefones reais",
          "Endereço pessoal"
        ],
        mockData: [
          "Espaço Beleza Aurora",
          "Serviços e equipe fictícios"
        ],
        framing: "Vertical 9:16 com zoom apenas quando necessário."
      }
    ],
    materials: [
      "Celular com conta de demonstração",
      "Link fictício configurado",
      "Sticker de enquete do Instagram"
    ],
    caption:
      "Seu link de agendamento também comunica a experiência do seu negócio. Quanto menos dúvida antes do clique, menor o atrito para a cliente decidir.",
    cta: "Faça o teste e responda à enquete: seu link está claro para uma cliente nova?",
    hashtags: [
      ...baseHashtags,
      "#AgendamentoOnline",
      "#LinkDeAgendamento",
      "#ExperiênciaDigital"
    ],
    checklist: defaultChecklist,
    notes: [
      "Publicar os cinco Stories em sequência.",
      "Manter a enquete visível por tempo suficiente para leitura."
    ]
  },
  {
    id: "content-21",
    slug: "como-uma-sugestao-vira-melhoria-no-framja",
    day: 21,
    title: "Como uma sugestão vira melhoria no Framja",
    format: "behind-the-scenes",
    objective:
      "Mostrar o processo de produto por trás da futura Comissão como auxiliar sem prometer disponibilidade imediata.",
    audience:
      "Clientes e profissionais que acompanham a evolução do Framja e valorizam um produto construído próximo da operação.",
    summary:
      "Bastidores sobre como uma necessidade real é traduzida em regra de produto, interface e validação antes de chegar ao sistema.",
    categoryId: "bastidores",
    featureLabel: "Comissão como auxiliar",
    publicationStatus: "planned",
    productStatus: "in-development",
    duration: "35 a 45 segundos",
    difficulty: "medium",
    productionTime: 50,
    responsible: ["Produto ou fundador"],
    hook: "Uma sugestão de cliente não vira botão no dia seguinte. Primeiro, ela precisa virar uma regra que funcione.",
    scenes: [
      {
        id: "scene-01",
        title: "Cena 1",
        speech:
          "Uma sugestão de cliente não vira botão no dia seguinte. Primeiro, ela precisa virar uma regra que funcione.",
        onScreenText: "Da necessidade à regra.",
        visual: "Pessoa do time falando com o roadmap ao fundo."
      },
      {
        id: "scene-02",
        title: "Cena 2",
        speech:
          "Na comissão como auxiliar, a pergunta foi: como remunerar quem ajuda no serviço sem aumentar o valor cobrado da cliente?",
        onScreenText: "Remunerar o apoio sem alterar o preço.",
        visual: "Card do roadmap e rascunho do fluxo."
      },
      {
        id: "scene-03",
        title: "Cena 3",
        speech:
          "Isso exige definir cadastro, seleção do auxiliar na comanda e impacto correto na comissão.",
        onScreenText: "Cadastro • comanda • comissão",
        visual: "Três etapas do fluxo representadas na tela."
      },
      {
        id: "scene-04",
        title: "Cena 4",
        speech:
          "A funcionalidade está em desenvolvimento. Mostrar o processo também é parte do compromisso de construir com clareza.",
        onScreenText: "Em desenvolvimento. Ainda não disponível.",
        visual: "Roadmap com selo de próxima versão."
      }
    ],
    captures: [
      {
        id: "capture-01",
        screen: "Roadmap — Comissão como auxiliar",
        instruction:
          "Mostrar o card da funcionalidade e um fluxograma simples sem simular uma tela pronta.",
        hideSensitiveData: true,
        shouldAppear: [
          "Título da melhoria",
          "Problema que ela resolve",
          "Status em desenvolvimento"
        ],
        shouldHide: [
          "Datas internas não confirmadas",
          "Dados de clientes",
          "Protótipos não aprovados"
        ],
        mockData: [
          "Serviço fictício com profissional principal e auxiliar"
        ],
        framing: "Vertical, alternando rosto, roadmap e rascunho."
      }
    ],
    materials: [
      "Roadmap aberto",
      "Rascunho simples do fluxo",
      "Pessoa do produto disponível para gravação"
    ],
    caption:
      "Entre uma sugestão e uma funcionalidade existem perguntas que precisam ser respondidas.\n\nNa Comissão como auxiliar, estamos estudando como remunerar quem apoia o serviço sem alterar o preço cobrado da cliente — conectando cadastro, comanda e cálculo de comissão.\n\nA melhoria está em desenvolvimento e ainda não está disponível. Este bastidor mostra a direção que estamos construindo, não uma promessa de lançamento.",
    cta: "Sua operação também trabalha com profissionais auxiliares? Conte para a gente como funciona hoje.",
    hashtags: [
      ...baseHashtags,
      "#BastidoresDoProduto",
      "#Comissão",
      "#ProdutoEmConstrução"
    ],
    checklist: defaultChecklist,
    notes: [
      "Obrigatório manter a frase “Em desenvolvimento. Ainda não disponível”.",
      "Não mencionar data de lançamento."
    ]
  },
  {
    id: "content-22",
    slug: "agenda-cheia-nao-e-o-mesmo-que-faturamento-realizado",
    day: 22,
    title: "Agenda cheia não é o mesmo que faturamento realizado",
    format: "reels",
    objective:
      "Introduzir o conceito do futuro Relatório de Faturamento Previsto e explicar a diferença entre previsão e resultado realizado.",
    audience:
      "Gestores de negócios de beleza que precisam antecipar a capacidade financeira da agenda sem confundir projeção com dinheiro recebido.",
    summary:
      "Reels conceitual sobre como os serviços agendados podem formar uma previsão gerencial antes dos atendimentos acontecerem.",
    categoryId: "futuro",
    featureLabel: "Relatório de Faturamento Previsto",
    publicationStatus: "planned",
    productStatus: "in-development",
    duration: "30 a 40 segundos",
    difficulty: "medium",
    productionTime: 40,
    responsible: ["Narração do time"],
    hook: "Olhar uma agenda cheia e somar os horários não responde quanto o negócio já faturou.",
    scenes: [
      {
        id: "scene-01",
        title: "Cena 1",
        speech:
          "Olhar uma agenda cheia e somar os horários não responde quanto o negócio já faturou.",
        onScreenText: "Agenda cheia ≠ faturamento realizado",
        visual: "Agenda semanal preenchida com dados fictícios."
      },
      {
        id: "scene-02",
        title: "Cena 2",
        speech:
          "Mas os serviços agendados podem ajudar a enxergar o que está previsto para os próximos dias.",
        onScreenText: "O que está previsto?",
        visual: "Valores fictícios dos serviços formando uma projeção."
      },
      {
        id: "scene-03",
        title: "Cena 3",
        speech:
          "Essa leitura ajuda a antecipar cenários, acompanhar a ocupação e tomar decisões antes do fechamento.",
        onScreenText: "Prever para decidir antes.",
        visual: "Cards conceituais de previsão, ocupação e decisão."
      },
      {
        id: "scene-04",
        title: "Cena 4",
        speech:
          "É essa a direção do Relatório de Faturamento Previsto que está no roadmap do Framja.",
        onScreenText: "Em desenvolvimento. Ainda não disponível.",
        visual: "Card oficial do roadmap, sem apresentar tela pronta."
      }
    ],
    captures: [
      {
        id: "capture-01",
        screen: "Agenda e Roadmap",
        instruction:
          "Usar a agenda apenas para explicar o conceito e finalizar no card do roadmap.",
        hideSensitiveData: true,
        shouldAppear: [
          "Agenda fictícia preenchida",
          "Valores de serviços de demonstração",
          "Status em desenvolvimento"
        ],
        shouldHide: [
          "Faturamento real",
          "Clientes reais",
          "Tela simulada como se estivesse pronta"
        ],
        mockData: [
          "Semana fictícia com serviços e valores coerentes"
        ],
        framing: "Vertical 9:16 com textos grandes."
      }
    ],
    materials: [
      "Agenda de demonstração preenchida",
      "Card do roadmap",
      "Animação simples de soma dos serviços"
    ],
    caption:
      "Agenda cheia e faturamento realizado são leituras diferentes.\n\nOs serviços marcados podem formar uma previsão do que está por vir, mas o resultado só se confirma quando a operação acontece.\n\nEstamos trabalhando na direção de um Relatório de Faturamento Previsto para ajudar gestores a antecipar cenários com mais clareza.\n\nA funcionalidade está em desenvolvimento e ainda não está disponível.",
    cta: "Que decisão você gostaria de antecipar olhando o faturamento previsto da sua agenda?",
    hashtags: [
      ...baseHashtags,
      "#FaturamentoPrevisto",
      "#PlanejamentoFinanceiro",
      "#RoadmapFramja"
    ],
    checklist: defaultChecklist,
    notes: [
      "Obrigatório diferenciar previsão de faturamento realizado.",
      "Não mostrar protótipo nem prometer data de lançamento."
    ]
  },
  {
    id: "content-23",
    slug: "uma-cadeira-vazia-custa-mais-do-que-parece",
    day: 23,
    title: "Uma cadeira vazia custa mais do que parece",
    format: "reels",
    objective: "Transformar faltas e esquecimentos em uma dor financeira concreta e apresentar os Lembretes Automáticos como resposta operacional.",
    audience: "Gestores de salões, barbearias e clínicas de beleza que convivem com faltas e confirmações manuais.",
    summary: "Reels comercial que conecta cadeira vazia, receita perdida e comunicação automatizada.",
    categoryId: "financeiro",
    featureId: "lembretes-automaticos",
    publicationStatus: "planned",
    productStatus: "available",
    duration: "25 a 35 segundos",
    difficulty: "low",
    productionTime: 30,
    responsible: ["Narração do time"],
    hook: "Uma cadeira vazia não perde só um horário. Ela perde receita, ritmo e uma oportunidade que talvez não volte.",
    scenes: [
      { id: "scene-01", speech: "Uma cadeira vazia não perde só um horário. Ela perde receita, ritmo e uma oportunidade que talvez não volte.", onScreenText: "Horário vazio também custa.", visual: "Cadeira vazia e horário destacado na agenda." },
      { id: "scene-02", speech: "Quando a confirmação depende da memória da equipe, o risco cresce junto com a agenda.", onScreenText: "Memória não é processo.", visual: "Rotina corrida entre atendimento e mensagens." },
      { id: "scene-03", speech: "Com os Lembretes Automáticos do Framja, a comunicação entra na rotina sem depender de alguém lembrar de lembrar.", onScreenText: "Lembretes Automáticos Framja", visual: "Histórico e status de envios no sistema." },
      { id: "scene-04", speech: "Mais previsibilidade para a agenda. Mais tempo para a equipe cuidar de quem já chegou.", onScreenText: "Proteja sua agenda.", visual: "Agenda organizada e CTA para teste gratuito." }
    ],
    captures: [{ id: "capture-01", screen: "Agenda e Lembretes Automáticos", instruction: "Contrastar um horário vazio com o painel de envios automáticos.", hideSensitiveData: true, shouldAppear: ["Agenda fictícia", "Histórico de envios", "Status das mensagens"], shouldHide: ["Telefones reais", "Mensagens pessoais", "Nomes reais"], mockData: ["Clientes e horários fictícios"], framing: "Vertical 9:16, com cortes rápidos." }],
    materials: ["Conta de demonstração", "Captura da agenda", "Captura dos lembretes"],
    caption: "Uma falta não ocupa apenas um espaço vazio na agenda. Ela interrompe o ritmo, reduz a previsão do dia e desperdiça uma oportunidade de atendimento.\n\nOs Lembretes Automáticos do Framja ajudam a tornar a comunicação mais previsível, com histórico e acompanhamento dos envios.\n\nSua equipe não precisa depender da memória para proteger a agenda.",
    cta: "Teste o Framja e coloque a confirmação de atendimentos para trabalhar a favor da sua agenda.",
    hashtags: [...baseHashtags, "#ReduçãoDeFaltas", "#AgendaCheia", "#Automação"],
    checklist: defaultChecklist,
    notes: ["Não prometer eliminação total de faltas.", "Usar valores apenas se forem claramente fictícios."]
  },
  {
    id: "content-24",
    slug: "cinco-sinais-de-que-seu-negocio-cresceu-mas-a-gestao-nao",
    day: 24,
    title: "5 sinais de que seu negócio cresceu, mas a gestão não acompanhou",
    format: "carousel",
    objective: "Gerar identificação com operações desorganizadas e posicionar o Framja como próximo passo de profissionalização.",
    audience: "Donos de negócios de beleza que cresceram, contrataram equipe e ainda controlam a operação de forma improvisada.",
    summary: "Carrossel comercial de diagnóstico com cinco sintomas de uma gestão que ficou para trás.",
    categoryId: "clareza",
    featureLabel: "Gestão integrada",
    publicationStatus: "planned",
    productStatus: "available",
    duration: "7 telas",
    difficulty: "low",
    productionTime: 45,
    responsible: ["Time de marketing"],
    hook: "Seu negócio cresceu. Mas será que a sua forma de gerir cresceu junto?",
    scenes: [
      { id: "scene-01", title: "Capa", onScreenText: "5 sinais de que seu negócio cresceu, mas a gestão não acompanhou", visual: "Agenda, caixa e mensagens sobrepostos." },
      { id: "scene-02", title: "Sinal 1", onScreenText: "A agenda só funciona porque alguém confere tudo o tempo inteiro.", visual: "Agenda manual e notificações." },
      { id: "scene-03", title: "Sinal 2", onScreenText: "O histórico da cliente está na cabeça da profissional.", visual: "Ficha incompleta versus cadastro organizado." },
      { id: "scene-04", title: "Sinal 3", onScreenText: "Fechar o caixa exige juntar informações de vários lugares.", visual: "Papéis, planilha e caixa desconectados." },
      { id: "scene-05", title: "Sinal 4", onScreenText: "Comissões sempre terminam em conferência e dúvida.", visual: "Cálculos manuais e equipe aguardando." },
      { id: "scene-06", title: "Sinal 5", onScreenText: "Você trabalha muito, mas ainda demora para entender o resultado.", visual: "Gestor procurando números." },
      { id: "scene-07", title: "Fechamento", onScreenText: "Crescer pede mais do que esforço. Pede operação organizada. Conheça o Framja.", visual: "Visão geral do sistema e CTA." }
    ],
    captures: [{ id: "capture-01", screen: "Agenda, Clientes, Caixa e Olho do Gato", instruction: "Usar recortes rápidos das áreas que respondem aos cinco sinais.", hideSensitiveData: true, shouldAppear: ["Telas limpas", "Dados fictícios", "Identidade do Framja"], shouldHide: ["Dados reais", "Valores reais", "Informações pessoais"], mockData: ["Operação fictícia completa"], framing: "Carrossel 4:5 com uma mensagem por tela." }],
    materials: ["Template de carrossel", "Capturas das áreas principais", "Ícones de apoio"],
    caption: "Nem toda desorganização parece um problema quando o negócio ainda é pequeno. Mas, conforme a equipe e a agenda crescem, o improviso começa a cobrar em tempo, retrabalho e falta de clareza.\n\nO Framja conecta agenda, clientes, equipe e financeiro para a gestão acompanhar o tamanho da sua operação.",
    cta: "Seu negócio se identificou com quantos sinais? Comece um teste gratuito do Framja.",
    hashtags: [...baseHashtags, "#GestãoProfissional", "#CrescimentoDoNegócio", "#EmpreendedorismoNaBeleza"],
    checklist: defaultChecklist,
    notes: ["Manter tom firme, sem culpabilizar o gestor."]
  },
  {
    id: "content-25",
    slug: "cliente-que-nao-volta-nao-avisa",
    day: 25,
    title: "Cliente que não volta não avisa",
    format: "reels",
    objective: "Mostrar o valor comercial de acompanhar histórico e recorrência antes que clientes desapareçam da rotina.",
    audience: "Gestores que desejam aumentar recorrência e reduzir a dependência de conquistar clientes novos todos os dias.",
    summary: "Reels de retenção que posiciona Clientes e Olho do Gato como fontes de contexto para agir comercialmente.",
    categoryId: "clareza",
    featureId: "olho-do-gato",
    publicationStatus: "planned",
    productStatus: "available",
    duration: "30 a 40 segundos",
    difficulty: "medium",
    productionTime: 35,
    responsible: ["Fundador ou integrante do time"],
    hook: "Cliente que não volta raramente manda uma mensagem avisando que não vai voltar.",
    scenes: [
      { id: "scene-01", speech: "Cliente que não volta raramente manda uma mensagem avisando que não vai voltar.", onScreenText: "Ela só deixa de aparecer.", visual: "Agenda avançando sem novo horário da cliente." },
      { id: "scene-02", speech: "Sem histórico organizado, o afastamento vira silêncio e a oportunidade de relacionamento passa despercebida.", onScreenText: "Sem contexto, não existe ação.", visual: "Ficha da cliente e histórico de atendimentos." },
      { id: "scene-03", speech: "O Framja reúne o histórico da cliente e ajuda o gestor a enxergar melhor a operação no Olho do Gato.", onScreenText: "Histórico + visão de gestão", visual: "Clientes e dashboard em sequência." },
      { id: "scene-04", speech: "Porque vender de novo para quem já conhece seu trabalho começa por lembrar melhor de quem já esteve com você.", onScreenText: "Relacionamento também é gestão.", visual: "CTA para conhecer o Framja." }
    ],
    captures: [{ id: "capture-01", screen: "Clientes e Olho do Gato", instruction: "Mostrar histórico fictício e indicadores relacionados a clientes, sem sugerir automações inexistentes.", hideSensitiveData: true, shouldAppear: ["Histórico fictício", "Informações organizadas", "Dashboard"], shouldHide: ["Dados reais", "Telefone real", "Anamnese real"], mockData: ["Cliente fictícia sem retorno recente"], framing: "Vertical, alternando rosto e tela." }],
    materials: ["Conta demo com histórico", "Captura do Olho do Gato", "Roteiro de fala"],
    caption: "Conquistar uma cliente nova importa. Mas perceber quando uma cliente antiga deixou de voltar também importa.\n\nCom histórico organizado e uma visão mais clara da operação, o gestor deixa de depender apenas da memória para entender o relacionamento com a base.\n\nO Framja ajuda seu negócio a lembrar melhor para atender e decidir melhor.",
    cta: "Conheça o Framja e transforme cadastro em contexto comercial.",
    hashtags: [...baseHashtags, "#RetençãoDeClientes", "#Recorrência", "#GestãoDeClientes"],
    checklist: defaultChecklist,
    notes: ["Não afirmar que o sistema garante o retorno da cliente."]
  },
  {
    id: "content-26",
    slug: "quanto-uma-falta-custa-no-seu-mes",
    day: 26,
    title: "Quanto uma falta custa no seu mês?",
    format: "stories",
    objective: "Gerar interação, tornar o custo das faltas visível e conduzir para o teste gratuito.",
    audience: "Gestores de beleza que subestimam o impacto acumulado de horários perdidos.",
    summary: "Stories com caixa de resposta e cálculo simples para transformar ausência em impacto mensal.",
    categoryId: "financeiro",
    featureId: "lembretes-automaticos",
    publicationStatus: "planned",
    productStatus: "available",
    duration: "5 stories",
    difficulty: "low",
    productionTime: 25,
    responsible: ["Time de marketing"],
    hook: "Faça essa conta antes de dizer que uma falta não faz tanta diferença.",
    scenes: [
      { id: "scene-01", title: "Story 1", onScreenText: "Qual é o ticket médio de um atendimento no seu negócio?", visual: "Caixa de resposta." },
      { id: "scene-02", title: "Story 2", onScreenText: "Agora multiplique pelas faltas da última semana.", visual: "Animação de cálculo com valores fictícios." },
      { id: "scene-03", title: "Story 3", onScreenText: "E depois por quatro semanas. O número ainda parece pequeno?", visual: "Impacto mensal em destaque." },
      { id: "scene-04", title: "Story 4", onScreenText: "Confirmação manual depende de tempo e memória. Lembretes Automáticos criam rotina.", visual: "Painel de lembretes do Framja." },
      { id: "scene-05", title: "Story 5", onScreenText: "Sua agenda merece previsibilidade. Teste o Framja.", visual: "CTA com link de teste gratuito." }
    ],
    captures: [{ id: "capture-01", screen: "Lembretes Automáticos", instruction: "Mostrar o painel depois do cálculo, como solução operacional.", hideSensitiveData: true, shouldAppear: ["Histórico de envios", "Status", "Créditos"], shouldHide: ["Contatos reais", "Mensagens privadas"], mockData: ["Valores e clientes fictícios"], framing: "Vertical 9:16." }],
    materials: ["Calculadora visual", "Sticker de resposta", "Captura dos lembretes"],
    caption: "Uma sequência rápida para transformar faltas em um número que o gestor consegue enxergar.",
    cta: "Responda o seu ticket médio e acesse o teste gratuito do Framja.",
    hashtags: [...baseHashtags, "#FaltasNaAgenda", "#GestãoFinanceira", "#StoriesInterativos"],
    checklist: defaultChecklist,
    notes: ["Identificar todos os valores como exemplos fictícios."]
  },
  {
    id: "content-27",
    slug: "vender-pacote-e-facil-dificil-e-controlar-o-saldo",
    day: 27,
    title: "Vender pacote é fácil. Difícil é controlar o saldo no improviso.",
    format: "carousel",
    objective: "Apresentar Pacotes como ferramenta de venda recorrente com controle operacional.",
    audience: "Negócios de beleza que vendem sessões ou tratamentos e controlam o consumo manualmente.",
    summary: "Carrossel comercial sobre o risco de vender pacotes sem acompanhar uso, saldo e histórico.",
    categoryId: "financeiro",
    featureLabel: "Pacotes",
    publicationStatus: "planned",
    productStatus: "available",
    duration: "6 telas",
    difficulty: "low",
    productionTime: 40,
    responsible: ["Time de marketing"],
    hook: "O pacote foi vendido. Mas alguém sabe exatamente quantas sessões ainda restam?",
    scenes: [
      { id: "scene-01", title: "Capa", onScreenText: "O pacote foi vendido. Quantas sessões ainda restam?", visual: "Cartão de pacote com saldo em destaque." },
      { id: "scene-02", title: "Tela 2", onScreenText: "Sem controle, cada uso vira conferência de conversa, papel ou planilha.", visual: "Informações espalhadas." },
      { id: "scene-03", title: "Tela 3", onScreenText: "E qualquer divergência pode virar desconforto com a cliente.", visual: "Saldo divergente em destaque." },
      { id: "scene-04", title: "Tela 4", onScreenText: "No Framja, o pacote conecta serviços, quantidade, saldo e ficha da cliente.", visual: "Cadastro de pacote e saldo fictício." },
      { id: "scene-05", title: "Tela 5", onScreenText: "Você vende recorrência sem perder o controle da entrega.", visual: "Fluxo venda, uso e saldo." },
      { id: "scene-06", title: "Fechamento", onScreenText: "Venda mais de uma sessão. Mantenha clareza em todas elas.", visual: "CTA para teste gratuito." }
    ],
    captures: [{ id: "capture-01", screen: "Pacotes e ficha da cliente", instruction: "Mostrar criação, venda e saldo de um pacote fictício.", hideSensitiveData: true, shouldAppear: ["Serviços do pacote", "Quantidade", "Saldo restante"], shouldHide: ["Clientes reais", "Valores reais"], mockData: ["Pacote fictício de cinco sessões"], framing: "Capturas 4:5 com zoom no saldo." }],
    materials: ["Pacote demo", "Template de carrossel", "Capturas do fluxo"],
    caption: "Pacotes ajudam a gerar recorrência, mas precisam de controle para que a experiência continue clara depois da venda.\n\nNo Framja, serviços, quantidade e saldo ficam conectados à ficha da cliente. Assim, o negócio acompanha o que foi vendido e o que ainda precisa ser entregue.",
    cta: "Teste o Framja e organize a venda e o consumo dos seus pacotes.",
    hashtags: [...baseHashtags, "#PacotesDeServiços", "#VendaRecorrente", "#ControleDeSessões"],
    checklist: defaultChecklist,
    notes: ["Confirmar que a conta demo possui o fluxo completo de pacotes."]
  },
  {
    id: "content-28",
    slug: "comissao-nao-deveria-ser-uma-discussao-todo-fim-do-mes",
    day: 28,
    title: "Comissão não deveria ser uma discussão todo fim do mês",
    format: "reels",
    objective: "Posicionar o controle de comissões como instrumento de confiança entre gestão e equipe.",
    audience: "Gestores com profissionais comissionados que fazem conferências manuais e enfrentam dúvidas recorrentes.",
    summary: "Reels comercial que conecta regras claras, comandas e confiança no cálculo das comissões.",
    categoryId: "clareza",
    featureLabel: "Comissões",
    publicationStatus: "planned",
    productStatus: "available",
    duration: "30 a 40 segundos",
    difficulty: "medium",
    productionTime: 35,
    responsible: ["Fundador ou integrante do time"],
    hook: "Se todo fechamento de comissão termina em dúvida, o problema não é a equipe. É a falta de um processo claro.",
    scenes: [
      { id: "scene-01", speech: "Se todo fechamento de comissão termina em dúvida, o problema não é a equipe. É a falta de um processo claro.", onScreenText: "Comissão sem clareza gera desgaste.", visual: "Planilha e mensagens de conferência." },
      { id: "scene-02", speech: "Quando serviço, profissional e comanda ficam conectados, a conferência deixa de começar do zero.", onScreenText: "Serviço + profissional + comanda", visual: "Fluxo dentro do Framja." },
      { id: "scene-03", speech: "O Framja ajuda a organizar as regras e a leitura das comissões da operação.", onScreenText: "Mais clareza para gestão e equipe.", visual: "Cadastro e relatório de comissões com dados fictícios." },
      { id: "scene-04", speech: "Porque confiança também se constrói com números que todos conseguem entender.", onScreenText: "Organize antes de fechar.", visual: "CTA para teste gratuito." }
    ],
    captures: [{ id: "capture-01", screen: "Comissões", instruction: "Mostrar regra cadastrada e relatório fictício, sem revelar remunerações reais.", hideSensitiveData: true, shouldAppear: ["Profissional fictício", "Regra de comissão", "Relatório"], shouldHide: ["Nomes reais", "Valores reais", "Dados trabalhistas"], mockData: ["Equipe e comissões fictícias"], framing: "Vertical com recortes legíveis." }],
    materials: ["Conta demo com comissões", "Captura de comanda", "Captura do relatório"],
    caption: "Comissão precisa ser resultado de uma regra clara, não de uma reconstrução manual no fim do mês.\n\nAo conectar serviço, profissional e comanda, o Framja ajuda a organizar a leitura das comissões e reduzir o retrabalho de conferência.\n\nMais clareza para quem paga. Mais confiança para quem recebe.",
    cta: "Experimente o Framja e organize suas comissões desde o atendimento.",
    hashtags: [...baseHashtags, "#Comissões", "#GestãoDeEquipe", "#SalãoDeBeleza"],
    checklist: defaultChecklist,
    notes: ["Não prometer conformidade trabalhista ou contábil."]
  },
  {
    id: "content-29",
    slug: "se-voce-precisa-estar-no-salao-para-saber-o-que-acontece",
    day: 29,
    title: "Se você precisa estar no salão para saber o que acontece, isso não é gestão",
    format: "reels",
    objective: "Vender mobilidade e visão operacional por meio do Aplicativo Framja.",
    audience: "Donos e gestores que precisam acompanhar a operação fora do computador ou longe do estabelecimento.",
    summary: "Reels aspiracional sobre acompanhar a rotina no celular sem transformar presença física em dependência.",
    categoryId: "evolucao",
    featureId: "aplicativo-framja",
    publicationStatus: "planned",
    productStatus: "available",
    duration: "25 a 35 segundos",
    difficulty: "low",
    productionTime: 30,
    responsible: ["Fundador ou integrante do time"],
    hook: "Se você precisa estar no salão para descobrir como o dia está indo, o negócio ainda depende demais de você.",
    scenes: [
      { id: "scene-01", speech: "Se você precisa estar no salão para descobrir como o dia está indo, o negócio ainda depende demais de você.", onScreenText: "Presença não deveria ser a única forma de controle.", visual: "Gestor fora do salão olhando o celular." },
      { id: "scene-02", speech: "Gestão também é conseguir consultar a rotina quando você não está diante do computador.", onScreenText: "A operação acompanha você.", visual: "Aplicativo Framja sendo aberto." },
      { id: "scene-03", speech: "O Aplicativo Framja leva mais praticidade para o acompanhamento do dia a dia.", onScreenText: "Framja no celular.", visual: "Navegação pelas áreas disponíveis no app." },
      { id: "scene-04", speech: "Seu negócio precisa de processo para funcionar — não da sua presença em cada minuto.", onScreenText: "Ganhe mobilidade para gerir.", visual: "CTA para conhecer o Framja." }
    ],
    captures: [{ id: "capture-01", screen: "Aplicativo Framja", instruction: "Mostrar apenas áreas realmente disponíveis na versão atual do aplicativo.", hideSensitiveData: true, shouldAppear: ["Interface móvel", "Dados demo", "Navegação fluida"], shouldHide: ["Notificações pessoais", "Dados reais", "Funcionalidades ainda não lançadas"], mockData: ["Empresa e agenda fictícias"], framing: "Gravação nativa vertical do celular." }],
    materials: ["Celular com aplicativo", "Conta demo", "Ambiente externo ou escritório"],
    caption: "Gestão não deveria existir apenas quando o dono está fisicamente no negócio.\n\nO Aplicativo Framja leva mais praticidade para acompanhar a rotina pelo celular e reduz a dependência de estar sempre diante do computador.\n\nMais mobilidade para o gestor. Mais processo para a operação.",
    cta: "Conheça o Framja e leve sua gestão com você.",
    hashtags: [...baseHashtags, "#GestãoNoCelular", "#AplicativoFramja", "#Mobilidade"],
    checklist: defaultChecklist,
    notes: ["Validar previamente quais áreas do app serão mostradas."]
  },
  {
    id: "content-30",
    slug: "voce-nao-precisa-de-mais-uma-planilha",
    day: 30,
    title: "Você não precisa de mais uma planilha",
    format: "reels",
    objective: "Criar uma peça de conversão direta que sintetize o posicionamento do Framja e leve ao teste gratuito.",
    audience: "Donos de negócios de beleza que usam ferramentas fragmentadas e adiam a adoção de um sistema de gestão.",
    summary: "Reels manifesto comercial com contraste entre improviso fragmentado e operação conectada.",
    categoryId: "evolucao",
    featureLabel: "Visão geral do Framja",
    publicationStatus: "planned",
    productStatus: "available",
    duration: "30 a 40 segundos",
    difficulty: "medium",
    productionTime: 40,
    responsible: ["Fundador ou integrante do time"],
    hook: "Você não precisa de mais uma planilha. Precisa parar de administrar seu negócio em pedaços.",
    scenes: [
      { id: "scene-01", speech: "Você não precisa de mais uma planilha. Precisa parar de administrar seu negócio em pedaços.", onScreenText: "Seu negócio não é uma coleção de improvisos.", visual: "Planilha, caderno, mensagens e agenda desconectados." },
      { id: "scene-02", speech: "Agenda em um lugar, cliente em outro e caixa no fim do dia criam trabalho que não aparece — mas consome você.", onScreenText: "Ferramentas separadas. Retrabalho junto.", visual: "Trocas rápidas entre ferramentas." },
      { id: "scene-03", speech: "O Framja conecta agenda, clientes, equipe, comandas e financeiro em uma rotina mais clara.", onScreenText: "Uma operação que conversa.", visual: "Montagem das principais telas do Framja." },
      { id: "scene-04", speech: "Menos tempo procurando informação. Mais clareza para atender, vender e decidir.", onScreenText: "Gestão prática para negócios de beleza.", visual: "Olho do Gato e agenda." },
      { id: "scene-05", speech: "Comece seu teste gratuito e veja como é gerir quando tudo conversa.", onScreenText: "Teste o Framja gratuitamente.", visual: "Tela de cadastro e CTA final." }
    ],
    captures: [{ id: "capture-01", screen: "Visão geral do Framja", instruction: "Criar uma montagem comercial com Agenda, Clientes, Caixa e Olho do Gato.", hideSensitiveData: true, shouldAppear: ["Principais módulos", "Identidade visual", "Dados demo consistentes"], shouldHide: ["Dados reais", "Roadmap", "Valores sensíveis"], mockData: ["Operação fictícia completa"], framing: "Vertical, cortes fortes e pausa no CTA." }],
    materials: ["Capturas dos módulos principais", "Pessoa para fala direta", "Tela do teste gratuito"],
    caption: "Seu negócio não precisa de mais uma ferramenta isolada. Precisa de uma operação em que agenda, clientes, equipe e financeiro conversem.\n\nO Framja foi criado para negócios de beleza que querem sair do improviso e gerir com mais clareza.\n\nComece seu teste gratuito e conheça uma forma mais prática de organizar a rotina.",
    cta: "Inicie seu teste gratuito do Framja agora.",
    hashtags: [...baseHashtags, "#TesteGrátis", "#GestãoIntegrada", "#NegócioDeBeleza"],
    checklist: defaultChecklist,
    notes: ["Usar o link oficial do teste gratuito no CTA.", "Manter ritmo comercial sem acelerar a leitura final."]
  },
  {
    id: "content-31",
    slug: "agenda-cheia-nao-significa-lucro",
    day: 31,
    title: "Agenda cheia não significa lucro",
    format: "reels",
    objective: "Quebrar a associação entre movimento e lucratividade e apresentar o Olho do Gato como ferramenta de leitura gerencial.",
    audience: "Donos de salões e negócios de beleza que trabalham muito, mas não conseguem explicar o resultado financeiro do mês.",
    summary: "Reels comercial que confronta agenda cheia com lucro real.",
    categoryId: "financeiro",
    featureId: "olho-do-gato",
    featureLabel: "Olho do Gato",
    publicationStatus: "planned",
    productStatus: "available",
    duration: "25 a 35 segundos",
    difficulty: "low",
    productionTime: 30,
    responsible: ["Fundador ou integrante do time"],
    hook: "Seu salão pode estar cheio e, mesmo assim, o lucro estar desaparecendo.",
    scenes: [
      { id: "scene-01", speech: "Seu salão pode estar cheio e, mesmo assim, o lucro estar desaparecendo.", onScreenText: "Agenda cheia ≠ lucro", visual: "Agenda movimentada seguida de expressão de dúvida." },
      { id: "scene-02", speech: "Porque faturamento bruto não mostra sozinho o peso dos custos e das despesas.", onScreenText: "Faturar é diferente de lucrar.", visual: "Contraste entre receita, custos e despesas no painel." },
      { id: "scene-03", speech: "No Olho do Gato, você enxerga receita, custos, despesas e lucro real no período escolhido.", onScreenText: "Veja o resultado real.", visual: "Percorrer os indicadores do dashboard com dados fictícios." },
      { id: "scene-04", speech: "Pare de medir o negócio pelo movimento. Comece a decidir pelo resultado.", onScreenText: "Abra o Olho do Gato.", visual: "Encerrar com painel e marca Framja." }
    ],
    captures: [{ id: "capture-01", screen: "Olho do Gato", instruction: "Mostrar receita bruta, custos, despesas e lucro real no mesmo período.", hideSensitiveData: true, shouldAppear: ["Filtro de período", "Indicadores financeiros", "Dados demo coerentes"], shouldHide: ["Dados reais", "Valores de clientes reais"], mockData: ["Receita R$ 48.000", "Custos e despesas fictícios", "Lucro real fictício"], framing: "Vertical, com aproximação nos quatro números principais." }],
    materials: ["Conta demo preenchida", "Captura vertical do Olho do Gato", "Pessoa para fala direta"],
    caption: "Agenda cheia mostra movimento. Lucro real mostra saúde.\n\nQuando receita, custos e despesas ficam separados, é fácil confundir muito trabalho com bom resultado. O Olho do Gato reúne essa leitura para você entender o período com mais clareza.\n\nSeu negócio está apenas movimentado ou realmente lucrativo?",
    cta: "Teste o Framja e enxergue o resultado além da agenda.",
    hashtags: [...baseHashtags, "#LucroReal", "#GestãoDeSalão", "#OlhoDoGato"],
    checklist: defaultChecklist,
    notes: ["Não sugerir que o painel substitui análise contábil.", "Usar valores claramente fictícios."]
  },
  {
    id: "content-32",
    slug: "sete-numeros-que-todo-dono-de-salao-deveria-conhecer",
    day: 32,
    title: "7 números que todo dono de salão deveria conhecer",
    format: "carousel",
    objective: "Educar e gerar desejo pelo painel ao apresentar indicadores essenciais disponíveis no Olho do Gato.",
    audience: "Gestores de beleza que querem profissionalizar decisões comerciais e financeiras.",
    summary: "Carrossel salvável com sete indicadores de gestão reunidos no Olho do Gato.",
    categoryId: "educativo",
    featureId: "olho-do-gato",
    featureLabel: "Olho do Gato",
    publicationStatus: "planned",
    productStatus: "available",
    duration: "8 telas",
    difficulty: "medium",
    productionTime: 55,
    responsible: ["Social media", "Designer"],
    hook: "Se você não conhece estes números, está decidindo no escuro.",
    scenes: [
      { id: "scene-01", speech: "Capa", onScreenText: "7 números que todo dono de salão deveria conhecer", visual: "Olho de gato estilizado com cards de indicadores." },
      { id: "scene-02", speech: "Indicadores 1 e 2", onScreenText: "1. Receita bruta\n2. Lucro real", visual: "Dois cards em contraste." },
      { id: "scene-03", speech: "Indicadores 3 e 4", onScreenText: "3. Custos e despesas\n4. Ticket médio", visual: "Cards com ícones financeiros." },
      { id: "scene-04", speech: "Indicador 5", onScreenText: "5. Origem do faturamento", visual: "Composição visual da receita." },
      { id: "scene-05", speech: "Indicador 6", onScreenText: "6. Serviço mais vendido", visual: "Ranking comercial." },
      { id: "scene-06", speech: "Indicador 7", onScreenText: "7. Profissional com maior resultado", visual: "Destaque da equipe com dado fictício." },
      { id: "scene-07", speech: "Síntese", onScreenText: "Número isolado informa. Visão conectada ajuda a decidir.", visual: "Indicadores convergindo para o dashboard." },
      { id: "scene-08", speech: "CTA", onScreenText: "Você encontra essa visão no Olho do Gato.", visual: "Tela do recurso e CTA para teste." }
    ],
    captures: [{ id: "capture-01", screen: "Olho do Gato", instruction: "Capturar os indicadores citados e usá-los como base visual do carrossel.", hideSensitiveData: true, shouldAppear: ["Receita", "Lucro", "Ticket médio", "Destaques"], shouldHide: ["Dados reais", "Nomes reais"], mockData: ["Indicadores de uma operação fictícia"], framing: "Carrossel 4:5, hierarquia forte e um bloco por tela." }],
    materials: ["Capturas do dashboard", "Template de carrossel", "Ícones financeiros e comerciais"],
    caption: "Você não precisa decorar dezenas de relatórios. Precisa saber quais números contam a verdade sobre a sua operação.\n\nO Olho do Gato reúne indicadores essenciais para transformar sensação em leitura de negócio.\n\nSalve este post e marque o número que hoje você ainda não acompanha.",
    cta: "Conheça o Olho do Gato no seu teste gratuito do Framja.",
    hashtags: [...baseHashtags, "#Indicadores", "#GestãoFinanceira", "#SalãoDeBeleza"],
    checklist: defaultChecklist,
    notes: ["Manter os sete indicadores exatamente como exibidos no produto."]
  },
  {
    id: "content-33",
    slug: "faturamento-e-lucro-sao-a-mesma-coisa",
    day: 33,
    title: "Faturamento e lucro são a mesma coisa?",
    format: "stories",
    objective: "Gerar interação e conduzir a audiência de uma dúvida comum à demonstração do Olho do Gato.",
    audience: "Donos de negócios de beleza com pouca familiaridade com indicadores gerenciais.",
    summary: "Sequência interativa de Stories com enquete, explicação e demonstração do painel.",
    categoryId: "financeiro",
    featureId: "olho-do-gato",
    featureLabel: "Olho do Gato",
    publicationStatus: "planned",
    productStatus: "available",
    duration: "5 stories",
    difficulty: "low",
    productionTime: 25,
    responsible: ["Social media"],
    hook: "Faturamento alto sempre significa lucro alto?",
    scenes: [
      { id: "scene-01", speech: "Abra com uma enquete.", onScreenText: "Faturamento alto sempre significa lucro alto?\n[Sim] [Não]", visual: "Fundo com agenda cheia e sticker de enquete." },
      { id: "scene-02", speech: "Revele a resposta.", onScreenText: "Não. Custos e despesas mudam completamente essa conta.", visual: "Receita entrando e saídas reduzindo o resultado." },
      { id: "scene-03", speech: "Mostre o risco.", onScreenText: "Olhar só o que entrou pode criar uma falsa sensação de crescimento.", visual: "Número grande de receita com lucro menor em destaque." },
      { id: "scene-04", speech: "Apresente o recurso.", onScreenText: "O Olho do Gato coloca receita, custos, despesas e lucro real na mesma visão.", visual: "Gravação curta do dashboard." },
      { id: "scene-05", speech: "Feche comercialmente.", onScreenText: "Quer enxergar o resultado real? Teste o Framja.", visual: "CTA com link do teste gratuito." }
    ],
    captures: [{ id: "capture-01", screen: "Olho do Gato", instruction: "Gravar uma passagem curta pelos quatro indicadores financeiros.", hideSensitiveData: true, shouldAppear: ["Receita", "Custos", "Despesas", "Lucro real"], shouldHide: ["Dados reais"], mockData: ["Período fictício"], framing: "Vertical com zoom legível nos cards." }],
    materials: ["Sticker de enquete", "Captura do painel", "Link do teste gratuito"],
    caption: "Sequência interativa para Stories.",
    cta: "Use o sticker de link para iniciar o teste gratuito.",
    hashtags: [...baseHashtags, "#Faturamento", "#Lucro", "#OlhoDoGato"],
    checklist: defaultChecklist,
    notes: ["Aguardar respostas antes de publicar a revelação quando possível."]
  },
  {
    id: "content-34",
    slug: "seu-ticket-medio-esta-crescendo-ou-encolhendo",
    day: 34,
    title: "Seu ticket médio está crescendo ou encolhendo?",
    format: "reels",
    objective: "Mostrar o ticket médio como indicador comercial útil e gerar interesse pelo filtro de período do Olho do Gato.",
    audience: "Gestores que acompanham faturamento, mas ainda não observam quanto cada atendimento representa em média.",
    summary: "Reels educativo-comercial sobre ticket médio e comparação de períodos.",
    categoryId: "vendas",
    featureId: "olho-do-gato",
    featureLabel: "Olho do Gato",
    publicationStatus: "planned",
    productStatus: "available",
    duration: "25 a 35 segundos",
    difficulty: "low",
    productionTime: 30,
    responsible: ["Fundador ou integrante do time"],
    hook: "Seu faturamento subiu. Mas cada atendimento vale mais ou você só trabalhou mais?",
    scenes: [
      { id: "scene-01", speech: "Seu faturamento subiu. Mas cada atendimento vale mais ou você só trabalhou mais?", onScreenText: "Você cresceu ou só correu mais?", visual: "Pessoa em câmera com agenda ao fundo." },
      { id: "scene-02", speech: "O ticket médio ajuda a entender quanto cada venda representa, em média, no resultado.", onScreenText: "Olhe o ticket médio.", visual: "Card do indicador no painel." },
      { id: "scene-03", speech: "No Olho do Gato, você filtra o período e acompanha esse número junto com o restante da operação.", onScreenText: "Período + contexto", visual: "Alteração do filtro de datas com dados demo." },
      { id: "scene-04", speech: "Porque crescer não é apenas atender mais. É entender melhor o valor que você gera.", onScreenText: "Decida com clareza.", visual: "Encerramento com dashboard." }
    ],
    captures: [{ id: "capture-01", screen: "Olho do Gato", instruction: "Mostrar o filtro de período e o card de ticket médio.", hideSensitiveData: true, shouldAppear: ["Filtro de datas", "Ticket médio", "Dados fictícios"], shouldHide: ["Nomes reais", "Valores reais"], mockData: ["Dois períodos fictícios"], framing: "Vertical, com destaque visual no ticket médio." }],
    materials: ["Conta demo", "Captura do filtro de período", "Roteiro de fala"],
    caption: "Faturar mais pode significar duas coisas: sua estratégia melhorou ou sua equipe simplesmente precisou trabalhar mais.\n\nO ticket médio adiciona contexto ao faturamento e ajuda você a fazer perguntas comerciais melhores. No Olho do Gato, ele aparece junto aos principais indicadores da operação.",
    cta: "Inicie seu teste gratuito e acompanhe seu negócio com o Olho do Gato.",
    hashtags: [...baseHashtags, "#TicketMédio", "#EstratégiaComercial", "#GestãoDeBeleza"],
    checklist: defaultChecklist,
    notes: ["Evitar afirmar causalidade apenas com o ticket médio."]
  },
  {
    id: "content-35",
    slug: "de-onde-vem-o-dinheiro-do-seu-negocio",
    day: 35,
    title: "De onde vem o dinheiro do seu negócio?",
    format: "carousel",
    objective: "Mostrar por que conhecer a composição da receita melhora decisões de oferta e foco comercial.",
    audience: "Donos de negócios de beleza que conhecem o faturamento total, mas não sua composição.",
    summary: "Carrossel comercial sobre origem do faturamento, pacotes e meios de pagamento.",
    categoryId: "vendas",
    featureId: "olho-do-gato",
    featureLabel: "Olho do Gato",
    publicationStatus: "planned",
    productStatus: "available",
    duration: "7 telas",
    difficulty: "medium",
    productionTime: 50,
    responsible: ["Social media", "Designer"],
    hook: "Saber quanto entrou é importante. Saber de onde veio muda suas decisões.",
    scenes: [
      { id: "scene-01", speech: "Capa", onScreenText: "De onde vem o dinheiro do seu negócio?", visual: "Receita dividida em caminhos visuais." },
      { id: "scene-02", speech: "Problema", onScreenText: "O total sozinho não conta a história.", visual: "Um número grande sem contexto." },
      { id: "scene-03", speech: "Origem", onScreenText: "Quanto veio dos serviços?", visual: "Recorte da composição de receita." },
      { id: "scene-04", speech: "Pacotes", onScreenText: "Quanto veio dos pacotes vendidos?", visual: "Card de pacotes no painel." },
      { id: "scene-05", speech: "Pagamentos", onScreenText: "Como suas clientes estão pagando?", visual: "Divisão por meios de pagamento." },
      { id: "scene-06", speech: "Decisão", onScreenText: "Quando você entende a origem, escolhe melhor onde concentrar esforço.", visual: "Setas levando dados a uma decisão comercial." },
      { id: "scene-07", speech: "CTA", onScreenText: "O Olho do Gato reúne essa visão para você.", visual: "Dashboard completo e teste gratuito." }
    ],
    captures: [{ id: "capture-01", screen: "Olho do Gato", instruction: "Mostrar composição da receita, pacotes vendidos e meios de pagamento.", hideSensitiveData: true, shouldAppear: ["Origem do faturamento", "Pacotes", "Meios de pagamento"], shouldHide: ["Dados reais", "Valores sensíveis"], mockData: ["Composição fictícia da receita"], framing: "Carrossel 4:5 com gráficos simplificados e legíveis." }],
    materials: ["Capturas do Olho do Gato", "Template de carrossel", "Gráficos baseados em dados demo"],
    caption: "O faturamento total responde quanto entrou. A composição da receita ajuda a entender o que está sustentando esse resultado.\n\nServiços, pacotes e meios de pagamento contam histórias diferentes sobre a operação. O Olho do Gato reúne essa leitura para apoiar decisões comerciais mais claras.",
    cta: "Descubra de onde vem seu resultado com o Olho do Gato.",
    hashtags: [...baseHashtags, "#Faturamento", "#Pacotes", "#GestãoComercial"],
    checklist: defaultChecklist,
    notes: ["Não apresentar recomendação automática; o painel oferece leitura para o gestor decidir."]
  },
  {
    id: "content-36",
    slug: "quem-esta-puxando-o-resultado-do-seu-salao",
    day: 36,
    title: "Quem está puxando o resultado do seu salão?",
    format: "reels",
    objective: "Apresentar os destaques comerciais do painel como fonte de reconhecimento e estratégia.",
    audience: "Gestores com equipe e carteira de clientes que querem identificar destaques da operação.",
    summary: "Reels de descoberta sobre melhor cliente, serviço mais vendido e profissional com maior resultado.",
    categoryId: "equipe",
    featureId: "olho-do-gato",
    featureLabel: "Olho do Gato",
    publicationStatus: "planned",
    productStatus: "available",
    duration: "25 a 35 segundos",
    difficulty: "low",
    productionTime: 30,
    responsible: ["Fundador ou integrante do time"],
    hook: "Se eu perguntar quem mais movimentou seu resultado neste mês, você sabe responder?",
    scenes: [
      { id: "scene-01", speech: "Se eu perguntar quem mais movimentou seu resultado neste mês, você sabe responder?", onScreenText: "Quem puxou seu resultado?", visual: "Pergunta direta em câmera." },
      { id: "scene-02", speech: "Qual foi seu serviço mais vendido? Quem foi sua melhor cliente? Qual profissional teve o maior resultado?", onScreenText: "Cliente • Serviço • Profissional", visual: "Três cortes rápidos com os destaques demo." },
      { id: "scene-03", speech: "O Olho do Gato destaca essas respostas dentro do período analisado.", onScreenText: "Destaques visíveis em segundos.", visual: "Painel com filtro de data e cards." },
      { id: "scene-04", speech: "Reconheça o que funciona e transforme destaque em direção comercial.", onScreenText: "Veja. Entenda. Decida.", visual: "Encerramento com equipe e dashboard." }
    ],
    captures: [{ id: "capture-01", screen: "Olho do Gato", instruction: "Mostrar os cards de melhor cliente, serviço mais vendido e profissional com maior resultado.", hideSensitiveData: true, shouldAppear: ["Três destaques", "Período selecionado", "Nomes fictícios"], shouldHide: ["Clientes reais", "Resultados individuais reais"], mockData: ["Cliente Ana Demo", "Serviço fictício", "Profissional fictícia"], framing: "Vertical, um destaque por corte." }],
    materials: ["Conta demo com equipe", "Capturas dos cards", "Pessoa para apresentação"],
    caption: "Os destaques da operação não servem apenas para montar um ranking. Eles ajudam a reconhecer padrões: quem compra, o que vende e onde o resultado ganha força.\n\nNo Olho do Gato, essa leitura aparece dentro do período que você escolher.",
    cta: "Teste o Framja e conheça os destaques do seu negócio.",
    hashtags: [...baseHashtags, "#GestãoDeEquipe", "#PerformanceComercial", "#OlhoDoGato"],
    checklist: defaultChecklist,
    notes: ["Tratar os destaques como contexto gerencial, não como avaliação isolada de desempenho."]
  },
  {
    id: "content-37",
    slug: "o-dinheiro-que-ainda-nao-entrou-tambem-importa",
    day: 37,
    title: "O dinheiro que ainda não entrou também importa",
    format: "stories",
    objective: "Chamar atenção para dívidas e créditos de clientes como parte da leitura financeira do negócio.",
    audience: "Gestores que acompanham recebimentos, pendências e créditos de forma fragmentada.",
    summary: "Stories comerciais sobre valores pendentes e compromissos futuros reunidos no painel.",
    categoryId: "financeiro",
    featureId: "olho-do-gato",
    featureLabel: "Olho do Gato",
    publicationStatus: "planned",
    productStatus: "available",
    duration: "5 stories",
    difficulty: "low",
    productionTime: 25,
    responsible: ["Social media"],
    hook: "Você sabe quanto suas clientes ainda devem — e quanto possuem em crédito?",
    scenes: [
      { id: "scene-01", speech: "Pergunta inicial", onScreenText: "Você sabe quanto suas clientes ainda devem?", visual: "Sticker de enquete: Sei / Preciso conferir." },
      { id: "scene-02", speech: "Amplie a questão", onScreenText: "E quanto elas possuem em créditos?", visual: "Segundo card com contraste visual." },
      { id: "scene-03", speech: "Mostre o impacto", onScreenText: "Esses valores também fazem parte da realidade financeira da operação.", visual: "Fluxo visual entre caixa, dívida e crédito." },
      { id: "scene-04", speech: "Apresente o painel", onScreenText: "O Olho do Gato reúne dívidas e créditos de clientes na visão do período.", visual: "Captura do indicador correspondente." },
      { id: "scene-05", speech: "CTA", onScreenText: "Mais clareza começa quando nada importante fica escondido.", visual: "Logo Framja e teste gratuito." }
    ],
    captures: [{ id: "capture-01", screen: "Olho do Gato", instruction: "Mostrar os indicadores de dívidas e créditos com dados fictícios.", hideSensitiveData: true, shouldAppear: ["Dívidas", "Créditos", "Período"], shouldHide: ["Nomes reais", "Valores reais"], mockData: ["Dívidas e créditos fictícios"], framing: "Vertical e legível, sem expor detalhes individuais." }],
    materials: ["Captura do painel", "Stickers de enquete", "CTA para teste"],
    caption: "Sequência de conscientização financeira para Stories.",
    cta: "Adicione o link do teste gratuito no último Story.",
    hashtags: [...baseHashtags, "#ControleFinanceiro", "#CréditoDeClientes", "#GestãoDeSalão"],
    checklist: defaultChecklist,
    notes: ["Evitar linguagem de cobrança agressiva.", "Não sugerir que créditos são receita disponível."]
  },
  {
    id: "content-38",
    slug: "o-ritual-de-um-minuto-antes-de-abrir-o-salao",
    day: 38,
    title: "O ritual de 1 minuto antes de abrir o salão",
    format: "reels",
    objective: "Associar o Olho do Gato a um hábito simples de gestão e demonstrar velocidade de leitura.",
    audience: "Donos de negócios de beleza com rotina corrida e pouco tempo para relatórios extensos.",
    summary: "Reels de rotina que mostra uma leitura executiva do negócio antes do início do dia.",
    categoryId: "rotina",
    featureId: "olho-do-gato",
    featureLabel: "Olho do Gato",
    publicationStatus: "planned",
    productStatus: "available",
    duration: "30 a 40 segundos",
    difficulty: "medium",
    productionTime: 40,
    responsible: ["Fundador ou integrante do time"],
    hook: "Antes de abrir a porta do salão, faça este ritual de gestão de um minuto.",
    scenes: [
      { id: "scene-01", speech: "Antes de abrir a porta do salão, faça este ritual de gestão de um minuto.", onScreenText: "1 minuto para enxergar o negócio", visual: "Chegada ao salão e abertura do sistema." },
      { id: "scene-02", speech: "Escolha o período e confira receita, custos, despesas e lucro real.", onScreenText: "1. Resultado financeiro", visual: "Filtro e indicadores principais." },
      { id: "scene-03", speech: "Observe o ticket médio e de onde veio o faturamento.", onScreenText: "2. Qualidade da receita", visual: "Cards comerciais no dashboard." },
      { id: "scene-04", speech: "Veja qual serviço, cliente e profissional se destacaram.", onScreenText: "3. Destaques da operação", visual: "Três cards em sequência." },
      { id: "scene-05", speech: "Você não precisa começar o dia adivinhando. Comece enxergando.", onScreenText: "Comece pelo Olho do Gato.", visual: "Painel completo e CTA final." }
    ],
    captures: [{ id: "capture-01", screen: "Olho do Gato", instruction: "Gravar um percurso contínuo pelo filtro, indicadores, composição e destaques.", hideSensitiveData: true, shouldAppear: ["Filtro de período", "Indicadores", "Composição", "Destaques"], shouldHide: ["Dados reais", "Notificações pessoais"], mockData: ["Operação demo completa"], framing: "Vertical, captura fluida com marcações sobre os cards." }],
    materials: ["Conta demo completa", "Gravação da abertura do salão", "Captura contínua do painel"],
    caption: "Gestão não precisa começar com uma planilha enorme ou uma reunião demorada. Pode começar com as perguntas certas e uma visão clara do período.\n\nO Olho do Gato foi criado para resumir informações importantes da operação e colocá-las ao alcance do gestor em poucos minutos.",
    cta: "Comece seu teste gratuito e abra o Olho do Gato para o seu negócio.",
    hashtags: [...baseHashtags, "#RotinaDeGestão", "#Dashboard", "#NegóciosDeBeleza"],
    checklist: defaultChecklist,
    notes: ["A duração de um minuto é uma proposta editorial de consulta rápida, não uma garantia cronometrada."]
  },
  {
    id: "content-39",
    slug: "seu-salao-fatura-mas-o-dinheiro-some",
    day: 39,
    title: "Seu salão fatura, mas o dinheiro some?",
    format: "carousel",
    objective: "Converter gestores de negócios de beleza para o teste gratuito do Framja por meio de uma dor financeira imediata e reconhecível.",
    audience: "Donos de salões, clínicas de estética e negócios de beleza que possuem movimento, mas pouca clareza sobre o resultado real.",
    summary: "Carrossel de campanha com cinco slides que confronta faturamento sem clareza e apresenta o Olho do Gato como solução de gestão.",
    categoryId: "financeiro",
    featureId: "olho-do-gato",
    featureLabel: "Olho do Gato",
    publicationStatus: "planned",
    productStatus: "available",
    duration: "5 slides",
    difficulty: "medium",
    productionTime: 45,
    responsible: ["Social media", "Designer"],
    hook: "Seu salão fatura, a agenda fica cheia... mas no fim do mês você ainda pergunta: onde foi parar o dinheiro?",
    scenes: [
      {
        id: "scene-01",
        speech: "Interrupção",
        onScreenText: "SEU SALÃO FATURA.\nMAS O DINHEIRO SOME?",
        visual: "Fundo escuro, número de faturamento em destaque e efeito de desaparecimento. Usar tipografia grande e contraste forte."
      },
      {
        id: "scene-02",
        speech: "Identificação",
        onScreenText: "Agenda cheia não garante lucro.\n\nCustos, despesas e decisões no escuro podem consumir o resultado sem você perceber.",
        visual: "Agenda lotada de um lado e resultado financeiro apertado do outro."
      },
      {
        id: "scene-03",
        speech: "Apresentação da solução",
        onScreenText: "Abra o Olho do Gato.\n\nVeja receita, custos, despesas, lucro real e ticket médio em uma única visão.",
        visual: "Captura limpa do dashboard com marcações nos principais indicadores."
      },
      {
        id: "scene-04",
        speech: "Transformação",
        onScreenText: "Pare de administrar pela sensação.\n\nEntenda o que realmente dá resultado e decida com mais clareza.",
        visual: "Transição do gestor confuso para uma leitura organizada do painel."
      },
      {
        id: "scene-05",
        speech: "Conversão",
        onScreenText: "SEU NEGÓCIO MERECE MAIS DO QUE ACHISMO.\n\nTeste o Framja gratuitamente agora.\nToque no link e abra o Olho do Gato.",
        visual: "Tela final com identidade Framja, botão visual de CTA e seta apontando para o link."
      }
    ],
    captures: [
      {
        id: "capture-01",
        screen: "Olho do Gato",
        instruction: "Capturar o painel com filtro de período, receita bruta, custos, despesas, lucro real e ticket médio em uma conta demo.",
        hideSensitiveData: true,
        shouldAppear: ["Filtro de período", "Receita bruta", "Custos e despesas", "Lucro real", "Ticket médio"],
        shouldHide: ["Dados reais", "Nomes de clientes", "Valores sensíveis"],
        mockData: ["Operação fictícia com indicadores coerentes"],
        framing: "Carrossel 4:5, com o painel ocupando a área central do terceiro slide."
      }
    ],
    materials: ["Captura do Olho do Gato com dados demo", "Template 4:5 de campanha", "Botão visual para CTA", "Identidade do Framja"],
    caption: "Você trabalha, vende, atende e vê o salão movimentado. Mas, quando o mês termina, ainda é difícil responder quanto realmente sobrou?\n\nMovimento não é sinônimo de lucro. Sem enxergar receita, custos, despesas e ticket médio juntos, decisões importantes acabam sendo tomadas pela sensação.\n\nO Olho do Gato, do Framja, reúne os principais indicadores da sua operação em uma visão clara para você entender o resultado além da agenda cheia.\n\nChega de administrar no escuro. Toque no link e comece agora seu teste gratuito do Framja.",
    cta: "Toque no link e comece agora seu teste gratuito do Framja. Abra o Olho do Gato para o seu negócio.",
    hashtags: [...baseHashtags, "#OlhoDoGato", "#LucroReal", "#GestãoDeSalão", "#SalãoDeBeleza", "#EmpreendedorismoNaBeleza"],
    checklist: defaultChecklist,
    notes: ["Usar a primeira frase também como texto principal do anúncio.", "Manter apenas uma ação no slide final: iniciar o teste gratuito.", "Não prometer aumento garantido de lucro ou faturamento."]
  }
];
