import { defineStore } from "pinia";
import getUser from "@/core/getUser";

export const useUserStore = defineStore("UserStore", {
  state: () => {
    return {
      userData: [],
    };
  },

  actions: {
    async LOAD_USER_DATA(num) {
      const data = await getUser(num);

      this.SET_USER_DATA(data);
    },

    SET_USER_DATA(data) {
      this.userData = data;
    },
  },

  getters: {
    sortedByName: (state) => state.userData.sort((user) => user.name),
  },
});
