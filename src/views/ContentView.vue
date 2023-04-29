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
                <div id="buttons-box"
                     layout="column center-center">
                    <div class="button-container"
                         layout="row center-center"
                         v-for="(btn,index) of buttons"
                         :key="index">
                        <n-button quaternary
                                  class="button"
                                  @click="$router.push(btn.link)">
                            <n-icon class="button-icon">
                                <component :is="btn.component as any"/>
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
                <router-view>

                </router-view>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {NAvatar, NButton} from "naive-ui";
import Home from '@vicons/tabler/Home'
import Friends from '@vicons/tabler/Friends'
import Archive from '@vicons/tabler/Archive'
import User from '@vicons/tabler/User'

export default defineComponent({
    name: 'ContentView',
    components: {
        NAvatar,
        NButton
    },
    data() {
        return {
            buttons: [
                {
                    text: "Home",
                    link: "/home",
                    component: Home
                },
                {
                    text: "About",
                    link: "/about",
                    component: User
                },
                {
                    text: "Friends",
                    link: "/friends",
                    component: Friends
                },
                {
                    text: "Archives",
                    link: "/archives",
                    component: Archive
                },
            ]
        }
    }
});
</script>

<style lang="less" scoped>
@left-bar-width: 400px;
@left-bar-height: 700px;

#content {
  width: 100vw;
  background: linear-gradient(rgb(34, 207, 175), white);
}

#content-root {
  width: 80%;

  #left-bar {
    display: inline-block;
    width: @left-bar-width;
    height: 100vh;
    position: sticky;
    top: 0;

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
      margin: 10% auto auto auto;

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

          .button-icon {
            margin-top: 3px;
            width: 30px;
            height: 100%;
          }
        }
      }
    }
  }


  #pages {
    width: 100%;
    //border: 5px solid yellow;
  }
}

</style>
