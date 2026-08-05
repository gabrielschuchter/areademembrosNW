# Plano completo de implementação da área de membros Nutriwork+

## Objetivo

Melhorar profundamente design, clareza, responsividade, acessibilidade, estados de conteúdo, consistência técnica e experiência entre navegador e aplicativo Kiwify, preservando integralmente a estrutura editorial de fileiras escolhida pelo produto.

## Decisões fechadas

1. A ordem principal permanece: banner, continuar assistindo, caixa de boas-vindas, boas-vindas/comunidade, todos os módulos, seus extras e detalhamento por módulo/formato.
2. Aulas e e-books permanecem em fileiras separadas.
3. O volume do acervo continuará visível.
4. A instância vazia `bNbbqY` será removida para reduzir o template de 26 para 25 seções.
5. Nenhum arquivo novo será necessário na Kiwify; recursos novos serão variantes dos arquivos existentes.
6. O visual adotará base escura premium, azul Nutriwork, tipografia Poppins com fallback de sistema e suporte funcional ao tema claro.
7. Informação essencial ficará no HTML/Liquid. CSS será aprimoramento visual, nunca requisito para entender ou usar a página.
8. A compatibilidade funcional do aplicativo é obrigatória. Diferença estética é aceitável; conteúdo invisível, rota quebrada, toque falho e estado incorreto bloqueiam a publicação.

## Arquivos e responsabilidades

### `global.css`

- corrigir sintaxe;
- mover o único import de fonte para o início;
- criar tokens `--nw-*`;
- criar estilos de seção, card, badge, progresso, estado, suporte e login;
- remover seletores globais agressivos;
- implementar breakpoints touch-first;
- respeitar `prefers-reduced-motion`;
- usar CSS conservador compatível com WebView.

### `cards-item.liquid`

- preservar acesso, visibilidade, expiração, liberação, oferta, progresso e rotas;
- tornar o card semanticamente acionável por teclado;
- adicionar `rel="noopener noreferrer"` em links externos;
- renderizar título permanentemente em touch;
- exibir badge de formato fornecido pela seção;
- exibir progresso textual;
- melhorar estados bloqueado, futuro, expirado e concluído;
- usar fallback de imagem consistente.

### `cards.liquid`

- padronizar cabeçalho da fileira;
- renderizar eyebrow, título e subtítulo;
- passar variante visual e rótulo de formato para os cards;
- melhorar setas e rótulos acessíveis do carrossel;
- preservar Embla nativo;
- evitar layout vazio quando não houver itens visíveis.

### `banner.liquid`

- manter a posição e o carrossel;
- corrigir imagens desktop/mobile;
- incluir alternativa textual configurável;
- padronizar altura, corte e contraste;
- reduzir dependência de texto incorporado na imagem.

### `continue_watching.liquid`

- manter a posição logo após o banner;
- usar card horizontal de retomada;
- mostrar título, contexto e progresso;
- criar CTA textual “Continuar”;
- criar estado vazio orientador no preview e onde a plataforma permitir;
- garantir leitura sem hover.

### `modules.liquid`

- manter a seção de boas-vindas e a fileira de módulos;
- controlar a caixa de boas-vindas por configuração específica;
- criar variantes `welcome`, `catalog` e `support-footer` dentro do mesmo arquivo;
- destacar a comunidade na instância de boas-vindas;
- permitir eyebrow, subtítulo, cor de acento e rótulo de tipo.

### `courses.liquid`

- manter “Todos os módulos” e “Seus extras”;
- criar variantes visuais `catalog-main` e `extras`;
- exibir quantidade de conteúdo quando disponível;
- diferenciar produto acadêmico, encontro, podcast, análise, comunidade e Studio por badge;
- preservar seleção de cursos e ofertas.

### `lessons.liquid`

- manter todas as fileiras detalhadas;
- padronizar títulos por área e formato;
- receber `format_label`, `eyebrow`, `description`, `accent` e `visual_style`;
- usar títulos permanentemente visíveis no mobile;
- manter progresso e rotas nativas.

### `login.liquid`, `auth-button.liquid` e `login.json`

- alinhar logo, tipografia, fundo, contraste e botão à identidade Nutriwork;
- manter autenticação nativa;
- incluir orientação curta e acesso ao suporte;
- validar teclado, autofill e telas pequenas.

### `index.json`

- preservar a ordem das fileiras visíveis;
- remover somente `bNbbqY`;
- adicionar configurações editoriais às instâncias existentes;
- definir variantes, subtítulos, badges e acentos;
- permanecer com no máximo 25 seções.

### Locales

- atualizar PT, EN e ES em paralelo;
- padronizar datas, estados, CTAs, labels e mensagens vazias;
- manter paridade de chaves entre os três idiomas.

## Execução por release

## Release 0.2.0 — Hardening

### Alterações

1. Clonar `kiwify/current/` para `kiwify/releases/0.2.0/`.
2. Remover `bNbbqY` de `order` e `sections`.
3. Corrigir o CSS malformado.
4. Definir Poppins como única fonte de marca com fallback de sistema.
5. Remover regras globais com `!important`.
6. Adicionar namespace `nw-`.
7. Corrigir links externos.
8. Corrigir datas localizadas.
9. Tornar títulos visíveis em touch.
10. Adicionar foco visível e semântica acionável aos cards.
11. Rotular setas do carrossel.
12. Implementar reduced motion.

### Critério de aceite

- nenhuma diferença estrutural visível, exceto a remoção da seção vazia;
- 25 seções no template;
- nenhum erro CSS;
- todos os cards abrem o destino correto;
- desktop, mobile e app permanecem funcionais.

## Release 0.3.0 — Topo e sistema visual

### Alterações

1. Implementar tokens de cor, superfície, raio, sombra e espaçamento.
2. Redesenhar o banner mantendo o conteúdo atual.
3. Redesenhar “Continuar assistindo” como principal elemento de retomada.
4. Redesenhar a caixa de boas-vindas.
5. Redesenhar a seção de vídeos de boas-vindas.
6. Destacar o card da comunidade.
7. Padronizar cards e fallbacks.
8. Exibir progresso textual.
9. Exibir estados de acesso com texto.
10. Garantir que o markup permaneça legível sem CSS próprio.

### Critério de aceite

- o topo comunica apresentação, retomada e primeiro acesso em menos de uma tela e meia no desktop;
- a estrutura e ordem permanecem idênticas;
- títulos e CTAs permanecem legíveis no app;
- nenhum componente depende de hover.

## Release 0.4.0 — Catálogo detalhado

### Alterações

1. Valorizar “Todos os módulos” com variante `catalog-main`.
2. Aplicar badge de categoria aos produtos especiais.
3. Destacar “Seus extras” com variante `extras`.
4. Padronizar todos os títulos no formato `Área — Formato`.
5. Adicionar subtítulo editorial curto a cada fileira.
6. Aplicar acento cromático discreto por área.
7. Aplicar badge de formato em cada card.
8. Mostrar quantidade de conteúdo quando disponível.
9. Ajustar espaçamento para aproximar fileiras da mesma área e separar áreas diferentes.
10. Adicionar bloco final de suporte dentro da última instância existente.

### Critério de aceite

- todas as fileiras permanecem visíveis e na mesma ordem;
- o usuário identifica área e formato sem abrir o card;
- a página comunica volume sem parecer visualmente indiferenciada;
- extras são reconhecidos como conteúdo adicional do acesso.

## Release 0.5.0 — Login e paridade

### Alterações

1. Redesenhar login.
2. Validar autenticação e autofill.
3. Executar matriz desktop, mobile e app.
4. Registrar diferenças do aplicativo.
5. Corrigir falhas funcionais.
6. Remover recursos visuais que prejudiquem o app.
7. Registrar screenshots finais.

### Critério de aceite

- login consistente com a marca;
- autenticação sem regressão;
- nenhuma informação essencial ausente no app;
- nenhuma rota ou ação de toque quebrada;
- limitações visuais residuais documentadas.

## Matriz obrigatória de QA

### Perfis

1. aluno novo sem progresso;
2. aluno com histórico e conteúdo em andamento;
3. aluno com extras;
4. aluno sem extras;
5. aluno com conteúdo bloqueado;
6. aluno com liberação futura;
7. aluno com conteúdo expirado;
8. editor em preview.

### Ambientes

1. navegador desktop em 1440 px;
2. navegador desktop em 1024 px;
3. navegador mobile em 390 px;
4. navegador mobile em 360 px;
5. aplicativo Kiwify no Android;
6. aplicativo Kiwify no iOS antes de declarar paridade completa.

### Elementos

- banner;
- continuar assistindo;
- caixa de boas-vindas;
- vídeos de boas-vindas;
- comunidade;
- todos os módulos;
- extras;
- cada tipo de fileira;
- cards sem imagem;
- progresso;
- bloqueio;
- expiração;
- liberação futura;
- links externos;
- carrossel;
- teclado;
- foco;
- touch;
- login;
- tema claro;
- tema escuro;
- reduced motion.

## Regras de compatibilidade com o aplicativo

1. Não usar pseudo-elemento para texto essencial.
2. Não depender de hover.
3. Não depender de `:has()`.
4. Não depender de JavaScript próprio.
5. Não depender de API externa.
6. Não depender de armazenamento local.
7. Usar flexbox e grid simples.
8. Manter contraste no estilo nativo caso o CSS seja parcialmente ignorado.
9. Manter links e rotas no markup original.
10. Bloquear publicação quando o app perder função, mesmo que o navegador esteja perfeito.

## Ordem de publicação de cada release

1. registrar screenshots e código publicado atual;
2. rodar `npm run validate`;
3. colar `global.css`;
4. colar `image.liquid`;
5. colar `cards-item.liquid`;
6. colar `cards.liquid`;
7. colar as sections alteradas;
8. colar locales `*.default.json`;
9. colar locales `*.schema.json`;
10. colar `login.json` quando aplicável;
11. colar `index.json` por último;
12. testar preview;
13. testar área autenticada;
14. testar aplicativo após atualização e reabertura;
15. registrar resultado e versão publicada.

## Itens deliberadamente fora do escopo

- reorganização das fileiras;
- fusão de aulas e e-books;
- busca dinâmica;
- filtros interativos com JavaScript;
- favoritos próprios;
- notas próprias;
- streak;
- ranking;
- gamificação persistente;
- recomendações algorítmicas;
- Supabase;
- APIs externas;
- novas páginas;
- sincronização automática com GitHub;
- alteração do player e das páginas internas não expostas pelo tema.

## Definição de pronto

O projeto estará pronto quando as quatro releases estiverem publicadas, o catálogo completo permanecer visível e ordenado, o navegador apresentar o sistema visual Nutriwork, o aplicativo permanecer funcional, todos os estados nativos estiverem preservados, o login estiver alinhado e houver documentação suficiente para rollback e manutenção futura.
