<template>
    <div id="intro-background"
         class="full"
         layout="row center-center">
        <canvas id="background-canvas"
                class="full">
        </canvas>
        <div class="promo">
            <div class="promo-middle">
                <div class="promo-content">
                    <div class="promo-header">
                        <span class="promo-close">&times;</span>
                    </div>
                    <div class="promo-body">
                        <div class="links-container">
                            <a class="link" id="apple_link" target="_blank">
                            </a>
                            <a class="link" id="google_link" target="_blank">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <slot id="content" self="center">

        </slot>
    </div>
</template>

<script>
import {start} from '@/assets/scripts/background.js';

export default {
    mounted() {
        start();
    },
    name: "HomePageBackGround"
}
</script>

<style lang="less" scoped>
* {
  pointer-events: none;
  user-select: none;
}

#intro-background {
  position: fixed;
  bottom: 0;
}

#background-canvas {
  position: absolute;
  z-index: -1;
}

#content {
  position: absolute;
  z-index: 1;
}


.promo {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: auto;
  color: lightblue;
  background-color: rgba(0, 0, 0, 0.4);
  animation: promo-appear-animation 0.35s ease-out;
}

.promo-middle {
  display: table-cell;
  vertical-align: middle;
}

.promo-content {
  width: 80vw;
  height: 80vh;
  max-width: 80vh;
  max-height: 80vw;
  margin: auto;
  padding: 0;
  font-size: 2.8vmax;
  font-family: Futura, "Trebuchet MS", Arial, sans-serif;
  text-align: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.promo-header {
  height: 10%;
  padding: 2px 16px;
}

.promo-close {
  width: 10%;
  height: 100%;
  text-align: left;
  float: left;
  font-size: 1.3em;
  /* transition: 0.2s; */
}

.promo-close:hover {
  /* transform: scale(1.25); */
  cursor: pointer;
}

.promo-body {
  padding: 8px 16px 16px 16px;
  margin: auto;
}

.promo-body p {
  margin-top: 0;
  mix-blend-mode: color-dodge;
}

@keyframes promo-appear-animation {
  0% {
    transform: scale(2.0);
    opacity: 0;
  }
  100% {
    transform: scale(1.0);
    opacity: 1;
  }
}
</style>