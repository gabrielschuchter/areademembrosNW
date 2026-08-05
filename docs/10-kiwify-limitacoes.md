# Limitações e incertezas

## Confirmadas/documentadas

- sem JavaScript customizado no tema;
- sem novas páginas de template além de home e login;
- 25 seções por template;
- 50 blocos por seção;
- dados restritos aos objetos expostos pela plataforma.

## Não disponíveis nos objetos lidos

- perfil completo/nome do aluno para saudação personalizada;
- histórico completo de consumo;
- data de criação do conteúdo;
- duração confiável de cada aula;
- notas, favoritos e checklists próprios;
- pontos, streak, ranking e gamificação persistente;
- chamadas a API/Supabase;
- recomendações algorítmicas;
- analytics customizado persistente.

## Divergência a testar

A documentação descreve criação/remoção/renomeação de sections e snippets, mas a interface observada não mostra controles para adicionar arquivos. O projeto adota fixed-file mode até haver prova em conta real.

## Consequência

Componentes novos devem ser implementados como **variantes dentro dos arquivos existentes**, ou por composição do `index.json`, salvo validação posterior de criação de arquivos.
