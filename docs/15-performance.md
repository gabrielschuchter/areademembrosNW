# Performance

## Riscos

- muitas seções e carrosséis aumentam DOM e custo de layout;
- imagens de capa numerosas competem por rede/memória;
- fontes externas duplicadas atrasam renderização;
- blur/backdrop-filter excessivo custa GPU;
- transform em muitos cards pode gerar camadas demais;
- banner de 2000×590 precisa de compressão adequada.

## Regras

- uma família de fonte, com poucos pesos;
- lazy-load para imagens não críticas;
- preload somente para conteúdo realmente acima da dobra;
- AVIF/WebP via componente nativo quando possível;
- reduzir número de seções;
- animações em `transform`/`opacity` e com reduced motion;
- evitar filtros grandes em mobile;
- testar em dispositivo intermediário, não apenas desktop.
