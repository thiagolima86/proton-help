# proton-help

Documentação de ajuda para usuários do [Proton](https://github.com/thiagolima86/proton), publicada como site estático no GitHub Pages utilizando **Docsify**.

## Visualização Local

Para visualizar localmente, inicie um servidor HTTP na pasta `docs/`:

```bash
# Com docsify-cli
npx docsify serve docs

# Ou com Python
python -m http.server 3000 --directory docs
```

Abra `http://localhost:3000` no seu navegador.

## Deploy

Automático via GitHub Pages:
1. Em **Settings → Pages** do repositório no GitHub.
2. Em **Build and deployment > Source**, selecione **Deploy from a branch**.
3. Escolha a branch `main` e a pasta `/docs`.

## Estrutura

Conteúdo em `docs/*.md`. Veja [AGENTS.md](./AGENTS.md) para convenções de conteúdo e estrutura.
