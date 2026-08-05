# Capacidades da Kiwify verificadas/documentadas

## Estrutura

- templates `index.json` e `login.json`;
- sections Liquid configuráveis por schema;
- snippets reutilizáveis;
- locales de interface e schema;
- CSS global;
- TailwindCSS no tema padrão;
- Embla Carousel;
- Microtip;
- componentes nativos hidratados, como imagem e autenticação.

## Dados observados

- `all_courses`, `all_courses_values`;
- `all_modules`;
- `all_lessons`;
- `last_watched_lessons`;
- `club`;
- `section`, `section.settings`, `section.blocks`, `section.block_order`;
- `user_data.visible`, `progress`, `expired`, `delivery_date`, `content_count`;
- `custom_offer.enabled`, `custom_offer.external_link`;
- imagens/capas e IDs para roteamento.

## O que isso permite

- hero e banner configuráveis;
- seções visualmente destacadas;
- cursos, módulos e aulas selecionados;
- continuar assistindo;
- progresso;
- bloqueio, expiração e liberação futura;
- ofertas e links externos;
- layouts vertical/horizontal;
- carrossel e grade via markup/CSS;
- mensagens, avisos, FAQs e links rápidos estáticos/configuráveis;
- tema claro/escuro respeitando classes nativas;
- localização PT/EN/ES.

## Limites documentados

- até 25 seções por template;
- até 50 blocos por seção;
- somente `index.json` e `login.json` como páginas customizáveis;
- JavaScript customizado não suportado.
