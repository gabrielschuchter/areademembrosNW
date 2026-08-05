# Acessibilidade

## Critérios mínimos

- navegação por teclado completa;
- foco visível;
- ordem de foco coerente;
- nomes acessíveis para setas, dots e CTAs;
- títulos não dependentes de hover;
- contraste AA para texto e controles;
- imagens informativas com alternativa textual;
- ícones decorativos com `aria-hidden`;
- progresso com rótulo contextual;
- touch targets de pelo menos ~44×44 px;
- suporte a `prefers-reduced-motion`;
- não usar somente cor para estado.

## Achados atuais

- botões do Embla não têm texto/`aria-label` explícito;
- banner usa `alt=""` invariavelmente;
- `mouse_hover` oculta títulos;
- `div` clicável nativo exige teste de teclado;
- tooltips não substituem texto persistente em mobile.

## Teste manual

1. Tab do início ao fim.
2. Ativar todos os controles com teclado.
3. Navegar a 200% de zoom.
4. Verificar 320 px de largura.
5. Simular alto contraste/reduced motion.
6. Testar leitor de tela nos fluxos principais.
