<template>
  <div>
    <client-only>
      <intersect root-margin="-20% 0% -20% 0%" @enter="isVisible = true">
        <span></span>
      </intersect>
    </client-only>

    <transition name="fade">
      <div v-show="isVisible" class="block pb-10 overflow-hidden">
        <div v-swiper="swiperOptions" class="swiper-container pb-10">
          <div class="hidden lg:block">
            <div id="ws-prev" class="swiper-button-prev"></div>
            <div id="ws-next" class="swiper-button-next"></div>
          </div>

          <div
            id="ws-pagination"
            class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-bullets-dynamic"
          ></div>

          <div class="swiper-wrapper">
            <div
              v-for="item in steps"
              :key="item.thumbnail"
              class="swiper-slide px-2 lg:px-10 flex justify-center"
            >
              <WorkStepsSliderItem
                :title="item.title"
                :thumbnail="item.thumbnail"
              />
            </div>
          </div>

        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper'
import WorkStepsSliderItem from '@/components/WorkStepsSliderItem'

const screen = process.client ? window.innerWidth : 1025

const steps = [
  {
    title: 'Получение заполненного брифа',
    thumbnail: '/work-steps/1.svg',
  },
  {
    title: 'Обсуждение данных в брифе, утверждение целей',
    thumbnail: '/work-steps/2.svg',
  },
  {
    title: 'Разработка рекламной стратегии',
    thumbnail: '/work-steps/3.svg',
  },
  {
    title: 'Настройка рекламного кабинета, бизнес менеджера',
    thumbnail: '/work-steps/4.svg',
  },
  {
    title: 'Анализ целевой аудитории',
    thumbnail: '/work-steps/5.svg',
  },
  {
    title: 'Анализ конкурентов, рекламы конкурентов, воронка продаж',
    thumbnail: '/work-steps/6.svg',
  },
  {
    title: 'Создание аудиторий, рекламных креативов и текстов',
    thumbnail: '/work-steps/7.svg',
  },
  {
    title: 'Запуск рекламной кампании и проведение тестового периода',
    thumbnail: '/work-steps/8.svg',
  },
  {
    title: 'Оптимизация, понижение стоимости клика',
    thumbnail: '/work-steps/9.svg',
  },
  {
    title: 'Отслеживание результатов, ежедневный контроль',
    thumbnail: '/work-steps/10.svg',
  },
  {
    title: 'Масштабирование рекламной кампании',
    thumbnail: '/work-steps/11.svg',
  },
]

export default {
  directives: {
    swiper: directive,
  },

  components: {
    WorkStepsSliderItem,
  },

  data: () => ({
    isVisible: !process.client,
    swiperOptions: {
      slidesPerView: screen > 1024 ? 3 : 1,
      slidesPerGroup: screen > 1024 ? 3 : 1,
      navigation: {
        nextEl: '#ws-next',
        prevEl: '#ws-prev',
      },
      pagination: {
        clickable: true,
        el: '#ws-pagination',
        dynamicBullets: true,
      },
    },
    steps
  }),
}
</script>

<style lang="scss" scoped>
#ws-pagination {
  bottom: -20px;
}

.swiper-container {
  overflow: visible;
}
</style>
