<template>
  <div
    class="h-32 w-32 sm:w-64 sm:h-64 overflow-hidden rounded-full flex justify-center relative"
  >

    <div v-aspect-ratio="'1:1'"></div>

    <img
      v-lazy-load
      class="absolute top-0 left-0"
      :data-src="image"
      :alt="alt"
    />

    <noscript inline-template>
      <img
        class="absolute top-0 left-0"
        :src="image"
        :alt="alt"
      />
    </noscript>

  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },

    alt: {
      type: String,
      default() {
        return ''
      },
    },
  },
}
</script>
