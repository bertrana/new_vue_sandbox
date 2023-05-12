import { createStore } from "vuex";
import getUser from "@/core/getUser";

export default createStore({
  state() {
    return {
      userData: [],
    };
  },

  actions: {
    async LOAD_USER_DATA({ state, commit }, num) {
      const data = await getUser(num);

      commit("SET_USER_DATA", { data });
    },
  },

  mutations: {
    async SET_USER_DATA(state, { data }) {
      state.userData = data;
    },
  },

  getters: {
    sortedByName(state) {
      return state.userData.sort((user) => user.name);
    },
  },
});
