<template>
    <div id>
        <n-h1 id="about">About</n-h1>
        <n-h1 prefix="bar">
            关于我
        </n-h1>

        <div id="about-brief">
            <n-p> 就读于吉林大学软件学院，即将升入大三。</n-p>

            <n-p> 热爱编程，积极拥抱新技术。</n-p>
            <n-p>
                主攻：
                <n-ul>
                    <n-li>C++</n-li>
                    <n-li>JS</n-li>
                </n-ul>
                基本了解：
                <n-ul>
                    <n-li>C#</n-li>
                    <n-li>JAVA</n-li>
                    <n-li>QML</n-li>
                    <n-li>Python</n-li>
                </n-ul>
            </n-p>
            <n-p> 任天堂粉丝，卡普空粉丝，喜欢宝可梦、怪物猎人、生化危机。</n-p>
        </div>
    </div>
</template>

<script>


import {NH1, NUl, NLi, NP} from "naive-ui";

export default {
    name: "AboutView",
    components: {
        NH1, NUl, NLi, NP
    }
}
</script>


<style scoped>
#about-brief {
    line-height: 2.5;
}

p {
    font-size: 18px;
}

#about {
    font-size: 30px;
    font-weight: bold;
}
</style>