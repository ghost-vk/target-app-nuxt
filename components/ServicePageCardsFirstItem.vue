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
        class="list-disc list-inside leading-relaxed text-gray-500 pb-6 text-xs sm:text-sm text-left"
      >
        <li v-for="item in listItems" :key="item" class="mb-1 md:mb-2">{{ item }}</li>
      </ul>
    </template>

    <template #additional-items>
      <app-icon-with-text-row class="px-1.5 mb-3">
        <template #icon>
          <outline-document-text-icon class="h-6 w-6" />
        </template>
        <template #body>
          все рекламные наработки остаются у вас после окончания сотрудничества
        </template>
      </app-icon-with-text-row>

      <app-icon-with-text-row class="px-1.5 italic">
        <template #icon>
          <outline-information-circle-icon class="h-6 w-6" />
        </template>
        <template #body>
          наработки можно будет использовать при самостоятельном запуске рекламы
        </template>
      </app-icon-with-text-row>
    </template>

    <template #highlighted-items>
      <app-icon-with-text-row>
        <template #icon>
          <outline-gift-icon class="h-8 w-8 text-purple-500" />
        </template>

        <template #body>
          <span class="text-purple-900 uppercase font-semibold text-sm">
            инструкция по составлению офферов для любой ниши
          </span>
        </template>
      </app-icon-with-text-row>
    </template>

    <template #last-content>
      <div class="text-2xl font-bold flex items-center justify-center">
        20 000 р.
        <outline-question-mark-circle-icon
          v-tooltip="
            'сумма расчитывается индивидуально при рекламном бюджете от 50 000 ₽/мес'
          "
          class="h-5 w-5 text-purple-700 ml-2"
        />
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
      title: 'Настройка таргетированной рекламы в Instagram, Facebook',
      listItems: [
        'Разработка рекламной стратегии',
        'Настройка рекламного кабинета',
        'Настройка бизнес менеджера',
        'Создание Pixel Facebook счетчика (если есть сайт)',
        'Помощь в подключении счетчиков на сайт (если есть)',
        'Анализ рекламы конкурентов, воронка продаж',
        'Создание аватара клиента',
        'Подготовка рекламных макетов',
        'Написание офферов',
        'Создание аудиторий',
        'Запуск рекламной кампании',
        'Оптимизация, понижение стоимости клика',
        'Отслеживание результатов, ежедневный контроль',
        'Масштабирование рекламной кампании',
      ],
    }
  },
}
</script>
