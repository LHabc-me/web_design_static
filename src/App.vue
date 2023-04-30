<template>
    <n-config-provider :theme-overrides="themeOverrides"
                       :locale="locale"
                       :date-locale="dateLocale">
        <!--        <n-theme-editor>-->
        <div id="app">
            <router-view></router-view>
        </div>
        <!--        </n-theme-editor>-->
    </n-config-provider>

</template>


<script>
import {NConfigProvider, NThemeEditor, darkTheme} from 'naive-ui';
import {zhCN, dateZhCN} from 'naive-ui'

const themeOverrides = {
    common: {
        "primaryColor": "#2080f0FF",
        "primaryColorHover": "#4098FCFF",
        "primaryColorPressed": "#1060C9FF",
        "primaryColorSuppl": "#4098FCFF"
    }
}
export default {
    components: {
        NConfigProvider,
        // NThemeEditor
    },
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
    setup() {
        return {
            rule: -1,
            styleTag: document.createElement('style'),
            styleSheet: null,
            themeOverrides,
            locale: zhCN,
            dateLocale: dateZhCN,
            darkTheme
        }
    }
}
</script>
<style lang="less">

</style>

