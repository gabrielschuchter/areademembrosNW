# Auditoria do estado atual

## Diretriz de produto — estrutura de fileiras preservada

A organização visível da home é intencional e não deve ser condensada ou reestruturada sem autorização explícita do responsável pelo produto.

A sequência atual deve permanecer reconhecível:

1. banner;
2. continuar assistindo;
3. caixa de boas-vindas;
4. seção de boas-vindas, com vídeos iniciais e acesso à comunidade;
5. fileira com todos os módulos/produtos;
6. `Seus extras`, variável conforme o acesso do aluno;
7. fileiras detalhadas por módulo, separando aulas, e-books e demais formatos quando existirem.

As fileiras posteriores são repetidas de forma deliberada: elas demonstram o volume do acervo e permitem visualizar os conteúdos internos sem exigir a entrada prévia em cada módulo. A extensão da página, por si só, não é tratada como defeito.

## P0 — Template acima do limite

`index.json` contém 26 itens em `order`, acima do máximo documentado de 25. A correção deve preservar todas as fileiras visíveis e sua ordem. O primeiro candidato é a instância vazia `bNbbqY`, que pode ser retirada caso se confirme que não produz conteúdo na área real.

Não usar esse limite como justificativa para condensar aulas, e-books, módulos ou extras.

## P0 — Divergência entre navegador e aplicativo Kiwify

O responsável pelo produto observa diferença visual e/ou comportamental importante entre a área acessada pelo navegador e a área acessada pelo aplicativo Kiwify.

A causa ainda não foi verificada. A documentação oficial consultada descreve o sistema de temas da página inicial e do login, mas não documenta de forma suficiente a paridade de renderização com o aplicativo.

Toda release visual deve, portanto, ser avaliada em uma matriz separada:

- navegador desktop;
- navegador mobile;
- aplicativo Kiwify em Android;
- aplicativo Kiwify em iOS, quando disponível;
- aluno novo;
- aluno com histórico e progresso;
- aluno com extras diferentes.

Não assumir que uma correção observada no navegador será reproduzida no aplicativo.

## P0 — CSS malformado

- `@import` aparece após regras CSS;
- há um `}` excedente antes do segundo import;
- Manrope e Outfit competem;
- seletores globais com `!important` atingem componentes nativos.

## P1 — Welcome box acoplada

A mensagem de boas-vindas foi inserida diretamente em `modules.liquid`. Toda instância da seção pode repetir o bloco. A caixa deve continuar na posição atual, mas sua renderização precisa ser associada somente à instância correta ou controlada por uma variante configurável.

## P1 — Informação dependente de hover

A maioria das instâncias usa `mouse_hover`; o título recebe opacidade zero até hover/foco. Em touch, a descoberta é frágil. Conteúdo essencial deve ser sempre visível no mobile e no aplicativo.

## P1 — Hierarquia visual insuficiente entre muitas fileiras

A quantidade de fileiras é um requisito de produto. O problema a resolver não é a extensão da home, e sim a baixa diferenciação visual entre tipos de seção e níveis de importância.

As melhorias devem atuar em:

- títulos e subtítulos;
- cores e fundos;
- marcadores de formato;
- espaçamento e divisores;
- estado de progresso;
- leitura no mobile;
- consistência de capas;
- carregamento e estabilidade visual.

## P1 — Link externo

O card abre links externos com `target="_blank"`, mas não inclui `rel="noopener noreferrer"`.

## P2 — Datas

A data de liberação usa `%B %d, %Y`, o que pode produzir formato em inglês e pouco natural para PT-BR.

## P2 — Banner

O `alt` é sempre vazio. Isso só é adequado para imagem decorativa; banners com texto incorporado precisam de alternativa acessível ou conteúdo HTML equivalente.

## P2 — Preview

O placeholder cinza em “Continuar assistindo” pode ser apenas a aula fictícia sem imagem criada no preview, não necessariamente falha de produção.
