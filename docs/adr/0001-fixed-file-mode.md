# ADR 0001 — Fixed-file mode

**Status:** aceito em 2026-08-05.

## Contexto

A documentação da Kiwify descreve sections/snippets customizáveis, mas a interface observada não apresenta ação para adicionar arquivos. Também não há exportação/importação visível.

## Decisão

Trabalhar somente com os 19 arquivos já existentes até validação contrária.

## Consequências

- novos componentes serão variantes dentro de arquivos existentes;
- o código-fonte no GitHub pode ser modular, mas a saída precisa caber nos arquivos fixos;
- toda publicação é manual;
- a arquitetura deve evitar dependências entre arquivos inexistentes.
