# Modelo de dados Liquid

## Cursos

Selecionados em `courses.liquid` por blocos ou por todos os cursos visíveis. São convertidos em `section_items` e enviados ao snippet `cards`.

## Módulos

`modules.liquid` resolve um curso, filtra IDs ausentes/invisíveis sem oferta e monta objetos de `all_modules`.

## Aulas

`lessons.liquid` resolve um módulo, filtra aulas inexistentes/invisíveis sem oferta e monta objetos de `all_lessons`.

## Retomada

`continue_watching.liquid` usa `last_watched_lessons`, remove IDs inexistentes e exige pelo menos uma aula visível fora do preview.

## Card

`cards-item.liquid` centraliza:

- imagem e proporção;
- progresso;
- visibilidade;
- expiração;
- data futura;
- compra/link externo;
- desabilitação;
- tooltip;
- roteamento por curso/módulo/aula;
- ícones de estado;
- botão de gestão de capa no editor.

## Regra de preservação

Mudanças visuais no card não podem eliminar essas regras. Refatorar somente com fixtures para todos os estados.
