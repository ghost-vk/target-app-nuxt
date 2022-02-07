<template>
  <footer class="bg-gray-800 py-12 text-gray-50">
    <div class="container">
      <div class="flex flex-wrap md:flex-nowrap mb-4">
        <div
          class="
            flex
            w-full
            md:w-1/3
            order-1
            flex-col
            items-center
            md:items-start
            mb-5
            md:md-0
            text-lg
            leading-tight
          "
        >
          <nuxt-link to="/service" class="mb-3 font-bold">
            Услуги
          </nuxt-link>

          <nuxt-link to="/cases" class="mb-3 font-bold">
            Мои кейсы
          </nuxt-link>

          <a href="/privacy.html" target="_blank" class="mb-3">Политика конфиденциальности</a>
          <a href="/user-agreement.html" target="_blank">Пользовательское соглашение</a>
        </div>

        <div
          class="
            w-full
            md:w-1/3
            flex
            justify-center
            items-center
            order-last
            md:order-2
            mb-4
            md:mb-0
          "
        >
          <router-link v-tooltip="'На главную страницу'" to="/">
            <img class="w-40 mx-auto" src="/logo.svg" alt="Логотип бренда anastasi-target" />
          </router-link>
        </div>

        <div class="w-full md:w-1/3 order-3 text-center md:text-right mb-6 md:mb-0">
          <h6 class="block text-lg md:text-2xl font-bold mb-3">Контакты</h6>

          <div class="flex justify-center md:justify-end text-gray-400 mb-3">
            <analytics-link
              route="профиль в Instagram"
              :href="contacts.instagram"
              target="_blank"
              class="block mr-2"
            >
              <AppInstagramIcon class="h-8 w-8 transition-colors hover:text-purple-400" />
            </analytics-link>

            <analytics-link
              route="переписка в Telegram"
              :href="contacts.telegram"
              target="_blank"
              class="block mr-2"
            >
              <AppTelegramIcon class="h-8 w-8 transition-colors hover:text-blue-400" />
            </analytics-link>

            <analytics-link
              route="переписка What's App"
              :href="contacts.whatsapp"
              target="_blank"
              class="block mr-2"
            >
              <AppWhatsAppIcon class="h-8 w-8 transition-colors hover:text-green-400" />
            </analytics-link>

            <analytics-link
              :href="contacts.youtube"
              target="_blank"
              route="канал YouTube"
              class="block"
            >
              <app-youtube-icon class="h-8 w-8 transition-colors hover:text-red-400" />
            </analytics-link>
          </div>

          <div class="md:ml-auto md:max-w-max">
            <AppTelegramChatPill />
          </div>
        </div>
      </div>
      <div class="text-center px-3 text-gray-400">&copy; Все права защищены 2021</div>
    </div>
  </footer>
</template>

<script>
import AppTelegramChatPill from '@/components/AppTelegramChatPill'

export default {
  components: {
    AppTelegramChatPill,
  },

  computed: {
    contacts() {
      return this.$store.getters['contacts/contacts']
    }
  }
}
</script>




