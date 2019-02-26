import DemoApp from '@/DemoApp'
import Vue from 'vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(DemoApp)
}).$mount('#project-timeline')
