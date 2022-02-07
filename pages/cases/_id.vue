<template>
  <div class="container py-28 lg:py-40">
    <div
      class="max-w-screen-sm mx-auto border-b border-solid border-gray-300 pb-3"
    >
      <nuxt-link to="/cases">
        <app-blue-underline-link class="uppercase mb-2">
          кейсы
        </app-blue-underline-link>
      </nuxt-link>

      <h1 class="text-4xl lg:text-6xl font-bold mb-5">
        {{ displayValues.title }}
      </h1>

      <h2 class="text-xl lg:text-2xl">{{ displayValues.subtitle }}</h2>
    </div>

    <div>
      <div class="max-w-screen-sm mx-auto flex items-center pt-3 mb-20">
        <img
          v-lazy-load
          data-src="/nastya-rounded.jpg"
          class="h-12 w-12 block mr-3 rounded-full"
          alt="Автор блога"
        />

        <div class="uppercase flex flex-col">
          <a
            :href="$store.getters['contacts/contacts'].instagram"
            target="_blank"
            class="text-sm mb-1"
          >
            Настя Черепахина
          </a>

          <span class="text-xs">
            {{ dateFilter(displayValues.posting_date) }}
          </span>
        </div>
      </div>
    </div>

    <CasePageResults v-if="displayValues.case_stats" :stats="displayValues.case_stats" />

    <div v-else>
      <div v-if="displayValues.thumbnail">
        <img
          v-lazy-load
          class="mx-auto rounded"
          :data-src="displayValues.thumbnail"
          alt=""
        />
      </div>
    </div>

    <!-- eslint-disable -->
    <div
      class="max-w-screen-sm mx-auto text-base md:text-lg mb-10"
      v-html="displayValues.content"
    ></div>
    <!-- eslint-enable -->

    <div class="max-w-screen-sm mx-auto">
      <app-title-with-button
        class="mt-8"
        title="Нужна настройка рекламы?"
        link-title="Оставить заявку"
        :is-always-column="true"
        :is-event="true"
        @handle="
          $store.dispatch('lead/showDialog', {
            source: `Кейс (${displayValues.title})`,
            shouldCallback: true,
          })
        "
      />
    </div>

    <ModalLidForm />
  </div>
</template>

<script>
import { dateFilter } from '@/filters/date.filter'
import CasePageResults from '@/components/CasePageResults'

export default {
  components: {
    CasePageResults
  },

  validate({ params }) {
    return /^\d+$/.test(params.id)
  },

  async fetch() {
    await this.$store.dispatch('post/loadPost', this.$route.params.id)

    if (!this.displayValues.title) {
      this.$router.push('/404')
    }
  },

  computed: {
    displayValues() {
      return this.$store.getters['post/displayValues']
    },
  },

  methods: {
    dateFilter
  }
}
</script>
