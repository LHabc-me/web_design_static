<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>


<script>


export default {
    methods: {
        tryHideScroll() {
            if (this.rule !== -1) {
                return;
            }
            this.rule = this.styleSheet.insertRule("::-webkit-scrollbar { width: 0 !important;height: 0; }");
        },
        tryShowScroll() {
            if (this.rule === -1) {
                return;
            }
            this.styleSheet.deleteRule(this.rule);
            this.rule = -1;
        },
        listenScroll() {
            const isAtIntroView = window.scrollY <= window.screen.height;
            if (isAtIntroView) {
                this.tryHideScroll();
            } else {
                this.tryShowScroll();
            }
        }
    },
    mounted() {
        document.head.appendChild(this.styleTag);
        this.styleSheet = this.styleTag.sheet;
        this.tryHideScroll();
        window.addEventListener('scroll', this.listenScroll);
    },
    data() {
        return {
            rule: -1,
            styleTag: document.createElement('style'),
            styleSheet: null,
        }
    }
}
</script>
<style lang="less">

</style>

