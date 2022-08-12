import { createStore } from "vuex";

const store = createStore({
  state: {
    name: "Arshad",
    count: 100,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    updateName(state, newName: string): void {
      state.name = newName;
    },
  },
  actions: {},
  modules: {},
});

export default store;
