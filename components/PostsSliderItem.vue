<template>
  <div class="card w-full sm:w-64 xl:w-96" :class="cardClassList">
    <div
      v-aspect-ratio="'1:1'"
      class="mb-5 bg-center bg-no-repeat bg-cover bg-gray-200 relative group cursor-pointer rounded"
      :lazy-background="thumbnail ? $config.SERVER_PATH + thumbnail : ''"
      @click="$router.push(`/cases/${id}`)"
      @mouseenter="toSmall"
      @mouseleave="backToNormal"
      @touchstart="toSmall"
      @touchend="backToNormal"
      @touchleave="backToNormal"
      @touchcancel="backToNormal"
    >
      <div
        class="z-20 absolute top-0 left-0 right-0 bottom-0 opacity-0 transition-all bg-gray-800 bg-opacity-60 flex rounded justify-center items-center"
        :class="overlayClassList"
      >
        <button
          type="button"
          class="hidden lg:block opacity-0 group-hover:opacity-100 transition-all text-xl text-white border border-solid border-white rounded-full px-5 py-1.5"
        >
          Посмотреть
        </button>
      </div>
    </div>
    <div class="mb-3">
      <div class="mb-1.5" @click="$router.push(`/cases/${id}`)">
        <h4
          class="text-2xl font-bold text-gray-800 hover:text-purple-600 cursor-pointer"
          v-text="title"
        />
      </div>
      <p class="text-md font-light">{{ subtitle }}</p>
    </div>
    <div class="flex justify-between">
      <span class="text-gray-500">{{ postingDate }}</span>
      <div
        class="flex items-center hover:text-purple-400 cursor-pointer"
        @click="$router.push(`/cases/${id}`)"
      >
        <span class="mr-2">Прочитать</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
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
    subtitle: {
      type: String,
      required: true,
    },
    id: {
      type: [String, Number],
      required: true,
    },
    postingDate: {
      type: String,
      default() {
        return ''
      },
    },
    thumbnail: {
      type: String,
      default() {
        return ''
      },
    },
  },

  data: () => ({
    overlayClassList: '',
    cardClassList: '',
  }),

  methods: {
    toSmall() {
      this.overlayClassList = 'opacity-100'
      this.cardClassList = 'small'
    },

    backToNormal() {
      this.overlayClassList = ''
      this.cardClassList = ''
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  transition: transform 0.3s ease;
}

.small {
  transform: scale(0.97);
}
</style>
