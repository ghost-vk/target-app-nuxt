<template>
  <div class="relative lg:pl-20">
    <div
      v-if="$device.isDesktop"
      class="absolute top-1/2 -left-40 transform -translate-y-1/2 -rotate-90 shadow-2xl h-28 rounded-tl-3xl rounded-tr-3xl w-96 bg-gray-800 text-center text-gray-100 flex justify-center items-center text-center"
    >
      <div class="h-1 w-12 bg-gray-100"></div>

      <!-- eslint-disable -->
      <div class="px-4 uppercase text-xl" v-html="sideBgText"></div>
      <!-- eslint-enable -->

      <div class="h-1 w-12 bg-gray-100"></div>
    </div>

    <div
      class="lg:relative z-20 p-5 sm:p-8 md:p-16 bg-gray-200 rounded-3xl shadow-xl bg-cover bg-center bg-opacity-30"
      :lazy-background="bg ? bg : ''"
    >
      <div
        class="absolute top-0 left-0 right-0 bottom-0 bg-purple-200 rounded-3xl opacity-60 transition-opacity z-10"
        :class="bg ? 'opacity-60' : 'opacity-100'"
      ></div>

      <div class="relative z-20 text-center">
        <!-- eslint-disable -->
        <h2
          class="text-2xl sm:text-3xl lg:text-5xl mb-8 sm:mb-16"
          v-html="title"
        ></h2>
        <!-- eslint-enable -->

        <ul class="list-none text-base sm:text-xl lg:text-2xl mb-6 md:mb-10">
          <li v-for="f in features" :key="f" class="mb-2 sm:mb-5">{{ f }}</li>
        </ul>

        <div class="text-3xl lg:text-4xl font-bold mb-8 md:mb-16">
          {{ price }}
        </div>

        <div class="max-w-screen-sm mx-auto">
          <client-only>
            <intersect
              root-margin="-10% 0px -10% 0px"
              @enter="btnClass = 'shine-animated'"
            >
              <span></span>
            </intersect>
          </client-only>

          <app-full-width-rounded-button
            class="shine text-base sm:text-xl lg:text-3xl"
            :class="btnClass"
            :title="btnText"
            @click="$emit('click-btn')"
          />
        </div>
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

    features: {
      type: Array,
      required: true,
    },

    price: {
      type: [String, Number],
      required: true,
    },

    bg: {
      type: String,
      default() {
        return '/purple-phone-in-hands.jpg'
      }
    },

    btnText: {
      type: String,
      default() {
        return 'Купить'
      },
    },

    sideBgText: {
      type: String,
      default() {
        return 'гарантированный<br />результат'
      },
    },
  },

  data: () => ({
    btnClass: '',
  }),
}
</script>
