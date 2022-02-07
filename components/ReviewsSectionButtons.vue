<template>
  <div
    class="flex flex-wrap justify-start mb-2 text-gray-800 text-xs md:text-base select-none"
  >
    <app-pilled-button
      v-for="btn in buttons"
      :key="btn.value"
      class="mb-2 mr-2"
      :is-selected="btn.value === activeCategory"
      :title="`${btn.title} (${reviewsCountInCategory(btn.value)})`"
      @click="$emit('update-category', btn.value)"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    buttons: 'reviews/catButtons',
    activeCategory: 'reviews/activeCategory',
    reviewsCountInCategory: 'reviews/reviewsCountInCategory',
  }),
}
</script>
