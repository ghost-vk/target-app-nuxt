<template>
  <div>
    <client-only>
      <intersect @enter="isVisible = true" root-margin='-15% 0% -15% 0%'>
        <span></span>
      </intersect>
    </client-only>
    <transition name="fadeUp">
      <h3 v-show="isVisible" class="text-3xl md:text-5xl text-center font-bold mb-8 md:mb-16 text-gray-800">
        {{ title }}
        <slot />
      </h3>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppHeadingThird',

  props: {
    title: {
      type: String,
      required: false,
      default() {
        return ''
      }
    },
  },

  data: () => ({
    isVisible: !process.client
  })
}
</script>
