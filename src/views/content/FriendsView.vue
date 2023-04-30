<template>
    <div>
        <h1 v-for="i in 100" :key="i">Friends</h1>
    </div>
</template>

<script>
export default {
    name: "FriendsView",
    mounted() {
        console.log(123)
    }
}
</script>

<style scoped>

</style>