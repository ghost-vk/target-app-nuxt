<template>
  <section class="overflow-x-hidden pt-16 pb-5 mb-12">
    <div class="container relative">
      <div id="at_price" class="relative">
        <app-heading-bubble title="Оставьте заявку" class="mb-20 md:mb-28" />

        <div v-if="$device.isDesktop" class="lg:flex flex-wrap justify-center">
          <FacebookEscapeCourseCardsFirst />
          <FacebookEscapeCourseCardsSecond />
        </div>

        <div v-else>
          <div v-swiper="swiperOptions" class="pb-10">
            <div
              id="sc-pagination"
              class="
                swiper-pagination
                swiper-pagination-clickable
                swiper-pagination-bullets
              "
            ></div>

            <div class="swiper-wrapper">
              <div class="swiper-slide flex justify-center px-2">
                <FacebookEscapeCourseCardsFirst />
              </div>

              <div class="swiper-slide flex justify-center px-2">
                <FacebookEscapeCourseCardsSecond />
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
import FacebookEscapeCourseCardsFirst from '@/components/FacebookEscapeCourseCardsFirst.vue'
import FacebookEscapeCourseCardsSecond from '@/components/FacebookEscapeCourseCardsSecond.vue'

export default {
  directives: {
    swiper: directive,
  },

  components: {
    FacebookEscapeCourseCardsFirst,
    FacebookEscapeCourseCardsSecond,
  },

  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        initialSlide: 0,
        pagination: {
          el: '#sc-pagination',
          clickable: true,
        },
      },
    }
  },
}
</script>

<style scoped>
#sc-pagination {
  bottom: -20px;
}
</style>
