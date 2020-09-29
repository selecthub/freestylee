const candies = [10, 22, 34, 5, 64, 32, 22, 12, 23, 40];
const store = new Vuex.Store({
  state: {
    candiesEaten: candies
  },
  mutations: {
  }
})

new Vue({
  el: '#app',
  computed: {
    candiesEaten () {
	    return store.state.candiesEaten
    }
  },
  methods: {
  	flipChartDirection () {
      console.log("toggling stacked class on and off on ol");
    },
    selectDay () {
      console.log("highlighting bar", arguments);
    },
  }
})
