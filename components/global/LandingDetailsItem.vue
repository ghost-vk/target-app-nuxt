<template>
  <div>
    <client-only>
      <intersect @enter="isVisible = true">
        <span></span>
      </intersect>
    </client-only>

    <transition name="fadeUp">
      <div>
        <div
          v-show="isVisible"
          class="flex items-center relative pl-8 lg:pl-16 mb-6"
        >
          <solid-chevron-right-icon
            class="absolute left-0 h-6 w-6 lg:h-8 lg:w-8"
          />

          <h3 class="text-xl md:text-2xl">{{ title }}</h3>
        </div>

        <div class="pl-8 lg:pl-16 text-sm sm:text-base">
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default() {
        return ''
      },
    },
  },

  data: () => ({
    isVisible: !process.client,
  }),
}
</script>
