<template>
  <div class="flex flex-wrap justify-center text-gray-800 text-sm select-none">
    <app-pilled-button
      v-for="btn in buttons"
      :key="btn.value"
      class="mb-2 mr-2"
      :is-selected="btn.value === $store.getters['faq/currentCategory']"
      :title="btn.title"
      @click="$store.dispatch('faq/changeCurrentCategory', btn.value)"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    buttons: [
      {
        value: 'target-setup',
        title: 'Настройка рекламы',
      },
      {
        value: 'consultation',
        title: 'Консультации',
      },
      {
        value: 'mentor',
        title: 'Менторство',
      },
    ]
  }),
}
</script>
