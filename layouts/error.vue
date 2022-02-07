<template>
  <div
    class="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-indigo-600 to-blue-400"
  >
    <div class="px-40 py-20 bg-white rounded-md shadow-xl">
      <div class="flex flex-col items-center">
        <h1 class="font-bold text-blue-600 text-9xl">{{ error.statusCode }}</h1>

        <h6
          class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"
        >
          <span class="text-red-500">Упс!</span>

          <span v-if="error.statusCode === 404">Страница не найдена</span>

          <span v-else>Произошла ошибка</span>
        </h6>

        <p class="mb-8 text-center text-gray-500 md:text-lg">
          Страница, которую вы ищете, не существует.
        </p>

        <nuxt-link
          to="/"
          class="px-6 py-2 text-sm rounded font-semibold text-blue-800 bg-blue-100"
        >
          На главную
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',

  props: {
    error: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
}
</script>
