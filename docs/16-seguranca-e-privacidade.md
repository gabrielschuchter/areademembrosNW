# Segurança e privacidade

## Tema Kiwify

- não inserir chaves, tokens ou segredos em Liquid/CSS/JSON;
- não tentar chamar APIs privadas pelo frontend;
- links externos em nova aba devem usar `rel="noopener noreferrer"`;
- não confiar em CSS/HTML para autorização — acesso é responsabilidade da plataforma;
- preservar a lógica nativa de `user_data.visible`, expiração e ofertas;
- não expor dados pessoais inexistentes nos objetos públicos.

## Repositório

- o repo é público; não armazenar listas de alunos, e-mails privados, chaves ou URLs administrativas;
- IDs de cursos/módulos podem ficar versionados por necessidade operacional, mas devem ser tratados como configuração, não autenticação;
- screenshots devem evitar dados pessoais de alunos.
