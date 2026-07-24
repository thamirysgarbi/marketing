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
  }
];
