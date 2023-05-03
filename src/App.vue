<template>
    <n-config-provider :theme-overrides="themeOverrides"
                       :locale="locale"
                       :date-locale="dateLocale"
                       :hljs="hljs">
        <div id="app">
            <router-view></router-view>
        </div>
    </n-config-provider>

</template>


<script>
import {NConfigProvider, darkTheme} from 'naive-ui';
import {zhCN, dateZhCN} from 'naive-ui'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import bash from 'highlight.js/lib/languages/bash'
import cpp from 'highlight.js/lib/languages/cpp'

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('cpp', cpp);

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
            const isAtIntroView = window.scrollY <= window.innerHeight + 1;
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
            darkTheme,
            hljs
        }
    }
}
</script>
<style lang="less">

</style>

