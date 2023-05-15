<script>
import { useUserStore } from "@/stores/UserStore";
import UserCard from './UserCard.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'Testimonials',
  components: {
    UserCard,
    Pagination
  },
  computed: {
    getUsersList() {
      return this.store.userData
    },
  },
  methods: {
    getNewUsers(newPage) {
      this.store.LOAD_USER_DATA(10);
      this.currentPage = newPage;
    }
  },
  data() {
    return {
      pages: [1, 2, 3],
      currentPage: 1,
      store: useUserStore()
    }
  }
};
</script>

<template>
  <div class="testimonials">
    <h2 class="testimonials__header">Testimonials</h2>
    <div class="slider">
      <ul class="slider__list">
        <UserCard v-for="user in this.getUsersList" :key="user.id" :img-src="user.picture.thumbnail"
          :user-name="user.name.first + ' ' + user.name.last" card-text="Lorem ipsum sin dolor amet" />
      </ul>
      <Pagination :currentPage="this.currentPage" :pages="this.pages" @reload-page="getNewUsers"></Pagination>
    </div>
    <button class="button">Leave feedback</button>
  </div>
</template>
