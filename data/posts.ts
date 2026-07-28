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
        visual: "Conclusão e entrada na …12709 tokens truncated…        recordingDirection:
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
  }
];
