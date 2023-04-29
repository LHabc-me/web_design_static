<template>
    <div id="intro"
         class="full-screen"
         layout="column center-center">
        <IntroViewBackGround id="background"
                             layout="column center-center">
            <h1 id="welcome">{{ msg }}</h1>
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
    methods: {
        onMouseMove(event: MouseEvent) {
            if (!this.isMouseDown) {
                return;
            }
            this.mouseX = event.clientX;
            this.mouseY = event.clientY;
        },
        onkeyUp(event: KeyboardEvent) {
            console.log(event.key)
        }
    },
    data() {
        return {
            msg: "𝓦𝓮𝓵𝓬𝓸𝓶𝓮",
            mouseX: 0,
            mouseY: 0,
            isMouseDown: false
        }
    }
});
</script>

<style lang="less" scoped>
#welcome {
  color: white;
  font-size: 2.5rem;
}

</style>
