import {createStore} from 'vuex'
import {lightTheme, darkTheme} from "naive-ui";

const baseTheme = {...lightTheme};
const theme = baseTheme;
theme.common.primaryColor = "#2080f0FF";
theme.common.primaryColorHover = "#2080f0FF";
theme.common.primaryColorPressed = "#2080f0FF";
theme.common.primaryColorSuppl = "#2080f0FF";

function modifyColor(state: any, color: any) {
    Object.assign(state.theme, state.baseTheme);
    state.theme.common.primaryColor = color;
    state.theme.common.primaryColorHover = color;
    state.theme.common.primaryColorPressed = color;
    state.theme.common.primaryColorSuppl = color;
}


export default createStore({
    state: {
        baseTheme,
        baseThemeName: 'light',
        theme,
        contentBgImg: require("@/assets/img/417.jpg"),
        introBgColorFrom: "#1abc9c",
        introBgColorTo: "#dfe8f7",
        containerBgColor: "#ffffff",
        contentBgColor: "#dfe8f7",
    },
    getters: {},
    mutations: {
        changeColor(state, color) {
            modifyColor(state, color);
        },
        changeBaseTheme(state, theme) {
            state.baseTheme = theme === 'light' ? {...lightTheme} : {...darkTheme}
            state.baseThemeName = theme;
            const color = state.theme.common.primaryColor;
            modifyColor(state, color);

            state.contentBgImg = theme === 'light' ?
                require("@/assets/img/417.jpg") : require("@/assets/img/092.jpg");

            state.introBgColorFrom = theme === 'light' ? "#1abc9c" : "#2c3e50";
            state.introBgColorTo = theme === 'light' ? "#dfe8f7" : "#7d6eb3";

            state.containerBgColor = theme === 'light' ? "#ffffff" : "#2c2c32";
            state.contentBgColor = theme === 'light' ? "#dfe8f7" : "#7d6eb3";
        }
    },
    actions: {},
    modules: {}
})
