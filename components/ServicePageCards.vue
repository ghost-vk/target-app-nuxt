<template>
  <section class="overflow-x-hidden pt-16">
    <div class="container relative">
      <div id="at_price" class="relative mb-28">
        <app-heading-bubble title="Оставьте заявку" class="mb-14 md:mb-28" />

        <div class="text-md md:text-lg tracking-wide font-light mb-16">
          <p class="mb-3 md:mb-6 relative z-20">
            Я сертифицированный специалист и имею большой опыт в таргетированной
            рекламе на площадках Instagram, Facebook. Это позволяет мне
            выстраивать оптимальные рекламные кампании и масштабировать их.
          </p>
        </div>

        <div v-if="$device.isDesktop" class="lg:flex flex-wrap">
          <ServicePageCardsFirstItem />
          <ServicePageCardsSecondItem />
          <ServicePageCardsThirdItem />
        </div>

        <div v-else>
          <div v-swiper="swiperOptions" class="pb-10">
            <div
              id="sc-pagination"
              class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"
            ></div>

            <div class="swiper-wrapper">
              <div class="swiper-slide flex justify-center px-2">
                <ServicePageCardsFirstItem />
              </div>

              <div class="swiper-slide flex justify-center px-2">
                <ServicePageCardsSecondItem />
              </div>

              <div class="swiper-slide flex justify-center px-2">
                <ServicePageCardsThirdItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { directive } from 'vue-awesome-swiper'
import ServicePageCardsFirstItem from '@/components/ServicePageCardsFirstItem.vue'
import ServicePageCardsSecondItem from '@/components/ServicePageCardsSecondItem.vue'
import ServicePageCardsThirdItem from '@/components/ServicePageCardsThirdItem.vue'

export default {
  directives: {
    swiper: directive,
  },

  components: {
    ServicePageCardsFirstItem,
    ServicePageCardsSecondItem,
    ServicePageCardsThirdItem,
  },

  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        initialSlide: this.$route.query.price === 'consultation' ? 1 : 0,
        pagination: {
          el: '#sc-pagination',
          clickable: true,
        },
      }
    }
  },
}
</script>

<style scoped>
#sc-pagination {
  bottom: -20px
}
</style>
