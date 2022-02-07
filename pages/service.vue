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

  mounted() {
    this.$store.dispatch('reviews/updateActiveCategory', 'target-setup')
  },
}
</script>
