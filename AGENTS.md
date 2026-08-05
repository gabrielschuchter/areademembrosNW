# Instruções para agentes e colaboradores

## Objetivo

Evoluir a área de membros do Nutriwork+ sem perder o comportamento nativo da Kiwify, a identidade do produto, a organização editorial existente ou a capacidade de rollback manual.

## Regras obrigatórias

1. Leia `docs/01-fontes-e-rastreabilidade.md`, `docs/09-kiwify-capacidades.md`, `docs/10-kiwify-limitacoes.md`, `docs/12-auditoria-atual.md` e `docs/17-publicacao-manual.md` antes de alterar código.
2. Não edite `kiwify/current/`; ele é uma fotografia histórica.
3. Não assuma que novos arquivos podem ser criados na interface da Kiwify. O modo padrão é **fixed-file mode**.
4. Não introduza JavaScript customizado: a documentação oficial do tema informa que JavaScript não é suportado.
5. Preserve toda lógica de acesso, expiração, liberação, oferta, progresso e roteamento existente em `cards-item.liquid`.
6. Qualquer alteração de schema exige atualizar `pt.schema.json`, `en.schema.json` e `es.schema.json`.
7. Qualquer texto de interface exige atualizar `pt.default.json`, `en.default.json` e `es.default.json`, salvo decisão explícita documentada.
8. Use o namespace `nw-` para CSS próprio. Evite seletores globais e `!important`.
9. Teste mouse, teclado, touch, tema claro/escuro e `prefers-reduced-motion`.
10. Não trate inspiração de outros produtos como capacidade disponível na Kiwify.
11. Preserve a organização visível da home: banner, continuar assistindo, caixa de boas-vindas, seção de boas-vindas/comunidade, fileira de todos os módulos, `Seus extras` e todas as fileiras detalhadas por módulo e formato.
12. Não condensar, fundir, ocultar ou reordenar fileiras para reduzir o comprimento da página sem autorização explícita do responsável pelo produto. A exposição do volume do acervo é uma finalidade deliberada.
13. Diferencie navegador desktop, navegador mobile e aplicativo Kiwify nos testes. Não presuma paridade entre eles.
14. Novas funcionalidades devem ser aditivas ou melhorar apresentação, clareza, acessibilidade, desempenho e estados sem substituir a arquitetura editorial existente.

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
7. Testar navegador e aplicativo Kiwify separadamente.
8. Publicar manualmente conforme checklist.
9. Registrar resultado em `CHANGELOG.md` e `kiwify/releases/RELEASES.md`.
