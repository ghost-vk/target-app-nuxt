<template>
  <section class="py-20 overflow-hidden">
    <div class="container">
      <app-heading-bubble
        class="mb-28 lg:mb-40"
        text-side="left"
        :title="title"
      >
        <template v-if="$device.isDesktop" #button>
          <a v-smooth-scroll href="#buy" class="z-20">
            <app-purple-rounded-button title="Хочу купить" />
          </a>
        </template>
      </app-heading-bubble>

      <landing-details-grid class="mb-8">
        <slot />
      </landing-details-grid>

      <div class="max-w-screen-sm mx-auto">
        <client-only>
          <intersect root-margin='-15% 0px -15% 0px' @enter="btnClass = 'shine-animated'">
            <span></span>
          </intersect>
        </client-only>

        <a v-smooth-scroll href="#buy">
          <app-full-width-rounded-button
            class="shine text-base md:text-xl lg:text-3xl"
            :class="btnClass"
            :title="btnText"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default() {
        return 'Что содержится внутри?'
      },
    },

    btnText: {
      type: String,
      default() {
        return 'Прокачаться прямо сейчас'
      },
    },
  },

  data: () => ({
    btnClass: ''
  })
}
</script>
