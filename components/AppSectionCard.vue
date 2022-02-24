<template>
  <div class="w-full md:w-1/2 lg:w-1/3 px-0 sm:px-3 mb-6 lg:mb-0">
    <div
      class="shadow-lg w-full rounded-lg flex flex-col items-center text-center p-4 divide-y divide-purple-300 divide-solid"
    >
      <div class="pb-1 md:pb-3 flex items-center lg:h-20">
        <h5 class="text-lg xl:text-xl font-bold text-gray-600">{{ title }}</h5>
      </div>

      <div v-if="$slots['scrollable-list']" class='relative w-full px-1'>
        <div
          class="w-full pt-1.5 md:py-3 mb-3 h-40 md:h-60 overflow-y-scroll relative scroll-list"
        >
          <slot name="scrollable-list" />
        </div>
        <client-only>
          <div class='gradient absolute bottom-0 -translate-x-1/2 left-1/2 h-16'></div>
        </client-only>
      </div>

      <div
        v-if="$slots['additional-items']"
        class="hidden xl:flex lg:h-32 w-full py-1.5 md:py-3 font-light text-sm flex-col justify-center"
      >
        <slot name="additional-items" />
      </div>

      <div
        v-if="$slots['highlighted-items']"
        class="hidden xl:flex lg:h-20 py-3 w-full px-1.5 items-center text-left"
      >
        <slot name="highlighted-items" />
      </div>

      <div
        v-if="$slots['last-content']"
        class="lg:h-28 py-3 w-full flex px-1.5 justify-center items-center text-left"
      >
        <slot name="last-content" />
      </div>

      <div v-if="button.length > 0" class="pt-4 w-full">
        <client-only>
          <intersect root-margin='-10% 0px -10% 0px' @enter="btnClass = 'shine-animated'">
            <span></span>
          </intersect>
        </client-only>

        <button
          type="button"
          class="shine w-full bg-violet-700 text-white shadow text-lg font-semibold rounded-lg px-5 py-2"
          :class="btnClass"
          @click="$emit('button-click')"
        >
          {{ button }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },

    button: {
      type: String,
      required: false,
      default() {
        return ''
      },
    },
  },

  data: () => ({
    btnClass: ''
  }),
}
</script>

<style scoped>
.gradient {
  width: calc(100% + 30px);
  background: -moz-linear-gradient(180deg, rgba(255,255,255,0.18531162464985995) 0%, rgba(255,255,255,1) 60%);
  background: -webkit-linear-gradient(180deg, rgba(255,255,255,0.18531162464985995) 0%, rgba(255,255,255,1) 60%);
  background: linear-gradient(180deg, rgba(255,255,255,0.18531162464985995) 0%, rgba(255,255,255,1) 60%);
}
</style>
