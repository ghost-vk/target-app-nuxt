<template>
  <div>
    <client-only>
      <intersect root-margin="-10% 0% -10% 0%" @enter="animate">
        <span></span>
      </intersect>
    </client-only>

    <transition name="fade"
    >
      <div v-show="isVisible" class="container overflow-hidden pb-20">

        <div
          v-swiper="swiperOptions"
          class="swiper-container"
          :class="screen > 1023 ? 'rounded-xl shadow-2xl' : ''"
        >

          <div class="hidden lg:block">
            <div id="banners-prev" class="swiper-button-prev"></div>
            <div id="banners-next" class="swiper-button-next"></div>
          </div>

          <div class="swiper-wrapper">
            <div v-for="b in banners" :key="b.url" class="swiper-slide">
              <BannerSliderItem :banner="b" />
            </div>
          </div>

          <div
            id="banners-pagination"
            class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"
          ></div>

        </div>

      </div>

    </transition>
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper'
import BannerSliderItem from '@/components/BannerSliderItem'

const screen = process.client ? window.innerWidth : 1025

export default {
  name: 'BannersSlider',

  directives: {
    swiper: directive,
  },

  components: {
    BannerSliderItem,
  },

  data() {
    return {
      screen,
      isMounted: false,
      isVisible: !process.client,
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 10,
        effect: screen > 1023 ? 'fade' : 'slide',
        navigation: {
            nextEl: '#banners-next',
            prevEl: '#banners-prev',
        },
        pagination: { el: '#banners-pagination', clickable: true },
        autoplay: { delay: 5000, pauseOnMouseEnter: true },
      },
    }
  },

  computed: {
    banners() {
      return this.$store.getters['banners/banners']
    },
  },

  mounted() {
    this.isMounted = true
  },

  methods: {
    animate() {
      if (!this.isMounted || this.isVisible) {
        return
      }

      this.isVisible = true
    }
  },
}
</script>

<style lang="scss" scoped>
.swiper-pagination {
  bottom: 11px;
}

.swiper-container {
  @media (max-width: 460px) {
    overflow: visible;
  }
}
</style>
