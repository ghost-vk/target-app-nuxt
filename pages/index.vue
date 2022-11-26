<template>
  <div>
    <app-section-hero>
      <app-section-hero-main-title class="mb-8">
        Увеличивайте продажи.<br /><span class="text-violet-600">Быстрее!</span>
      </app-section-hero-main-title>

      <div class="mb-10 text-center sm:text-left md:text-2xl font-semibold">
        Мы помогаем бизнесу увеличивать продажи быстрее, с помощью детального
        изучения продукта, анализа целевой аудитории, и точной настройки
        рекламных кампаний.
      </div>

      <div class="flex flex-col sm:flex-row">
        <app-section-hero-button
          title="Оставить заявку"
          color="purple"
          @click="
            $store.dispatch('lead/showDialog', {
              source: 'С главной страницы',
              shouldCallback: true,
            })
          "
        />
      </div>
    </app-section-hero>

    <BannersSlider v-if="$store.getters['banners/banners'].length > 0" />

    <section class="mb-10 sm:mb-16">
      <div class="container md:py-5">
        <div class="max-w-screen-sm mx-auto">
          <AppHeadingThird title="Обо мне" />
          <ul
            class="list-inside list-disc text-md text-gray-600 md:text-lg tracking-wide font-light mb-16"
          >
            <li
              v-for="text in about"
              :key="text.slice(0, 10) + Math.random()"
              class="mb-3 md:mb-6"
            >
              {{ text }}
            </li>
          </ul>
          <AppNastyaRoundedCard />
        </div>
      </div>
    </section>

    <section class="overflow-x-hidden py-16">
      <div class="container relative">
        <app-heading-bubble
          text-side="left"
          title="Настройка рекламы"
          class="mb-28 lg:mb-40"
        />

        <client-only>
          <intersect @enter="animateFeatures">
            <span></span>
          </intersect>
        </client-only>

        <div class="flex flex-wrap lg:flex-nowrap md:px-24 text-gray-600">
          <transition name="fadeDown">
            <AppFeatureWithIcon
              v-show="featureVisibility0"
              title="3 года опыта"
              body="в таргетированной рекламе"
            >
              <template #icon>
                <outline-badge-check-icon
                  class="w-12 h-12 md:w-16 md:h-16 text-violet-200 absolute -left-2 -top-4"
                />
              </template>
            </AppFeatureWithIcon>
          </transition>

          <transition name="fadeDown">
            <AppFeatureWithIcon
              v-show="featureVisibility1"
              title="40+ ниш"
              body="с которыми работала"
            >
              <template #icon>
                <outline-fire-icon
                  class="w-12 h-12 md:w-16 md:h-16 text-violet-200 absolute -left-2 -top-4"
                />
              </template>
            </AppFeatureWithIcon>
          </transition>

          <transition name="fadeDown">
            <AppFeatureWithIcon
              v-show="featureVisibility2"
              title="x3.5 бюджета"
              body="прибыль в среднем"
            >
              <template #icon>
                <outline-x-icon
                  class="w-12 h-12 md:w-16 md:h-16 text-violet-200 absolute -left-2 -top-4"
                />
              </template>
            </AppFeatureWithIcon>
          </transition>

          <transition name="fadeDown">
            <AppFeatureWithIcon
              v-show="featureVisibility3"
              title="1546% ROMI"
              body="личный рекорд"
            >
              <template #icon>
                <outline-sparkles-icon
                  class="w-12 h-12 md:w-16 md:h-16 text-violet-200 absolute -left-2 -top-4"
                />
              </template>
            </AppFeatureWithIcon>
          </transition>
        </div>
      </div>
    </section>

    <section class="container mb-8 sm:mb-16 sm:test-lg md:text-xl">
      <p>
        Если вы в поисках ответственного таргетолога, за настройку рекламных
        кампаний которого вам не придется переживать, то вы в нужном месте. Я
        всегда в курсе последних обновлений Facebook / Instagram. Со мной можно
        быть уверенным в том, что ваш рекламный кабинет не будет заблокирован, а
        реклама будет настроена оптимально для вашего бизнеса и бюджета.
      </p>
    </section>

    <div class="container mb-14 sm:mb-28">
      <app-title-with-button
        :is-router="true"
        title="Ознакомиться с моими услугами"
        link-title="Подробнее"
        url="/service"
      />
    </div>

    <section class="sm:mb-12 overflow-x-hidden py-16">
      <div class="container">
        <app-heading-bubble
          text-side="right"
          title="Обучение у меня"
          class="mb-28 lg:mb-40"
        />
        <div class="flex flex-wrap lg:flex-nowrap justify-between">
          <div class="mb-8 lg:mb-0 px-5 lg:px-8 w-full lg:w-1/2">
            <img
              v-lazy-load
              data-src="/about-education.jpg"
              alt="Таргетолог в Instagram/Facebook Анастасия Черепахина"
              class="w-full"
            />

            <noscript inline-template>
              <img
                src="/about-education.jpg"
                alt="Таргетолог в Instagram/Facebook Анастасия Черепахина"
                class="w-full"
              />
            </noscript>
          </div>
          <div
            class="lg:pl-8 w-full lg:w-1/2 text-center lg:text-left text-md lg:text-lg font-light flex flex-1 flex-col justify-center"
          >
            <p class="mb-7">{{ educationText[0] }}</p>
            <p>{{ educationText[1] }}</p>
          </div>
        </div>
      </div>
    </section>

    <section
      v-if="$store.getters['cases/cases'].length > 0"
      class="py-14 sm:pb-20 sm:pt-28"
    >
      <div class="container">
        <div class="mb-6 md:mb-12">
          <app-heading-third title="Кейсы" class="mb-2 sm:mb-5" />
        </div>
        <div>
          <nuxt-link to="/cases">
            <div
              class="flex items-center mb-6 hover:text-violet-500 transition-colors cursor-pointer mx-auto max-w-max"
            >
              <span class="text-lg font-semibold">Посмотреть все</span>
              <outline-chevron-right-icon class="ml-2 h-5 w-5" />
            </div>
          </nuxt-link>

          <CasesSlider />
        </div>
      </div>
    </section>

    <ReviewsSection v-if="$store.getters['reviews/reviews'].length > 0" />

    <ModalLidForm />
  </div>
</template>

<script>
import AppNastyaRoundedCard from '@/components/AppNastyaRoundedCard'
import BannersSlider from '@/components/BannersSlider'
import AppFeatureWithIcon from '@/components/AppFeatureWithIcon'
import CasesSlider from '@/components/CasesSlider'
import ReviewsSection from '@/components/ReviewsSection'
import ModalLidForm from '@/components/ModalLidForm'

const description =
  'Ищете таргетолога для настройки рекламы в Instagram/Facebook? Я выстрою оптимальную рекламную кампанию для вашего бизнеса и запущу таргетированную рекламу.'

export default {
  components: {
    BannersSlider,
    AppNastyaRoundedCard,
    AppFeatureWithIcon,
    CasesSlider,
    ReviewsSection,
    ModalLidForm,
  },

  transition: 'fadeUp',

  data: () => ({
    about: [
      '3 года опыта в таргета',
      'Работала с более 40 нишами',
      'Авторская система запуска рекламы',
      'Углубленный подход к работе с клиентами',
      'Еженедельные созвоны',
      'Ежедневно на связи в мессендежере',
      'Еженедельные отчеты и их обсуждение',
      'Обучила более 1000 таргетологов',
    ],
    isFeaturesAnimated: false,
    featureVisibility0: !process.client,
    featureVisibility1: !process.client,
    featureVisibility2: !process.client,
    featureVisibility3: !process.client,
    educationText: [
      `Мои обучающие материалы и курсы включают с себя полный цикл детальной работы с клиентом: от поиска первого проекта, детального изучения продукта, анализа целевой аудитории и точной настройки рекламных кампаний до повторного закрытия клиента на сотрудничество.`,
    ],
  }),

  async fetch({ store }) {
    await store.dispatch('banners/fetchActiveBanners')
    await store.dispatch('cases/loadCases')
    await store.dispatch('reviews/load', { limit: 100 })
  },

  head() {
    return {
      title: 'Главная',
      meta: [
        {
          hid: 'description',
          name: 'description',
          contents: description,
        },
        { property: 'og:description', content: description },
        {
          hid: 'og:title',
          property: 'og:title',
          contents: 'Таргетированная реклама | Отзывы | Цены | Обучение',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          contents: '/meta-image.png',
        },
      ],
    }
  },

  mounted() {
    const source = this.$route.query.source
      ? this.$route.query.source
      : 'Инстраграм Директ'

    if (
      this.$route.query.lead_form !== undefined &&
      this.$route.query.lead_form === 'true'
    ) {
      this.$store.dispatch('lead/showDialog', { shouldCallback: true, source })
    }
  },

  methods: {
    animateFeatures() {
      if (this.isFeaturesAnimated) {
        return
      }

      this.isFeaturesAnimated = true
      this.featureVisibility0 = true

      setTimeout(() => {
        this.featureVisibility1 = true
      }, 500)

      setTimeout(() => {
        this.featureVisibility2 = true
      }, 1000)

      setTimeout(() => {
        this.featureVisibility3 = true
      }, 1500)
    },
  },
}
</script>
