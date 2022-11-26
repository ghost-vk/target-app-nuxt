<template>
  <AppSectionCard
    :title="title"
    button="Оставить заявку"
    @button-click="
      $store.dispatch('lead/showDialog', {
        source: `Вопрос по курсу Facebook 2.0. Тариф ${title}.`,
        shouldCallback: true,
      })
    "
  >
    <template #scrollable-list>
      <ul
        class="
          pl-0.5
          list-disc list-inside
          leading-relaxed
          text-gray-500
          pb-6
          text-xs
          sm:text-sm
          text-left
        "
      >
        <li
          v-for="item in listItems"
          :key="item"
          class="mb-1 md:mb-2"
          v-html="item"
        ></li>
      </ul>
    </template>

    <template #additional-items>
      <app-icon-with-text-row class="px-1.5 mb-3">
        <template #icon>
          <outline-document-text-icon class="h-6 w-6" />
        </template>
        <template #body> Доступ к 11+ урокам и материалам </template>
      </app-icon-with-text-row>

      <app-icon-with-text-row class="px-1.5 mb-3">
        <template #icon>
          <outline-information-circle-icon class="h-6 w-6" />
        </template>
        <template #body> Срок доступа 3 месяца после оплаты </template>
      </app-icon-with-text-row>

      <app-icon-with-text-row class="px-1.5">
        <template #icon>
          <outline-check-icon class="h-6 w-6" />
        </template>
        <template #body> С обратной связью </template>
      </app-icon-with-text-row>
    </template>

    <template #highlighted-items>
      <app-icon-with-text-row>
        <template #icon>
          <outline-gift-icon class="h-8 w-8 text-purple-500" />
        </template>

        <template #body>
          <span class="text-purple-900 uppercase font-semibold text-sm">
            1 мастермайнд
          </span>
        </template>
      </app-icon-with-text-row>
    </template>

    <template #last-content>
      <div class="text-2xl font-bold flex items-center justify-center">
        9990 рyб.
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
      title: 'OPTIMAL',
      listItems: [
        'Как выбрать заграничный аккаунт для работы на Facebook',
        'Важные параметры при выборе аккаунта',
        'Сервисы для покупки зарубежного аккаунта',
        'Покупка «платежки» для Facebook',
        'Proxy и работа с ним',
        'Сервисы для покупки прокси',
        'Этапы прогрева покупного аккаунта на Facebook',
        'Обзор браузера Dolphin Anty и работа с ним',
        'Создание карты Capitalist',
        'Покупка зарубежных документов ',
        'Аренда зарубежного номера телефона',
        'Получение оплаты от зарубежных клиентов',
        'Создание криптокошелька',
        'Перевод из криптовалюты в рубли',
        'Важные ссылки при работе с Facebook',
        'Обратная связь 1 месяц',
        'Ответы на вопросы',
        'Участие в мастермайнде',
        'Запись мастермайнда',
      ],
    }
  },
}
</script>
