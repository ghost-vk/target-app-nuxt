<template>
  <transition name="slideRight">
    <div
      v-show="isShown"
      class="fixed z-30 left-0 top-0 bottom-0 right-0 w-screen bg-opacity-20 bg-gradient-to-r from-transparent to-white"
      style="animation-duration: 0.25s"
      @click="$emit('close')"
    >
      <div
        class="ml-auto pt-14 w-64 md:w-80 h-full bg-gray-600 p-2 pb-8 text-gray-100 overflow-auto"
        @click.stop
      >
        <div class="w-36 mx-auto">
          <nuxt-link to="/">
            <img src="/logo.svg" alt="Логотип бренда anastasi-target" />
          </nuxt-link>
        </div>

        <div class="flex flex-col align-middle items-center py-12 text-xl">
          <nuxt-link to="/" class="mb-4" exact-active-class="font-bold">
            Главная
          </nuxt-link>

          <nuxt-link to="/service" exact-active-class="font-bold" class="mb-4">
            Услуги
          </nuxt-link>

          <AppMobileMenuDropdown />

          <nuxt-link to="/cases" exact-active-class="font-bold" class="mb-4">
            Мои кейсы
          </nuxt-link>

          <div class="mb-4 flex justify-center items-center">
            <span>Блог</span>
            <span class="ml-1 px-2 py-1 bg-purple-50 text-gray-600 rounded-full text-xs">
              скоро
            </span>
          </div>
        </div>

        <AppTelegramChatPill class="mb-5" />

        <div class="flex justify-center px-2">
          <analytics-link
            :href="contacts.instagram"
            target="_blank"
            route="профиль Instagram"
            class="block mr-3"
          >
            <app-instagram-icon class="h-9 w-9 text-gray-300 hover:text-purple-400" />
          </analytics-link>

          <analytics-link
            :href="contacts.telegram"
            target="_blank"
            route="переписка в Telegram"
            class="block mr-3"
          >
            <app-telegram-icon class="h-9 w-9 text-gray-300 hover:text-blue-400" />
          </analytics-link>

          <analytics-link
            :href="contacts.whatsapp"
            target="_blank"
            route="переписка в What's App"
            class="block mr-3"
          >
            <app-whats-app-icon class="h-9 w-9 text-gray-300 hover:text-green-400" />
          </analytics-link>

          <analytics-link
            :href="contacts.youtube"
            target="_blank"
            route="канал YouTube"
            class="block"
          >
            <app-youtube-icon class="h-9 w-9 transition-colors text-gray-300 hover:text-red-400" />
          </analytics-link>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import AppTelegramChatPill from '@/components/AppTelegramChatPill'
import AppMobileMenuDropdown from '@/components/AppMobileMenuDropdown'

export default {
  components: {
    AppTelegramChatPill,
    AppMobileMenuDropdown,
  },

  props: {
    isShown: {
      type: Boolean,
      default() {
        return false
      },
    },
  },

  computed: {
    contacts() {
      return this.$store.getters['contacts/contacts']
    },
  },

  watch: {
    $route() {
      this.$emit('close')
    },
  },
}
</script>
