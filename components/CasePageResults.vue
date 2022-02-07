<template>
  <div v-if="stats">
    <client-only>
      <intersect root-margin="-15% 0px -15% 0px" @enter="fill">
        <span></span>
      </intersect>
    </client-only>

    <div
      class="flex justify-center"
      :class="screenWidth > 400 ? 'flex-wrap' : 'flex-col items-center'"
    >
      <div
        v-for="(s, i) in stats"
        :key="i"
        class="flex lg:w-1/4 w-1/2 p-3"
        :class="itemClass(i)"
      >
        <AppCircleStats :stat="s.stat" :name="s.name" :percent="percents[i]" />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import AppCircleStats from '@/components/AppCircleStats.vue'

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const screenWidth = process.client ? window.innerWidth : 1025

export default {
  components: {
    AppCircleStats,
  },

  props: {
    stats: {
      type: Array,
      default() {
        return []
      },
    },
  },

  data() {
    return {
      screenWidth,
      percents: [0, 0, 0, 0],
      isFilled: false,
      isMounted: false
    }
  },

  mounted() {
    this.isMounted = true
  },

  methods: {
    async fill() {
      if (!this.isMounted || this.isFilled) {
        return
      }

      Vue.set(this.percents, 0, 100)
      await timeout(650)

      Vue.set(this.percents, 1, 100)
      await timeout(650)

      Vue.set(this.percents, 2, 100)
      await timeout(650)

      Vue.set(this.percents, 3, 100)

      this.isFilled = true
    },

    itemClass(pos) {
      // prettier-ignore
      const positionClass =  screenWidth > 1024 ? 'justify-center'
        : pos % 2 !== 0 && screenWidth > 400 ? 'justify-start'
          : pos % 2 !== 0 && screenWidth > 400 ? 'justify-end'
            : 'justify-center'
      const widthClass = screenWidth > 400 ? '' : ' w-full'
      return positionClass + widthClass
    },
  },
}
</script>
