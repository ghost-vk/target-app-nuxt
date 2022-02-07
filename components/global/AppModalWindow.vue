<template>
  <transition name="fade">
    <div
      v-show="isShown"
      class="flex fixed z-40 top-0 bottom-0 left-0 right-0 justify-center items-center bg-black bg-opacity-90 sm:p-4 md:p-10"
      style="animation-duration: 0.25s"
      @click="$emit('close')"
    >
      <div
        @click.stop
        class="max-w-screen-sm w-full sm:w-auto h-screen sm:h-3/4 relative"
      >
        <div
          @click="$emit('close')"
          class="absolute bg-gray-400 top-20 right-2 sm:top-2 sm:right-2 z-20 bg-purple-300 bg-opacity-50 h-8 md:h-10 w-8 md:w-10 rounded-full flex justify-center items-center"
        >
          <outline-x-icon class="h-5 md:h-6 w-5 md:w-6 cursor-pointer" />
        </div>
        <div
          class="w-full h-full sm:h-auto max-h-full bg-gray-50 sm:rounded-lg p-4 pt-32 md:p-8 overflow-auto relative bg-blue-50"
        >
          <div class="h-full overflow-auto z-20 relative">
            <slot />
          </div>
          <div
            class="absolute top-0 left-0 bottom-0 right-0 bg-cover bg-no-repeat bg-center opacity-20 bg-opacity-20 z-0"
            lazy-background="/modal-bg.svg"
          ></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AppModalWindow',

  props: {
    isShown: {
      type: Boolean,
      default() {
        return false
      },
    },
  },

  watch: {
    isShown(val) {
      if (!process.client) {
        return
      }

      if (val) {
        document.body.classList.add('overflow-hidden')
      } else {
        document.body.classList.remove('overflow-hidden')
      }
    },
  },
}
</script>
