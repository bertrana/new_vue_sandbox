<script>
import UserCard from "@/components/UserCard.vue"
// import { store } from "../store";


export default {
  name: 'ZooPage',
  components: { UserCard },
  computed: {
    getUsersList() {
      return this.$store.state.userData
    },
  },
};
</script>

<template>
  <h2>Zoo page</h2>
  <div class="slider">
    <ul class="slider__list">
      <UserCard v-for="user in this.getUsersList" :key="user.id" :img-src="user.picture.thumbnail"
        :user-name="user.name.first + ' ' + user.name.last" card-text="Lorem ipsum sin dolor amet" />
    </ul>
  </div>
</template>
