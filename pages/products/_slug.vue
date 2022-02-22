<template>
  <div class="pb-20">
    <app-section-hero>
      <app-section-hero-main-title class="mb-8">
        {{ doc.title }}
      </app-section-hero-main-title>

      <p class="mb-5 text-center sm:text-left md:text-2xl font-semibold">
        {{ doc.description }}
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

    <nuxt-content :document="doc" />

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

    <landing-payment-modal-window :title='doc.title' />

    <ModalLidForm />
  </div>
</template>

<script>
import ModalLidForm from '@/components/ModalLidForm'

export default {
  components: {
    ModalLidForm,
  },

  async asyncData({ store, $content, params }) {
    const doc = await $content('products', params.slug).fetch()

    store.dispatch('product-landing/updateProductBuyMethod', doc.bot)

    return { doc }
  },

  head() {
    return {
      title: this.doc.title,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          contents: this.doc.title
        },
        {
          hid: 'description',
          name: 'description',
          contents: this.doc.description
        },
        {
          property: 'og:description', content: this.doc.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          contents: '/meta-image.png'
        }
      ],
    }
  },

  methods: {
    onQuestionBtnClick() {
      this.$store.dispatch('lead/showDialog', {
        shouldCallback: true,
        source: `Вопрос по продукту '${this.doc.title}'`,
      })
    },
  },
}
</script>
