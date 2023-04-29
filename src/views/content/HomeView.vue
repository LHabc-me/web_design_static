<template>
    <n-h1 prefix="bar"
          type="info">
        <n-text class="title">
            关于我
        </n-text>
    </n-h1>

    <n-text class="text">
        吉林大学软件学院大二学生
    </n-text>
    <div layout="row center-left">
        <n-button circle
                  :bordered="false"
                  v-for="(item, index) in connections"
                  :key="index"
                  @click="goUrl(item.link)">
            <n-icon class="button-icon">
                <component :is="item.icon"/>
            </n-icon>
        </n-button>
    </div>
</template>


<script>
import {NH1, NText, NButton} from "naive-ui";
import LogoGithub from "@vicons/ionicons5/LogoGithub";
import MailOutline from "@vicons/ionicons5/MailOutline";

export default {
    name: "HomeView",
    components: {
        NH1,
        NText,
        NButton
    },
    methods: {
        goUrl(link) {
            window.open(link, '_blank')
        }
    },
    setup() {
        return {
            connections: [
                {
                    name: "Github",
                    icon: LogoGithub,
                    link: "https://github.com/LHabc-me"
                },
                {
                    name: "E-mail",
                    icon: MailOutline,
                    link: "mailto:LHabc-me@outlook.com"
                }
            ]
        }
    }
}
</script>

<style scoped>
.text,
.title {
    color: black;
}

.text {
    font-size: 1.5rem;
}

.button-icon {
    width: 30px;
}
</style>