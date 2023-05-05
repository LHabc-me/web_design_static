<template>
    <div layout="column center-center">
        <IntroView></IntroView>
        <ContentView></ContentView>

    </div>
</template>

<script lang="ts">

import IntroView from "@/views/IntroView.vue";
import ContentView from "@/views/ContentView.vue";

export default {
    name: "MainPage",
    components: {
        IntroView,
        ContentView
    },
}
</script>

<style lang="less" scoped>

</style>