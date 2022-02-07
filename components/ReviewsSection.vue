<template>
  <section id="at_reviews" class="pb-8 md:pb-16 overflow-hidden">
    <div class="container">
      <app-heading-third title="Отзывы" />
      <div class="w-full lg:px-24">
        <ReviewsSectionButtons
          class="max-w-screen-sm mx-auto justify-center"
          @update-category="updateCategory"
        />

        <div v-swiper:swiper="swiperOptions" class="swiper-container pb-10">
          <div class="hidden lg:block">
            <div id="reviews-prev" class="swiper-button-prev"></div>
            <div id="reviews-next" class="swiper-button-next"></div>
          </div>

          <div
            id="reviews-pagination"
            class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-bullets-dynamic"
          ></div>

          <div class="swiper-wrapper">
            <div
              v-for="review in reviews"
              :key="review.id"
              class="swiper-slide px-2 lg:px-10 flex justify-center"
            >
              <ReviewsSectionCard
                :thumbnail="$config.SERVER_PATH + review.image"
                :name="review.full_name"
                :vocation="review.profession"
                :instagram="review.link"
                :body="review.content"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { directive } from 'vue-awesome-swiper'
import { mapGetters } from 'vuex'
import ReviewsSectionCard from '@/components/ReviewsSectionCard'
import ReviewsSectionButtons from '@/components/ReviewsSectionButtons'

export default {
  name: 'ReviewsSection',

  directives: {
    swiper: directive,
  },

  components: {
    ReviewsSectionButtons,
    ReviewsSectionCard,
  },

  data: () => ({
    swiperOptions: {
      slidesPerView: 1,
      navigation: {
        nextEl: '#reviews-next',
        prevEl: '#reviews-prev',
      },
      pagination: {
        el: '#reviews-pagination',
        clickable: true,
        dynamicBullets: true,
      },
    },
  }),

  computed: {
    ...mapGetters({
      reviews: 'reviews/reviews',
    }),
  },

  mounted() {
    const queryCategory = this.$route.query.reviews_category

    if (queryCategory !== undefined) {
      this.updateCategory(queryCategory)
    }
  },

  methods: {
    updateCategory(cat) {
      this.$store.dispatch('reviews/updateActiveCategory', cat)

      this.swiper.update()
      this.swiper.activeIndex = 0
      this.swiper.slideTo(0)
    },
  },
}
</script>

<style lang="scss" scoped>
#reviews-pagination {
  bottom: -20px;
}
</style>
