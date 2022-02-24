<template>
  <div class="mb-4">
    <div
      class="flex justify-center items-center cursor-pointer"
      @click="isOpened = !isOpened"
    >
      <solid-chevron-down-icon
        class="w-5 h-5 mr-1 flex-shrink-0 transform transition-transform"
        :class="isOpened ? 'rotate-180' : ''"
      />

      <span>Платные материалы</span>
    </div>

    <transition
      enter-active-class="duration-500"
      enter-from-class="max-h-0 opacity-0"
      enter-to-class="max-h-screen opacity-100"
      leave-active-class="duration-200"
      leave-from-class="max-h-screen"
      leave-to-class="max-h-0 opacity-0"
    >
      <div
        v-show="isOpened"
        class="flex flex-col items-center justify-center text-center text-sm mt-2"
      >
        <nuxt-link to="/products/work-process-with-client">
          <span
            class="text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            Чек-лист "Как работать с клиентами"
          </span>
        </nuxt-link>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data: () => ({
    isOpened: false,
  }),
}
</script>
