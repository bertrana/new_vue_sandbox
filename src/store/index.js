import { createStore } from 'vuex';

export const store = createStore({
  state: {
    userData: [],
  },
  getters: {},
  mutations: {},
  actions: {
    async LOAD_USER_DATA({ state, commit }, num) {
      const data = await getUser(num);

      commit('SET_USER_DATA', { data });
    },
  },
  modules: {},
});
