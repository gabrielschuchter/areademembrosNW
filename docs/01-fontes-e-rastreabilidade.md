# Fontes e rastreabilidade

## Hierarquia

1. **Código e dados atuais da Kiwify:** verdade sobre o que está instalado.
2. **Documentação oficial da Kiwify:** verdade sobre capacidades documentadas.
3. **Site principal do Nutriwork+:** verdade de produto e identidade permanente.
4. **Campanha de aniversário:** fonte temporal; não reutilizar preços/condições sem revalidação.
5. **Banco de Questões:** fonte de padrões de experiência e design; não confundir suas capacidades React/Supabase com as da Kiwify.
6. **Propostas deste repositório:** hipóteses e decisões futuras.

## Regras

- Toda afirmação temporal deve ter data de verificação.
- Todo preço, número de alunos ou benefício promocional deve ser revalidado.
- IDs de cursos e módulos são dados operacionais sensíveis a alteração.
- Uma ausência na documentação não prova impossibilidade; classificar como “não documentado” e testar.
- Uma capacidade documentada mas ausente na interface atual deve ser marcada como “documentada, porém não verificada nesta conta”.

O registro estruturado está em `data/source-registry.json`.
