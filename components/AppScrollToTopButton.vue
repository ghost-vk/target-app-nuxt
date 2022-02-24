<template>
  <transition
    enter-active-class="duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-50 md:opacity-100"
    leave-active-class="duration-150"
    leave-from-class="opacity-50 md:opacity-100"
    leave-to-class="opacity-0"
  >
    <a
      v-show="isShown"
      v-smooth-scroll
      href="#before-header"
      class="fixed h-10 w-10 z-20 right-5 opacity-50 md:opacity-100 md:right-20 bottom-24"
    >
      <div
        class="w-full h-full rounded-full shadow bg-violet-300 text-white flex items-center justify-center"
      >
        <outline-chevron-up-icon class="w-6 h-6" />
      </div>
    </a>
  </transition>
</template>

<script>
export default {
  props: {
    isShown: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
}
</script>
