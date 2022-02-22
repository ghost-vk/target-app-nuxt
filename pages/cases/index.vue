<template>
  <div>
    <app-section-hero>
      <app-section-hero-main-title>{{ pageTitle }}</app-section-hero-main-title>
    </app-section-hero>

    <div class="container pb-20">
      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 2xl:gap-10"
      >
        <ArchivePostItem
          v-for="c in cases"
          :id="c.id"
          :key="c.id"
          :title="c.title"
          :subtitle="c.subtitle"
          :posting-date="dateFilter(c.posting_date)"
          :thumbnail="c.thumbnail"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { date } from '@/filters/date'
import ArchivePostItem from '@/components/ArchivePostItem'

const description =
  'В поисках таргетолога? Тогда ты по адресу. Здесь можно посмотреть мои кейсы по настройке таргетированной рекламы в Instagram/Facebook.'

export default {
  components: {
    ArchivePostItem,
  },

  data() {
    return {
      pageTitle: 'Кейсы по настройке таргетированной рекламы',
    }
  },

  async fetch() {
    await this.$store.dispatch('cases/loadCases', 150)
  },

  head() {
    return {
      title: 'Кейсы',
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
          contents: 'Кейсы по настройке рекламы',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          contents: 'meta-image.png',
        },
      ],
    }
  },

  computed: mapGetters({
    cases: 'cases/cases',
    postsLoadingStatus: 'cases/status',
  }),

  methods: {
    dateFilter: date,
  },
}
</script>
