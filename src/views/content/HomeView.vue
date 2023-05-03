<template>
    <div>
        <h1>Home</h1>
        <n-h2>欢迎来到LHabc的博客网站！</n-h2>

        <n-h3 prefix="bar">网站结构</n-h3>
        <n-ul>
            <n-li v-for="(item, index) in briefs"
                  :key="index">
                <n-button text
                          @click="$router.push(item.link)">
                    {{ item.name }} - {{ item.brief }}
                </n-button>
            </n-li>
        </n-ul>

        <n-h3 prefix="bar">建站所使用的框架和技术</n-h3>
        <n-ul>
            <n-li v-for="(item, index) in frameworks"
                  :key="index">
                <n-button text
                          @click="goUrl(item.link)">
                    {{ item.name }} - {{ item.brief }}
                </n-button>
            </n-li>
        </n-ul>
    </div>
</template>


<script>

import {NH2, NH3, NUl, NLi, NButton} from "naive-ui";
import {goUrl} from "@/assets/scripts/util";

export default {
    name: "HomeView",
    methods: {
        goUrl
    },
    components: {
        NH2,
        NH3,
        NUl,
        NLi,
        NButton,
    },
    setup() {
        return {
            briefs: [
                {
                    name: "Home",
                    brief: "首页",
                    link: "/home"
                },
                {
                    name: "About",
                    brief: "个人简介",
                    link: "/about"
                },
                {
                    name: "Friends",
                    brief: "友情链接、有趣的网站",
                    link: "/friends"
                },
                {
                    name: "Archives",
                    brief: "日常分享和技术性文章",
                    link: "/archives"
                }
            ],
            frameworks: [
                {
                    name: "Vue 3",
                    brief: "一个用于构建用户界面的渐进式框架",
                    link: "https://cn.vuejs.org/"
                },
                {
                    name: "Naive UI",
                    brief: "一个 Vue 3 组件库，用于快速搭建网站",
                    link: "https://www.naiveui.com/"
                },
                {
                    name: "Less",
                    brief: "一门向后兼容的 CSS 扩展语言",
                    link: "https://less.devjs.cn/"
                },
                {
                    name: "基于WebGL的流体模拟",
                    brief: "用它给首页加了个流体特效",
                    link: "https://github.com/PavelDoGreat/WebGL-Fluid-Simulation/"
                },
                {
                    name: "烟花特效",
                    brief: "基于源代码修改了烟花生成数量和生成半径，修复了点击一下放两次烟花的Bug",
                    link: "https://blog.csdn.net/qq_43562785/article/details/109511585?ydreferer=aHR0cHM6Ly93d3cuYmluZy5jb20v"
                }
            ]
        }
    }
}
</script>

<style scoped>
h1 {
    color: black;
    font-weight: bold;
    font-size: 30px;
}

h2 {
    font-size: 28px;
}

h3 {
    font-size: 26px;
}

h4 {
    font-size: 24px;
}

ul {
    * {
        font-size: 18px;
    }
}
</style>