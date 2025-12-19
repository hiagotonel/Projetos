PROJETO 2: FRONTEND (Marketplace Web)

Nome: Plataforma Web de Contratação de Serviços
Objetivo: Interface onde o cliente navega na vitrine e contrata, e o admin gerencia os pedidos.
📅 Cronograma e Sprints (Frontend)

Mês 1: Estrutura e Vitrine

• Foco: Exibição dos serviços para o cliente.
• Entregáveis (Git):
• [X] Setup do projeto React (Vite).
• [ ] Configuração de Rotas: /, /login, /admin, /meus-pedidos.
• [ ] Tela Home (Vitrine): Grid de cards consumindo GET /services.
• [ ] Tela de Detalhes: Ao clicar no card, abre página com descrição completa e preço.

Mês 2: Fluxo de Compra e Usuário

• Foco: Transformar visitante em cliente.
• Entregáveis (Git):
• [ ] Login/Registro: Telas integradas com a API.
• [ ] Checkout (Modal ou Tela): Formulário onde o usuário escolhe a data/detalhes e clica em "Contratar".
• [ ] Meus Pedidos: Lista para o cliente acompanhar o status (ex: "Aguardando Aprovação").
• [ ] Validação Visual: Exibir erro se tentar agendar sem estar logado.

Mês 3: Painel Administrativo e Deploy

• Foco: Gestão do negócio.
• Entregáveis (Git):
• [ ] Dashboard Admin: Tabela com todos os pedidos recentes.
• [ ] Ações do Admin: Botões para "Aprovar" ou "Recusar" pedido (Consumindo PUT).
• [ ] Dashboard Gráfico: Cards com "Faturamento Total" (vindo da API).
• [ ] Deploy na Vercel: Projeto publicado conectado ao Backend.