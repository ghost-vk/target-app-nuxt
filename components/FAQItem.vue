<template>
  <div
    class="flex flex-wrap items-center w-full shadow rounded-lg p-3 mb-3 cursor-pointer bg-white"
    @click="isOpened = !isOpened"
  >
    <div class="flex items-center">
      <div
        class="w-8 h-8 mr-4 flex justify-center items-center bg-purple-400 text-gray-50 rounded-full"
      >
        <outline-plus-sm-icon
          class="h-6 w-6 transition-transform transform"
          :class="isOpened ? 'rotate-45' : ''"
        />
      </div>

      <div class="flex-1 text-gray-700 md:text-lg">
        <slot name="title" />
      </div>
    </div>

    <transition name="fade">
      <div
        v-show="isOpened"
        class="mt-0 ml-12 w-full text-sm font-light overflow-hidden"
        style="animation-duration: 0.2s"
      >
        <slot name="body" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data: () => ({
    isOpened: false,
  }),
}
</script>
