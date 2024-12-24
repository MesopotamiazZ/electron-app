<template>
  <div class="render-app">
    <!-- <div class="render-app-title"></div> -->
    <div class="render-app-title" @mousedown="mousedown"></div>

    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let isKeyDown = ref(false);
let dinatesX = ref(0);
let dinatesY = ref(0);

const mousedown = ( event )=>{
    isKeyDown.value = true;
    dinatesX.value = event.x;
    dinatesY.value = event.y;

    document.onmousemove = (ev) => {
        if(isKeyDown.value ){
            const x = ev.screenX - dinatesX.value;
            const y = ev.screenY - dinatesY.value;
            //给主进程传入坐标
            let data = {
                appX:x,
                appY:y
            }
            electron.ipcRenderer.invoke('custom-adsorption',data);
        }
    };
    document.onmouseup = () => {
        isKeyDown.value = false
    };
}
</script>

<style scoped lang="less">
.render-app {
  // background-color: red;
  &-title {

    height: 40px;
    background-color: #409eff;
    // -webkit-app-region: drag;
  }
}
</style>