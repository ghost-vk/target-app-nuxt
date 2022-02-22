<template>
  <div>
    <ServicePageHero />

    <BannersSlider
      v-if="$store.getters['banners/banners'].length > 0"
      class="mb-8"
    />

    <ServicePageFeatures class="mb-20 md:px-24" />

    <ServicePageAbout class="mb-14 sm:mb-20" />

    <ServicePageConsultationTitle class="mb-28" />

    <ServicePageWorkSteps />

    <ServicePageBrief class="mb-20" />

    <ServicePageCards />

    <ReviewsSection class="mb-10" />

    <FAQ />

    <ModalLidForm />
  </div>
</template>

<script>
import ServicePageHero from '@/components/ServicePageHero'
import BannersSlider from '@/components/BannersSlider'
import ServicePageFeatures from '@/components/ServicePageFeatures'
import ServicePageAbout from '@/components/ServicePageAbout'
import ServicePageConsultationTitle from '@/components/ServicePageConsultationTitle'
import ServicePageWorkSteps from '@/components/ServicePageWorkSteps'
import ServicePageBrief from '@/components/ServicePageBrief'
import ServicePageCards from '@/components/ServicePageCards'
import ReviewsSection from '@/components/ReviewsSection'
import FAQ from '@/components/FAQ'
import ModalLidForm from '@/components/ModalLidForm'

const description = 'Настройка таргетированной рекламы в Instagram/Facebook, консультация по настройке рекламы и блокировкам от сертифицированного специалиста Анастасии Черепахиной.'

export default {
  components: {
    ServicePageHero,
    BannersSlider,
    ServicePageFeatures,
    ServicePageAbout,
    ServicePageConsultationTitle,
    ServicePageWorkSteps,
    ServicePageBrief,
    ServicePageCards,
    ReviewsSection,
    FAQ,
    ModalLidForm
  },

  transition: 'fadeUp',

  async fetch({ store }) {
    await store.dispatch('banners/fetchActiveBanners')
    await store.dispatch('reviews/load', { limit: 100 })
  },

  head() {
    return {
      title: 'Услуги',
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
          contents: 'Настройка рекламы | Консультация'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          contents: 'meta-image.png'
        }
      ],
    }
  },

  mounted() {
    this.$store.dispatch('reviews/updateActiveCategory', 'target-setup')
  },
}
</script>
