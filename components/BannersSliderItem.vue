<template>
  <a :href='banner.url' @click.prevent>
    <div
      class="case select-none w-full rounded-xl overflow-hidden shadow-2xl cursor-pointer"
      :class="bannerClass"
      @click="goToUrl(banner.url)"
      @touchstart="toSmall"
      @touchend="backToNormal"
      @touchleave="backToNormal"
      @touchcancel="backToNormal"
    >
      <div v-aspect-ratio="aspectRatio" class="relative bg-purple-100">
        <picture>
          <source
            v-for="point in screenPoints"
            :key="point"
            v-lazy-load
            :media="`(max-width: ${point}px)`"
            :data-srcset="$config.SERVER_PATH + banner.srcset[point]"
          />
          <img
            v-lazy-load
            class="img absolute top-0 left-0"
            :data-src="$config.SERVER_PATH + banner.src"
            alt=""
          />
        </picture>

        <noscript inline-template>
          <img
            class="img absolute top-0 left-0"
            :src="$config.SERVER_PATH + banner.src"
            alt=""
          />
        </noscript>
      </div>
    </div>
  </a>
</template>

<script>
const screen = process.client ? window.innerWidth : 1025

export default {
  props: {
    banner: {
      type: Object,
      default() {
        return {}
      },
    },
  },

  data: () => ({
    bannerClass: '',
    aspectRatio: screen < 460 ? '43:25' : screen < 1024 ? '98:57' : '144:37',
  }),

  computed: {
    screenPoints() {
      if (Object.keys(this.banner.srcset).length > 0) {
        const points = [...Object.keys(this.banner.srcset)]
        points.sort((a, b) => a - b)
        return points
      }

      return []
    },
  },

  methods: {
    toSmall() {
      this.bannerClass = 'touched'
    },

    backToNormal() {
      this.bannerClass = ''
    },

    goToUrl(url) {
      if (!url) {
        return
      }

      if (url.includes('https://anastasi-target.ru')) {
        return this.$router.push(url.replace('https://anastasi-target.ru', ''))
      }

      window.location = url
    },
  },
}
</script>

<style lang="scss" scoped>
.case {
  transition: transform 0.3s ease;
}

@media (max-width: 1024px) {
  .touched {
    transform: scale(0.96);
  }
}

.img {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  pointer-events: none;
}
</style>
