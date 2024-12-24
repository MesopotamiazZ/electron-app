import { createApp } from 'vue'
import App from './App.vue'

//路由
import router from './router'

//状态管理
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
import './assets/css/styles.less'

// icon图标
import * as ElementPlusIconVue from '@element-plus/icons-vue'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconVue)) {
  app.component(key, component)
}


const store = createPinia()
store.use(piniaPluginPersist)

app.use(router) 
app.use(store) 
app.mount('#app')