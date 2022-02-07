<template>
  <section class="relative md:pt-20 overflow-hidden">
    <img
      v-lazy-load
      data-src="/brief-bg.svg"
      class="absolute -right-6 h-full top-0 -translate-y-1/2 opacity-50 md:opacity-100"
      alt=""
    />
    <div class="container relative z-20">
      <h3
        class="text-3xl md:text-5xl text-center lg:text-left font-bold mb-8 md:mb-16"
      >
        Заполните бриф
      </h3>

      <div class="flex justify-between flex-wrap">
        <div class="w-full md:w-1/2 md:pr-6">
          <p class="leading-relaxed mb-5">
            Чтобы предложить оптимальные пути решения бизнес-задач, мне
            необходимо вникнуть в особенности вашего бизнеса. Детально
            заполненный бриф поможет мне проанализировать и оценить проект, а
            после предложить наиболее эффективные пути достижения поставленных
            целей. Бриф составлен в форме коротких вопросов, а его заполнение
            займет не более 10 минут. Как только я проанализирую предоставленную
            информацию, я свяжуюсь с вами в рабочее время (Пн-Сб 10:00 - 18:00)
            для обсуждения деталей.
          </p>

          <p class="leading-relaxed mb-8">
            Пожалуйста, обратите внимание, сейчас я беру в работу только проекты
            с дневным рекламным бюджетом от 700 &#8381;.
          </p>

          <analytics-link
            route="бриф в google forms"
            :href="$store.getters['contacts/contacts'].briefURL"
            target="_blank"
            class="block max-w-max"
          >
            <AppPurpleRoundedButton
              title="Заполнить Бриф"
              class="mx-auto md:mx-0"
            />
          </analytics-link>
        </div>

        <div class="order-first md:order-last w-full md:w-1/2 mb-5 md:mb-0">
          <img
            v-lazy-load
            data-src="brief.png"
            class="block w-5/6 md:w-auto mx-auto md:mx-0 md:-pr-32"
            alt="Бриф на разработку рекламной стратегии"
          />

          <noscript inline-template>
            <img
              src="brief.png"
              class="block w-5/6 md:w-auto mx-auto md:mx-0 md:-pr-32"
              alt="Бриф на разработку рекламной стратегии"
            />
          </noscript>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicePageBrief',
}
</script>
