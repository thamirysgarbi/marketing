import type { FramjaRoadmapRelease } from "@/lib/marketing-os/types";

export const upcomingReleases: FramjaRoadmapRelease[] = [
  {
    id: "1-12-8",
    version: "1.12.8",
    title: "Visualização da agenda, modo Light/Dark e melhorias operacionais",
    summary:
      "Próxima versão focada em leitura de agenda, refinamentos de caixa e olho do gato, correções de fluxo e uma nova lógica de comissão auxiliar.",
    status: "next",
    highlights: [
      "Agenda em Dia, Semana e Mês",
      "Modo Light e Dark",
      "Caixa com buscas e persistência melhores",
      "Olho do Gato com ajustes de tema e relacionamento",
      "Comissão como auxiliar"
    ],
    sections: [
      {
        id: "estruturais",
        title: "Entregas estruturais",
        description:
          "Itens que ampliam capacidade de produto e mudam a forma de operar módulos centrais do Framja.",
        items: [
          {
            id: "agenda-visualizacao",
            title: "Visualização da agenda em Dia, Semana e Mês",
            summary:
              "Nova forma de navegar a agenda com múltiplas visões e suporte a tema claro e escuro.",
            kind: "feature",
            surfaces: ["Agenda", "Visualização", "Tema"],
            details: [
              "Adicionar alternância entre as visões Dia, Semana e Mês.",
              "Permitir troca entre modo Light e Dark.",
              "Incluir melhorias complementares de leitura e usabilidade da agenda."
            ]
          },
          {
            id: "relatorio-faturamento-previsto",
            title: "Relatório de Faturamento Previsto",
            summary:
              "Nova leitura gerencial baseada no valor dos serviços agendados, antes do atendimento acontecer.",
            kind: "feature",
            surfaces: ["Relatórios", "Agenda", "Gestão"],
            details: [
              "Gerar relatório com base no valor do serviço dos agendamentos.",
              "Criar uma visão de previsão de receita a partir do que já está marcado na agenda."
            ]
          },
          {
            id: "comissao-auxiliar",
            title: "Comissão como auxiliar",
            summary:
              "Nova lógica para remunerar profissionais auxiliares sem alterar valor de serviço ou preço cobrado da cliente.",
            kind: "feature",
            surfaces: ["Serviços", "Comissões", "Comandas"],
            details: [
              "No cadastro da comissão, incluir a caixinha “Comissão como auxiliar”.",
              "Quando o serviço tiver algum profissional com comissão como auxiliar, exibir o botão “+ Adicionar Auxiliar” na comanda.",
              "O profissional auxiliar deve receber a comissão cadastrada sem alterar o valor do serviço nem o valor cobrado da cliente.",
              "Qualquer profissional pode atuar como auxiliar, desde que tenha um valor de comissão como auxiliar cadastrado no serviço."
            ]
          }
        ]
      },
      {
        id: "melhorias-operacionais",
        title: "Melhorias operacionais",
        description:
          "Refinamentos que eliminam atrito na rotina de caixa, agenda, BI e aplicativo.",
        items: [
          {
            id: "status-agendamento-ao-excluir-comanda",
            title: "Restaurar status do agendamento ao excluir comanda vinculada",
            summary:
              "Se uma comanda vinculada a um agendamento for excluída, o agendamento precisa voltar automaticamente para o status correto.",
            kind: "improvement",
            surfaces: ["Comandas", "Agenda"],
            details: [
              "Ao excluir a comanda, retornar o status do agendamento para “Agendado”."
            ],
            note: "Sugestão do Felipe Hairdresser."
          },
          {
            id: "pesquisa-por-nome-no-caixa-do-dia",
            title: "Pesquisa por nome de cliente no caixa do dia",
            summary:
              "Melhoria de busca para localizar comandas e movimentações com mais rapidez dentro do caixa do dia.",
            kind: "improvement",
            surfaces: ["Caixa do dia", "Busca"],
            details: [
              "Adicionar pesquisa por nome de cliente dentro do caixa do dia."
            ]
          },
          {
            id: "olho-do-gato-borda-tema",
            title: "Borda do card selecionado no Olho do Gato seguir a cor do tema",
            summary:
              "A seleção visual do detalhe deve respeitar a identidade ativa do produto, sem fixar a borda roxa atual.",
            kind: "improvement",
            surfaces: ["Olho do Gato", "Tema"],
            details: [
              "Trocar a borda roxa do card selecionado pela cor correspondente ao tema em uso."
            ]
          },
          {
            id: "olho-do-gato-whatsapp-retornos",
            title: "Botão de WhatsApp em próximos retornos vencidos",
            summary:
              "A aba de clientes do Olho do Gato precisa permitir ação imediata sobre retornos vencidos.",
            kind: "improvement",
            surfaces: ["Olho do Gato", "Clientes", "WhatsApp"],
            details: [
              "No card de próximos retornos vencidos, incluir botão para chamar a cliente pelo WhatsApp."
            ]
          },
          {
            id: "cancelamento-comanda-framja-app",
            title: "Cancelar comanda no app da empresa Framja",
            summary:
              "Fluxo exclusivo para a operação interna da Framja, com suporte a cancelamento e leitura do status no relatório correspondente.",
            kind: "exclusive",
            surfaces: ["Comandas", "Aplicativo", "Relatório 4"],
            details: [
              "Incluir opção de cancelar comanda.",
              "Adicionar filtro de status cancelada no relatório 4.",
              "Disponibilizar essa melhoria somente para a empresa Framja e apenas no aplicativo."
            ]
          }
        ]
      },
      {
        id: "correcoes",
        title: "Correções e estabilidade",
        description:
          "Ajustes que removem falhas conhecidas e protegem continuidade de contexto na operação.",
        items: [
          {
            id: "notificacao-app-texto",
            title: "Corrigir quebra de texto nas notificações do app",
            summary:
              "O conteúdo das notificações não deve quebrar de forma errada ou comprometer a leitura no aplicativo.",
            kind: "bugfix",
            surfaces: ["Aplicativo", "Notificações"],
            details: [
              "Ajustar o layout da notificação para o texto não quebrar incorretamente."
            ]
          },
          {
            id: "busca-telefone-vender-pacote",
            title: "Corrigir busca por telefone ao vender pacote",
            summary:
              "A pesquisa por telefone dentro do fluxo de venda de pacote precisa voltar a localizar clientes corretamente.",
            kind: "bugfix",
            surfaces: ["Pacotes", "Caixa", "Busca"],
            details: [
              "Corrigir a busca de cliente por telefone no fluxo de vender pacote."
            ]
          },
          {
            id: "persistencia-caixa-dia",
            title: "Manter o mesmo caixa do dia após reload",
            summary:
              "Ao finalizar, cancelar ou excluir uma comanda, o sistema deve preservar o contexto do caixa em vez de voltar para o dia atual.",
            kind: "bugfix",
            surfaces: ["Caixa do dia", "Comandas", "Persistência"],
            details: [
              "Depois de finalizar, cancelar ou excluir uma comanda, manter o usuário no caixa do dia em que ele estava.",
              "Eliminar o comportamento atual que volta automaticamente para o caixa do dia atual após recarregar a página."
            ]
          }
        ]
      }
    ]
  }
];
