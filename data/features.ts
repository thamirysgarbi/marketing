import type { FramjaFeature } from "@/lib/marketing-os/types";

export const features: FramjaFeature[] = [
  {
    id: "olho-do-gato",
    name: "Olho do Gato",
    description:
      "Dashboard do Framja que apresenta uma visão mais clara do negócio e ajuda o gestor a enxergar informações importantes sem precisar procurar em várias áreas do sistema.",
    positioning:
      "O negócio deixa de ser administrado apenas pela sensação e passa a ser acompanhado com mais clareza.",
    status: "available",
    icon: "Eye"
  },
  {
    id: "passo-a-passo",
    name: "Passo a Passo",
    description:
      "Tela inicial que orienta novos usuários nas principais configurações necessárias para começar a utilizar o Framja.",
    positioning:
      "Ajuda o usuário a sair do cadastro vazio e chegar mais rapidamente ao primeiro valor real dentro do produto.",
    status: "available",
    icon: "ListChecks",
    steps: [
      "Definir horário de atendimento",
      "Cadastrar profissionais",
      "Cadastrar serviços",
      "Personalizar a agenda online",
      "Criar agendamento",
      "Criar comanda"
    ]
  },
  {
    id: "fluxo-de-caixa",
    name: "Relatório de Fluxo de Caixa",
    description:
      "Relatório financeiro que organiza a visualização das entradas e saídas do negócio e ajuda o gestor a acompanhar a movimentação do caixa.",
    positioning:
      "Movimento de caixa não é a mesma coisa que lucro. O Framja ajuda o gestor a enxergar melhor para onde o dinheiro está indo.",
    status: "available",
    icon: "ReceiptText"
  },
  {
    id: "aplicativo-framja",
    name: "Aplicativo Framja",
    description:
      "O aplicativo recebeu melhorias recentes para tornar a utilização no dia a dia mais prática.",
    positioning:
      "Mostra que o produto também está sendo lapidado para o uso diário, sem depender de uma operação pesada.",
    status: "available",
    icon: "Smartphone"
  },
  {
    id: "agenda-por-periodo",
    name: "Visualização de agenda por dia, semana e mês",
    description:
      "Nova forma de visualizar a agenda em diferentes períodos, permitindo que o gestor alterne entre visão diária, semanal e mensal.",
    positioning:
      "Cada visão responde uma pergunta diferente sobre a agenda e ajuda o gestor a alternar entre operação e panorama.",
    status: "in-development",
    icon: "CalendarDays"
  },
  {
    id: "contas-a-pagar",
    name: "Contas a Pagar",
    description:
      "Evolução do atual menu de despesas para uma experiência mais completa de contas a pagar.",
    positioning:
      "A direção é sair do registro solto de despesas e caminhar para uma organização melhor das contas antes do vencimento.",
    status: "in-development",
    icon: "Blocks"
  },
  {
    id: "framja-pay",
    name: "Framja Pay",
    description:
      "Visão futura de integrar soluções financeiras e de pagamento ao ecossistema do Framja.",
    positioning:
      "Mostra a direção de aproximar gestão e pagamentos sem prometer prazos ou funcionalidades ainda não confirmadas.",
    status: "future",
    icon: "CreditCard"
  }
];
