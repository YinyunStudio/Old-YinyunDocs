module.exports = {
    title: '阴云文档',
    description: '阴云项目的介绍与帮助文档',
    
    locales: {
        '/': {
          lang: 'zh-CN',
        }
    },


    head: [
        ['link', {rel: 'icon', href: '/logo.png'}],
        ['meta', {name: 'keywords', content: '阴云,文档,帮助,说明,教程,介绍,阴云皮肤,渐蓝方块,vuepress'}],
        ['meta', {name: 'author', content: '阴云工作室,YinyunStudio'}],
    ],

    
    plugins: {
        '@vuepress/medium-zoom': true,
        '@vuepress/last-updated': {
            transformer: (timestamp) => {
            const moment = require('moment')
            moment.locale('zh-cn')
            return moment(timestamp).format('LL');
            }
        }
    },

    
    themeConfig: {
        nav: [
            { text: '阴云皮肤', link: '/yinyunskin/' },
            { text: '渐蓝方块', link: '/twobluecube/' },
            { text: '关于', link: '/about/' }
        ],

        sidebar: {
            '/yinyunskin/': [
                ['', '阴云皮肤'],
                {
                    title: '使用指南',
                    children: [
                        ['guide/create-account/', '创建账号'],
                        ['guide/select-skin/', '选择皮肤'],
                        ['guide/launcher-setup/', '启动器设置']
                    ]
                }
            ],
      
            '/twobluecube/': [
                ['', '渐蓝方块'],
                // ['/guide/', '教程'],
                {
                    title: '教程',
                    children: [
                        ['guide/', '进服指南'],
                        ['guide/java/', 'Java版教程'],
                        ['guide/bedrock/', '基岩版教程']
                    ]
                }
            ],

            '/about/': [
                ['', '关于']
            ]
        },

        lastUpdated: '上次编辑于',
        displayAllHeaders: true,
        smoothScroll: true,
        search: true,
        searchMaxSuggestions: 10
    }
}