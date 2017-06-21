import Vue from 'vue';
import App from './App.vue';
import Store from './store';

new Vue({
  store: Store,
  el: '#app',
  render: h => h(App)
});
