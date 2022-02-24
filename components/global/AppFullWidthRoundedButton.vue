<template>
  <button
    class="
      w-full
      focus:outline-none
      p-3
      text-center
      bg-violet-400
      hover:bg-violet-300
      transition-colors
      rounded-full
      shadow
      text-gray-50
      font-semibold
    "
    :class="isDisabled ? 'opacity-60 cursor-not-allowed' : ''"
    @click="$emit('click')"
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
