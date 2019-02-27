import Demo from './Demo'
import Vue from 'vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Demo)
}).$mount('#project-timeline')
