<template>
  <div>
    <app-section-hero>
      <app-section-hero-main-title class="mb-8">
        {{ title }}
      </app-section-hero-main-title>

      <div class="flex flex-col sm:flex-row">
        <nuxt-link to="/service">
          <app-section-hero-button
            title="Услуги"
            class="mb-5 sm:mb-0 sm:mr-4"
          />
        </nuxt-link>

        <nuxt-link to="/education">
          <app-section-hero-button title="Обучение" color="purple" />
        </nuxt-link>
      </div>
    </app-section-hero>

    <BannersSlider v-if="$store.getters['banners/banners'].length > 0" />

    <section class="mb-10 sm:mb-16">
      <div class="container md:py-5">
        <div class="max-w-screen-sm mx-auto">
          <AppHeadingThird title="Обо мне" />
          <ul
            class="list-inside text-md text-gray-600 md:text-lg tracking-wide font-light mb-16"
          >
            <li
              v-for="text in about"
              :key="text.slice(0, 10)"
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
              title="2,5 года опыта"
              body="в таргетированной рекламе"
            >
              <template #icon>
                <outline-badge-check-icon
                  class="w-12 h-12 md:w-16 md:h-16 text-purple-200 absolute -left-2 -top-4"
                />
              </template>
            </AppFeatureWithIcon>
          </transition>

          <transition name="fadeDown">
            <AppFeatureWithIcon
              v-show="featureVisibility1"
              title="Более 12 кейсов"
              body="успешных запусков рекламы"
            >
              <template #icon>
                <outline-fire-icon
                  class="w-12 h-12 md:w-16 md:h-16 text-purple-200 absolute -left-2 -top-4"
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
                  class="w-12 h-12 md:w-16 md:h-16 text-purple-200 absolute -left-2 -top-4"
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
                  class="w-12 h-12 md:w-16 md:h-16 text-purple-200 absolute -left-2 -top-4"
                />
              </template>
            </AppFeatureWithIcon>
          </transition>
        </div>
      </div>
    </section>

    <section class="container mb-8 sm:mb-16 sm:test-lg md:text-xl">
      <p>{{ servicesText }}</p>
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
          <div
            class="flex items-center mb-6 hover:text-purple-500 transition-colors cursor-pointer mx-auto max-w-max"
            @click="$router.push('/cases')"
          >
            <span class="text-lg font-semibold">Посмотреть все</span>
            <outline-chevron-right-icon class="ml-2 h-5 w-5" />
          </div>
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

const description = 'Ищете таргетолога для настройки рекламы в Instagram/Facebook? Я выстрою оптимальную рекламную кампанию для вашего бизнеса и запущу таргетированную рекламу.'

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
    title:
      'Анастасия Черепахина - сертифицированный специалист и наставник по рекламе в Instagram',
    about: [
      'За два года в таргете я прошла много курсов от топовых таргетологов и выработала собственную стратегию настройки рекламы и работе с клиентом. У меня был опыт фриланса, когда я сама выполняла всю работу и опыт в команде с рекламными агентствами.',
      `Если вы чувствуете, что ваш бизнес интересен на рынке и задумываетесь о рекламе в Instagram вы в нужном месте. На данный момент более 60% трафика на рынке от мобильных устройств, а количество пользователей в Instagram превышает 1 млрд человек. Очень важно выбрать правильную аудиторию и найти к ней подход.`,
      `Для таргетолов (или для тех, кто хочет им стать) на моем сайте собраны полезные гайды, чек-листы и другие материалы. Сейчас в разработке находится блог, там я буду выкладывать развернутые посты о таргете и смежных областях.`,
    ],
    isFeaturesAnimated: false,
    featureVisibility0: !process.client,
    featureVisibility1: !process.client,
    featureVisibility2: !process.client,
    featureVisibility3: !process.client,
    servicesText: `Я предоставляю качественные услуги по настройке таргета. Я всегда в курсе последних обновлений Facebook / Instagram. Со мной можно быть уверенным в том, что ваш рекламный кабинет не будет заблокирован, а реклама будет настроена оптимально для вашего бизнеса и бюджета.`,
    educationText: [
      `На создание своих образовательных материалов меня натолкнули мои подписчики, которые активно интересуются моей деятельностью в Instagram. Я прошла много курсов и даже несколько раз была куратором на одном из них и у меня сложилось не самое приятное впечатление, ведь совершенно очевидно, что пройдя типовой курс по таргету вы не станете таргетолом, хотя бы потому что у вас не хватит знаний и навыков, я не говорю о других важных аспектах, например работа с клиентом или взаимодействие с командой.`,
      `Не стану вас обманывать, стать таргетологом не так просто. Тут важно комлексное развитие многих навыков. В самой настройке таргета множество нюансов, о которых в 90% курсов умалчивают. Мой курс сейчас находится в стадии разработки, на нем я детально расскажу вам о таргете, а также затрону смежные темы (фриланс, клиенты, переговоры, софт и тд).`,
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
          contents: description
        },
        { property: 'og:description', content: description },
        {
          hid: 'og:title',
          property: 'og:title',
          contents: 'Таргетированная реклама | Отзывы | Цены | Обучение'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          contents: '/meta-image.png'
        }
      ],
    }
  },

  mounted() {
    this.$fbq('init')(123456)
    this.$gtag('init')(123456)

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
