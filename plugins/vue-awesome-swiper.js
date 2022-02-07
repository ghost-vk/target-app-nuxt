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
import 'swiper/css/swiper.min.css'
import 'swiper/components/effect-fade/effect-fade.scss'

SwiperClass.use([Pagination, Mousewheel, Navigation, Autoplay, EffectFade])

Vue.use(getAwesomeSwiper(SwiperClass))
