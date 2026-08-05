# Manifesto de publicação — Release 1.0.0

## Identificação

- Release: `1.0.0`
- Data de preparação: `2026-08-05`
- Estado: **candidata pronta para implementação manual**
- Publicação na Kiwify: **ainda não realizada**
- Estrutura: 19 arquivos fixos
- Template principal: 25 seções

## Ordem de colagem

1. `locales/pt.default.json`
2. `locales/en.default.json`
3. `locales/es.default.json`
4. `locales/pt.schema.json`
5. `locales/en.schema.json`
6. `locales/es.schema.json`
7. `assets/global.css`
8. `snippets/image.liquid`
9. `snippets/auth-button.liquid`
10. `snippets/cards-item.liquid`
11. `snippets/cards.liquid`
12. `sections/banner.liquid`
13. `sections/continue_watching.liquid`
14. `sections/modules.liquid`
15. `sections/courses.liquid`
16. `sections/lessons.liquid`
17. `sections/login.liquid`
18. `templates/login.json`
19. `templates/index.json`

## Mudanças estruturais autorizadas

- remoção somente da instância vazia `bNbbqY`;
- redução de 26 para 25 seções;
- preservação de todas as fileiras visíveis;
- preservação da ordem editorial;
- ESTUDE! classificado como e-book de organização de estudos.

## Validação executada

```text
✓ index.json: 25 seções
✓ login.json: 1 seção
✓ Locales default: paridade de chaves
✓ Locales schema: paridade de chaves
✓ global.css sem @import tardio
✓ Links externos protegidos
✓ Manifesto completo
```

## Rollback

Usar o backup capturado imediatamente antes da colagem. Restaurar `index.json` por último.
