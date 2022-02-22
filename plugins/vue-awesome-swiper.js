import Vue from 'vue'
import {
  Swiper as SwiperClass,
  Pagination,
  Navigation,
  Mousewheel,
  Autoplay,
  EffectFade,
} from 'swiper/js/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

SwiperClass.use([Pagination, Mousewheel, Navigation, Autoplay, EffectFade])

Vue.use(getAwesomeSwiper(SwiperClass))
