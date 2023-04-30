<template>
    <div id="content"
         layout="row center-center">
        <div id="content-root"
             layout="row top-left">
            <div id="left-bar">
                <div id="avatar-box">
                    <n-avatar round
                              id="avatar"
                              src="img/lhabc.jpg">
                    </n-avatar>
                </div>
                <div id="my-name">
                    <p>LHabc</p>
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

    </div>
</template>

<script>
import {NAvatar, NButton, NBackTop} from "naive-ui";
import Home from '@vicons/tabler/Home'
import Friends from '@vicons/tabler/Friends'
import Archive from '@vicons/tabler/Archive'
import User from '@vicons/tabler/User'
import LogoGithub from "@vicons/ionicons5/LogoGithub";
import MailOutline from "@vicons/ionicons5/MailOutline";
import {goUrl} from "@/assets/scripts/util";

export default {
    name: 'ContentView',
    components: {
        NAvatar,
        NButton,
        NBackTop
    },
    methods: {
        goUrl
    },
    setup() {
        return {
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
    }
}
</script>

<style lang="less" scoped>
@left-bar-width: 400px;
@left-bar-height: 700px;

#content {
  width: 100vw;
  background: linear-gradient(#1abc9c, white);
}

#content-root {
  width: 80%;

  #left-bar {
    display: inline-block;
    width: @left-bar-width;
    height: 100vh;
    position: sticky;
    top: 0;

    #my-name {
      user-select: none;
      text-align: center;
      font-size: 1.8rem;
      font-weight: bold;
      margin-bottom: 5px;
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
        height: 15%;
        margin: 3% 0;

        .button {
          height: 100%;
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
  }

  .button-icon {
    margin-top: 3px;
    width: 30px;
    height: 100%;
  }
}

#content-back-top {
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


</style>
