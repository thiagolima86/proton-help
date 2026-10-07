import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Ajuda Proton',
  description: 'Documentação de ajuda para usuários do Proton',
  lang: 'pt-BR',
  lastUpdated: true,
  cleanUrls: true,

  // Troque pelo nome real do repositório se for diferente, para o GitHub Pages servir os assets corretamente.
  base: '/proton-help/',

  themeConfig: {
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Primeiros passos', link: '/primeiros-passos/introducao' },
    ],

    sidebar: [
      {
        text: 'Primeiros passos',
        items: [
          { text: 'Introdução', link: '/primeiros-passos/introducao' },
        ],
      },
      {
        text: 'Funcionalidades',
        items: [
          { text: 'Visão geral', link: '/funcionalidades/visao-geral' },
        ],
      },
      {
        text: 'Perguntas frequentes',
        items: [
          { text: 'FAQ', link: '/faq' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/thiagolima86/proton' },
    ],

    search: {
      provider: 'local',
    },

    footer: {
      message: 'Documentação de ajuda do Proton',
      copyright: 'Proton',
    },
  },
})
