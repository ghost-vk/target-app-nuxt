<template>
  <div class="overflow-hidden">
    <div v-if="$device.isDesktop" class="container hidden py-20 lg:block">
      <app-heading-bubble title="Ознакомиться с услугами">
        <template #button>
          <app-purple-rounded-button
            class="z-20"
            title="Получить консультацию"
            @click="openLidForm"
          />
        </template>
      </app-heading-bubble>
    </div>

    <div v-else class="container mb-14 sm:mb-56 lg:hidden">
      <app-title-with-button
        :is-event="true"
        title="Ознакомиться с моими услугами"
        link-title="Получить консультацию"
        @handle="openLidForm"
      />
    </div>
  </div>
</template>

<script>
const screenWidth = process.client ? window.innerWidth : 1025

export default {
  data: () => ({ screenWidth }),

  methods: {
    openLidForm() {
      this.$store.dispatch('lead/showDialog', {
        source: 'Страница услуг (Консультация)',
        shouldCallback: true,
      })
    },
  },
}
</script>
