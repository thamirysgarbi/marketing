import type {
  FramjaFunctionalityGroup,
  FramjaSystemFunctionality
} from "@/lib/marketing-os/types";

function defineFunctionality(
  functionality: Omit<FramjaSystemFunctionality, "highlights"> & {
    taxonomy: NonNullable<FramjaSystemFunctionality["taxonomy"]>;
  }
): FramjaSystemFunctionality {
  return {
    ...functionality,
    highlights: functionality.taxonomy.realFeatures.slice(0, 3)
  };
}

export const functionalityGroups: FramjaFunctionalityGroup[] = [
  {
    id: "gestao",
    name: "Gestão",
    description:
      "Camada de leitura estratégica do negócio. Aqui o Framja deixa de ser sistema operacional e vira inteligência para decisão."
  },
  {
    id: "agenda-relacionamento",
    name: "Agenda e Relacionamento",
    description:
      "Ferramentas que organizam o fluxo do dia, distribuem disponibilidade e constroem a experiência da cliente antes, durante e depois do agendamento."
  },
  {
    id: "financeiro",
    name: "Financeiro",
    description:
      "Fluxos que conectam atendimento, venda, repasse, custo e caixa para o dono enxergar o resultado real da operação."
  },
  {
    id: "cadastros",
    name: "Cadastros",
    description:
      "Base estrutural do produto. É onde clientes, equipe, serviços, pacotes e produtos ganham regra, contexto e capacidade de escalar."
  },
  {
    id: "configuracoes",
    name: "Configurações",
    description:
      "Governança da operação. Centraliza regras do negócio, acessos, comportamento da agenda e parâmetros que moldam o sistema inteiro."
  }
];

export const systemFunctionalities: FramjaSystemFunctionality[] = [
  defineFunctionality({
    id: "olho-do-gato",
    groupId: "gestao",
    name: "Olho do Gato",
    menuPath: "Gestão / Olho do Gato",
    route: "/core/olho-do-gato",
    description:
      "Painel executivo que resume o período e traduz a operação em receita, lucro, origem do faturamento e destaques comerciais.",
    operationalRole:
      "Funciona como a camada de BI do Framja. Em poucos segundos o dono entende o que entrou, de onde veio, quem puxou o resultado e onde a margem real está apertada.",
    status: "available",
    icon: "Eye",
    taxonomy: {
      tool: "Olho do Gato",
      solves: [
        "Evita que o dono tome decisão olhando só para faturamento bruto ou sensação de agenda cheia.",
        "Ajuda a descobrir rápido se a receita está saudável ou se o lucro real está sendo corroído por custo e despesa.",
        "Traduz números dispersos em uma leitura executiva que cabe na rotina de abertura do negócio."
      ],
      realFeatures: [
        "Filtra a análise por intervalo de datas dentro do próprio painel.",
        "Exibe receita bruta, custos e despesas, lucro real, ticket médio, dívidas e créditos de clientes.",
        "Quebra a composição da receita por origem, pacotes vendidos e meios de pagamento.",
        "Destaca melhor cliente, serviço mais vendido e profissional com maior resultado."
      ],
      ownerPerceivedGain: [
        "Sensação de controle do negócio em minutos, sem depender de planilha paralela.",
        "Mais confiança para decidir preço, oferta, pacote e foco comercial com base em dado real.",
        "Percepção de maturidade gerencial, como se o salão tivesse um BI próprio embutido."
      ],
      clientPerceivedGain: [
        "Recebe uma operação mais consistente, porque o dono corrige gargalos e desequilíbrios com mais velocidade.",
        "Sente mais profissionalismo em um negócio que entende o que vende e o que realmente entrega."
      ],
      contentHooks: [
        "O erro de confundir agenda cheia com lucro real.",
        "O que um dono de salão deveria olhar toda manhã antes de tomar decisão.",
        "Como descobrir qual serviço sustenta o caixa de verdade."
      ]
    }
  }),
  defineFunctionality({
    id: "relatorios",
    groupId: "gestao",
    name: "Relatórios",
    menuPath: "Gestão / Relatórios",
    route: "/core/relatorios",
    description:
      "Catálogo de relatórios prontos para investigar faturamento, clientes, serviços, estoque, comandas e comissões sem montar consulta manual.",
    operationalRole:
      "É a biblioteca analítica do Framja. Em vez de uma tela única, o sistema oferece relatórios prontos para responder perguntas específicas do negócio.",
    status: "available",
    icon: "ReceiptText",
    taxonomy: {
      tool: "Relatórios",
      solves: [
        "Reduz a dependência de planilhas e cruzamentos manuais para responder perguntas do dia a dia.",
        "Evita perder tempo navegando por várias telas quando o dono precisa investigar um tema específico.",
        "Organiza a leitura do negócio por assunto, em vez de deixar a operação presa em dados soltos."
      ],
      realFeatures: [
        "Entrega 19 relatórios prontos organizados por categoria dentro do sistema.",
        "Abrange faturamento, vendas, comandas, serviços, produtos, estoque, clientes e comissões.",
        "Inclui relatórios como clientes mais lucrativos, pagamentos de comissão e fluxo de caixa.",
        "Permite trocar de lente analítica sem sair da rotina operacional do Framja."
      ],
      ownerPerceivedGain: [
        "Ganha velocidade para investigar qualquer área do negócio sem depender de alguém montar a consulta.",
        "Sente que o sistema já vem pronto para auditoria, gestão e conversa com contador ou sócio.",
        "Consegue sair da visão superficial e aprofundar problemas com autonomia."
      ],
      clientPerceivedGain: [
        "É atendida por um negócio que identifica padrões de venda, frequência e qualidade com mais precisão.",
        "Percebe uma operação mais estável, porque decisões deixam de ser tomadas no improviso."
      ],
      contentHooks: [
        "Os relatórios que um salão deveria abrir toda semana.",
        "Como investigar o negócio sem depender de planilha manual.",
        "O que muda quando o software já responde perguntas de gestão sozinho."
      ]
    }
  }),
  defineFunctionality({
    id: "agenda",
    groupId: "agenda-relacionamento",
    name: "Agenda",
    menuPath: "Agenda / Agenda",
    route: "/core/agenda",
    description:
      "Agenda operacional do dia com grade por profissional, lista consolidada dos atendimentos e controle de bloqueios.",
    operationalRole:
      "É o centro da rotina diária. Organiza disponibilidade, mostra quem atende em cada horário e permite intervir rápido quando a agenda precisa mudar.",
    status: "available",
    icon: "CalendarDays",
    taxonomy: {
      tool: "Agenda",
      solves: [
        "Evita caos de horários, encaixes mal combinados e falta de visão do dia.",
        "Dá clareza para recepção e equipe sobre quem atende, quando atende e o que precisa ser bloqueado.",
        "Reduz o risco de sobreposição e ruído operacional quando a rotina muda em cima da hora."
      ],
      realFeatures: [
        "Mostra grade horária por profissional com navegação por data e atalho para hoje.",
        "Oferece visão em lista do dia com horário, cliente, telefone, serviço e status do atendimento.",
        "Permite bloquear horários e períodos por profissional, data e motivo.",
        "Organiza o dia em uma tela operacional que pode ser lida em segundos."
      ],
      ownerPerceivedGain: [
        "Sensação de operação sob controle, mesmo em dias cheios.",
        "Recepção mais rápida e menos dependente de memória ou conversa paralela.",
        "Mais previsibilidade para encaixe, pausa, ausência e gestão de capacidade."
      ],
      clientPerceivedGain: [
        "Percebe uma experiência mais pontual e organizada, sem desencontro de horário.",
        "Sente mais confiança em uma agenda que parece profissional e bem coordenada."
      ],
      contentHooks: [
        "Agenda cheia não significa operação organizada.",
        "Como reduzir caos na recepção sem criar mais planilha.",
        "O que muda quando cada bloqueio da agenda fica registrado."
      ]
    }
  }),
  defineFunctionality({
    id: "link-agendamento",
    groupId: "agenda-relacionamento",
    name: "Link Agendamento",
    menuPath: "Agenda / Link Agendamento",
    route: "/core/meu-site",
    description:
      "Mini site de agendamento online com personalização visual, regras comerciais e informações completas do negócio.",
    operationalRole:
      "Funciona como a vitrine pública do Framja. É a ponte entre a operação interna e a experiência que a cliente final enxerga para agendar sozinha.",
    status: "available",
    icon: "Globe",
    taxonomy: {
      tool: "Link Agendamento",
      solves: [
        "Reduz a dependência de WhatsApp para explicar serviço, disponibilidade e regras de agendamento.",
        "Transforma o perfil do negócio em um canal digital com cara de marca, não só em um link improvisado.",
        "Diminui atrito para a cliente concluir o agendamento sem precisar falar com a recepção."
      ],
      realFeatures: [
        "Permite personalizar logotipo, tema, fotos e apresentação institucional do negócio.",
        "Centraliza WhatsApp, redes sociais, endereço, Google Maps, comodidades e formas de pagamento.",
        "Configura sinal, chave Pix, antecedência para agendar, antecedência para cancelar e status do agendamento online.",
        "Entrega um link público para copiar, testar e compartilhar."
      ],
      ownerPerceivedGain: [
        "Ganha um canal de conversão com aparência premium sem precisar contratar um site separado.",
        "Passa mais autoridade digital e reduz perguntas repetidas no atendimento manual.",
        "Consegue escalar agendamento sem aumentar o atrito da equipe."
      ],
      clientPerceivedGain: [
        "Encontra tudo o que precisa para decidir e agendar sem depender de conversa extra.",
        "Sente mais confiança em uma experiência digital clara, bonita e profissional."
      ],
      contentHooks: [
        "Seu agendamento online parece um site ou um improviso?",
        "O que faz uma cliente concluir o agendamento sem chamar no WhatsApp.",
        "Como transformar a bio do Instagram em canal real de conversão."
      ]
    }
  }),
  defineFunctionality({
    id: "lembretes-automaticos",
    groupId: "agenda-relacionamento",
    name: "Lembretes Automáticos",
    menuPath: "Agenda / Lembretes",
    route: "/core/lembretes",
    description:
      "Painel de comunicação com clientes baseado em créditos, histórico de envios e rastreio do status de cada mensagem.",
    operationalRole:
      "É o motor de confirmação automática do relacionamento. Mantém a cliente informada e reduz esquecimento, faltas e retrabalho da recepção.",
    status: "available",
    icon: "Bell",
    taxonomy: {
      tool: "Lembretes Automáticos",
      solves: [
        "Diminui faltas e esquecimentos que esvaziam a agenda sem aviso.",
        "Evita que a equipe precise lembrar manualmente cada cliente por WhatsApp.",
        "Torna visível o custo e o histórico da comunicação automatizada."
      ],
      realFeatures: [
        "Mostra total de créditos, total utilizado e saldo atual para envios.",
        "Registra compras de créditos com data, quantidade, valor e forma de pagamento.",
        "Mantém log das mensagens enviadas por cliente, telefone, tipo de lembrete e status.",
        "Permite abrir o conteúdo de cada mensagem enviada para auditoria."
      ],
      ownerPerceivedGain: [
        "Sente que o relacionamento continua acontecendo mesmo quando a equipe está ocupada.",
        "Reduz prejuízo com faltas e melhora a previsibilidade da agenda.",
        "Controla melhor o investimento em comunicação automática."
      ],
      clientPerceivedGain: [
        "Recebe lembretes no momento certo e se sente acompanhada sem esforço.",
        "Tem menos chance de esquecer o atendimento ou se perder na rotina."
      ],
      contentHooks: [
        "Quanto um esquecimento custa para a agenda de um salão.",
        "Como automatizar lembretes sem perder controle do que foi enviado.",
        "Por que registrar cada mensagem muda a operação."
      ]
    }
  }),
  defineFunctionality({
    id: "caixa",
    groupId: "financeiro",
    name: "Caixa",
    menuPath: "Caixa / Caixa",
    route: "/core/caixa",
    description:
      "Centro de movimento comercial do dia com abertura de comandas, venda de pacotes e leitura consolidada do resultado diário.",
    operationalRole:
      "É a tela onde atendimento vira venda e venda vira leitura financeira. O caixa conecta comanda, pagamento, pacote e indicadores do dia em um único fluxo.",
    status: "available",
    icon: "CreditCard",
    taxonomy: {
      tool: "Caixa",
      solves: [
        "Evita que venda, recebimento e fechamento do dia fiquem espalhados em processos diferentes.",
        "Dá visibilidade para o que foi faturado, pago, consumido e lucrado em cada comanda.",
        "Reduz improviso no momento de cobrar, parcelar, vender pacote ou fechar o caixa."
      ],
      realFeatures: [
        "Tem fluxo de Nova Comanda e fluxo de Vender Pacote no mesmo módulo.",
        "Conecta cliente, pagamento, troco, parcelas, máquina de cartão e observações.",
        "Lista comandas do dia com total pago, lucro, custo, pacotes consumidos e forma de pagamento.",
        "Resume lucro, faturamento, ticket médio, custos, comissões pendentes, sangria e suprimento."
      ],
      ownerPerceivedGain: [
        "Fecha o dia com mais segurança porque o número já nasce organizado.",
        "Consegue vender mais sem bagunçar a operação comercial e financeira.",
        "Percebe menos vazamento de informação entre recepção, atendimento e gestão."
      ],
      clientPerceivedGain: [
        "Tem uma saída mais fluida, com pagamento claro e menos atrito no balcão.",
        "Consegue comprar pacote ou finalizar atendimento sem passar por um processo confuso."
      ],
      contentHooks: [
        "O caixa do salão precisa fechar venda, não só registrar pagamento.",
        "O que um bom fechamento diário mostra além do faturamento.",
        "Como vender pacote sem bagunçar o atendimento."
      ]
    }
  }),
  defineFunctionality({
    id: "comissoes",
    groupId: "financeiro",
    name: "Comissões",
    menuPath: "Caixa / Comissões",
    route: "/core/comissoes",
    description:
      "Área de controle de repasse da equipe com lista de comissões, filtros por status e fluxos separados para vales e pagamentos.",
    operationalRole:
      "Traduz a produção da equipe em valor a pagar. O módulo ajuda a auditar serviço por serviço antes do repasse e evita que a comissão fique perdida dentro do caixa.",
    status: "available",
    icon: "Wallet",
    taxonomy: {
      tool: "Comissões",
      solves: [
        "Evita conflito de repasse causado por memória, planilha paralela ou cálculo pouco transparente.",
        "Dá rastreabilidade para comissão, vale, aprovação e pagamento em um fluxo separado do caixa.",
        "Ajuda o dono a fechar a equipe com mais justiça e menos desgaste."
      ],
      realFeatures: [
        "Filtra a lista por data, profissional e status de comissão.",
        "Mostra valor do serviço, valor a pagar, percentual de comissão e situação do repasse.",
        "Trabalha com estados como pendente, aprovada, reprovada e paga.",
        "Separa a operação em lista de comissões, vales dos profissionais e pagamento das comissões."
      ],
      ownerPerceivedGain: [
        "Ganha segurança no fechamento da equipe e reduz discussão sobre cálculo.",
        "Consegue organizar repasse como processo, não como acerto improvisado.",
        "Percebe mais controle trabalhista e financeiro dentro da rotina real."
      ],
      clientPerceivedGain: [
        "É atendida por profissionais mais alinhados e por uma operação que remunera sem ruído interno.",
        "Sente mais consistência no serviço quando a equipe trabalha com regras claras."
      ],
      contentHooks: [
        "Por que comissão sem rastreio vira conflito.",
        "Como fechar repasse sem planilha paralela.",
        "O que muda quando cada serviço já nasce auditável."
      ]
    }
  }),
  defineFunctionality({
    id: "despesas",
    groupId: "financeiro",
    name: "Despesas",
    menuPath: "Caixa / Despesas",
    route: "/core/despesas",
    description:
      "Controle estruturado de saídas com categorias operacionais, valor, descrição e suporte à recorrência após o primeiro lançamento.",
    operationalRole:
      "É a camada que impede o negócio de olhar só para entrada. Sem ela, o caixa mostra faturamento; com ela, o sistema passa a mostrar resultado.",
    status: "available",
    icon: "Blocks",
    taxonomy: {
      tool: "Despesas",
      solves: [
        "Evita que custo fixo e variável fiquem invisíveis na leitura do negócio.",
        "Ajuda o dono a parar de confundir movimento de caixa com lucro real.",
        "Cria disciplina para registrar gastos recorrentes sem depender de memória."
      ],
      realFeatures: [
        "Permite lançar nova despesa com data, categoria, valor e descrição.",
        "Oferece categorias amplas como aluguel, internet, marketing, produto, salário e taxas de cartão.",
        "Possui pesquisa por período e apoio ao preenchimento de gastos recorrentes.",
        "A própria tela orienta a salvar primeiro e depois transformar o lançamento em recorrente."
      ],
      ownerPerceivedGain: [
        "Passa a enxergar o resultado real da operação com muito mais clareza.",
        "Ganha disciplina financeira e histórico confiável para gestão e contabilidade.",
        "Consegue identificar desperdício antes que ele vire hábito."
      ],
      clientPerceivedGain: [
        "É atendida por um negócio mais saudável financeiramente e menos propenso a decisões desesperadas.",
        "Percebe mais estabilidade em preço, estrutura e continuidade do atendimento."
      ],
      contentHooks: [
        "Faturar não é lucrar.",
        "As despesas invisíveis que comem a margem de um salão.",
        "Como sair do caixa emocional e entrar no resultado real."
      ]
    }
  }),
  defineFunctionality({
    id: "clientes",
    groupId: "cadastros",
    name: "Clientes",
    menuPath: "Cadastros / Clientes",
    route: "/core/clientes-lista",
    description:
      "Hub operacional da cliente com perfil, histórico, prontuário, financeiro, pacotes e relacionamento em um único cadastro.",
    operationalRole:
      "No Framja, cliente não é ficha. O cadastro vira a entidade central onde relacionamento, atendimento, venda e recorrência se encontram.",
    status: "available",
    icon: "Users",
    taxonomy: {
      tool: "Clientes",
      solves: [
        "Evita atendimento cego, sem histórico, sem contexto e sem memória da relação com a cliente.",
        "Centraliza prontuário, compras, agendamentos e pendências financeiras em um único lugar.",
        "Reduz duplicidade de cadastro e perda de informação quando a base cresce."
      ],
      realFeatures: [
        "A lista traz busca por nome ou telefone, total de clientes, aniversariantes e inativos.",
        "O cadastro inicial cobre dados pessoais, contato, endereço, observação, profissão e origem do lead.",
        "Cada cliente já existente abre abas de dados, anamnese, agendamentos, comandas, créditos e dívidas e pacotes.",
        "Também permite bloquear agendamento online, inativar, excluir e transferir histórico para outro cadastro."
      ],
      ownerPerceivedGain: [
        "Ganha um CRM operacional de verdade, não só uma ficha de contato.",
        "Consegue personalizar atendimento, vender melhor e estimular recorrência com mais contexto.",
        "Sente menos risco de perder relacionamento por desorganização interna."
      ],
      clientPerceivedGain: [
        "Recebe um atendimento mais personalizado, rápido e coerente com seu histórico.",
        "Sente que o negócio lembra dela, entende suas preferências e trata seu caso com mais cuidado."
      ],
      contentHooks: [
        "Cadastro de cliente não é ficha, é inteligência de recorrência.",
        "Tudo o que dá para descobrir quando o histórico da cliente está organizado.",
        "Como evitar perder venda porque o cadastro está raso."
      ]
    }
  }),
  defineFunctionality({
    id: "profissionais",
    groupId: "cadastros",
    name: "Profissionais",
    menuPath: "Cadastros / Profissionais",
    route: "/core/profissionais-lista",
    description:
      "Cadastro multifuncional da equipe com acesso ao sistema, agenda, comissão por serviço, escala e dados bancários.",
    operationalRole:
      "O profissional no Framja não é só uma pessoa na lista. Ele é usuário do sistema, agenda atendimentos, recebe repasse e participa da operação online.",
    status: "available",
    icon: "UserRound",
    taxonomy: {
      tool: "Profissionais",
      solves: [
        "Evita tratar equipe como lista solta, sem regra de acesso, agenda e repasse.",
        "Centraliza perfil, escala, serviços autorizados e dados bancários em uma única entidade operacional.",
        "Reduz ruído na gestão de equipe quando o negócio começa a crescer."
      ],
      realFeatures: [
        "A lista exibe total da equipe, profissionais ativos, função, cargo, agenda e ordem de exibição.",
        "O cadastro tem abas de profissional, serviços e comissões, horário de trabalho e agendamentos.",
        "Permite copiar link de acesso, carregar foto, ativar ou inativar e definir exibir na agenda online.",
        "Também guarda dados bancários para repasse e configuração de comissão por serviço."
      ],
      ownerPerceivedGain: [
        "Ganha governança sobre equipe sem depender de conversa informal.",
        "Consegue escalar agenda, repasse e acesso com mais previsibilidade.",
        "Percebe uma operação mais profissional na gestão interna do time."
      ],
      clientPerceivedGain: [
        "Enxerga disponibilidade mais correta e uma equipe mais bem coordenada.",
        "Recebe atendimento mais consistente porque o profissional já entra no sistema com contexto e regra."
      ],
      contentHooks: [
        "O custo de tratar a equipe como lista e não como operação.",
        "Como organizar agenda, comissão e acesso no mesmo lugar.",
        "O que muda quando o profissional já entra no sistema do jeito certo."
      ]
    }
  }),
  defineFunctionality({
    id: "servicos",
    groupId: "cadastros",
    name: "Serviços",
    menuPath: "Cadastros / Serviços",
    route: "/core/servicos-lista",
    description:
      "Catálogo comercial e operacional dos serviços com categoria, preço, duração, regra de agendamento e custo de execução.",
    operationalRole:
      "Cada serviço no Framja é uma oferta configurável. O módulo define como o serviço aparece para venda, quanto custa, quanto dura e como ele afeta agenda e margem.",
    status: "available",
    icon: "Scissors",
    taxonomy: {
      tool: "Serviços",
      solves: [
        "Evita catálogo confuso, preço inconsistente e duração mal definida na agenda.",
        "Dá regra comercial e operacional para cada serviço vendido pelo negócio.",
        "Ajuda a enxergar custo real de execução, não só valor cobrado."
      ],
      realFeatures: [
        "Organiza serviços por categoria e mostra rapidamente preço, duração, custo e agendamento online.",
        "Permite usar lista de sugestões para acelerar cadastro de novos serviços.",
        "Suporta tipos de preço como fixo, a partir de e sob consulta.",
        "Conecta o serviço a produtos consumidos durante a execução."
      ],
      ownerPerceivedGain: [
        "Padroniza o portfólio sem engessar a operação comercial.",
        "Ganha mais previsibilidade de margem, agenda e comunicação de oferta.",
        "Consegue vender melhor porque o serviço passa a ter regra, contexto e clareza."
      ],
      clientPerceivedGain: [
        "Entende melhor o que está comprando, quanto custa e o que esperar do atendimento.",
        "Vive uma experiência mais previsível porque tempo e serviço estão melhor configurados."
      ],
      contentHooks: [
        "Seu catálogo vende ou confunde?",
        "Como padronizar preço e duração sem engessar a equipe.",
        "Por que serviço sem custo mapeado mascara a margem."
      ]
    }
  }),
  defineFunctionality({
    id: "pacotes",
    groupId: "cadastros",
    name: "Pacotes",
    menuPath: "Cadastros / Pacotes",
    route: "/core/pacotes-lista",
    description:
      "Construtor de ofertas recorrentes com serviços combinados, validade, quantidade por item e comparação de economia.",
    operationalRole:
      "O pacote no Framja não é só um nome com preço. Ele vira produto composto, com regras de uso, saldo por serviço e impacto direto no caixa e no cadastro da cliente.",
    status: "available",
    icon: "Package",
    taxonomy: {
      tool: "Pacotes",
      solves: [
        "Evita vender combos no improviso, sem validade, saldo ou lógica de uso.",
        "Ajuda a estruturar recorrência sem perder controle de margem e entrega.",
        "Transforma pacote em produto rastreável, não só em desconto verbal."
      ],
      realFeatures: [
        "A lista mostra preço, validade e quantidade de serviços incluídos em cada pacote.",
        "O cadastro permite combinar vários serviços e quantidades em uma mesma oferta.",
        "Calcula o valor dos serviços avulsos e compara com o preço do pacote.",
        "Depois da venda, o pacote aparece dentro da cliente com saldo e histórico de uso."
      ],
      ownerPerceivedGain: [
        "Ganha uma ferramenta concreta para gerar recorrência e previsibilidade de receita.",
        "Consegue montar ofertas mais inteligentes sem perder margem por erro manual.",
        "Percebe mais controle sobre o que foi vendido, usado e ainda está em aberto."
      ],
      clientPerceivedGain: [
        "Enxerga economia e continuidade com mais clareza, sem medo de perder sessões.",
        "Sente mais segurança porque o saldo do pacote fica visível e organizado."
      ],
      contentHooks: [
        "Como vender pacote sem perder margem.",
        "Pacote bom não é desconto aleatório.",
        "O que faz um combo virar receita recorrente."
      ]
    }
  }),
  defineFunctionality({
    id: "produtos",
    groupId: "cadastros",
    name: "Produtos",
    menuPath: "Cadastros / Produtos",
    route: "/core/produtos-lista",
    description:
      "Cadastro de itens de venda e consumo com atributos comerciais, estoque e rastreio de movimentação.",
    operationalRole:
      "O produto no Framja pode ser mercadoria ou insumo de atendimento. Por isso o módulo combina ficha comercial, classificação e controle de estoque.",
    status: "available",
    icon: "Boxes",
    taxonomy: {
      tool: "Produtos",
      solves: [
        "Evita estoque no escuro, falta de produto e compra baseada em sensação.",
        "Separa de forma clara o que é item de venda e o que é insumo de execução.",
        "Cria rastreabilidade para entrada, saída e custo dos itens da operação."
      ],
      realFeatures: [
        "Separa produtos ativos, produtos de venda e produtos de consumo.",
        "O cadastro trabalha com duas abas: produto e estoque.",
        "Permite registrar entrada e saída de estoque com histórico de movimentação.",
        "Guarda código de barras, unidade de medida, custo, fornecedor, marca e estoque mínimo."
      ],
      ownerPerceivedGain: [
        "Ganha mais previsibilidade de reposição e menos ruptura operacional.",
        "Consegue enxergar melhor o custo dos serviços e a margem da revenda.",
        "Sente mais controle sobre compras, consumo e inventário do negócio."
      ],
      clientPerceivedGain: [
        "Encontra produtos disponíveis e vive um atendimento menos sujeito a falta de insumo.",
        "Percebe uma operação mais profissional quando tudo o que é usado ou vendido está bem organizado."
      ],
      contentHooks: [
        "O estoque invisível que drena lucro.",
        "Produto de venda e insumo não podem ser tratados igual.",
        "Como saber quando repor sem contar na mão."
      ]
    }
  }),
  defineFunctionality({
    id: "configuracoes",
    groupId: "configuracoes",
    name: "Configurações",
    menuPath: "Configurações / Geral",
    route: "/core/configuracoes",
    description:
      "Central de governança do sistema com regras de operação, acessos, personalização e parâmetros do negócio.",
    operationalRole:
      "Agrupa decisões que mudam o comportamento do Framja. Em vez de espalhar ajustes pelo produto, o sistema concentra governança em um menu claro.",
    status: "available",
    icon: "Settings2",
    taxonomy: {
      tool: "Configurações",
      solves: [
        "Evita que regras do negócio e acessos fiquem espalhados em vários pontos do sistema.",
        "Centraliza parâmetros que mudam diretamente o comportamento da agenda e da operação.",
        "Ajuda o dono a manter governança sem depender de suporte para ajustes do dia a dia."
      ],
      realFeatures: [
        "A área traz 12 atalhos administrativos principais para a rotina de gestão.",
        "Inclui horário de funcionamento, horário de almoço e bloqueio de dia na agenda.",
        "Centraliza acesso da recepcionista, acesso do profissional e alteração de senha.",
        "Também passa por plano, máquinas de cartão, endereço, personalização e mensagem de agendamento."
      ],
      ownerPerceivedGain: [
        "Sente que o produto respeita a operação real e deixa o dono no controle das regras.",
        "Consegue adaptar o sistema ao negócio sem criar dependência desnecessária.",
        "Percebe mais ordem, segurança e coerência na administração do ambiente."
      ],
      clientPerceivedGain: [
        "Recebe uma experiência mais consistente porque horários, mensagens e regras estão bem configurados.",
        "Sente mais profissionalismo em um negócio que não vive de exceção ou remendo operacional."
      ],
      contentHooks: [
        "O que deveria estar nas configurações de um software de beleza.",
        "Como pequenos ajustes evitam caos na rotina.",
        "Governança também é experiência da cliente."
      ]
    }
  })
];
