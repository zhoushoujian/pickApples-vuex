import Vue from 'vue'
import Vuex from 'vuex'

const currentWeight = Math.ceil(Math.random() * 1000);
const appleIndex = 0;
const list = [];
const initAppleParam = { currentWeight, appleIndex };
list.push(initAppleParam);

const getTotalWeight = (state) => {
  return state.list.reduce((total, item) => total + item.currentWeight, 0);
}

const getTotalNumber = (state) => {
  return state.list.length;
}

const appleService = {
  state: {
    list,
    currentWeight,
    currentNumber: 1,
    hasEatNumber: 0,
    hasEatWeight: 0
  },
  actions: {
    changeWeight({_commit, state}, appleIndex){
      return new Promise(res => {
        state.list.forEach(item => {
          if (item.appleIndex === appleIndex) {
            item.currentWeight = Math.ceil(Math.random() * 1000);
          }
        });
        state.currentWeight = getTotalWeight(state);
        res()
      })
    }
  },
  mutations: {
    addApples(state) {
      const { appleIndex } = state.list[state.list.length - 1] || {
        appleIndex: 0
      };
      const newApplieIndex = appleIndex + 1;
      const appleParam = {
        currentWeight: Math.ceil(Math.random() * 1000),
        appleIndex: newApplieIndex
      };
      state.list.push(appleParam);
      state.currentWeight = getTotalWeight(state);
      state.currentNumber = getTotalNumber(state);
    },

    changeWeight(state, appleIndex) {
      state.list.forEach(item => {
        if (item.appleIndex === appleIndex) {
          item.currentWeight = Math.ceil(Math.random() * 1000);
        }
      });
      state.currentWeight = getTotalWeight(state);
    },

    eatApple(state, apple) {
      const targetAppleWeight = apple.currentWeight;
      state.list = state.list.filter(
        item => item.appleIndex !== apple.appleIndex
      );
      state.currentWeight = getTotalWeight(state);
      state.currentNumber = getTotalNumber(state);
      state.hasEatNumber = state.hasEatNumber + 1;
      state.hasEatWeight = state.hasEatWeight + targetAppleWeight;
    }
  },
  getters: {
    currentTime: state => parseInt(state.currentTime / 60) + ':' + (Array(2).join(0) + (state.currentTime % 60)).slice(-2),
  }
}

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    appleService
  }
})
