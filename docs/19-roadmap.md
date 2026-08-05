# Roadmap de implementação

## Regra central

A estrutura e a ordem das fileiras visíveis da área de membros serão preservadas. O projeto não reduzirá o catálogo detalhado, não fundirá aulas com e-books e não reorganizará a sequência principal. A única remoção permitida no `index.json` é a instância vazia `bNbbqY`, para cumprir o limite documentado de 25 seções sem eliminar conteúdo visível.

## Release 0.2.0 — Hardening técnico

- [ ] criar release a partir de `kiwify/current/`;
- [ ] remover somente a seção vazia `bNbbqY` do template;
- [ ] corrigir sintaxe e ordem do CSS;
- [ ] adotar uma única tipografia com fallback de sistema;
- [ ] substituir seletores globais agressivos por namespace `nw-`;
- [ ] preservar a lógica nativa de acesso, progresso, liberação, expiração e oferta;
- [ ] adicionar `rel="noopener noreferrer"` aos links externos;
- [ ] corrigir datas para PT-BR, EN e ES;
- [ ] tornar títulos e ações essenciais visíveis sem hover;
- [ ] garantir foco, teclado, touch e reduced motion;
- [ ] validar navegador desktop, navegador mobile e aplicativo Kiwify.

## Release 0.3.0 — Sistema visual e topo da home

- [ ] implementar tokens visuais Nutriwork;
- [ ] redesenhar banner sem alterar sua posição;
- [ ] redesenhar “Continuar assistindo” como principal elemento de retomada;
- [ ] melhorar o estado vazio de retomada;
- [ ] desacoplar a caixa de boas-vindas do comportamento genérico de `modules.liquid`;
- [ ] redesenhar a seção de boas-vindas e destacar o acesso à comunidade;
- [ ] padronizar cards, capas, títulos, progresso, estados e fallbacks;
- [ ] preservar funcionamento legível quando o aplicativo ignorar parte do CSS.

## Release 0.4.0 — Catálogo detalhado

- [ ] valorizar “Todos os módulos” como vitrine principal;
- [ ] diferenciar módulos acadêmicos, encontros, podcast, análise, comunidade e Studio;
- [ ] destacar “Seus extras” sem alterar sua posição ou lógica de acesso;
- [ ] padronizar títulos das fileiras por área e formato;
- [ ] adicionar eyebrow, subtítulo e rótulo de formato às seções;
- [ ] criar variantes visuais de seção sem criar novos arquivos na Kiwify;
- [ ] aplicar acentos cromáticos controlados por área;
- [ ] exibir quantidade de conteúdos quando o objeto nativo fornecer o dado;
- [ ] adicionar suporte e orientação no final da última seção sem criar uma nova instância.

## Release 0.5.0 — Login e paridade entre ambientes

- [ ] redesenhar a tela de login com a identidade Nutriwork;
- [ ] revisar `auth-button.liquid` e mensagens de acesso;
- [ ] executar matriz de comparação entre desktop, mobile e aplicativo;
- [ ] corrigir incompatibilidades funcionais do app;
- [ ] aceitar diferença visual somente quando leitura, toque, rotas e estados permanecerem corretos;
- [ ] registrar screenshots finais e limitações conhecidas.

## Critérios de lançamento

Uma release só pode ser publicada quando:

1. `npm run validate` passar;
2. nenhum conteúdo visível tiver sido removido ou reordenado;
3. o template tiver no máximo 25 seções;
4. aluno novo, aluno com progresso e aluno com acesso restrito tiverem sido testados;
5. desktop, navegador mobile e aplicativo Kiwify estiverem funcionais;
6. títulos, rotas, progresso, bloqueios, datas e links estiverem legíveis;
7. a release anterior estiver disponível para rollback manual;
8. o `index.json` for publicado por último.
