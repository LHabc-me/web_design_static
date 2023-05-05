<template>
    <div id="content"
         layout="row center-center"
         :style="{background:`${$store.state.contentBgColor} url(${$store.state.contentBgImg}) fixed top/cover no-repeat`}">
        <div id="content-root"
             layout="row top-left">
            <div id="left-bar"
                 class="shadow radius"
                 :style="{background: $store.state.containerBgColor}">
                <div id="avatar-box">
                    <n-avatar round
                              id="avatar"
                              :src="avatar.toString()"
                              color="transparent">
                    </n-avatar>
                </div>
                <div>
                    <n-h1 id="my-name">LHabc</n-h1>
                </div>
                <div id="left-bar-connections"
                     layout="row center-center">
                    <n-button circle
                              :bordered="false"
                              v-for="(item, index) in connections"
                              :key="index"
                              @click="goUrl(item.link)">
                        <n-icon class="button-icon">
                            <component :is="item.icon"/>
                        </n-icon>
                    </n-button>
                </div>
                <div id="buttons-box"
                     layout="column top-center">
                    <div class="button-container"
                         layout="row center-center"
                         v-for="(btn, index) in viewBtns"
                         :key="index">
                        <n-button quaternary
                                  class="button"
                                  @click="$router.push(btn.link)">
                            <n-icon class="button-icon">
                                <component :is="btn.icon"/>
                            </n-icon>
                            <strong class="button-text">
                                {{ btn.text }}
                            </strong>
                        </n-button>
                    </div>
                </div>
            </div>
            <div id="pages"
                 layout="column top-left">
                <div id="customize">
                    <n-button circle
                              class="button"
                              :bordered="false"
                              @click="isCustomizeActive = true">
                        <n-icon class="button-icon">
                            <component :is="Whiteboard48Regular"/>
                        </n-icon>
                    </n-button>
                </div>
                <transition name="fade"
                            mode="out-in">
                    <router-view v-slot="{ Component }">
                        <keep-alive>
                            <component :is="Component"/>
                        </keep-alive>
                    </router-view>
                </transition>
            </div>
        </div>
        <n-back-top id="content-back-top"
                    :right="40"
                    :bottom="40">
        </n-back-top>

        <n-drawer v-model:show="isCustomizeActive"
                  :width="220">
            <n-drawer-content>
                <template #header>
                    修改网站样式和主题
                </template>
                <div layout="column center-center">
                    <n-switch v-model:value="isSwitchOn"
                              :rail-style="railStyle"
                              unchecked-value="light"
                              checked-value="dark"
                              :rubber-band="false"
                              :on-change="onBaseThemeChange">
                        <template #checked>
                            深色背景
                        </template>
                        <template #unchecked>
                            浅色背景
                        </template>
                    </n-switch>
                    <n-color-picker size="small"
                                    :default-value="$store.state.theme.common.primaryColor"
                                    :on-update:value="onColorChange"
                                    id="customize-color-picker">
                        <template v-slot:label>
                            修改主题色
                        </template>
                    </n-color-picker>
                </div>
                <template #footer>
                    <n-button text
                              @click="isCustomizeActive = false">
                        关闭
                    </n-button>
                </template>
            </n-drawer-content>
        </n-drawer>
    </div>
</template>

<script>
import {NH1, NAvatar, NButton, NBackTop, NColorPicker, NDropdown, NSwitch, NDrawer, NDrawerContent} from "naive-ui";
import Home from '@vicons/tabler/Home'
import Friends from '@vicons/tabler/Friends'
import Archive from '@vicons/tabler/Archive'
import User from '@vicons/tabler/User'
import LogoGithub from "@vicons/ionicons5/LogoGithub";
import MailOutline from "@vicons/ionicons5/MailOutline";
import Whiteboard48Regular from "@vicons/fluent/Whiteboard48Regular";
import {goUrl} from "@/assets/scripts/util";
import {clickEffect} from "@/assets/scripts/clickEffect";
import {ref} from "vue";

export default {
    name: 'ContentView',
    components: {
        NH1,
        NAvatar,
        NButton,
        NBackTop,
        NColorPicker,
        NDropdown,
        NSwitch,
        NDrawer,
        NDrawerContent
    },
    methods: {
        goUrl,
        onColorChange(color) {
            this.$store.commit("changeColor", color);
        },
        onBaseThemeChange(theme) {
            this.$store.commit('changeBaseTheme', theme);
        }
    },
    mounted() {
        clickEffect();
    },
    setup() {
        return {
            railStyle: ({
                            focused,
                            checked
                        }) => {
                const style = {}
                if (checked) {
                    style.background = '#3a403c'
                    if (focused) {
                        style.boxShadow = '0 0 0 2px #d0305040'
                    }
                } else {
                    style.background = '#2080f0'
                    if (focused) {
                        style.boxShadow = '0 0 0 2px #2080f040'
                    }
                }
                return style
            },
            isCustomizeActive: ref(false),
            isSwitchOn: ref(false),
            Whiteboard48Regular,
            avatar: require("@/assets/img/avatar.jpg"),
            connections: [
                {
                    name: "Github",
                    icon: LogoGithub,
                    link: "https://github.com/LHabc-me"
                },
                {
                    name: "E-mail",
                    icon: MailOutline,
                    link: "mailto:LHabc.me@outlook.com"
                }
            ],
            viewBtns: [
                {
                    text: "Home",
                    link: "/home",
                    icon: Home
                },
                {
                    text: "About",
                    link: "/about",
                    icon: User
                },
                {
                    text: "Friends",
                    link: "/friends",
                    icon: Friends
                },
                {
                    text: "Archives",
                    link: "/archives",
                    icon: Archive
                },
            ]
        }
    },

}
</script>

<style lang="less" scoped>
@left-bar-width: 400px;
@left-bar-height: 700px;

#content {
  width: 100vw;
  min-height: 100vh;
}

#content-root {
  width: 80%;
  min-height: 100vh;

  #left-bar {
    display: inline-block;
    width: @left-bar-width;
    position: sticky;
    top: 20px;
    margin: 20px;
    height: 650px;

    #my-name {
      user-select: none;
      text-align: center;
      margin-bottom: 5px;
      font-size: 30px;
      font-weight: bold;
    }

    #avatar-box {
      width: 50%;
      margin: 10% auto auto auto;

      #avatar {
        width: 100%;
        height: 100%;
        user-select: none;
      }
    }

    #buttons-box {
      width: 80%;
      height: 50%;
      margin: 20px auto auto;

      .button-container {
        width: 70%;
        height: 60px;
        margin: 3% 0;

        .button {
          height: 60px;
          width: 100%;
          font-size: 20px;

          .button-text {
            width: 100px;
            height: 100%;
          }
        }
      }
    }
  }


  #pages {
    width: 100%;
    margin-left: 30px;
  }

  .button-icon {
    margin-top: 3px;
    width: 30px;
    height: 100%;
  }
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-leave-from,
.fade-enter-to {
  opacity: 1;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#customize {
  position: absolute;
  display: flow;
  top: calc(100vh + 40px);
  right: 40px;
}

#customize-color-picker {
  height: 150px;
  width: 150px;
  margin-top: 30px;
}

#content-bg-img {
  position: absolute;
  top: 100vh;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-size: cover;
}

#content-bg {
  position: absolute;
  top: 100vh;
  left: 0;
  z-index: -2;
  //width: 100%;
  //height: 100%;
}
</style>
