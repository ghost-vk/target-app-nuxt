<template>
  <app-modal-window
    :is-shown="$store.getters['product-landing/isShown']"
    @close="$store.dispatch('product-landing/hideModal')"
  >
    <div class="text-center">
      <div class="text-xl font-bold">Покупка</div>
      <div class="text-gray-500 mb-5">{{ title }}</div>
    </div>

    <div class="mb-4 text-center">
      Оплата производится через Telegram бота.
    </div>

    <div class="flex justify-center sm:flex-nowrap flex-wrap">
      <analytics-link
        class="block w-full sm:w-auto"
        :href="$store.getters['contacts/contacts'].telegramPaymentBot"
        route="переход в кассу (телеграм-бот)"
        target="_blank"
      >
        <button
          type="button"
          class="bg-blue-500 text-gray-50 px-16 py-2 rounded-full shadow w-full relative"
        >
          <app-telegram-icon
            class="absolute left-3 transform top-1/2 -translate-y-1/2 w-6 h-6"
          />

          Оплатить
        </button>
      </analytics-link>
    </div>
  </app-modal-window>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
  }
}
</script>
