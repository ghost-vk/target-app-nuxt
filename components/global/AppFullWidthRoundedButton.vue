<template>
  <button
    class="
      w-full
      focus:outline-none
      bg-transparent
      p-3
      text-center
      bg-purple-400
      hover:bg-purple-300
      transition-colors
      rounded-full
      shadow
      text-gray-50
      font-semibold
    "
    :class="isDisabled ? 'opacity-60 cursor-not-allowed' : ''"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'AppFullWidthRoundedButton',

  props: {
    title: {
      type: String,
      default() {
        return 'Отправить'
      },
    },

    isDisabled: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
}
</script>
