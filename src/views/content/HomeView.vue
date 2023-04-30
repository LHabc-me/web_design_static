<template>
    <div>
        <n-h1>Home</n-h1>
        <n-h2>欢迎来到LHabc的博客网站！</n-h2>

        <n-h3 prefix="bar">网站结构</n-h3>
        <n-ul>
            <n-li>About：个人简介</n-li>
            <n-li>Friend：友情简介</n-li>
            <n-li>Archives：日常分享和技术性文章</n-li>
        </n-ul>

        <n-h3 prefix="bar">建站所使用的框架和技术</n-h3>
        <n-ul>
            <n-li>
                <n-button text
                          @click="goUrl('https://cn.vuejs.org/')">
                    Vue3
                </n-button>
            </n-li>
            <n-li>
                <n-button text
                          @click="goUrl('https://www.naiveui.com/')">
                    Naive UI
                </n-button>
            </n-li>
        </n-ul>

        <n-h3 prefix="bar">首页背景</n-h3>
        <n-ul>
            <n-li>
                <n-button text
                          @click="goUrl('https://github.com/PavelDoGreat/WebGL-Fluid-Simulation/')">
                    基于WebGL的流体模拟
                </n-button>
            </n-li>
        </n-ul>
    </div>
</template>


<script>

import {NH1, NH2, NH3, NUl, NLi, NButton} from "naive-ui";
import {goUrl} from "@/assets/scripts/util";

export default {
    name: "HomeView",
    methods: {goUrl},
    components: {
        NH1,
        NH2,
        NH3,
        // NH4,
        NUl,
        NLi,
        NButton,
    },
    setup() {
        return {}
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