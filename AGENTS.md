# proton-help

Este repositório contém a **documentação de ajuda para usuários finais do Proton** (o app real está em [github.com/thiagolima86/proton](https://github.com/thiagolima86/proton), repo privado — não está disponível aqui). Este repo é só documentação, não tem código da aplicação Proton.

## Gestão de trabalho

- As **issues** relacionadas a este repositório (`proton-help`) são criadas e acompanhadas no repositório **`thiagolima86/proton`**, não aqui.
- O trabalho é organizado em **ciclos**, que no GitHub correspondem a **milestones** do repo `proton` (ex: milestone "🦆 Pato").

### Fluxo de Issues e Desenvolvimento
- **Iniciar Issue:** Ao pedir para iniciar uma issue, o agente deve marcá-la com a label `doing` (removendo `ready`/`planning`) e atribuir a si mesmo (`@me`).
- **Encerrar Issue:** Ao pedir para encerrar o desenvolvimento, a label `doing` deve ser removida e a issue fechada como `completed`.
- **Refinamento de Issues (`planning`):**
  - **Decisões simples/óbvias:** O agente toma sozinho (estruturação, checklists, padrões).
  - **Decisões complexas/ambíguas:** O agente deve perguntar ao usuário antes de decidir.
  - Após refinada, mover de `planning` para `ready`.

## O que este repo é

- Site estático de documentação, renderizado client-side no navegador via **Docsify** a partir de arquivos Markdown em `docs/`.
- Publicado diretamente no **GitHub Pages** (apontando para a branch `main` e pasta `/docs`), sem etapa de build/CI ou servidor de backend em produção.
- Tema customizado claro/escuro (dark/light) com a identidade visual do Proton.

## Estrutura

```
docs/
  .nojekyll          # desativa processamento do Jekyll no GitHub Pages
  index.html         # casca HTML e configuração do Docsify / temas
  README.md          # página inicial / boas-vindas
  _sidebar.md        # navegação lateral
  _design/           # mockups e identidade visual
  primeiros-passos/   # onboarding do usuário
  funcionalidades/    # documentação das funcionalidades do app
  faq.md              # perguntas frequentes
```

## Convenções de conteúdo

- Todo o conteúdo é em **português** e escrito para o **usuário final não-técnico** do Proton — evite jargão técnico, explique em termos de telas e ações que o usuário vê no app.
- Cada nova página markdown em `docs/` precisa ser adicionada ao menu em `docs/_sidebar.md` para aparecer na navegação.
- Use nomes de arquivo em kebab-case, sem acento (ex: `recuperar-senha.md`).
- Ao documentar uma funcionalidade, descreva o fluxo do ponto de vista do usuário (o que ele vê, o que ele clica, o que esperar), não a implementação.

## Comandos

Para testar localmente, execute qualquer servidor HTTP estático na pasta `docs`:

```bash
# Opção 1 (usando npx docsify-cli):
npx docsify serve docs

# Opção 2 (usando Python):
python -m http.server 3000 --directory docs

# Opção 3 (usando npx serve):
npx serve docs
```

## Deploy

- Publicação direta no GitHub Pages apontando para a pasta `/docs` da branch `main`.
- Não há necessidade de build manual ou CI complexo.

## O que evitar

- Não adicionar backend, API, ou servidor — este site é 100% estático.
- Não introduzir dependências de autenticação/login para acessar a documentação (ela é pública, mesmo hospedando conteúdo sobre um app privado).
- Não copiar código-fonte do repo `proton` para aqui — este repo é só a documentação de uso, não o código da aplicação.
