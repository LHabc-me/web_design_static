<template>
    <div id="content-root" class="full">
        <h1 v-for="i in 10000" :key="i">{{ i }}</h1>
    </div>
</template>

<script>


export default {
    name: "AboutView",
}
</script>

<style scoped>
#content-root {
    width: 100%;
}
</style>