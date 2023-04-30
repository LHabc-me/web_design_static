<template>
    <div>
        <h1>About</h1>
        <n-h1 prefix="bar">
            <n-text class="title">
                关于我
            </n-text>
        </n-h1>

        <n-text class="text">
            吉林大学软件学院大二学生
        </n-text>


        <n-h1 prefix="bar">
            <n-text class="title">
                关于此博客
            </n-text>
        </n-h1>
    </div>
</template>

<script>


import {NH1, NText} from "naive-ui";

export default {
    name: "AboutView",
    components: {
        NH1,
        NText,
    },
    setup() {
        return {}
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
</style>