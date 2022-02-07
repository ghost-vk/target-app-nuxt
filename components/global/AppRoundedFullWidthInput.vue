<template>
  <div>
    <div
      class="shadow rounded-full border-solid border-red-400 overflow-hidden mb-1"
      :class="error ? 'border bg-red-50' : ''"
    >
      <input
        @keyup="update"
        :value="modelValue"
        :placeholder="placeholder"
        :type="type"
        class="
          focus:outline-none
          transition-colors
          bg-transparent
          px-3
          py-1.5
          w-full
          text-center
          text-base
          place-content-center
        "
      />
    </div>
    <div v-show="error" class="text-xs text-red-400">{{ error }}</div>
  </div>
</template>

<script>
export default {
  name: 'AppRoundedFullWidthInput',

  props: {
    modelValue: {
      type: [String, Number],
      default() {
        return ''
      }
    },

    placeholder: {
      type: [String, Number],
      default() {
        return ''
      }
    },

    type: {
      type: String,
      default() {
        return 'text'
      },
    },

    error: {
      type: String,
      default() {
        return ''
      },
    },
  },

  methods: {
    update(e) {
      this.$emit('update:model-value', e.target.value)
    },
  }
}
</script>
