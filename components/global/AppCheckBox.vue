<template>
  <div
    class="border border-solid sm:h-6 sm:w-6 h-5 w-5 flex justify-center items-center rounded cursor-pointer text-purple-500"
    :class="isError ? 'border-red-400 bg-red-50' : 'border-gray-700'"
    @click="$emit('update:model-value')"
  >
    <outline-check-icon v-show="modelValue" class="sm:h-5 sm:w-5 h-4 w-4" />
  </div>
</template>

<script>
export default {
  name: 'AppCheckBox',

  props: {
    modelValue: {
      type: Boolean,
      default() {
        return false
      },
    },

    isError: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
}
</script>
