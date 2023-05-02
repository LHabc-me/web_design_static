<template>
    <div>
        <h1>About</h1>
        <n-h1 prefix="bar">
            关于我
        </n-h1>

        <text>
            吉林大学软件学院大二学生
        </text>
    </div>
</template>

<script>


import {NH1, NText} from "naive-ui";

export default {
    name: "AboutView",
    components: {
        NH1,
        // NText,
    },
    setup() {
        return {}
    }
}
</script>


<style scoped>

</style>