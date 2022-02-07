<template>
  <div>
    <AppRoundedPersonImage image="/nastya-rounded.jpg" class="mx-auto mb-4" />
    <div class="flex flex-col items-center text-center text-xl">
      <div class="font-bold mb-3">Анастасия Черепахина</div>
      <div class="font-light mb-3">Ответственный таргетолог</div>
      <analytics-link
        route="Переход в профиль Instagram"
        :href="instagram"
        target="_blank"
      >
        <app-instagram-icon class="h-8 w-8 text-gray-400" />
      </analytics-link>
    </div>
  </div>
</template>

<script>
import AppRoundedPersonImage from '@/components/AppRoundedPersonImage.vue'

export default {
  components: {
    AppRoundedPersonImage,
  },
  computed: {
    instagram() {
      return this.$store.getters['contacts/contacts'].instagram
    },
  },
}
</script>
