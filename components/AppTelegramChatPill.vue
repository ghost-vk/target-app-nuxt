<template>
  <analytics-link
    route="Чат таргетологов"
    :href="$store.getters['contacts/contacts'].telegramChat"
    target="_blank"
    class="block"
  >
    <div
      class="rounded-full bg-blue-500 px-3 py-1.5 text-white flex items-center max-w-max mx-auto"
    >
      <app-telegram-icon class="h-4 w-4 mr-2" />
      Чат таргетологов
    </div>
  </analytics-link>
</template>

<script>
export default {
  name: 'AppTelegramChatPill',
}
</script>
