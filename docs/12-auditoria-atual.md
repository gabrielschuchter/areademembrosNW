# Auditoria do estado atual

## P0 — Template acima do limite

`index.json` contém 26 itens em `order`, acima do máximo documentado de 25. O objetivo não deve ser apenas remover um: a home precisa ser condensada para cerca de 8–12 seções.

## P0 — CSS malformado

- `@import` aparece após regras CSS;
- há um `}` excedente antes do segundo import;
- Manrope e Outfit competem;
- seletores globais com `!important` atingem componentes nativos.

## P1 — Welcome box acoplada

A mensagem de boas-vindas foi inserida diretamente em `modules.liquid`. Toda instância da seção pode repetir o bloco. Deve virar variante configurável ou ser associada somente a uma instância validada.

## P1 — Informação dependente de hover

A maioria das instâncias usa `mouse_hover`; o título recebe opacidade zero até hover/foco. Em touch, a descoberta é frágil. Conteúdo essencial deve ser sempre visível.

## P1 — Home excessivamente longa

Há muitas seções de aulas e e-books por área, além de cursos e extras. O aluno percorre carrosséis equivalentes sem hierarquia clara.

## P1 — Link externo

O card abre links externos com `target="_blank"`, mas não inclui `rel="noopener noreferrer"`.

## P2 — Datas

A data de liberação usa `%B %d, %Y`, o que pode produzir formato em inglês e pouco natural para PT-BR.

## P2 — Banner

O `alt` é sempre vazio. Isso só é adequado para imagem decorativa; banners com texto incorporado precisam de alternativa acessível ou conteúdo HTML equivalente.

## P2 — Preview

O placeholder cinza em “Continuar assistindo” pode ser apenas a aula fictícia sem imagem criada no preview, não necessariamente falha de produção.
