<template>
  <div>
    <client-only>
      <intersect root-margin="-20% 0% -20% 0%" @enter="animate">
        <span></span>
      </intersect>
    </client-only>
    <transition name="slideUp">
      <div v-show="isVisible" class="block pb-10 overflow-hidden">
        <div v-swiper="swiperOptions" class="swiper-container pb-10">
          <div class="hidden lg:block">
            <div id="cases-prev" class="swiper-button-prev"></div>
            <div id="cases-next" class="swiper-button-next"></div>
          </div>

          <div
            id="cases-pagination"
            class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"
          ></div>

          <div class="swiper-wrapper">
            <div
              v-for="c in cases"
              :key="c.id"
              class="swiper-slide px-2 lg:px-10 flex justify-center"
            >
              <PostsSliderItem
                :id="c.id"
                :title="c.title"
                :subtitle="c.subtitle"
                :thumbnail="c.thumbnail"
                :posting-date="dateFilter(c.posting_date)"
              />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PostsSliderItem from '@/components/PostsSliderItem.vue'
import { date } from '@/filters/date'

const screenWidth = process.client ? window.innerWidth : 1025

export default {
  name: 'CasesSlider',

  components: {
    PostsSliderItem,
  },

  data: () => ({
    screenWidth,
    swiperOptions: {
      slidesPerView: screenWidth > 1024 ? 3 : 1,
      pagination: { clickable: true, el: '#cases-pagination' },
      navigation: {
        nextEl: '#cases-next',
        prevEl: '#cases-prev',
      },
    },
    isMounted: false,
    isVisible: !process.client,
  }),

  computed: mapGetters({
    cases: 'cases/cases',
  }),

  mounted() {
    this.isMounted = true
  },

  methods: {
    dateFilter: date,
    animate() {
      if (!this.isMounted || this.isVisible) {
        return
      }

      this.isVisible = true
    },
  },
}
</script>

<style scoped>
#cases-pagination {
  bottom: -30px !important;
}

.swiper-container {
  overflow: visible;
}

.swiper-button-next,
.swiper-button-prev {
  background: #b4a2ea !important;
}
</style>
