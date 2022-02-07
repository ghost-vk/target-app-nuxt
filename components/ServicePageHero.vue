<template>
  <app-section-hero>
    <app-section-hero-main-title class="mb-8">
      {{ title }}
    </app-section-hero-main-title>

    <div class="mb-5 text-center sm:text-left md:text-2xl font-semibold">
      {{ subtitle }}
    </div>

    <div class="flex flex-col sm:flex-row">
      <app-section-hero-button
        @click="
          $store.dispatch('lead/showDialog', {
            shouldCallback: true,
            source: 'Страница услуг (Консультация)',
          })
        "
        title="Получить консультацию"
        class="mb-5 sm:mb-0 sm:mr-4"
      />

      <analytics-link
        route="бриф в google forms"
        :href="$store.getters['contacts/contacts'].briefURL"
        target="_blank"
        class="block"
      >
        <app-section-hero-button title="Заполнить бриф" color="purple" />
      </analytics-link>
    </div>
  </app-section-hero>
</template>

<script>
export default {
  data: () => ({
    title: 'Настройка таргетированной рекламы и консультации от эксперта',
    subtitle: 'Эффективные решения для вашего бизнеса в Facebook / Instagram',
  }),
}
</script>
