<template>
    <div>
        <h1>Archives</h1>
        <button v-for="(item, index) in archives"
                :key="index"
                @click="$router.push('/archives/' + item.name)">
            click me
        </button>
    </div>
</template>

<script>

export default {
    setup() {
        return {
            archives: [
                {
                    name: 'archiveone',
                    title: '',
                    brief: ''
                },
                {
                    name: 'archivetwo',
                    title: '',
                    brief: ''
                },
                {
                    name: 'archivethree',
                    title: '',
                    brief: ''
                },
            ]
        }
    }
}
</script>