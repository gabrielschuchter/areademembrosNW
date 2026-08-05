# Publicação manual

## Antes

1. Registrar o estado publicado atual.
2. Confirmar que a release contém conteúdo completo dos arquivos afetados.
3. Rodar `npm run validate`.
4. Abrir Preview em outra aba.
5. Garantir acesso à versão anterior para rollback.

## Ordem recomendada

1. `global.css`
2. snippets de base (`image`, `cards-item`, `cards`)
3. sections alteradas
4. locales `*.default.json`
5. locales `*.schema.json`
6. `login.json`, quando aplicável
7. `index.json` por último

O `index.json` deve ser colado por último porque pode referenciar novas configurações de schema.

## Para cada arquivo

1. abrir no editor;
2. selecionar tudo;
3. colar conteúdo completo;
4. revisar início e final;
5. usar Preview;
6. salvar;
7. registrar sucesso/erro.

## Depois

- testar área real autenticada;
- testar aluno novo e aluno com progresso;
- testar conteúdo bloqueado/futuro/expirado, quando houver contas de teste;
- testar desktop/mobile;
- registrar data, versão e screenshots.

## Rollback

Colar os arquivos da release anterior na ordem inversa de dependência, deixando `index.json` por último novamente.
