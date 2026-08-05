# Identidade visual

## Características observadas

- azul elétrico como acento principal;
- fundos muito escuros na experiência atual da plataforma;
- branco e azul em títulos de alto impacto;
- imagem do cérebro como elemento de marca recorrente;
- cards com capas verticais e gradientes escuros;
- superfícies com borda sutil, profundidade e glow azul;
- identidade acadêmica/tecnológica, não clínica genérica.

## Tokens de referência

Consulte `data/design-tokens.reference.json`. Eles foram extraídos dos sistemas atuais, mas ainda precisam ser adaptados ao DOM e às variáveis nativas da Kiwify.

## Decisões recomendadas

- uma única família tipográfica;
- namespace `nw-` para todo CSS próprio;
- escala consistente de raios, sombras e espaçamento;
- contraste mínimo AA;
- estado de foco visível;
- movimento sutil e dispensável;
- capas não devem ser a única fonte de identificação do conteúdo.

## Problema atual

O `global.css` importa Manrope e Outfit de forma concorrente, com imports em posição inválida e regras globais agressivas. A identidade precisa ser consolidada antes de novos componentes.
