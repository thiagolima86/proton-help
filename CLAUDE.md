# proton-help

Este repositório contém a **documentação de ajuda para usuários finais do Proton** (o app real está em `github.com/thiagolima86/proton`, repo privado — não está disponível aqui). Este repo é só documentação, não tem código da aplicação Proton.

## O que este repo é

- Site estático de documentação, gerado com **VitePress** a partir de arquivos Markdown em `docs/`.
- Publicado no **GitHub Pages** via GitHub Actions (`.github/workflows/deploy.yml`), sem backend/servidor em produção.
- Tema dark/light já vem nativo do VitePress.

## Estrutura

```
docs/
  .vitepress/
    config.mts       # configuração do site (nav, sidebar, título, etc)
  index.md           # página inicial (home)
  primeiros-passos/   # onboarding do usuário
  funcionalidades/    # documentação das funcionalidades do app
  faq.md              # perguntas frequentes
```

## Convenções de conteúdo

- Todo o conteúdo é em **português** e escrito para o **usuário final não-técnico** do Proton — evite jargão técnico, explique em termos de telas e ações que o usuário vê no app.
- Cada nova página markdown em `docs/` precisa ser adicionada ao `sidebar` em `docs/.vitepress/config.mts` para aparecer na navegação.
- Use nomes de arquivo em kebab-case, sem acento (ex: `recuperar-senha.md`).
- Ao documentar uma funcionalidade, descreva o fluxo do ponto de vista do usuário (o que ele vê, o que ele clica, o que esperar), não a implementação.

## Comandos

```bash
npm install        # instala dependências
npm run docs:dev    # roda o site localmente em modo dev
npm run docs:build   # gera o build estático em docs/.vitepress/dist
npm run docs:preview # serve o build estático localmente
```

## Deploy

- Push na branch `main` dispara o workflow do GitHub Actions que faz build e publica automaticamente no GitHub Pages.
- Não há necessidade de build manual ou deploy manual.

## O que evitar

- Não adicionar backend, API, ou servidor — este site é 100% estático.
- Não introduzir dependências de autenticação/login para acessar a documentação (ela é pública, mesmo hospedando conteúdo sobre um app privado).
- Não copiar código-fonte do repo `proton` para aqui — este repo é só a documentação de uso, não o código da aplicação.
