<template>
  <div class="py-5 w-full">
    <div
      class="p-4 shadow-lg rounded-2xl bg-white flex flex-col justify-center items-center text-center relative overflow-hidden"
    >
      <div v-aspect-ratio="'1:1'" class="mb-4"></div>
      <img
        v-lazy-load
        :data-src="thumbnail"
        class="absolute top-0 left-0 w-full rounded-2xl"
        alt=""
      />
      <p
        class="text-md leading-relaxed font-semibold h-16 max-h-16 overflow-y-scroll"
      >
        {{ title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default() {
        return ''
      },
    },

    thumbnail: {
      type: String,
      default() {
        return ''
      },
    },
  },
}
</script>
