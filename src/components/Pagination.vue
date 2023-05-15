<script>
export default {
  name: "Pagination",
  props: {
    currentPage: {
      type: Number,
      default: 1,
      validator: value => {
        return value >= 1
      }
    },
    pages: Array
  },
  methods: {
    changePage(clickedPage) {
      if (clickedPage == this.currentPage) return;
      this.$emit('reloadPage', clickedPage);
    }
  },
  emits: ['reloadPage']
}
</script>

<template>
  <ul class="pagination__list">
    <li class="pagination__item" v-for="page in pages" :key="page">
      <button @click="changePage(page)">{{ page }}</button>
    </li>
  </ul>
</template>