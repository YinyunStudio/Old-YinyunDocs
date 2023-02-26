module.exports = {
    title: '阴云文档',
    description: '阴云项目的介绍与帮助文档',
    head: [
        ['link', {rel: 'icon', href: '/logo.png'}],
        ['meta', {name: 'keywords', content: '阴云,文档,帮助,说明,教程,介绍,阴云皮肤,渐蓝方块,vuepress'}],
        ['meta', {name: 'author', content: '阴云工作室,YinyunStudio'}],
    ],
    themeConfig: {
        nav: [
            { text: '阴云皮肤', link: '/yinyunskin/' },
            { text: '渐蓝方块', link: '/twobluecube/' },
            { text: '关于', link: '/about/' }
        ],
        sidebar: {
            '/yinyunskin/': [
              ['', '阴云皮肤'],     /* /foo/ */
              ['', '阴云皮肤'],  /* /foo/one.html */
              ['', '阴云皮肤']   /* /foo/two.html */
            ],
      
            '/twobluecube/': [
              '',      /* /bar/ */
              'three', /* /bar/three.html */
              'four'   /* /bar/four.html */
            ],

            '/about/': [
                ['', '关于'],
                'one/',
                'two/',
            ],
      
            // fallback
            '/': [
              '',        /* / */
              'contact', /* /contact.html */
              'about'    /* /about.html */
            ]
        },
        displayAllHeaders: true, // 默认值：false
        smoothScroll: true
    }
}