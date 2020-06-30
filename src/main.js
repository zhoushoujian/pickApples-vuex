import Vue from 'vue'
import Apple from './apple'
import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(Apple)
})
