# proton-help

Documentação de ajuda para usuários do [Proton](https://github.com/thiagolima86/proton), publicada como site estático no GitHub Pages.

## Desenvolvimento

```bash
npm install
npm run docs:dev
```

## Build

```bash
npm run docs:build
npm run docs:preview
```

## Deploy

Automático via GitHub Actions a cada push na branch `main` (ver `.github/workflows/deploy.yml`).

Para habilitar: em **Settings → Pages** do repositório no GitHub, configure **Source: GitHub Actions**.

## Estrutura

Conteúdo em `docs/*.md`. Veja [AGENTS.md](./AGENTS.md) para convenções de conteúdo e estrutura.
