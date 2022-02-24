<template>
  <AppSectionCard
    :title="title"
    button="Оставить заявку"
    @button-click="
      $store.dispatch('lead/showDialog', {
        source: `Страница услуг. ${title}.`,
        shouldCallback: true,
      })
    "
  >
    <template #scrollable-list>
      <ul
        class="pl-0.5 list-disc list-inside leading-relaxed text-gray-500 pb-6 text-xs sm:text-sm text-left"
      >
        <li v-for="item in listItems" :key="item" class="mb-1 md:mb-2">{{ item }}</li>
      </ul>
    </template>

    <template #additional-items>
      <app-icon-with-text-row class="px-1.5">
        <template #icon>
          <outline-document-text-icon class="h-6 w-6" />
        </template>

        <template #body>памятка по блокировкам Facebook</template>
      </app-icon-with-text-row>
    </template>

    <template #highlighted-items>
      <app-icon-with-text-row>
        <template #icon>
          <outline-gift-icon class="h-8 w-8 text-purple-500" />
        </template>

        <template #body>
          <span class="text-purple-900 uppercase font-semibold text-sm">
            обратная связь в течение 5-ти дней после консультации
          </span>
        </template>
      </app-icon-with-text-row>
    </template>

    <template #last-content>
      <div class="text-center">
        <p class="text-2xl font-bold">3 500 р.</p>
      </div>
    </template>
  </AppSectionCard>
</template>

<script>
import AppSectionCard from '@/components/AppSectionCard'

export default {
  components: {
    AppSectionCard,
  },

  data() {
    return {
      title: 'Консультация по блокировкам, связанным с рекламой',
      listItems: [
        'Выяснение причины блокировки',
        'Общение с технической поддержкой Facebook',
        'Как сделать привязки в Facebook и избежать блокировок',
        'Что делать, если заблокировали навсегда?',
        'Как продвигать запрещенную продукцию/бизнес, чтобы не заблокировали?',
        'Подключение к вашему ПК через удаленный доступ',
      ],
    }
  },
}
</script>
