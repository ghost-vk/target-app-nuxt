<template>
  <div class="flex items-center mb-6 lg:mb-12">
    <div
      class="relative rounded-full h-3 w-3 bg-purple-200 flex-shrink-0"
    >
      <div
        v-if="lineDirection === 'down'"
        class="absolute top-0 left-1 h-40 w-0.5 bg-purple-200"
      ></div>

      <div
        v-if="lineDirection === 'up'"
        class="absolute -top-40 left-1 h-40 w-0.5 bg-purple-200"
      ></div>
    </div>

    <p class="pl-3 sm:px-6 md:px-10">
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  props: {
    lineDirection: {
      type: [Boolean, String],
      default() {
        return 'down'
      },
    },
  },
}
</script>
