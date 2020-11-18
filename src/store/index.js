import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      count: 0,
      time: 0,
      message: "David",
      intervalId: 0,
      text: "blah",
      seconds: [],
      clicks: [],
      btnIsClicked: false
    }
  },
  mutations: {
    increment(state) {
      state.count++;
      store.commit('pusher');
    },

    decrement(state) {
      state.count--;
      store.commit('pusher');
    },

    timer(state) {
      state.seconds.push(state.time)
      state.time++;
      console.log(state.seconds);
    },

    stopTimer(state) {
      clearInterval(state.intervalId);
    },

    pusher(state){
      let value = Math.random().toFixed(2) * state.count;
      state.clicks.push(value)
    }
  },

  actions: {
    timer(context) {
      store.state.intervalId = setInterval(() => {
        context.commit('timer');
      }, 1000)
    },

    stopTimer(context) {
      context.commit('stopTimer');
    },

    increment(context) {
      context.commit('increment');
    },

    decrement(context) {
      context.commit('decrement');
    }
    
  },

  modules: {
  }
})
export default store;
