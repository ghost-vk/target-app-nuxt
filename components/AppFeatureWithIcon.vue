<template>
  <div class="w-1/2 lg:w-1/4 px-1 sm:px-3 mb-4  relative">
    <p class="text-xl lg:text-3xl font-bold mb-1 sm:mb-3 z-20 relative">{{ title }}</p>
    <span class="text-md lg:text-lg z-20 relative">{{ body }}</span>
    <div class="z-10 absolute -top-2 -left-3">
      <slot name="icon"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: [String, Number],
      required: true
    },
    body: {
      type: [String],
      required: true
    }
  }
}
</script>