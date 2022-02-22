<template>
  <div>
    <client-only>
      <intersect root-margin="-10% 0px -10% 0px" @enter="isVisible = true">
        <span></span>
      </intersect>
    </client-only>
    <transition name="fadeUp">
      <div v-show="isVisible" class="relative lg:border-2 border-purple-200 lg:p-12">
        <div
          class="lg:absolute -top-10 left-0 bg-gray-50 mb-4 lg:mb-0 lg:w-96 lg:h-20 px-4 lg:px-12 flex items-center"
        >
          <div class="mr-6 flex-shrink-0">
            <slot name="icon" />
          </div>

          <h3 class="text-xl lg:text-2xl leading-1">{{ title }}</h3>
        </div>

        <div class="px-4 py-5 lg:px-8 lg:py-10 bg-purple-200">
          <slot name="body" />
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
      required: true,
    },
  },

  data: () => ({
    isVisible: !process.client
  })
}
</script>
