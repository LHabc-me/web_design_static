<template>
    <div class="full-screen"
         layout="column center-center">
        <n-result status="404" title="404 资源不存在" description="生活总归带点荒谬">
            <template #footer>
                <n-button @click="$router.go(-1)">
                    回到上一级
                </n-button>
            </template>
        </n-result>
    </div>
</template>

<script>
import {NResult, NButton} from "naive-ui";

export default {
    components: {
        NResult,
        NButton
    },
    name: "NotFoundView"
}
</script>

<style scoped>

</style>