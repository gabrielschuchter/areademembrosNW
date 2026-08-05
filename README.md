# Área de Membros Nutriwork — Kiwify

Repositório-fonte da personalização da área de membros do **Nutriwork+** na Kiwify.

A Kiwify não oferece, no editor atualmente disponível para esta conta, um fluxo confiável de exportação/importação ou sincronização com GitHub. Por isso, este repositório funciona como:

1. **fonte oficial do código** que será copiado manualmente para a Kiwify;
2. **base de conhecimento do Nutriwork**, com produto, público, conteúdo, identidade, voz e experiência desejada;
3. **registro auditável** do estado atual, decisões, limitações e releases;
4. **ambiente de validação** de JSON, locales, limites e integridade antes de qualquer colagem no editor.

## Estado do projeto

- `kiwify/current/`: fotografia fiel do código atualmente coletado no editor da Kiwify;
- `docs/`: documentação de produto, UX, tecnologia, QA e publicação;
- `data/`: conhecimento estruturado, rastreável e reutilizável por humanos e agentes;
- `scripts/`: verificações locais que não rodam dentro da Kiwify;
- `kiwify/releases/`: releases futuros prontos para copiar e colar.

> **Regra central:** nunca editar diretamente `kiwify/current/`. Alterações devem nascer em uma release/candidate, ser comparadas, validadas e só então copiadas para a Kiwify.

## Começo rápido

```bash
npm install
npm run validate
```

O validador verifica, entre outros pontos:

- JSON válido;
- referências entre `order` e `sections`;
- máximo documentado de 25 seções por template;
- máximo documentado de 50 blocos por seção;
- paridade de chaves entre os três arquivos `*.default.json`;
- paridade de chaves entre os três arquivos `*.schema.json`;
- arquivos esperados pela instalação atual;
- problemas conhecidos de CSS e segurança de links.

## Fontes principais

- área de membros atual, capturada manualmente no Google Drive;
- site principal `gabrielschuchter/nutriwork-plus`;
- campanha `gabrielschuchter/nutriwork-plus-aniversario`;
- produto complementar `gabrielschuchter/bancodequestoesNW`;
- documentação oficial da Kiwify para temas da área de membros.

Consulte [`docs/01-fontes-e-rastreabilidade.md`](docs/01-fontes-e-rastreabilidade.md) antes de transformar qualquer afirmação em requisito.

## Princípio de produto

A home da área de membros deve deixar de parecer uma sequência indiferenciada de carrosséis e passar a funcionar como um **dashboard de aprendizagem**: orientar, permitir retomada, mostrar prioridade, organizar o acervo e reduzir carga cognitiva — sem prometer capacidades que o tema Liquid da Kiwify não possui.
