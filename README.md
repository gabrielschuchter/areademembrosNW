# Área de Membros Nutriwork — Kiwify

Repositório-fonte da personalização da área de membros do **Nutriwork+** na Kiwify.

A Kiwify não oferece, no editor atualmente disponível para esta conta, um fluxo confiável de exportação, importação ou sincronização com GitHub. Por isso, este repositório funciona como:

1. **fonte oficial do código** que será copiado manualmente para a Kiwify;
2. **base de conhecimento do Nutriwork**, com produto, público, conteúdo, identidade, voz e experiência desejada;
3. **registro auditável** do estado atual, decisões, limitações e releases;
4. **ambiente de validação** de JSON, locales, limites e integridade antes de qualquer colagem no editor.

## Estado do projeto

- `kiwify/current/`: fotografia do código coletado antes da implementação;
- `kiwify/releases/1.0.0/`: primeira versão completa redesenhada e pronta para copiar;
- `docs/`: documentação de produto, UX, tecnologia, QA e publicação;
- `data/`: conhecimento estruturado e rastreável;
- `scripts/`: verificações locais;
- `kiwify/releases/`: histórico das versões prontas para publicação.

> **Regra central:** nunca editar diretamente `kiwify/current/`. Alterações devem ser feitas em uma release, validadas e só então copiadas para a Kiwify.

## Princípio de produto

A estrutura editorial da home é intencional e deve ser preservada. A página continua exibindo:

1. banner;
2. continuar assistindo;
3. caixa de boas-vindas;
4. vídeos de boas-vindas e acesso à comunidade;
5. todos os módulos e produtos;
6. seus extras;
7. fileiras detalhadas de aulas, e-books, podcasts, análises e demais formatos.

A repetição das fileiras comunica o volume do acervo. O projeto melhora identidade visual, clareza, responsividade, acessibilidade, progresso, estados, login e compatibilidade sem reduzir ou reorganizar o catálogo.

O **ESTUDE!** é um e-book de organização da rotina de estudos. Ele não deve ser chamado de “Studio”.

---

# Release pronta para implementação

A versão atual é:

```text
kiwify/releases/1.0.0/
```

Ela contém os **19 arquivos completos** que correspondem aos arquivos existentes no editor da Kiwify:

```text
assets/global.css

sections/banner.liquid
sections/login.liquid
sections/modules.liquid
sections/courses.liquid
sections/lessons.liquid
sections/continue_watching.liquid

snippets/image.liquid
snippets/auth-button.liquid
snippets/cards.liquid
snippets/cards-item.liquid

templates/index.json
templates/login.json

locales/pt.default.json
locales/en.default.json
locales/es.default.json
locales/pt.schema.json
locales/en.schema.json
locales/es.schema.json
```

Não é necessário criar arquivos novos na Kiwify. Cada arquivo da release substitui o conteúdo do arquivo de mesmo nome no editor.

---

# Passo a passo para implementar na Kiwify

## 1. Preparar o rollback antes de alterar qualquer coisa

1. Abra o editor de código da área de membros na Kiwify.
2. Abra cada um dos 19 arquivos atuais.
3. Confirme que o conteúdo ainda corresponde a `kiwify/current/`.
4. Quando houver qualquer diferença, copie a versão atual da Kiwify para uma pasta de backup no repositório antes de continuar.
5. Tire screenshots da home atual no:
   - navegador desktop;
   - navegador mobile;
   - aplicativo Kiwify.
6. Mantenha a aba do editor atual aberta.
7. Abra a release `kiwify/releases/1.0.0/` em outra aba.

Não publique sem uma cópia recuperável dos arquivos que estão ativos.

## 2. Validar a release localmente

No terminal, dentro do repositório:

```bash
npm install
npm run validate
```

A publicação deve ser interrompida quando o validador apontar erro.

A release foi preparada com:

- 25 seções no `index.json`;
- nenhuma fileira visível removida;
- nenhuma mudança na ordem estrutural;
- paridade entre locales PT, EN e ES;
- CSS válido;
- links externos protegidos;
- títulos visíveis em touch;
- suporte a teclado e movimento reduzido.

## 3. Abrir o editor correto na Kiwify

Na conta administrativa da Kiwify:

1. entre no produto do Nutriwork+;
2. abra a área de membros;
3. entre na personalização do tema;
4. abra o editor de código;
5. confirme que aparecem as pastas:
   - `sections`;
   - `snippets`;
   - `templates`;
   - `locales`;
   - `assets`.

Os nomes dos arquivos devem coincidir exatamente com os nomes da release.

## 4. Regra de substituição de cada arquivo

Para cada arquivo:

1. clique no arquivo no editor da Kiwify;
2. use `Ctrl + A`;
3. copie o conteúdo completo do arquivo correspondente em `kiwify/releases/1.0.0/`;
4. cole no editor da Kiwify;
5. confira a primeira e a última linha;
6. salve;
7. aguarde a confirmação;
8. só então avance para o próximo arquivo.

Não cole apenas trechos. Todos os arquivos devem ser substituídos integralmente.

---

# Ordem exata de implementação

## Etapa A — Locales

Cole primeiro os seis arquivos de tradução. Isso garante que os novos campos e textos existam antes das seções que os utilizam.

1. `locales/pt.default.json`
2. `locales/en.default.json`
3. `locales/es.default.json`
4. `locales/pt.schema.json`
5. `locales/en.schema.json`
6. `locales/es.schema.json`

### Verificação da Etapa A

- os seis arquivos devem salvar sem erro de JSON;
- o editor não deve mostrar vírgula inválida;
- as chaves devem permanecer iguais entre os três idiomas.

## Etapa B — CSS global

7. `assets/global.css`

### Verificação da Etapa B

Abra o Preview e confirme:

- a página continua carregando;
- não há tela branca;
- não há componentes sobrepostos;
- o login ainda abre;
- o fundo, tipografia e cards podem ainda não estar completos, pois o novo markup será colado nas etapas seguintes.

## Etapa C — Snippets

8. `snippets/image.liquid`
9. `snippets/auth-button.liquid`
10. `snippets/cards-item.liquid`
11. `snippets/cards.liquid`

`cards-item.liquid` deve ser colado antes de `cards.liquid`, porque ele contém a renderização, os estados e a navegação de cada card.

### Verificação da Etapa C

No Preview, confira pelo menos um card:

- título visível;
- imagem carregada;
- fallback visível quando não houver imagem;
- progresso exibido;
- link interno funcionando;
- link externo abrindo em nova aba;
- conteúdo bloqueado não abrindo;
- conteúdo futuro mostrando estado;
- conteúdo expirado mostrando estado.

## Etapa D — Sections

12. `sections/banner.liquid`
13. `sections/continue_watching.liquid`
14. `sections/modules.liquid`
15. `sections/courses.liquid`
16. `sections/lessons.liquid`
17. `sections/login.liquid`

### Verificação da Etapa D

Confirme no Preview:

- banner no topo;
- continuar assistindo logo abaixo;
- caixa de boas-vindas aparecendo uma única vez;
- vídeos de boas-vindas e comunidade;
- todos os módulos;
- seus extras;
- todas as fileiras detalhadas;
- suporte ao final do Comfort Place;
- nenhuma fileira duplicada pela caixa de boas-vindas;
- nenhuma informação essencial dependente de hover.

## Etapa E — Template de login

18. `templates/login.json`

### Verificação da Etapa E

Abra a tela de login em uma janela anônima e confira:

- logo;
- imagem de fundo;
- título;
- texto;
- botão nativo de autenticação;
- link de suporte;
- autofill;
- teclado;
- tela de 360 px de largura.

## Etapa F — Template principal

19. `templates/index.json`

O `index.json` deve ser o **último arquivo** porque ele ativa as novas configurações das seções e remove a instância vazia `bNbbqY`.

### Verificação da Etapa F

Confirme:

- exatamente 25 seções;
- nenhuma fileira visível removida;
- ordem preservada;
- `bNbbqY` ausente;
- títulos no formato `Área — Formato`;
- ESTUDE! apresentado como e-book;
- “Todos os módulos” em destaque;
- “Seus extras” diferenciado;
- Comfort Place por último;
- suporte após a última fileira.

---

# Checklist de teste após a implementação

## Navegador desktop

Teste em 1440 px e 1024 px:

- banner;
- setas;
- continuar assistindo;
- caixa de boas-vindas;
- todos os módulos;
- extras;
- fileiras;
- progresso;
- bloqueios;
- links;
- login;
- tema claro;
- tema escuro.

## Navegador mobile

Teste em 390 px e 360 px:

- títulos sempre visíveis;
- cards sem corte;
- rolagem horizontal;
- área de toque;
- ausência de conteúdo dependente de hover;
- textos sem sobreposição;
- suporte;
- login.

## Aplicativo Kiwify

O aplicativo deve ser testado separadamente. Não presuma que ele reproduz integralmente o tema do navegador.

1. feche completamente o aplicativo;
2. abra novamente;
3. quando necessário, saia da conta e entre de novo;
4. abra o mesmo produto;
5. compare a mesma conta e os mesmos conteúdos com o navegador.

Verifique:

- banner;
- continuar assistindo;
- caixa de boas-vindas;
- títulos;
- cards;
- progresso;
- bloqueios;
- datas;
- links;
- ordem;
- extras;
- ESTUDE!;
- Comfort Place;
- suporte.

Diferença de sombra, fonte ou espaçamento é aceitável. A publicação deve ser revertida quando houver:

- conteúdo invisível;
- título ausente;
- toque sem resposta;
- rota quebrada;
- bloqueio incorreto;
- progresso incorreto;
- texto sem contraste;
- sobreposição;
- seção ausente.

## Perfis mínimos de teste

1. aluno novo sem progresso;
2. aluno com conteúdo em andamento;
3. aluno com extras;
4. aluno sem extras;
5. aluno com conteúdo bloqueado;
6. aluno com liberação futura;
7. aluno com conteúdo expirado.

---

# Como fazer rollback

Quando surgir uma regressão crítica:

1. interrompa a publicação;
2. abra a cópia dos arquivos ativos antes da mudança;
3. restaure primeiro os seis locales;
4. restaure `global.css`;
5. restaure os quatro snippets;
6. restaure as seis sections;
7. restaure `login.json`;
8. restaure `index.json` por último;
9. teste o Preview;
10. teste a área autenticada;
11. feche e reabra o aplicativo;
12. registre a causa do rollback.

O snapshot `kiwify/current/` pode ser usado como referência histórica, mas deve ser comparado com o estado real que estava publicado imediatamente antes da implementação.

---

# O que a release 1.0.0 altera

- corrige o CSS malformado;
- adota Poppins com fallback de sistema;
- cria tokens visuais `nw-*`;
- remove seletores globais agressivos;
- remove apenas a seção vazia `bNbbqY`;
- mantém todas as fileiras visíveis;
- preserva a ordem;
- redesenha banner;
- destaca continuar assistindo;
- controla a caixa de boas-vindas por configuração;
- redesenha boas-vindas e comunidade;
- valoriza todos os módulos;
- diferencia seus extras;
- padroniza títulos, subtítulos, badges e acentos;
- identifica ESTUDE! como e-book de organização de estudos;
- melhora progresso e estados;
- adiciona fallback para imagens;
- melhora teclado, foco e touch;
- protege links externos;
- localiza mensagens;
- adiciona suporte no final;
- redesenha login;
- mantém autenticação, rotas, acesso, oferta, expiração e liberação nativos.

---

# Limites mantidos

A release não implementa:

- reorganização das fileiras;
- fusão de aulas e e-books;
- busca dinâmica;
- filtros em JavaScript;
- favoritos próprios;
- notas próprias;
- streak;
- ranking;
- gamificação persistente;
- recomendações algorítmicas;
- Supabase;
- APIs externas;
- páginas novas;
- alteração do player;
- sincronização automática com GitHub.

Consulte:

- [`docs/20-diretriz-estrutura-preservada.md`](docs/20-diretriz-estrutura-preservada.md)
- [`docs/21-plano-completo-de-implementacao.md`](docs/21-plano-completo-de-implementacao.md)
- [`docs/17-publicacao-manual.md`](docs/17-publicacao-manual.md)
