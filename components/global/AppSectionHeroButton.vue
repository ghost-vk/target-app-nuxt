<template>
  <div>
    <client-only>
      <intersect @enter="isVisible = true">
        <span class="h-px"></span>
      </intersect>
    </client-only>
    <transition name="fadeUp">
      <button
        v-show="isVisible"
        type="button"
        :class="classList"
        @click="$emit('click')"
        @mouseenter="toSmall"
        @mouseleave="backToNormal"
        @touchstart="toSmall"
        @touchend="backToNormal"
        @touchleave="backToNormal"
        @touchcancel="backToNormal"
      >
        {{ title }}
      </button>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default() {
        return ''
      },
    },
  },

  data() {
    let defaultClassList =
      'btn block text-center w-full sm:w-72 py-2.5 rounded-3xl text-md md:text-xl font-bold shadow-lg '

    defaultClassList =
      this.color === 'purple'
        ? defaultClassList + 'bg-purple-500'
        : defaultClassList + 'bg-gray-100 text-purple-500'

    return {
      animated: false,
      isVisible: !process.client,
      classList: defaultClassList,
      defaultClassList: defaultClassList,
    }
  },

  methods: {
    toSmall() {
      this.classList += ' btn-pressed'
    },

    backToNormal() {
      this.classList = this.defaultClassList
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
  transition: transform 0.3s ease;
}

.btn-pressed {
  transform: scale(0.96);
}
</style>
