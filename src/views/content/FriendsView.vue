<template>
    <div>
        <h1>Friends</h1>
        <n-h1 prefix="bar">友情链接和有趣网站，排名不分先后</n-h1>
        <n-ul>
            <n-li v-for="(item, index) in friends"
                  :key="index">
                <n-button text
                          @click="goUrl(item.link)">
                    <span class="friend-name"> {{ item.name }}</span>
                </n-button>
                {{ ' - ' }}
                {{ item.brief }}
            </n-li>
        </n-ul>
        <n-h1 prefix="bar">记录一些适用于Vue 3的组件库以备忘</n-h1>
        <n-ul>
            <n-li v-for="(item, index) in libs"
                  :key="index">
                <n-button text
                          @click="goUrl(item.link)">
                    <span class="lib-name"> {{ item.name }}</span>
                </n-button>
                {{ ' - ' }}
                {{ item.brief }}
            </n-li>
        </n-ul>
    </div>
</template>

<script>
import {NH1, NUl, NLi, NButton} from "naive-ui";
import {goUrl} from "@/assets/scripts/util";

export default {
    name: "FriendsView",
    components: {
        NH1, NUl, NLi, NButton
    },
    methods: {
        goUrl
    },
    setup() {
        return {
            friends: [
                {
                    name: 'Mr.Hope',
                    brief: 'Vuepress Hope主题作者，现于东北师范大学攻读物理学硕士',
                    link: 'https://mrhope.site/'
                },
                {
                    name: 'Kina Zhang',
                    brief: 'Kina Zhang的博客，内含有趣的JS动画',
                    link: 'https://delete-cloud.github.io/'
                },
                {
                    name: 'ChtJT',
                    brief: 'ChtJT的博客',
                    link: 'https://chtjt.github.io/'
                },
                {
                    name: 'O-rz',
                    brief: 'O-rz的博客',
                    link: 'https://o-rz.github.io/'
                },
                {
                    name: 'cppquiz',
                    brief: '高难度C++题目，在线练习',
                    link: 'https://cppquiz.org/'
                },
                {
                    name: 'Google Fonts',
                    brief: '谷歌字体库，可以在线使用的免费字体',
                    link: 'https://fonts.google.com/'
                },
                {
                    name: 'Flat UI Palette',
                    brief: '网站配色方案指南',
                    link: 'https://flatuicolors.com/palette/cn/'
                },
                {
                    name: '52poke',
                    brief: '神奇宝贝百科，关于宝可梦的百科全书',
                    link: 'https://wiki.52poke.com/'
                },
                {
                    name: 'HFO4',
                    brief: '可以玩宝可梦的Github主页',
                    link: 'https://github.com/HFO4'
                },
                {
                    name: '现代JavaScript教程',
                    brief: '最好的JavaScript教程，没有之一',
                    link: 'https://zh.javascript.info/',
                },
                {
                    name: 'Learn Git Branching',
                    brief: '在线学习Git',
                    link: 'https://learngitbranching.js.org/',
                }
            ].sort((a, b) => {
                return a.name.localeCompare(b.name)
            }),

            libs: [
                {
                    name: 'Naive UI',
                    brief: 'Vue 3的UI组件库，基于Vue 3和CSS的组件库',
                    link: 'https://www.naiveui.com/'
                },
                {
                    name: 'Element Plus',
                    brief: 'Element UI的Vue 3版本',
                    link: 'https://element-plus.gitee.io/zh-CN/'
                },
                {
                    name: 'Ant Design Vue',
                    brief: 'Ant Design的Vue 3版本',
                    link: 'https://ant.design/index-cn'
                },
                {
                    name: 'Vuetify UI',
                    brief: '一个不需要设计技能的 UI 库，其中包含精美的手工制作的 Vue 组件',
                    link: 'https://vuetifyjs.com/'
                },
                {
                    name: 'We UI',
                    brief: '一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一',
                    link: 'https://weui.io/'
                }, {
                    name: 'View Design',
                    brief: '基于 Vue 3 的企业级 UI 组件库和中后台系统解决方案，为数万开发者服务',
                    link: 'https://www.iviewui.com/'
                },
            ].sort((a, b) => {
                return a.name.localeCompare(b.name)
            })
        }
    }
}
</script>

<style lang="less" scoped>
ul {
  * {
    font-size: 18px;
  }
}

.friend-name,
.lib-name {
  text-decoration-line: underline;
  text-decoration-color: rgba(127, 127, 127, 0.7);

  text-decoration-skip-ink: none;
}
</style>