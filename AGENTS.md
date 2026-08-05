# Instruções para agentes e colaboradores

## Objetivo

Evoluir a área de membros do Nutriwork+ sem perder o comportamento nativo da Kiwify, a identidade do produto ou a capacidade de rollback manual.

## Regras obrigatórias

1. Leia `docs/01-fontes-e-rastreabilidade.md`, `docs/09-kiwify-capacidades.md`, `docs/10-kiwify-limitacoes.md` e `docs/17-publicacao-manual.md` antes de alterar código.
2. Não edite `kiwify/current/`; ele é uma fotografia histórica.
3. Não assuma que novos arquivos podem ser criados na interface da Kiwify. O modo padrão é **fixed-file mode**.
4. Não introduza JavaScript customizado: a documentação oficial do tema informa que JavaScript não é suportado.
5. Preserve toda lógica de acesso, expiração, liberação, oferta, progresso e roteamento existente em `cards-item.liquid`.
6. Qualquer alteração de schema exige atualizar `pt.schema.json`, `en.schema.json` e `es.schema.json`.
7. Qualquer texto de interface exige atualizar `pt.default.json`, `en.default.json` e `es.default.json`, salvo decisão explícita documentada.
8. Use o namespace `nw-` para CSS próprio. Evite seletores globais e `!important`.
9. Teste mouse, teclado, touch, tema claro/escuro e `prefers-reduced-motion`.
10. Não trate inspiração de outros produtos como capacidade disponível na Kiwify.

## Separação epistemológica

Todo documento ou PR deve distinguir:

- **verificado:** existe em fonte ou código lido;
- **inferido:** conclusão razoável, mas não declarada pela fonte;
- **proposto:** decisão de design/produto ainda não implementada;
- **não verificado:** precisa de teste no editor/produção.

## Fluxo de mudança

1. Criar branch.
2. Criar `kiwify/releases/<versão>/` a partir de `current` ou da última release publicada.
3. Alterar somente a release.
4. Atualizar docs/ADR quando houver decisão estrutural.
5. Rodar `npm run validate`.
6. Revisar diff arquivo por arquivo.
7. Publicar manualmente conforme checklist.
8. Registrar resultado em `CHANGELOG.md` e `kiwify/releases/RELEASES.md`.
