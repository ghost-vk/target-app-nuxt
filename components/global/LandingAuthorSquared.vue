<template>
  <section>
    <div class="md:container">
      <div
        class="flex flex-wrap sm:flex-nowrap items-center bg-violet-100 sm:p-6 md:p-12 lg:p-20 md:rounded"
      >
        <div
          class="w-full sm:w-1/2 flex flex-col justify-center max-h-96 sm:max-h-full overflow-hidden sm:pr-10 mb-5 md:mb-0"
        >
          <div class='relative w-full'>
            <div v-aspect-ratio="'2:3'" class="max-h-96 sm:max-h-full"></div>

            <img
              v-lazy-load
              class="absolute rounded"
              :class="$device.isMobile ? 'transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' : 'top-0 left-0'"
              data-src="/product-author.jpg"
              alt="Таргетолог Анастасия Черепахина"
            />

            <noscript inline-template>
              <img
                class="absolute top-0 left-0 w-full rounded"
                src="/product-author.jpg"
                alt="Таргетолог Анастасия Черепахина"
              />
            </noscript>
          </div>
        </div>
        <div class="p-4 sm:p-0">
          <span class="block text-4xl lg:text-7xl mb-5 lg:mb-8">
            АВТОР<br />МАТЕРИАЛА
          </span>

          <span class="text-xl lg:text-3xl block">Анастасия Черепахина</span>

          <analytics-link
            route="Профиль Instagram"
            :href="$store.getters['contacts/contacts'].instagram"
            target="_blank"
            class="block mb-5 text-base lg:text-lg"
          >
            @anastasi.target
          </analytics-link>

          <ul class="list-inside list-disc text-sm sm:text-base">
            <li v-for="f in features" :key="f">{{ f }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    features: [
      'действующий таргетолог',
      '2 года опыта',
      'опыт более чем в 20 нишах',
      'наставник для начинающих таргетологов',
      'была куратором на курсе',
      'личный рекорд CTR 5,26%',
    ],
  }),
}
</script>
