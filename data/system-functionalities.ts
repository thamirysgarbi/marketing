import type {
  FramjaFunctionalityGroup,
  FramjaSystemFunctionality
} from "@/lib/marketing-os/types";

export const functionalityGroups: FramjaFunctionalityGroup[] = [
  {
    id: "gestao",
    name: "Gestao",
    description:
      "Camada de leitura do negocio com inteligencia de operacao, analise de desempenho e profundidade para tomada de decisao."
  },
  {
    id: "agenda-relacionamento",
    name: "Agenda e Relacionamento",
    description:
      "Ferramentas que organizam a rotina diaria, distribuem disponibilidade e criam a experiencia do cliente antes e depois do atendimento."
  },
  {
    id: "financeiro",
    name: "Financeiro",
    description:
      "Fluxos de venda, repasse, controle de custos e leitura do caixa que sustentam a operacao real do salao."
  },
  {
    id: "cadastros",
    name: "Cadastros",
    description:
      "Base estrutural do Framja. E aqui que cliente, equipe, servicos, pacotes e produtos deixam de ser lista e viram operacao."
  },
  {
    id: "configuracoes",
    name: "Configuracoes",
    description:
      "Governanca do ambiente, regras do negocio, acessos e parametros que moldam como o sistema se comporta no dia a dia."
  }
];

export const systemFunctionalities: FramjaSystemFunctionality[] = [
  {
    id: "olho-do-gato",
    groupId: "gestao",
    name: "Olho do Gato",
    menuPath: "Gestao / Olho do Gato",
    route: "/core/olho-do-gato",
    description:
      "Painel executivo que resume o periodo e traduz a operacao em receita, lucro, origem do faturamento e destaques comerciais.",
    operationalRole:
      "Funciona como a camada de BI do Framja. Em poucos segundos o dono entende o que entrou, de onde veio, quem puxou o resultado e onde esta a margem real.",
    status: "available",
    icon: "Eye",
    highlights: [
      "Analise por intervalo de datas com leitura consolidada do periodo.",
      "Mostra receita bruta, custos, lucro real, ticket medio, dividas e creditos de clientes.",
      "Quebra a receita por origem, pacote vendido e forma de pagamento.",
      "Entrega destaques como servico mais vendido, melhor cliente e melhor profissional."
    ],
    sections: [
      {
        id: "olho-financeiro",
        title: "Leitura financeira do periodo",
        items: [
          "Exibe receita bruta, custos e despesas, lucro real e ticket medio em um unico painel.",
          "Ajuda a diferenciar faturamento de resultado real, sem depender de planilha externa.",
          "Tambem sinaliza saldo de clientes em credito ou divida para nao mascarar a saude do caixa."
        ]
      },
      {
        id: "olho-composicao",
        title: "Composicao da receita",
        items: [
          "Mostra de onde o dinheiro veio: pacotes, pagamentos e outras origens do periodo.",
          "Abre a leitura por pacote vendido e peso percentual na receita total.",
          "Facilita enxergar concentracao de faturamento e dependencia de poucas ofertas."
        ]
      },
      {
        id: "olho-destaques",
        title: "Destaques operacionais",
        items: [
          "Resume o melhor cliente, o servico mais vendido e outros pontos de destaque.",
          "Transforma operacao em narrativa gerencial, nao so em numero solto.",
          "Serve como painel de comando rapido para quem precisa decidir o proximo movimento do negocio."
        ]
      }
    ]
  },
  {
    id: "relatorios",
    groupId: "gestao",
    name: "Relatorios",
    menuPath: "Gestao / Relatorios",
    route: "/core/relatorios",
    description:
      "Catalogo de relatorios prontos para investigar faturamento, clientes, servicos, estoque, comandas e comissoes sem montar consulta manual.",
    operationalRole:
      "E a biblioteca analitica do Framja. Em vez de uma tela unica, o sistema oferece relatorios prontos para responder perguntas especificas do negocio.",
    status: "available",
    icon: "ReceiptText",
    highlights: [
      "Tem 19 relatorios prontos organizados por categoria.",
      "Abrange faturamento, vendas, comandas, clientes, servicos, produtos e estoque.",
      "Inclui relatorios de pagamentos de comissao, clientes mais lucrativos e fluxo de caixa.",
      "Permite trocar de lente sem sair da operacao principal."
    ],
    sections: [
      {
        id: "relatorios-faturamento",
        title: "Faturamento e caixa",
        items: [
          "Relatorios de faturamento total por data, detalhe do faturamento, vendas totais e comandas por numero ou periodo.",
          "Inclui custos e despesas, sangrias e suprimentos e fluxo de caixa para envio ao contador.",
          "Ajuda a transformar movimento diario em leitura formal de resultado."
        ]
      },
      {
        id: "relatorios-servicos-estoque",
        title: "Servicos e estoque",
        items: [
          "Traz resumo e detalhe de servicos realizados por intervalo de data.",
          "Mostra resumo e detalhe de produtos vendidos, situacao atual do estoque e movimentacoes de estoque.",
          "Conecta producao com consumo e venda de itens."
        ]
      },
      {
        id: "relatorios-clientes-comissoes",
        title: "Clientes e comissoes",
        items: [
          "Entrega lista de clientes, dividas e creditos, clientes mais lucrativos e historico de comissoes.",
          "Tambem possui relatorio especifico de pagamentos de comissao por periodo e profissional.",
          "Ajuda a cruzar recorrencia, equipe e margem em um mesmo fluxo de analise."
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
      "E o centro da rotina diaria. Organiza disponibilidade, mostra quem atende, em que horario, e permite intervir rapido quando a agenda precisa mudar.",
    status: "available",
    icon: "CalendarDays",
    highlights: [
      "Tem grade horaria por profissional e navegacao por data.",
      "Possui atalho para hoje e visao consolidada em lista do dia.",
      "Mostra cliente, telefone, profissional, servico e status do atendimento.",
      "Permite bloquear horarios e periodos por profissional e motivo."
    ],
    sections: [
      {
        id: "agenda-rotina",
        title: "Rotina diaria",
        items: [
          "A grade organiza o dia por horarios e por profissional para leitura rapida da operacao.",
          "A lista do dia transforma a grade em uma visao linear com horario, cliente, telefone, servico e status.",
          "Isso reduz atrito para recepcao e para quem precisa conferir o dia sem navegar por varias telas."
        ]
      },
      {
        id: "agenda-disponibilidade",
        title: "Controle de disponibilidade",
        items: [
          "O fluxo de bloqueio permite definir data, periodo, profissional e motivo do bloqueio.",
          "A mesma tela mostra bloqueios ja criados no dia, o que evita sobreposicao manual.",
          "Serve para almoco, ausencia, encaixe reservado ou qualquer indisponibilidade planejada."
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
      "Mini site de agendamento online com personalizacao visual, regras comerciais e informacoes completas do negocio.",
    operationalRole:
      "Funciona como a vitrine publica do Framja. E a ponte entre a operacao interna e a experiencia que o cliente final enxerga para agendar sozinho.",
    status: "available",
    icon: "Globe",
    highlights: [
      "Permite personalizar logotipo, tema, fotos e apresentacao do negocio.",
      "Controla contato, redes sociais, endereco, comodidades e formas de pagamento.",
      "Configura sinal, antecedencia para agendar, antecedencia para cancelar e status do agendamento online.",
      "Oferece link publico para acessar, copiar, testar e compartilhar."
    ],
    sections: [
      {
        id: "site-vitrine",
        title: "Experiencia publica do cliente",
        items: [
          "Monta a pagina publica com servicos, detalhes, profissionais e chamadas para agendar.",
          "Permite escolher tema visual e preencher a camada institucional do negocio.",
          "Transforma o sistema em canal de aquisicao e conveniencia, nao so em backoffice."
        ]
      },
      {
        id: "site-negocio",
        title: "Dados do negocio",
        items: [
          "Centraliza nome da empresa, WhatsApp, Facebook, Instagram, TikTok, endereco e Google Maps.",
          "Tambem configura comodidades como Wi-Fi, estacionamento, acessibilidade e atendimento a criancas.",
          "Ajuda o cliente a decidir o agendamento com menos duvida e menos conversa manual."
        ]
      },
      {
        id: "site-regras",
        title: "Regras de agendamento",
        items: [
          "Controla se o agendamento online esta ativo e quais meios de pagamento aparecem na pagina.",
          "Permite exigir sinal e configurar tipo e valor da chave Pix.",
          "Define quantas horas antes o cliente pode agendar ou cancelar, protegendo a operacao."
        ]
      }
    ]
  },
  {
    id: "lembretes-automaticos",
    groupId: "agenda-relacionamento",
    name: "Lembretes Automaticos",
    menuPath: "Agenda / Lembretes",
    route: "/core/lembretes",
    description:
      "Painel de comunicacao com clientes baseado em creditos, historico de envios e rastreio do status de cada mensagem.",
    operationalRole:
      "E o motor de confirmacao automatica do relacionamento. Mantem o cliente informado e reduz esquecimento, faltas e retrabalho de recepcao.",
    status: "available",
    icon: "Bell",
    highlights: [
      "Mostra total de creditos, total utilizado e saldo atual.",
      "Registra compras de creditos com data, quantidade, valor e forma de pagamento.",
      "Mantem log das mensagens enviadas por cliente, telefone, tipo de lembrete e status.",
      "Permite abrir o conteudo de cada mensagem enviada."
    ],
    sections: [
      {
        id: "lembretes-creditos",
        title: "Credito e consumo",
        items: [
          "Controla a carteira de creditos de envio para o modulo funcionar.",
          "Explica quando o envio foi cortesia e quando houve compra real de creditos.",
          "Ajuda a monitorar custo operacional da automacao de mensagens."
        ]
      },
      {
        id: "lembretes-historico",
        title: "Historico de mensagens",
        items: [
          "Guarda data, cliente, WhatsApp, tipo de lembrete e status de cada disparo.",
          "Torna rastreavel o que foi enviado e para quem foi enviado.",
          "Tambem mostra quando houve tentativa sem saldo, evitando perda silenciosa de comunicacao."
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
      "Centro de movimento comercial do dia com abertura de comandas, venda de pacotes e leitura consolidada do resultado diario.",
    operationalRole:
      "E a tela onde atendimento vira venda e venda vira leitura financeira. O caixa conecta comanda, pagamento, pacote e indicadores do dia em um unico fluxo.",
    status: "available",
    icon: "CreditCard",
    highlights: [
      "Tem fluxo de Nova Comanda e fluxo de Vender Pacote.",
      "Conecta cliente, pagamento, troco, parcelas, maquina de cartao e observacoes.",
      "Exibe comandas do dia com total pago, lucro, custo, pacotes consumidos e forma de pagamento.",
      "Resume lucro, faturamento, ticket medio, custos, comissoes pendentes, sangria e suprimento."
    ],
    sections: [
      {
        id: "caixa-venda",
        title: "Atendimento e venda",
        items: [
          "Abertura de comanda e venda de pacote seguem a mesma base: cliente, data, hora e pagamento.",
          "O fluxo ja permite cadastrar novo cliente sem sair do caixa.",
          "Tambem mostra historico de comandas do cliente para apoiar decisao durante a venda."
        ]
      },
      {
        id: "caixa-fechamento",
        title: "Fechamento do dia",
        items: [
          "Lista as comandas do dia com lucro, custo e forma de pagamento associada.",
          "Consolida total faturado, total de clientes, ticket medio e comissoes pendentes.",
          "Inclui atalhos para suprimento, sangria e despesa dentro da mesma rotina."
        ]
      }
    ]
  },
  {
    id: "comissoes",
    groupId: "financeiro",
    name: "Comissoes",
    menuPath: "Caixa / Comissoes",
    route: "/core/comissoes",
    description:
      "Area de controle de repasse da equipe com lista de comissoes, filtros por status e fluxos separados para vales e pagamentos.",
    operationalRole:
      "Traduz a producao da equipe em valor a pagar. O modulo ajuda a auditar servico por servico antes do repasse e evita que a comissao fique perdida dentro do caixa.",
    status: "available",
    icon: "Wallet",
    highlights: [
      "Filtra por data, profissional e status.",
      "Mostra valor do servico, valor a pagar, percentual de comissao e status do repasse.",
      "Trabalha com estados como pendente, aprovada, reprovada e paga.",
      "Separa a operacao em lista de comissoes, vales dos profissionais e pagamento das comissoes."
    ],
    sections: [
      {
        id: "comissoes-auditoria",
        title: "Auditoria de comissoes",
        items: [
          "Cada linha relaciona profissional, cliente, data, servico ou produto, comanda e valor devido.",
          "A tela consolida valores pendentes, aprovados, reprovados e pagos.",
          "Tambem permite alteracao de status em lote para organizar o fechamento."
        ]
      },
      {
        id: "comissoes-vales",
        title: "Vales e pagamentos",
        items: [
          "O modulo reserva espaco especifico para vales dos profissionais e pagamentos de comissao.",
          "Isso mostra que o repasse nao e tratado como evento unico, mas como fluxo continuo de adiantamento e quitacao.",
          "A operacao de equipe fica registrada fora do improviso de caixa paralelo."
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
      "Controle estruturado de saidas com categorias operacionais, valor, descricao e suporte a recorrencia apos o primeiro lancamento.",
    operationalRole:
      "E a camada que impede o negocio de olhar so para entrada. Sem ela, o caixa mostra faturamento; com ela, o sistema passa a mostrar resultado.",
    status: "available",
    icon: "Blocks",
    highlights: [
      "Permite lancar nova despesa com data, categoria, valor e descricao.",
      "Tem categorias amplas como aluguel, internet, marketing, produto, salario e taxas de cartao.",
      "Oferece pesquisa por periodo e atalhos de preenchimento para recorrencias.",
      "A propria tela orienta a salvar primeiro e depois transformar o lancamento em recorrente."
    ],
    sections: [
      {
        id: "despesas-lancamento",
        title: "Lancamentos e classificacao",
        items: [
          "Cada despesa nasce estruturada por data, categoria, valor e descricao.",
          "As categorias cobrem custo fixo, custo variavel e despesas administrativas do negocio.",
          "Isso melhora leitura gerencial e tambem reduz bagunca contabil."
        ]
      },
      {
        id: "despesas-recorrencia",
        title: "Rotina recorrente",
        items: [
          "A tela sugere categorias recorrentes e deixa claro o fluxo para transformar um gasto em recorrencia.",
          "Isso ajuda a padronizar despesas que se repetem todo mes sem depender de memoria humana.",
          "O modulo deixa de ser so registro historico e vira disciplina operacional."
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
      "Hub operacional do cliente com perfil, historico, prontuario, financeiro, pacotes e relacionamento em um unico cadastro.",
    operationalRole:
      "No Framja, cliente nao e ficha. O cadastro do cliente vira a entidade central onde relacionamento, atendimento, venda e recorrencia se encontram.",
    status: "available",
    icon: "Users",
    highlights: [
      "A lista traz busca por nome ou telefone, total de clientes, aniversariantes e inativos.",
      "O cadastro inicial cobre dados pessoais, contato, endereco, observacao, profissao e origem do lead.",
      "Um cliente ja existente abre 6 abas: dados, anamnese, agendamentos, comandas, creditos e dividas, pacotes.",
      "Tambem permite bloquear agendamento online, inativar, excluir e transferir historico para outro cliente."
    ],
    sections: [
      {
        id: "clientes-cadastro",
        title: "Cadastro e perfil",
        items: [
          "O formulario cobre nome, celular com DDI, e-mail, genero, data de nascimento, CPF, telefone e endereco completo.",
          "Tambem guarda observacao, profissao e o campo de como conheceu o negocio.",
          "Ha suporte a clientes internacionais e a marcacao de cliente ativo ou inativo."
        ]
      },
      {
        id: "clientes-prontuario",
        title: "Prontuario e historico",
        items: [
          "A aba de anamnese funciona como prontuario com doencas cronicas, alergias, medicamentos, rotina de pele e cabelo e contraindicacoes.",
          "A aba de agendamentos mostra historico completo com data, hora, profissional, servico e status.",
          "A aba de comandas conecta o cliente ao historico comercial, com total pago, comanda aberta ou fechada, lucro, custo e forma de pagamento."
        ]
      },
      {
        id: "clientes-financeiro",
        title: "Recorrencia e financeiro do cliente",
        items: [
          "A aba de creditos e dividas registra deixas de credito, utilizacao de credito, divida e pagamento de divida.",
          "A aba de pacotes mostra compra, validade, saldo por servico e historico de uso.",
          "O fluxo de transferencia de dados resolve duplicidade de cadastro movendo agendamentos e comandas para o cliente correto."
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
      "Cadastro multifuncional da equipe com acesso ao sistema, agenda, comissao por servico, escala e dados bancarios.",
    operationalRole:
      "O profissional no Framja nao e so uma pessoa na lista. Ele e usuario do sistema, agenda atendimentos, recebe repasse e participa da operacao online.",
    status: "available",
    icon: "UserRound",
    highlights: [
      "A lista exibe total da equipe, profissionais ativos, funcao, cargo, agenda e ordem de exibicao.",
      "O cadastro tem 4 abas: profissional, servicos e comissoes, horario de trabalho e agendamentos.",
      "Permite copiar link de acesso, carregar foto, ativar ou inativar e definir exibir na agenda online.",
      "Tambem guarda dados bancarios para repasse."
    ],
    sections: [
      {
        id: "profissionais-acesso",
        title: "Acesso e perfil",
        items: [
          "Controla nome, e-mail, primeira senha, tipo de usuario e cargo profissional.",
          "Tambem marca se o colaborador esta ativo no sistema e se possui agenda propria.",
          "O modulo inclui telefone, aniversario, apelido, observacoes e foto."
        ]
      },
      {
        id: "profissionais-servicos",
        title: "Servicos, comissoes e agenda",
        items: [
          "A aba de servicos e comissoes configura quais servicos o profissional executa, comissao percentual, duracao e valor cobrado.",
          "A aba de horario de trabalho organiza atendimento por dia da semana, hora inicial, hora final e repeticao do horario.",
          "Existe ainda uma aba de proximos agendamentos para leitura operacional do profissional."
        ]
      },
      {
        id: "profissionais-repasse",
        title: "Repasse e governanca",
        items: [
          "O cadastro inclui tipo de conta, tipo de transacao, nome do titular e CPF do titular.",
          "Isso conecta o profissional diretamente ao modulo de comissoes e pagamentos.",
          "A operacao da equipe fica mais rastreavel e menos dependente de acordo verbal."
        ]
      }
    ]
  },
  {
    id: "servicos",
    groupId: "cadastros",
    name: "Servicos",
    menuPath: "Cadastros / Servicos",
    route: "/core/servicos-lista",
    description:
      "Catalogo comercial e operacional dos servicos com categoria, preco, duracao, regra de agendamento e custo de execucao.",
    operationalRole:
      "Cada servico no Framja e uma oferta configuravel. O modulo define como o servico aparece para venda, quanto custa, quanto dura e como ele afeta agenda e margem.",
    status: "available",
    icon: "Scissors",
    highlights: [
      "Organiza servicos por categoria e mostra rapidamente preco, duracao, custo e agendamento online.",
      "Permite usar lista de sugestoes para acelerar cadastro.",
      "Suporta tipos de preco como fixo, a partir de e sob consulta.",
      "Conecta o servico a produtos consumidos na execucao."
    ],
    sections: [
      {
        id: "servicos-comercial",
        title: "Configuracao comercial",
        items: [
          "Cada servico tem categoria, nome, preco e tipo de valor.",
          "A configuracao define se ele pode ou nao aparecer no agendamento online.",
          "Tambem existe descricao detalhada do servico para orientar cliente e equipe."
        ]
      },
      {
        id: "servicos-execucao",
        title: "Execucao e retorno",
        items: [
          "O modulo trabalha com duracao em minutos e em horas para encaixar o servico na agenda.",
          "Tambem aceita folga entre atendimentos e sugestao de retorno em dias.",
          "Isso ajuda a padronizar operacao e recorrencia sem depender de memoria do profissional."
        ]
      },
      {
        id: "servicos-custo",
        title: "Custo com produtos",
        items: [
          "Permite informar custo com produtos e vincular quais itens sao consumidos durante a execucao.",
          "Conecta o cadastro de servico ao modulo de produtos e estoque.",
          "Esse detalhe e importante para leitura de margem real, nao so de faturamento."
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
      "Construtor de ofertas recorrentes com servicos combinados, validade, quantidade por item e comparacao de economia.",
    operationalRole:
      "O pacote no Framja nao e so um nome com preco. Ele vira produto composto, com regras de uso, saldo por servico e impacto direto no caixa e no cadastro do cliente.",
    status: "available",
    icon: "Package",
    highlights: [
      "A lista mostra preco, validade e quantidade de servicos incluidos em cada pacote.",
      "O cadastro permite combinar varios servicos e quantidades em uma mesma oferta.",
      "Calcula o valor dos servicos avulsos e compara com o preco do pacote.",
      "Depois da venda, o pacote aparece dentro do cliente com saldo e historico de uso."
    ],
    sections: [
      {
        id: "pacotes-estrutura",
        title: "Estrutura do pacote",
        items: [
          "Permite definir nome, validade em dias, meses ou anos, preco do pacote e descricao.",
          "Tambem aceita pacote sem validade ao usar zero como valor.",
          "A configuracao e orientada para montar oferta recorrente, nao so promocao pontual."
        ]
      },
      {
        id: "pacotes-itens",
        title: "Servicos incluidos e economia",
        items: [
          "Cada pacote recebe servicos, quantidade, valor unitario e valor cobrado por item.",
          "O sistema compara valor avulso com valor do pacote e mostra se ha economia real.",
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
      "Cadastro de itens de venda e consumo com atributos comerciais, estoque e rastreio de movimentacao.",
    operationalRole:
      "O produto no Framja pode ser mercadoria ou insumo de atendimento. Por isso o modulo combina ficha comercial, classificacao e controle de estoque.",
    status: "available",
    icon: "Boxes",
    highlights: [
      "Separa produtos ativos, produtos de venda e produtos de consumo.",
      "O cadastro tem duas abas: produto e estoque.",
      "Permite registrar entrada e saida de estoque com historico de movimentacao.",
      "Guarda codigo de barras, unidade de medida, custo, fornecedor, marca e estoque minimo."
    ],
    sections: [
      {
        id: "produtos-cadastro",
        title: "Ficha do produto",
        items: [
          "Controla nome, codigo de barras, categoria, marca, linha, fornecedor e codigo interno.",
          "Tambem define se o item e produto de consumo em servico ou item de venda.",
          "A unidade de medida pode ser unidade, ml, grama, litro, caixa, pacote e outras variacoes."
        ]
      },
      {
        id: "produtos-estoque",
        title: "Estoque e abastecimento",
        items: [
          "A aba de estoque mostra saldo atual e abre fluxos de entrada e saida.",
          "Tambem guarda prazo de entrega e estoque minimo para apoiar reposicao.",
          "Conecta o cadastro do item ao consumo operacional e ao relatorio de movimentacoes."
        ]
      }
    ]
  },
  {
    id: "configuracoes",
    groupId: "configuracoes",
    name: "Configuracoes",
    menuPath: "Configuracoes / Geral",
    route: "/core/configuracoes",
    description:
      "Central de governanca do sistema com regras de operacao, acessos, personalizacao e parametros do negocio.",
    operationalRole:
      "Agrupa decisoes que mudam o comportamento do Framja. Em vez de espalhar ajustes pelo produto, o sistema concentra governanca em um menu claro.",
    status: "available",
    icon: "Settings2",
    highlights: [
      "A area traz 12 atalhos administrativos principais.",
      "Inclui horario de funcionamento, horario de almoco e bloqueio de dia na agenda.",
      "Tambem centraliza acesso da recepcionista, acesso do profissional e alteracao de senha.",
      "Passa por plano, maquinas de cartao, endereco, personalizacao e mensagem de agendamento."
    ],
    sections: [
      {
        id: "config-geral",
        title: "Governanca do negocio",
        items: [
          "Permite trocar empresa, ver plano, cadastrar maquinas de cartao e editar endereco.",
          "Tambem abre o caminho de personalizacao do ambiente para manter a marca coerente.",
          "Agrupa definicoes que normalmente ficariam espalhadas em varios menus."
        ]
      },
      {
        id: "config-operacao",
        title: "Agenda e operacao",
        items: [
          "Controla horario de funcionamento, horario de almoco e bloqueio de dia na agenda.",
          "Tambem oferece configuracao da mensagem de agendamento.",
          "Essas regras mudam diretamente a rotina do negocio e a experiencia do cliente."
        ]
      },
      {
        id: "config-acessos",
        title: "Acesso e seguranca",
        items: [
          "Tem atalhos para editar acesso da recepcionista e do profissional.",
          "Tambem concentra alteracao de senha em um ponto unico.",
          "Mostra que o Framja trata perfil de acesso como parte da operacao, nao como detalhe tecnico."
        ]
      }
    ]
  }
];
