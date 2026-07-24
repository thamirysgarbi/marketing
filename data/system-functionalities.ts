import type {
  FramjaFunctionalityGroup,
  FramjaSystemFunctionality
} from "@/lib/marketing-os/types";

export const functionalityGroups: FramjaFunctionalityGroup[] = [
  {
    id: "gestao",
    name: "Gestão",
    description:
      "Módulos de leitura analítica e acompanhamento da operação do negócio."
  },
  {
    id: "agenda-relacionamento",
    name: "Agenda e Relacionamento",
    description:
      "Rotinas de agenda, agendamento online e comunicação com clientes."
  },
  {
    id: "financeiro",
    name: "Financeiro",
    description:
      "Fluxos de caixa, comissões e despesas que sustentam a operação diária."
  },
  {
    id: "cadastros",
    name: "Cadastros",
    description:
      "Base operacional de clientes, equipe, serviços, pacotes e produtos."
  },
  {
    id: "configuracoes",
    name: "Configurações",
    description:
      "Parâmetros do negócio, acessos e personalizações do ambiente."
  }
];

export const systemFunctionalities: FramjaSystemFunctionality[] = [
  {
    id: "olho-do-gato",
    groupId: "gestao",
    name: "Olho do Gato",
    menuPath: "Gestão / Olho do Gato",
    route: "/core/olho-do-gato",
    description:
      "Painel analítico para acompanhar o desempenho do negócio em um período selecionado.",
    status: "available",
    icon: "Eye",
    highlights: [
      "Análise por intervalo de datas",
      "Abas de resumo financeiro, clientes, operação e profissionais",
      "Indicadores como receita bruta, ticket médio, dívidas e créditos de clientes",
      "Composição da receita e destaques do período"
    ]
  },
  {
    id: "relatorios",
    groupId: "gestao",
    name: "Relatórios",
    menuPath: "Gestão / Relatórios",
    route: "/core/relatorios",
    description:
      "Central de relatórios para pesquisar faturamento, serviços, comissões, clientes e produtos.",
    status: "available",
    icon: "ReceiptText",
    highlights: [
      "Filtros por categoria: clientes, comissões, faturamento, produtos/estoque e serviços",
      "Faturamento total por data com detalhe dos pagamentos recebidos",
      "Vendas agrupadas por serviços e produtos em um intervalo",
      "Relatórios de comissões, comandas, serviços realizados e produtos vendidos"
    ]
  },
  {
    id: "agenda",
    groupId: "agenda-relacionamento",
    name: "Agenda",
    menuPath: "Agenda / Agenda",
    route: "/core/agenda",
    description:
      "Agenda operacional diária com visão por profissional e atalhos para movimentar a rotina.",
    status: "available",
    icon: "CalendarDays",
    highlights: [
      "Navegação por data com atalho para hoje",
      "Visualização da grade horária por profissional",
      "Lista do dia",
      "Bloqueio de horários"
    ]
  },
  {
    id: "link-agendamento",
    groupId: "agenda-relacionamento",
    name: "Link Agendamento",
    menuPath: "Agenda / Link Agendamento",
    route: "/core/meu-site",
    description:
      "Página de agendamento online personalizável para o cliente marcar horários sem depender do time.",
    status: "available",
    icon: "Globe",
    highlights: [
      "Personalização de logotipo e tema",
      "Configuração de contato, redes sociais e endereço",
      "Comodidades, link do Google Maps e informações do negócio",
      "Ações para acessar, copiar e testar o link público de agendamento"
    ]
  },
  {
    id: "lembretes-automaticos",
    groupId: "agenda-relacionamento",
    name: "Lembretes Automáticos",
    menuPath: "Agenda / Lembretes",
    route: "/core/lembretes",
    description:
      "Painel de comunicação automática com clientes, com créditos, saldo e histórico de envios.",
    status: "available",
    icon: "Bell",
    highlights: [
      "Total de créditos, total utilizado e saldo",
      "Histórico de mensagens enviadas",
      "Status de envio dos lembretes",
      "Visualização do conteúdo das mensagens"
    ]
  },
  {
    id: "caixa",
    groupId: "financeiro",
    name: "Caixa",
    menuPath: "Caixa / Caixa",
    route: "/core/caixa",
    description:
      "Tela de movimento diário com atalhos para vendas, comandas e operação comercial.",
    status: "available",
    icon: "CreditCard",
    highlights: [
      "Visão do caixa por data",
      "Abertura de comanda",
      "Venda de pacote",
      "Navegação rápida pelo movimento diário"
    ]
  },
  {
    id: "comissoes",
    groupId: "financeiro",
    name: "Comissões",
    menuPath: "Caixa / Comissões",
    route: "/core/comissoes",
    description:
      "Módulo para acompanhar comissões, registrar vales e efetuar pagamentos aos profissionais.",
    status: "available",
    icon: "Wallet",
    highlights: [
      "Lista de comissões por período, profissional e status",
      "Registro de vales dos profissionais",
      "Registro de pagamento das comissões",
      "Histórico de pagamentos realizados ao profissional"
    ]
  },
  {
    id: "despesas",
    groupId: "financeiro",
    name: "Despesas",
    menuPath: "Caixa / Despesas",
    route: "/core/despesas",
    description:
      "Controle de despesas com lançamentos manuais, totais do dia e sugestões recorrentes.",
    status: "available",
    icon: "Blocks",
    highlights: [
      "Cadastro de nova despesa",
      "Pesquisa por outros períodos",
      "Quantidade e total acumulado do dia",
      "Sugestões recorrentes como aluguel, água e energia"
    ]
  },
  {
    id: "clientes",
    groupId: "cadastros",
    name: "Clientes",
    menuPath: "Cadastros / Clientes",
    route: "/core/clientes-lista",
    description:
      "Base de clientes com busca rápida, aniversariantes e controle de perfis inativos.",
    status: "available",
    icon: "Users",
    highlights: [
      "Total de clientes cadastrados",
      "Filtro para aniversariantes do dia",
      "Filtro para clientes inativos",
      "Cadastro de novos clientes"
    ]
  },
  {
    id: "profissionais",
    groupId: "cadastros",
    name: "Profissionais",
    menuPath: "Cadastros / Profissionais",
    route: "/core/profissionais-lista",
    description:
      "Gestão da equipe com função, status, participação na agenda e ordem de exibição.",
    status: "available",
    icon: "UserRound",
    highlights: [
      "Contagem total e profissionais ativos",
      "Cadastro de novos profissionais",
      "Indicação de quem possui agenda",
      "Ordem de exibição e status ativo ou inativo"
    ]
  },
  {
    id: "servicos",
    groupId: "cadastros",
    name: "Serviços",
    menuPath: "Cadastros / Serviços",
    route: "/core/servicos-lista",
    description:
      "Catálogo de serviços com categoria, preço, duração, custo e disponibilidade online.",
    status: "available",
    icon: "Scissors",
    highlights: [
      "Lista de sugestões para acelerar o cadastro",
      "Cadastro de novos serviços",
      "Organização por categoria",
      "Preço, duração, custo com produtos e disponibilidade para agendamento online"
    ]
  },
  {
    id: "pacotes",
    groupId: "cadastros",
    name: "Pacotes",
    menuPath: "Cadastros / Pacotes",
    route: "/core/pacotes-lista",
    description:
      "Gestão de pacotes com preço, validade e quantidade de serviços incluídos.",
    status: "available",
    icon: "Package",
    highlights: [
      "Cadastro de novos pacotes",
      "Preço e validade",
      "Quantidade de serviços incluídos",
      "Consulta rápida da vitrine de pacotes já criados"
    ]
  },
  {
    id: "produtos",
    groupId: "cadastros",
    name: "Produtos",
    menuPath: "Cadastros / Produtos",
    route: "/core/produtos-lista",
    description:
      "Cadastro de produtos de venda e consumo, com apoio à movimentação de estoque.",
    status: "available",
    icon: "Boxes",
    highlights: [
      "Totais de produtos ativos, de venda e de consumo",
      "Cadastro de novos produtos",
      "Entrada de estoque",
      "Preço de custo, preço de venda, unidade de medida e código de barras"
    ]
  },
  {
    id: "configuracoes",
    groupId: "configuracoes",
    name: "Configurações",
    menuPath: "Configurações / Geral",
    route: "/core/configuracoes",
    description:
      "Painel central de ajustes do sistema, acessos e parâmetros da operação.",
    status: "available",
    icon: "Settings2",
    highlights: [
      "Troca de empresa, plano e personalização do ambiente",
      "Horário de funcionamento, almoço e bloqueio de dia na agenda",
      "Cadastro de máquinas de cartão e edição de endereço",
      "Acesso da recepcionista, acesso do profissional, mensagem de agendamento e alteração de senha"
    ]
  }
];
