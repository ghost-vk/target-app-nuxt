<template>
  <div>
    <nuxt-link :to="`/cases/${id}`">
      <div
        v-lazy-load
        class="h-40 xl:h-60 mb-5 bg-center bg-no-repeat bg-cover bg-gray-200 relative flex justify-center items-center group cursor-pointer rounded"
        :lazy-background="$config.CDN_URL + thumbnail"
      >
        <div
          class="rounded absolute top-0 left-0 right-0 bottom-0 opacity-0 transition-all group-hover:opacity-100 bg-gray-800 bg-opacity-60 hidden lg:block"
        ></div>

        <button
          type="button"
          class="hidden lg:block opacity-0 group-hover:opacity-100 transition-all z-20 text-xl text-white border border-solid border-white rounded-full px-5 py-1.5"
        >
          Посмотреть
        </button>
      </div>
    </nuxt-link>

    <div class="mb-3">
      <nuxt-link :to="`/cases/${id}`">
        <div class="mb-1.5" @click="$router.push(`/cases/${id}`)">
          <h4
            class="text-2xl font-bold text-gray-800 hover:text-violet-600 cursor-pointer"
            v-text="title"
          />
        </div>
      </nuxt-link>

      <p class="text-md font-light">{{ subtitle }}</p>
    </div>

    <div class="flex justify-between">
      <span class="text-gray-500">{{ postingDate }}</span>

      <nuxt-link :to="`/cases/${id}`">
        <div class="flex items-center hover:text-violet-400 cursor-pointer">
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
      </nuxt-link>
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
      default() {
        return ''
      },
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
}
</script>
