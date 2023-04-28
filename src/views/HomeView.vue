<template>
    <div class="full-screen"
         layout="row center-center">
        <div id="content-root"
             layout="row center-left">
            <div id="left-bar"
                 layout="column top-left">
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
                                  @click="$router.push(btn.to)">
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
                 layout="column top-right">
                <router-view>

                </router-view>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {NAvatar, NButton} from "naive-ui";
// import {CashOutline as CashIcon} from '@vicons/ionicons5';
import CashOutline from '@vicons/ionicons5/CashOutline'

export default defineComponent({
    name: 'HomeView',
    components: {
        NAvatar,
        NButton,
        CashOutline
    },
    data() {
        return {
            buttons: [
                {
                    text: "Home",
                    to: "/home",
                    component: CashOutline
                },
                {
                    text: "About",
                    to: "/about",
                    component: CashOutline
                },
                {
                    text: "Friends",
                    to: "/friends",
                    component: CashOutline
                },
                {
                    text: "Archives",
                    to: "/archives",
                    component: CashOutline
                },
            ]
        }
    }
});
</script>

<style lang="less" scoped>
#content-root {
  width: 80%;
  height: 90%;

  #left-bar {
    display: inline-block;
    width: 30%;
    height: 100%;

    #avatar-box {
      width: 50%;
      margin: 10% auto auto auto;

      #avatar {
        width: 100%;
        height: 100%;
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
            width: 20px;
            height: 100%;
          }
        }
      }
    }
  }


  #pages {
    display: inline-block;
    width: 100%;
    height: 100%;
    border: 5px solid yellow;
  }
}


</style>