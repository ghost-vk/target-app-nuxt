<template>
  <section id="about" class="pt-20 overflow-hidden">
    <div class="container">
      <app-heading-bubble class="mb-28 lg:mb-40" text-side="right" :title="title" />

      <div class="flex justify-between">
        <div
          v-if="$device.isDesktop"
          class="relative hidden lg:flex flex-col justify-center w-1/3 flex-shrink-0 rounded overflow-hidden"
        >
          <div v-aspect-ratio="'4:5'"></div>
          <img
            v-lazy-load
            class="absolute top-0 left-0 w-full"
            :data-src="image.src"
            :alt="image.alt"
          />

          <noscript inline-template>
            <img :src='image.src' :alt='image.alt'>
          </noscript>
        </div>

        <div class="lg:pl-20 flex flex-col justify-center text-sm sm:text-base">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LandingAbout',

  props: {
    title: {
      type: String,
      default() {
        return 'О чем этот продукт?'
      }
    },

    // 4:5
    image: {
      type: Object,
      default() {
        return {
          src: '/working-on-mac.jpg',
          alt: 'Настя настраивает таргетированную рекламу'
        }
      }
    }
  }
}
</script>
