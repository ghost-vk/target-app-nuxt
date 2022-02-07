<template>
  <div class="py-5 px-2 w-full md:w-4/5 lg:w-2/3">
    <div
      class="mx-auto w-full flex flex-col items-center text-center bg-white shadow-lg p-5 rounded-xl"
    >
      <img
        v-lazy-load
        class="w-24 h-24 block rounded-full mb-5 transition-opacity duration-300"
        :data-src="thumbnail"
        :alt="`Довольный клиент ${name}`"
      />

      <noscript inline-template>
        <img
          v-lazy-load
          class="w-24 h-24 block rounded-full mb-5 transition-opacity duration-300"
          :src="thumbnail"
          :alt="`Довольный клиент ${name}`"
        />
      </noscript>

      <div class='relative mb-5'>
        <!-- eslint-disable -->
        <div
          class="text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed pb-10 text-left overflow-auto pr-3"
          style="max-height: 250px"
          v-html="body"
        >
        </div>
        <!-- eslint-enable -->
        <client-only>
          <div class='bg-gradient-to-t from-white to-transparent absolute bottom-0 left-0 w-full h-10'></div>
        </client-only>
      </div>

      <span class="text-gray-700 font-semibold text-sm uppercase mb-2">
        {{ name }}
      </span>
      <span v-if="vocation" class="text-gray-600 font-light text-sm mb-3">
        {{ vocation }}
      </span>
      <a v-if="instagram" :href="instagram" target="_blank">
        <app-instagram-icon class="h-6 w-6 text-gray-400" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      default() {
        return ''
      },
    },
    vocation: {
      type: String,
      default() {
        return ''
      },
    },
    instagram: {
      type: String,
      default() {
        return ''
      },
    },
  },
}
</script>
