<script>
import { defineAsyncComponent } from 'vue';
import Testimonials from '../components/Testimonials.vue';

export default {
  name: 'MainPage',
  components: {
    Testimonials,
  },
};
</script>

<template>
  <main class="main-page">
    <Testimonials></Testimonials>
  </main>
</template>
