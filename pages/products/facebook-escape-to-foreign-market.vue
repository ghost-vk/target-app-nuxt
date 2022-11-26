<template>
  <div class="pb-20">
    <app-section-hero>
      <app-section-hero-main-title class="mb-8">
        FACEBOOK 2.0
      </app-section-hero-main-title>

      <p class="mb-5 text-center sm:text-left md:text-2xl font-semibold">
        Научись запускать рекламу на Facebook в новых реалиях и работай с
        клиентами из Европы и США
      </p>

      <div class="flex flex-col sm:flex-row">
        <a v-smooth-scroll href="#buy">
          <app-section-hero-button
            class="mb-5 sm:mb-0 sm:mr-4"
            title="Купить"
          />
        </a>

        <app-section-hero-button
          title="Задать вопрос"
          color="purple"
          @click="onQuestionBtnClick"
        />
      </div>
    </app-section-hero>

    <div>
      <div class="container">
        <app-heading-bubble
          class="mb-20 lg:mb-28"
          text-side="left"
          title="Курс для тебя, если ты:"
        />
        <div class="grid grid-cols-1 gap-4 mb:6 sm:mb-10">
          <LandingTextCard
            v-for="(title, i) in forWho"
            :key="i"
            :title="title"
          />
        </div>
      </div>
      <landing-about title="О чем этот курс?">
        <landing-about-item>
          Курс ориентирован на таргетологов, которые уже знакомы с платформой.
          Мы лишь разбираемся как работать с клиентами после блокировки Fаcebook
          в России.
        </landing-about-item>
        <landing-about-item :line-direction="false">
          В уроках вы разберетесь как правильно выбирать аккаунт для работы, на
          какие параметры обращать внимание, как создавать карту в долларах, с
          какими прокси работать.
        </landing-about-item>
        <landing-about-item line-direction="up">
          Вы поймете, пошаговую систему запуска рекламы, этапы прогревов, как
          избежать блокировок и спокойно запускать рекламу клиентам из Европы.
        </landing-about-item>
      </landing-about>
      <landing-product-card
        title="Курс Facebook 2.0"
        price="От 4990 руб"
        bg="/purple-phone-in-hands.jpg"
        :features="[
          'Пошаговый план выхода на Европу',
          'Покупка аккаунта FB',
          'Антидетект браузер, прокси',
          'Создание карты в долларах',
          'Получение оплат от клиентов',
        ]"
      >
      </landing-product-card>
      <app-quote-section
        class="mb-20"
        text="Занимайтесь клиентом, а не продажей"
      ></app-quote-section>
      <landing-details>
        <landing-details-item title="Покупка аккаунта Facebook">
          Как правильно выбрать заграничный аккаунт для работы на Фейсбук.
          Разбор параметров на которые нужно обращать внимание при покупке
          аккаунта. Обзор сервисов на которых можно купить аккаунт.
        </landing-details-item>
        <landing-details-item title="Покупка proxy">
          Что такое прокси и как его установить в браузер. На каких сервисах его
          можно купить, и какой выбрать прокси для вашего покупного аккаунта.
        </landing-details-item>
        <landing-details-item title="Знакомство с браузером Dolphin Anty">
          Разберемся как работать в антидетект браузере и заходить с него в ваш
          покупной аккаунт Facebook. Это будет ваша основная точка входа для
          работы с платформой.
        </landing-details-item>
        <landing-details-item title="Создание документов">
          На российские документы мы не можем проходить проверку кабинета и
          верификацию при создании карты. Необходимо будет воспользоваться
          сервисом для создания документов.
        </landing-details-item>
        <landing-details-item title="Создание карты в долларах">
          Если вы планируете запуск рекламы на себя, или к вам приходит клиент
          из России, которому не важна геолокация для продажи продукта, то нужно
          будет создать карту в долларах для оплаты рекламы на Facebook.
        </landing-details-item>
        <landing-details-item title="Получение оплаты от клиентов">
          Не все клиенты будут иметь возможность сделать прямой перевод на вашу
          российскую карту. Мы будем разбирать другие безопасные способы для
          получения оплаты, которые использую я сама.
        </landing-details-item>
      </landing-details>
      <FacebookEscapeCourseCards />
      <landing-author-squared class="mb-12 md:mb-28"></landing-author-squared>
      <landing-chained-quote>
        Возвращайся на Facebook пока твои знания актуальны. Не нужно заново
        проходить обучение, знакомиться с платформой и алгоритмами. Ты это уже
        все знаешь! Сейчас нужно только разобраться, как работать в нынешних
        реалиях.
      </landing-chained-quote>
    </div>

    <div class="container max-w-screen-md">
      <app-title-with-button
        class="mt-8"
        title="Остались вопросы?"
        link-title="Задать вопрос"
        :is-always-column="true"
        :is-event="true"
        @handle="onQuestionBtnClick"
      />
    </div>
    <ReviewsSection />
    <FAQ />
    <ModalLidForm />
  </div>
</template>

<script>
import ModalLidForm from '@/components/ModalLidForm'
import LandingTextCard from '@/components/LandingTextCard.vue'
import FacebookEscapeCourseCards from '@/components/FacebookEscapeCourseCards'
import ReviewsSection from '@/components/ReviewsSection'
import FAQ from '@/components/FAQ'

export default {
  components: {
    ModalLidForm,
    LandingTextCard,
    FacebookEscapeCourseCards,
    ReviewsSection,
    FAQ,
  },

  data() {
    return {
      forWho: [
        'Хочешь вернуться на Facebook и запускать там рекламу',
        'Не понимаешь, что такое прокси, антидетект браузер и как принимать оплату от клиентов из-за рубежа',
        'Не знаешь, как «прогревать» аккаунты Facebook, чтобы снизить риск блокировок',
        'Пробовал(а) вернуться на Facebook, но не получилось',
        'Устал(а) работать на российских площадках: Яндекс.Директ, Вконтакте и не получать видимых результатов',
        'Нуждаешься в четких пошаговых действиях',
      ],
    }
  },

  async fetch({ store }) {
    await store.dispatch('reviews/load', { limit: 100 })
  },

  head() {
    return {
      title: 'Курс Facebook 2.0',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          contents: 'Курс Facebook 2.0',
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
    this.$store.dispatch('reviews/updateActiveCategory', 'courses')
    this.$store.dispatch('faq/changeCurrentCategory', 'course-facebook-2')
  },

  deactivated() {
    this.$store.dispatch('faq/changeCurrentCategory', 'target-setup')
  },

  methods: {
    onQuestionBtnClick() {
      this.$store.dispatch('lead/showDialog', {
        shouldCallback: true,
        source: `Вопрос по продукту '${this.title}'`,
      })
    },
  },
}
</script>
