import type {
  FramjaFunctionalityGroup,
  FramjaSystemFunctionality
} from "@/lib/marketing-os/types";

export const functionalityGroups: FramjaFunctionalityGroup[] = [
  {
    id: "gestao",
    name: "Gestão",
    description:
      "Camada de leitura do negócio com inteligência de operação, análise de desempenho e profundidade para tomada de decisão."
  },
  {
    id: "agenda-relacionamento",
    name: "Agenda e Relacionamento",
    description:
      "Ferramentas que organizam a rotina diária, distribuem disponibilidade e criam a experiência do cliente antes e depois do atendimento."
  },
  {
    id: "financeiro",
    name: "Financeiro",
    description:
      "Fluxos de venda, repasse, controle de custos e leitura do caixa que sustentam a operação real do salão."
  },
  {
    id: "cadastros",
    name: "Cadastros",
    description:
      "Base estrutural do Framja. É aqui que cliente, equipe, serviços, pacotes e produtos deixam de ser lista e viram operação."
  },
  {
    id: "configuracoes",
    name: "Configurações",
    description:
      "Governança do ambiente, regras do negócio, acessos e parâmetros que moldam como o sistema se comporta no dia a dia."
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
      "Painel executivo que resume o período e traduz a operação em receita, lucro, origem do faturamento e destaques comerciais.",
    operationalRole:
      "Funciona como a camada de BI do Framja. Em poucos segundos o dono entende o que entrou, de onde veio, quem puxou o resultado e onde está a margem real.",
    status: "available",
    icon: "Eye",
    highlights: [
      "Análise por intervalo de datas com leitura consolidada do período.",
      "Mostra receita bruta, custos, lucro real, ticket médio, dívidas e créditos de clientes.",
      "Quebra a receita por origem, pacote vendido e forma de pagamento.",
      "Entrega destaques como serviço mais vendido, melhor cliente e melhor profissional."
    ],
    sections: [
      {
        id: "olho-financeiro",
        title: "Leitura financeira do período",
        items: [
          "Exibe receita bruta, custos e despesas, lucro real e ticket médio em um único painel.",
          "Ajuda a diferenciar faturamento de resultado real, sem depender de planilha externa.",
          "Também sinaliza saldo de clientes em crédito ou dívida para não mascarar a saúde do caixa."
        ]
      },
      {
        id: "olho-composicao",
        title: "Composição da receita",
        items: [
          "Mostra de onde o dinheiro veio: pacotes, pagamentos e outras origens do período.",
          "Abre a leitura por pacote vendido e peso percentual na receita total.",
          "Facilita enxergar concentração de faturamento e dependência de poucas ofertas."
        ]
      },
      {
        id: "olho-destaques",
        title: "Destaques operacionais",
        items: [
          "Resume o melhor cliente, o serviço mais vendido e outros pontos de destaque.",
          "Transforma operação em narrativa gerencial, não só em número solto.",
          "Serve como painel de comando rápido para quem precisa decidir o próximo movimento do negócio."
        ]
      }
    ]
  },
  {
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
    highlights: [
      "Tem 19 relatórios prontos organizados por categoria.",
      "Abrange faturamento, vendas, comandas, clientes, serviços, produtos e estoque.",
      "Inclui relatórios de pagamentos de comissão, clientes mais lucrativos e fluxo de caixa.",
      "Permite trocar de lente sem sair da operação principal."
    ],
    sections: [
      {
        id: "relatorios-faturamento",
        title: "Faturamento e caixa",
        items: [
          "Relatórios de faturamento total por data, detalhe do faturamento, vendas totais e comandas por número ou período.",
          "Inclui custos e despesas, sangrias e suprimentos e fluxo de caixa para envio ao contador.",
          "Ajuda a transformar movimento diário em leitura formal de resultado."
        ]
      },
      {
        id: "relatorios-servicos-estoque",
        title: "Serviços e estoque",
        items: [
          "Traz resumo e detalhe de serviços realizados por intervalo de data.",
          "Mostra resumo e detalhe de produtos vendidos, situação atual do estoque e movimentações de estoque.",
          "Conecta produção com consumo e venda de itens."
        ]
      },
      {
        id: "relatorios-clientes-comissoes",
        title: "Clientes e comissões",
        items: [
          "Entrega lista de clientes, dívidas e créditos, clientes mais lucrativos e histórico de comissões.",
          "Também possui relatório específico de pagamentos de comissão por período e profissional.",
          "Ajuda a cruzar recorrência, equipe e margem em um mesmo fluxo de análise."
        ]
      }
    ]
  },
  {
    id: "agenda",
    groupId: "agenda-relacionamento",
    name: "Agenda",
    menuPath: "Agenda / Agenda",
    route: "/core/agenda",
    description:
      "Agenda operacional do dia com grade por profissional, lista consolidada dos atendimentos e controle de bloqueios.",
    operationalRole:
      "É o centro da rotina diária. Organiza disponibilidade, mostra quem atende, em que horário, e permite intervir rápido quando a agenda precisa mudar.",
    status: "available",
    icon: "CalendarDays",
    highlights: [
      "Tem grade horária por profissional e navegação por data.",
      "Possui atalho para hoje e visão consolidada em lista do dia.",
      "Mostra cliente, telefone, profissional, serviço e status do atendimento.",
      "Permite bloquear horários e períodos por profissional e motivo."
    ],
    sections: [
      {
        id: "agenda-rotina",
        title: "Rotina diária",
        items: [
          "A grade organiza o dia por horários e por profissional para leitura rápida da operação.",
          "A lista do dia transforma a grade em uma visão linear com horário, cliente, telefone, serviço e status.",
          "Isso reduz atrito para recepção e para quem precisa conferir o dia sem navegar por várias telas."
        ]
      },
      {
        id: "agenda-disponibilidade",
        title: "Controle de disponibilidade",
        items: [
          "O fluxo de bloqueio permite definir data, período, profissional e motivo do bloqueio.",
          "A mesma tela mostra bloqueios já criados no dia, o que evita sobreposição manual.",
          "Serve para almoço, ausência, encaixe reservado ou qualquer indisponibilidade planejada."
        ]
      }
    ]
  },
  {
    id: "link-agendamento",
    groupId: "agenda-relacionamento",
    name: "Link Agendamento",
    menuPath: "Agenda / Link Agendamento",
    route: "/core/meu-site",
    description:
      "Mini site de agendamento online com personalização visual, regras comerciais e informações completas do negócio.",
    operationalRole:
      "Funciona como a vitrine pública do Framja. É a ponte entre a operação interna e a experiência que o cliente final enxerga para agendar sozinho.",
    status: "available",
    icon: "Globe",
    highlights: [
      "Permite personalizar logotipo, tema, fotos e apresentação do negócio.",
      "Controla contato, redes sociais, endereço, comodidades e formas de pagamento.",
      "Configura sinal, antecedência para agendar, antecedência para cancelar e status do agendamento online.",
      "Oferece link público para acessar, copiar, testar e compartilhar."
    ],
    sections: [
      {
        id: "site-vitrine",
        title: "Experiência pública do cliente",
        items: [
          "Monta a página pública com serviços, detalhes, profissionais e chamadas para agendar.",
          "Permite escolher tema visual e preencher a camada institucional do negócio.",
          "Transforma o sistema em canal de aquisição e conveniência, não só em backoffice."
        ]
      },
      {
        id: "site-negocio",
        title: "Dados do negócio",
        items: [
          "Centraliza nome da empresa, WhatsApp, Facebook, Instagram, TikTok, endereço e Google Maps.",
          "Também configura comodidades como Wi-Fi, estacionamento, acessibilidade e atendimento a crianças.",
          "Ajuda o cliente a decidir o agendamento com menos dúvida e menos conversa manual."
        ]
      },
      {
        id: "site-regras",
        title: "Regras de agendamento",
        items: [
          "Controla se o agendamento online está ativo e quais meios de pagamento aparecem na página.",
          "Permite exigir sinal e configurar tipo e valor da chave Pix.",
          "Define quantas horas antes o cliente pode agendar ou cancelar, protegendo a operação."
        ]
      }
    ]
  },
  {
    id: "lembretes-automaticos",
    groupId: "agenda-relacionamento",
    name: "Lembretes Automáticos",
    menuPath: "Agenda / Lembretes",
    route: "/core/lembretes",
    description:
      "Painel de comunicação com clientes baseado em créditos, histórico de envios e rastreio do status de cada mensagem.",
    operationalRole:
      "É o motor de confirmação automática do relacionamento. Mantém o cliente informado e reduz esquecimento, faltas e retrabalho de recepção.",
    status: "available",
    icon: "Bell",
    highlights: [
      "Mostra total de créditos, total utilizado e saldo atual.",
      "Registra compras de créditos com data, quantidade, valor e forma de pagamento.",
      "Mantém log das mensagens enviadas por cliente, telefone, tipo de lembrete e status.",
      "Permite abrir o conteúdo de cada mensagem enviada."
    ],
    sections: [
      {
        id: "lembretes-creditos",
        title: "Crédito e consumo",
        items: [
          "Controla a carteira de créditos de envio para o módulo funcionar.",
          "Explica quando o envio foi cortesia e quando houve compra real de créditos.",
          "Ajuda a monitorar custo operacional da automação de mensagens."
        ]
      },
      {
        id: "lembretes-historico",
        title: "Histórico de mensagens",
        items: [
          "Guarda data, cliente, WhatsApp, tipo de lembrete e status de cada disparo.",
          "Torna rastreável o que foi enviado e para quem foi enviado.",
          "Também mostra quando houve tentativa sem saldo, evitando perda silenciosa de comunicação."
        ]
      }
    ]
  },
  {
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
    highlights: [
      "Tem fluxo de Nova Comanda e fluxo de Vender Pacote.",
      "Conecta cliente, pagamento, troco, parcelas, máquina de cartão e observações.",
      "Exibe comandas do dia com total pago, lucro, custo, pacotes consumidos e forma de pagamento.",
      "Resume lucro, faturamento, ticket médio, custos, comissões pendentes, sangria e suprimento."
    ],
    sections: [
      {
        id: "caixa-venda",
        title: "Atendimento e venda",
        items: [
          "Abertura de comanda e venda de pacote seguem a mesma base: cliente, data, hora e pagamento.",
          "O fluxo já permite cadastrar novo cliente sem sair do caixa.",
          "Também mostra histórico de comandas do cliente para apoiar decisão durante a venda."
        ]
      },
      {
        id: "caixa-fechamento",
        title: "Fechamento do dia",
        items: [
          "Lista as comandas do dia com lucro, custo e forma de pagamento associada.",
          "Consolida total faturado, total de clientes, ticket médio e comissões pendentes.",
          "Inclui atalhos para suprimento, sangria e despesa dentro da mesma rotina."
        ]
      }
    ]
  },
  {
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
    highlights: [
      "Filtra por data, profissional e status.",
      "Mostra valor do serviço, valor a pagar, percentual de comissão e status do repasse.",
      "Trabalha com estados como pendente, aprovada, reprovada e paga.",
      "Separa a operação em lista de comissões, vales dos profissionais e pagamento das comissões."
    ],
    sections: [
      {
        id: "comissoes-auditoria",
        title: "Auditoria de comissões",
        items: [
          "Cada linha relaciona profissional, cliente, data, serviço ou produto, comanda e valor devido.",
          "A tela consolida valores pendentes, aprovados, reprovados e pagos.",
          "Também permite alteração de status em lote para organizar o fechamento."
        ]
      },
      {
        id: "comissoes-vales",
        title: "Vales e pagamentos",
        items: [
          "O módulo reserva espaço específico para vales dos profissionais e pagamentos de comissão.",
          "Isso mostra que o repasse não é tratado como evento único, mas como fluxo contínuo de adiantamento e quitação.",
          "A operação de equipe fica registrada fora do improviso de caixa paralelo."
        ]
      }
    ]
  },
  {
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
    highlights: [
      "Permite lançar nova despesa com data, categoria, valor e descrição.",
      "Tem categorias amplas como aluguel, internet, marketing, produto, salário e taxas de cartão.",
      "Oferece pesquisa por período e atalhos de preenchimento para recorrências.",
      "A própria tela orienta a salvar primeiro e depois transformar o lançamento em recorrente."
    ],
    sections: [
      {
        id: "despesas-lancamento",
        title: "Lançamentos e classificação",
        items: [
          "Cada despesa nasce estruturada por data, categoria, valor e descrição.",
          "As categorias cobrem custo fixo, custo variável e despesas administrativas do negócio.",
          "Isso melhora leitura gerencial e também reduz bagunça contábil."
        ]
      },
      {
        id: "despesas-recorrencia",
        title: "Rotina recorrente",
        items: [
          "A tela sugere categorias recorrentes e deixa claro o fluxo para transformar um gasto em recorrência.",
          "Isso ajuda a padronizar despesas que se repetem todo mês sem depender de memória humana.",
          "O módulo deixa de ser só registro histórico e vira disciplina operacional."
        ]
      }
    ]
  },
  {
    id: "clientes",
    groupId: "cadastros",
    name: "Clientes",
    menuPath: "Cadastros / Clientes",
    route: "/core/clientes-lista",
    description:
      "Hub operacional do cliente com perfil, histórico, prontuário, financeiro, pacotes e relacionamento em um único cadastro.",
    operationalRole:
      "No Framja, cliente não é ficha. O cadastro do cliente vira a entidade central onde relacionamento, atendimento, venda e recorrência se encontram.",
    status: "available",
    icon: "Users",
    highlights: [
      "A lista traz busca por nome ou telefone, total de clientes, aniversariantes e inativos.",
      "O cadastro inicial cobre dados pessoais, contato, endereço, observação, profissão e origem do lead.",
      "Um cliente já existente abre 6 abas: dados, anamnese, agendamentos, comandas, créditos e dívidas, pacotes.",
      "Também permite bloquear agendamento online, inativar, excluir e transferir histórico para outro cliente."
    ],
    sections: [
      {
        id: "clientes-cadastro",
        title: "Cadastro e perfil",
        items: [
          "O formulário cobre nome, celular com DDI, e-mail, gênero, data de nascimento, CPF, telefone e endereço completo.",
          "Também guarda observação, profissão e o campo de como conheceu o negócio.",
          "Há suporte a clientes internacionais e à marcação de cliente ativo ou inativo."
        ]
      },
      {
        id: "clientes-prontuario",
        title: "Prontuário e histórico",
        items: [
          "A aba de anamnese funciona como prontuário com doenças crônicas, alergias, medicamentos, rotina de pele e cabelo e contraindicações.",
          "A aba de agendamentos mostra histórico completo com data, hora, profissional, serviço e status.",
          "A aba de comandas conecta o cliente ao histórico comercial, com total pago, comanda aberta ou fechada, lucro, custo e forma de pagamento."
        ]
      },
      {
        id: "clientes-financeiro",
        title: "Recorrência e financeiro do cliente",
        items: [
          "A aba de créditos e dívidas registra deixas de crédito, utilização de crédito, dívida e pagamento de dívida.",
          "A aba de pacotes mostra compra, validade, saldo por serviço e histórico de uso.",
          "O fluxo de transferência de dados resolve duplicidade de cadastro movendo agendamentos e comandas para o cliente correto."
        ]
      }
    ]
  },
  {
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
    highlights: [
      "A lista exibe total da equipe, profissionais ativos, função, cargo, agenda e ordem de exibição.",
      "O cadastro tem 4 abas: profissional, serviços e comissões, horário de trabalho e agendamentos.",
      "Permite copiar link de acesso, carregar foto, ativar ou inativar e definir exibir na agenda online.",
      "Também guarda dados bancários para repasse."
    ],
    sections: [
      {
        id: "profissionais-acesso",
        title: "Acesso e perfil",
        items: [
          "Controla nome, e-mail, primeira senha, tipo de usuário e cargo profissional.",
          "Também marca se o colaborador está ativo no sistema e se possui agenda própria.",
          "O módulo inclui telefone, aniversário, apelido, observações e foto."
        ]
      },
      {
        id: "profissionais-servicos",
        title: "Serviços, comissões e agenda",
        items: [
          "A aba de serviços e comissões configura quais serviços o profissional executa, comissão percentual, duração e valor cobrado.",
          "A aba de horário de trabalho organiza atendimento por dia da semana, hora inicial, hora final e repetição do horário.",
          "Existe ainda uma aba de próximos agendamentos para leitura operacional do profissional."
        ]
      },
      {
        id: "profissionais-repasse",
        title: "Repasse e governança",
        items: [
          "O cadastro inclui tipo de conta, tipo de transação, nome do titular e CPF do titular.",
          "Isso conecta o profissional diretamente ao módulo de comissões e pagamentos.",
          "A operação da equipe fica mais rastreável e menos dependente de acordo verbal."
        ]
      }
    ]
  },
  {
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
    highlights: [
      "Organiza serviços por categoria e mostra rapidamente preço, duração, custo e agendamento online.",
      "Permite usar lista de sugestões para acelerar cadastro.",
      "Suporta tipos de preço como fixo, a partir de e sob consulta.",
      "Conecta o serviço a produtos consumidos na execução."
    ],
    sections: [
      {
        id: "servicos-comercial",
        title: "Configuração comercial",
        items: [
          "Cada serviço tem categoria, nome, preço e tipo de valor.",
          "A configuração define se ele pode ou não aparecer no agendamento online.",
          "Também existe descrição detalhada do serviço para orientar cliente e equipe."
        ]
      },
      {
        id: "servicos-execucao",
        title: "Execução e retorno",
        items: [
          "O módulo trabalha com duração em minutos e em horas para encaixar o serviço na agenda.",
          "Também aceita folga entre atendimentos e sugestão de retorno em dias.",
          "Isso ajuda a padronizar operação e recorrência sem depender de memória do profissional."
        ]
      },
      {
        id: "servicos-custo",
        title: "Custo com produtos",
        items: [
          "Permite informar custo com produtos e vincular quais itens são consumidos durante a execução.",
          "Conecta o cadastro de serviço ao módulo de produtos e estoque.",
          "Esse detalhe é importante para leitura de margem real, não só de faturamento."
        ]
      }
    ]
  },
  {
    id: "pacotes",
    groupId: "cadastros",
    name: "Pacotes",
    menuPath: "Cadastros / Pacotes",
    route: "/core/pacotes-lista",
    description:
      "Construtor de ofertas recorrentes com serviços combinados, validade, quantidade por item e comparação de economia.",
    operationalRole:
      "O pacote no Framja não é só um nome com preço. Ele vira produto composto, com regras de uso, saldo por serviço e impacto direto no caixa e no cadastro do cliente.",
    status: "available",
    icon: "Package",
    highlights: [
      "A lista mostra preço, validade e quantidade de serviços incluídos em cada pacote.",
      "O cadastro permite combinar vários serviços e quantidades em uma mesma oferta.",
      "Calcula o valor dos serviços avulsos e compara com o preço do pacote.",
      "Depois da venda, o pacote aparece dentro do cliente com saldo e histórico de uso."
    ],
    sections: [
      {
        id: "pacotes-estrutura",
        title: "Estrutura do pacote",
        items: [
          "Permite definir nome, validade em dias, meses ou anos, preço do pacote e descrição.",
          "Também aceita pacote sem validade ao usar zero como valor.",
          "A configuração é orientada para montar oferta recorrente, não só promoção pontual."
        ]
      },
      {
        id: "pacotes-itens",
        title: "Serviços incluídos e economia",
        items: [
          "Cada pacote recebe serviços, quantidade, valor unitário e valor cobrado por item.",
          "O sistema compara valor avulso com valor do pacote e mostra se há economia real.",
          "Isso ajuda a desenhar ofertas sem perder margem por erro manual."
        ]
      }
    ]
  },
  {
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
    highlights: [
      "Separa produtos ativos, produtos de venda e produtos de consumo.",
      "O cadastro tem duas abas: produto e estoque.",
      "Permite registrar entrada e saída de estoque com histórico de movimentação.",
      "Guarda código de barras, unidade de medida, custo, fornecedor, marca e estoque mínimo."
    ],
    sections: [
      {
        id: "produtos-cadastro",
        title: "Ficha do produto",
        items: [
          "Controla nome, código de barras, categoria, marca, linha, fornecedor e código interno.",
          "Também define se o item é produto de consumo em serviço ou item de venda.",
          "A unidade de medida pode ser unidade, ml, grama, litro, caixa, pacote e outras variações."
        ]
      },
      {
        id: "produtos-estoque",
        title: "Estoque e abastecimento",
        items: [
          "A aba de estoque mostra saldo atual e abre fluxos de entrada e saída.",
          "Também guarda prazo de entrega e estoque mínimo para apoiar reposição.",
          "Conecta o cadastro do item ao consumo operacional e ao relatório de movimentações."
        ]
      }
    ]
  },
  {
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
    highlights: [
      "A área traz 12 atalhos administrativos principais.",
      "Inclui horário de funcionamento, horário de almoço e bloqueio de dia na agenda.",
      "Também centraliza acesso da recepcionista, acesso do profissional e alteração de senha.",
      "Passa por plano, máquinas de cartão, endereço, personalização e mensagem de agendamento."
    ],
    sections: [
      {
        id: "config-geral",
        title: "Governança do negócio",
        items: [
          "Permite trocar empresa, ver plano, cadastrar máquinas de cartão e editar endereço.",
          "Também abre o caminho de personalização do ambiente para manter a marca coerente.",
          "Agrupa definições que normalmente ficariam espalhadas em vários menus."
        ]
      },
      {
        id: "config-operacao",
        title: "Agenda e operação",
        items: [
          "Controla horário de funcionamento, horário de almoço e bloqueio de dia na agenda.",
          "Também oferece configuração da mensagem de agendamento.",
          "Essas regras mudam diretamente a rotina do negócio e a experiência do cliente."
        ]
      },
      {
        id: "config-acessos",
        title: "Acesso e segurança",
        items: [
          "Tem atalhos para editar acesso da recepcionista e do profissional.",
          "Também concentra alteração de senha em um ponto único.",
          "Mostra que o Framja trata perfil de acesso como parte da operação, não como detalhe técnico."
        ]
      }
    ]
  }
];
