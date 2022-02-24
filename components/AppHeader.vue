<template>
  <transition
    enter-active-class="duration-300"
    enter-from-class="-top-20 opacity-60"
    enter-to-class="top-0 opacity-100"
    leave-active-class="duration-300"
    leave-from-class="top-0 opacity-100"
    leave-to-class="-top-20 opacity-60"
  >
    <header class="fixed top-0 w-screen bg-purple-main z-30">
      <div
        class="container flex py-2 lg:py-5 text-white justify-between lg:justify-start"
      >
        <div class="w-28 md:w-40 flex-shrink-0">
          <nuxt-link to="/">
            <img
              v-tooltip="'Перейти на главную страницу'"
              src="/logo.svg"
              alt="Логотип бренда anastasi-target"
            />
          </nuxt-link>
        </div>
        <div class="lg:flex hidden flex-1 justify-center text-lg px-3">
          <nuxt-link to="/" exact-active-class="font-extrabold" class="mr-10">
            <AppHeaderLink title="Главная" />
          </nuxt-link>

          <nuxt-link
            v-tooltip="'настройка таргета, консультации'"
            to="/service"
            exact-active-class="font-extrabold"
            class="mr-10"
          >
            <AppHeaderLink title="Услуги" />
          </nuxt-link>

          <nuxt-link
            v-tooltip="'мои кейсы по таргету'"
            to="/cases"
            exact-active-class="font-extrabold"
          >
            <AppHeaderLink title="Кейсы" />
          </nuxt-link>
        </div>

        <div
          class="lg:w-40 flex-shrink-0 flex flex-col justify-center cursor-pointer"
          @click="$emit('open-menu', true)"
        >
          <div>
            <outline-menu-alt-3-icon class="ml-auto h-8 w-8 md:h-12 md:w-12" />
          </div>
        </div>
      </div>
    </header>
  </transition>
</template>

<script>
import AppHeaderLink from '@/components/AppHeaderLink'

export default {
  components: {
    AppHeaderLink,
  },
}
</script>
