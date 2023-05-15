<script>
export default {
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.$store.dispatch("LOAD_USER_DATA", 10);
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
