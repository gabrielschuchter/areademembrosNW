# Contribuição

## Commits

Use mensagens que descrevam intenção e escopo, por exemplo:

- `docs: documentar modelo de dados Liquid`
- `fix(theme): corrigir títulos invisíveis no touch`
- `feat(theme): adicionar variante visual de seção`
- `chore(release): preparar v0.2.0 para colagem manual`

## Pull requests

Cada PR deve informar:

- problema resolvido;
- arquivos da Kiwify afetados;
- comportamento nativo preservado;
- riscos e rollback;
- testes realizados;
- screenshots desktop/mobile, quando visual.

## Não fazer

- colar código diretamente em `main` sem validação;
- misturar refatoração grande e mudança visual sem necessidade;
- duplicar textos em Liquid quando eles podem ser locales;
- criar dependência de API, armazenamento ou JS que a Kiwify não execute;
- alterar identificadores de cursos/módulos sem conferir o `index.json` real.
