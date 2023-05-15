<script>
import { useUserStore } from "@/stores/UserStore";

export default {
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      const { LOAD_USER_DATA } = useUserStore();
      await LOAD_USER_DATA(10);
    }
  }
}
</script>

<template>
  <nav>
    <router-link to="/">Main</router-link> |
    <router-link to="/zoo">Zoo</router-link>
  </nav>
  <router-view />
</template>
