# Diretriz de produto — preservar a estrutura da home

## Status

**Aprovada pelo responsável pelo produto em 2026-08-05.**

Esta diretriz substitui propostas anteriores de condensar a home em poucas seções.

## Intenção da estrutura atual

A área de membros não foi organizada apenas para facilitar descoberta. Ela também precisa comunicar, de forma visível, a amplitude e o volume do acervo Nutriwork+.

Por isso, a repetição de fileiras por módulo e formato é deliberada.

## Estrutura que deve ser preservada

1. **Banner principal** no topo.
2. **Continuar assistindo**, com conteúdos acessados anteriormente.
3. **Caixa de boas-vindas**, com orientação geral.
4. **Boas-vindas**, contendo vídeos introdutórios e acesso à comunidade.
5. **Todos os módulos/produtos**, em fileira horizontal:
   - Introdução à Nutrição;
   - Nutrição Baseada em Evidências;
   - Nutrição Clínica;
   - Nutrição Esportiva;
   - Nutrição Comportamental;
   - Bioquímica da Nutrição;
   - Nutrição Materno-infantil;
   - Saúde Coletiva;
   - Fisiologia Humana;
   - Aulas gravadas de encontros ao vivo;
   - Análise de artigo;
   - NW Cast;
   - Comfort Place;
   - Studio.
6. **Seus extras**, variável conforme os produtos e acessos do aluno.
7. **Detalhamento do acervo por módulo**, mantendo fileiras próprias para aulas, e-books e outros formatos existentes.

## O que não pode ser feito sem nova autorização

- reduzir a home para cerca de dez seções;
- fundir aulas e e-books de um módulo em uma única fileira;
- remover fileiras por serem repetitivas;
- substituir o catálogo detalhado por apenas trilhas ou categorias;
- reordenar a sequência estrutural principal;
- ocultar volume de conteúdo com o objetivo de deixar a página mais curta;
- transformar toda a home em um dashboard minimalista.

## O que pode e deve ser melhorado

- identidade visual;
- títulos, subtítulos e microcopy;
- diferenciação entre módulos, aulas, e-books, podcasts e extras;
- destaque visual de seções prioritárias;
- caixa de boas-vindas;
- banner;
- cards e capas;
- progresso e estados de acesso;
- responsividade;
- experiência touch;
- acessibilidade;
- navegação por teclado;
- carregamento e estabilidade visual;
- estados vazios;
- suporte e comunicação;
- tela de login;
- consistência entre navegador e aplicativo, dentro do que a Kiwify permitir;
- componentes adicionais que não substituam as fileiras existentes.

## Regra para novas funcionalidades

Uma funcionalidade nova é aceitável quando:

1. é aditiva;
2. não remove uma fileira existente;
3. não altera a finalidade editorial do catálogo detalhado;
4. funciona sem JavaScript customizado, API externa ou armazenamento próprio;
5. preserva acesso, progresso, expiração, liberação e ofertas nativas;
6. foi testada no navegador e no aplicativo separadamente.

## Divergência navegador × aplicativo Kiwify

### Observação verificada pelo responsável pelo produto

Existe diferença importante entre a área de membros acessada pelo navegador e a experiência exibida no aplicativo Kiwify.

### Estado da evidência

A causa técnica ainda não está documentada nas fontes oficiais consultadas. Não sabemos, por enquanto, se o aplicativo:

- reutiliza integralmente o tema Liquid;
- aplica apenas parte do CSS;
- renderiza componentes nativos próprios;
- mantém cache independente;
- utiliza estrutura ou dados diferentes;
- ignora determinados elementos customizados.

Esses itens são hipóteses e não devem ser tratados como fatos antes de teste.

### Consequência operacional

Cada mudança deve ser classificada em uma matriz:

| Elemento | Navegador desktop | Navegador mobile | App Android | App iOS | Observações |
|---|---|---|---|---|---|
| Banner | testar | testar | testar | testar | proporção, corte, links |
| Continuar assistindo | testar | testar | testar | testar | lista, imagem, progresso |
| Welcome box | testar | testar | testar | testar | aparece ou é ignorada |
| Títulos de fileira | testar | testar | testar | testar | hover versus touch |
| Cards | testar | testar | testar | testar | layout, texto, rota |
| Estados de acesso | testar | testar | testar | testar | bloqueio, oferta, data |
| CSS próprio | testar | testar | testar | testar | suporte parcial ou total |

## Estratégia correta

O objetivo não é redesenhar uma home ideal abstrata. É melhorar profundamente a experiência real do Nutriwork+ **dentro da arquitetura de fileiras escolhida pelo produto**, reconhecendo que navegador e aplicativo podem exigir soluções e expectativas diferentes.
