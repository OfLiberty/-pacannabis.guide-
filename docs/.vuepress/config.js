module.exports = {
  head: [
    ['meta', { property: 'og:title', content: 'PA Cannabis Guide'}],
    ['meta', { property: 'og:description', content: 'Handbook guiding PA patients through cannabis products, services, and news.'}],
    ['meta', { property: 'og:image', content: 'https://pacannabis.guide/images/open-graph.png'}],
    ['link', { rel: 'shortcut icon', href: `/favicons/favicon.ico` }],
    ['link', { rel: 'icon', type:"image/png", sizes:"16x16", href: `/favicons/favicon-16x16.png` }],
    ['link', { rel: 'icon', type:"image/png", sizes:"32x32", href: `/favicons/favicon-32x32.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/favicons/apple-touch-icon.png` }],
    ['link', { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#1a7b00' }],
    ['meta', { name: 'msapplication-config', content: '/favicons/browserconfig.xml' }],
    ['meta', { name: 'msapplication-TileColor', content: '#1a7b00' }],
    ['link', { rel: 'stylesheet', href: 'https://pro.fontawesome.com/releases/v5.6.3/css/all.css', integrity: 'sha384-LRlmVvLKVApDVGuspQFnRQJjkv0P7/YFrw84YYQtmYG4nK8c+M+NlmYDCv0rKWpG', crossorigin: 'anonymous' }],
    // ['link', { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',integrity:"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO",  crossorigin: 'anonymous' }],
  ],
  themeConfig: {
    serviceWorker: {
      updatePopup: true,
    },
    search: true,
    searchMaxSuggestions: 10,
    // displayAllHeaders: true,
    docsRepo: 'OfLiberty/pacannabis.guide',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Language',
        editLinkText: 'Help us improve this page!',
        lastUpdated: 'Last Updated',
        nav: [
          { text: 'Guide', link: '/guide/' },
          { text: 'Blog', link: '/blog/' },
          { text: 'Store', link: 'https://shop.meorator.com/collections/pa-cannabis-guide'}
        ],
        sidebar: {
          '/guide/': [
            '',   
            'getting-certified',
            'dispensaries/',
            'cannabis',
            'tools',
          ],
          
          '/blog/': [
            '',    
            'faqs',
          ],
        },
      },
      '/es/': {
        label: 'Español',
        selectText: 'Idioma',
        editLinkText: '¡Ayúdanos a mejorar esta página!',
        lastUpdated: 'Última actualización',
        nav: [
          { text: 'Guía', link: '/es/guide/' },
          { text: 'Blog', link: '/es/blog/' },
          { text: 'Almacenar', link: 'https://shop.meorator.com/collections/pa-cannabis-guide'}

        ],
        sidebar: {
          '/es/guide/': [
            '',   
            'getting-certified',
            'dispensaries/',
            'cannabis',
            'tools',
          ],
          
          '/es/blog/': [
            '',    
            'faqs',
          ],
        },
      }
    }
  },
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'PA Cannabis Guide',
      description: 'Handbook guiding PA patients through cannabis products, services, and news.'
    },
    '/es/': {
      lang: 'es-US',
      title: 'Guía PA Cannabis',
      description: 'Manual que guía a los pacientes con PA a través de productos de cannabis, servicios y noticias.'
    }
  },
  plugins: [
    ['@vuepress/i18n-ui'],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', false],
    ['@vuepress/notification', true],
    ['@vuepress/google-analytics', {
      ga: 'UA-129734946-2'
    }],
    // ['register-components', {
    //     components: [
    //       {
    //         name: 'dispensary',
    //         path: './components/Dispensary.vue'
    //       }
    //     ]
    // }]
  ],
  markdown: {
    externalLinks: { permalinkBefore: false },
    anchor: { permalinkSymbol: '<i class="fas fa-bong"></i>' },
  },
  // ga: 'UA-129734946-2',
  // impactWireless: 'https://influencepays.clickfunnels.com/influencer-back-office',
}

