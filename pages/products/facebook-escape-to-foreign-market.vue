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
      <landing-about>
        <landing-about-item>
          Я создавала этот материал в первую очередь для начинающих
          таргетологов. Когда я только начала развиваться в сфере таргетинга, у
          меня было очень много вопросов по тому как составить эффективный план
          по работе с клиентом.
        </landing-about-item>
        <landing-about-item :line-direction="false">
          В моем материале вы ознакомитесь со структурой работы с клиентом. Это
          не просто перечисление шагов, а построение бизнес-процесса. Я
          полноценно раскрываю каждый этап и ссылаюсь на полезные материалы.
        </landing-about-item>
        <landing-about-item line-direction="up">
          Вы поймете, какая информация вам необходима для работы с клиентом.
          Поймете зачем нужны брифы и узнаете их содержание. Разберетесь в том,
          как общаться с клиентом и как проанализировать рынок перед запуском
          рекламной кампании.
        </landing-about-item>
      </landing-about>
      <landing-product-card
        title="Как работать с клиентами? Пошаговый план работы"
        price="199 руб"
        bg="/purple-phone-in-hands.jpg"
        :features="[
          'План работы с клиентом',
          'Определение целевой аудитории',
          'Взаимодействие с клиентом',
          'Разработка рекламной стратегии',
        ]"
      >
      </landing-product-card>
      <app-quote-section
        class="mb-20"
        text="Занимайтесь клиентом, а не продажей"
      ></app-quote-section>
      <landing-details>
        <landing-details-item
          title="Начало работы с клиентом. Рекламные брифы."
        >
          Кратко рассказываю что такое бриф, для чего он вообще нужен. В
          материале приведено требуемое содержание брифов, это поможет вам в
          настройке рекламной кампании.
          <br /><br />
          Одна из причин для чего нужен бриф, это найти целевую аудиторию. Вы
          поймете как структурированно получить то, что уже знает клиент. Также
          вы узнаете что делать, если клиент не знает кто его целевая аудитория.
        </landing-details-item>
        <landing-details-item title="Переговоры с клиентом. Важные моменты.">
          Рассказываю как я организовываю переговоры с клиентом. Важно понять,
          что клиент - не таргетолог, и вполне возможно, что он никогда не
          работал с таргетологом и понятия не имеет как сложно сделать запуск
          рекламной кампании. Здесь я имею в виду, что некоторые клиенты думают,
          что достаточно лишь отправить вам оплату и предоставить доступ к
          рекламным инструментам.
        </landing-details-item>
        <landing-details-item title="Подготовка к рекламному запуску.">
          Рассказываю о самых важных этапах до запуска рекламной кампании. Уже
          на этих этапах, можно совершить ошибки и быть забаненным Facebook, это
          все серьезно усложнит запуск и возникнут новые вопросы связанные с
          блокировками.
        </landing-details-item>
        <landing-details-item
          title="Анализ конкурентов. Анализ существующих рекламных кампаний."
        >
          Перед запуском рекламной кампании необходим полноценный анализ рынка,
          поиск кейсов в необходимой нише. Я расскажу вам где найти нужную
          информацию и сделать правильные выводы, которые улучшат рекламные
          показатели.
        </landing-details-item>
        <landing-details-item
          title="Создание офферов и макетов для рекламной кампании."
        >
          Важно понимать как создаются офферы, какие есть негласные правила для
          рекламных макетов и офферов, чтобы избежать блокировки на Facebook.
          Делюсь инструментами, которыми пользуюсь в повседневной работе.
        </landing-details-item>
        <landing-details-item title="Запуск и контроль рекламной кампании.">
          Когда лучше запускать рекламную кампанию? Как тестировать рекламную
          кампанию? Какой бюджет нужно выделить на тест? Как найти рабочую
          связку?
        </landing-details-item>
      </landing-details>
      <landing-author-squared class="mb-12 md:mb-28"></landing-author-squared>
      <landing-chained-quote>
        В последние годы появилось много новых и интересных профессий, одна и из
        них таргетолог в Instagram / Facebook.
        <br /><br />
        Учитывая, что мобильный трафик составляет большую часть, можно быть
        уверенным: востребованность показа рекламы нужной аудитории в Instagram
        очевидна, а значит и профессия таргетолог.
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

    <landing-payment-modal-window title="Langing payment modal window" />

    <ModalLidForm />
  </div>
</template>

<script>
import ModalLidForm from '@/components/ModalLidForm'
import LandingTextCard from '@/components/LandingTextCard.vue'

export default {
  components: {
    ModalLidForm,
    LandingTextCard,
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

  head() {
    return {
      title: 'title',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          contents: 'title',
        },
        {
          hid: 'description',
          name: 'description',
          contents: 'description',
        },
        {
          property: 'og:description',
          content: 'description',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          contents: '/meta-image.png',
        },
      ],
    }
  },

  methods: {
    onQuestionBtnClick() {
      this.$store.dispatch('lead/showDialog', {
        shouldCallback: true,
        source: `Вопрос по продукту 'Название продукта'`,
      })
    },
  },
}
</script>
