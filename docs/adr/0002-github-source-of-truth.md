# ADR 0002 — GitHub como fonte de verdade

**Status:** aceito em 2026-08-05.

## Decisão

O editor da Kiwify é destino de publicação, não ambiente principal de desenvolvimento.

## Consequências

- histórico, revisão e rollback ficam no GitHub;
- alterações diretas na Kiwify devem ser imediatamente reconciliadas no repo;
- cada release registra exatamente o conteúdo colado;
- a versão publicada deve ser identificável.
