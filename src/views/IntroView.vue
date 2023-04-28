<template>
    <div id="intro" class="full-screen" layout="columns center-center">
        <IntroViewBackGround id="background">
            <h1 id="welcome">
                {{ msg }}
            </h1>
        </IntroViewBackGround>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import IntroViewBackGround from "@/components/IntroViewBackGround.vue";

export default defineComponent({
    name: 'IntroView',
    components: {
        IntroViewBackGround,
    },
    data() {
        return {
            msg: "𝓦𝓮𝓵𝓬𝓸𝓶𝓮",
        }
    }
});
</script>

<style lang="less" scoped>
#welcome {
  color: white;
  font-size: 2.5rem;
}

#background {
  background: black;
}
</style>
