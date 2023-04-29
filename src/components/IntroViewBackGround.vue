<template>
    <div id="intro-background" class="full" layout="row center-center">
        <canvas id="background" class="full">

        </canvas>
        <slot id="content" self="center">

        </slot>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "HomePageBackGround"
});
</script>

<style lang="less" scoped>
* {
  pointer-events: none;
  user-select: none;
}

#intro-background {
  position: fixed;
  bottom: 0;
}

#background {
  position: absolute;
  z-index: -1;
}

#content {
  position: absolute;
  z-index: 1;
}
</style>