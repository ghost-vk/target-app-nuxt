<template>
  <div class="text-gray-700 bg-gray-50">
    <div id="before-header"></div>

    <AppHeader v-show="shouldHeaderVisible" @open-menu="isMenuOpened = true" />

    <AppMobileMenu :is-shown="isMenuOpened" @close="isMenuOpened = false" />

    <div class="min-h-screen">
      <nuxt />
    </div>

    <AppScrollToTopButton :is-shown="true" />

    <AppCookieNotification />

    <AppFooter />

    <client-only>
      <notifications position="bottom right" />
    </client-only>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppScrollToTopButton from '@/components/AppScrollToTopButton'
import AppCookieNotification from '@/components/AppCookieNotification'
import AppFooter from '@/components/AppFooter'

export default {
  components: {
    AppScrollToTopButton,
    AppCookieNotification,
    AppFooter,
  },

  data: () => ({
    shouldHeaderVisible: true,
    isMenuOpened: false,
  }),

  computed: {
    ...mapGetters({
      isNotifyShown: 'notify/isShown',
      notify: 'notify/notify'
    })
  },

  watch: {
    isNotifyShown() {
      if (!this.isNotifyShown) {
        return
      }

      this.$notify({
        type: this.notify.type || 'success',
        title: this.notify.title,
        text: this.notify.text
      })

      this.$store.dispatch('notify/disableNotify')
    }
  }
}
</script>
