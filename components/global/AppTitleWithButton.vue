<template>
  <div>
    <client-only>
      <intersect @enter="isVisible = true" root-margin="-20% 0% -20% 0%">
        <span></span>
      </intersect>
    </client-only>

    <transition name="bounceLeft">
      <section v-show="isVisible">
        <div
          class="flex flex-wrap justify-between items-center px-2 lg:px-24 py-3 bg-gradient-to-r from-violet-400 to-violet-300 rounded-2xl md:py-5 shadow"
          :class="isAlwaysColumn ? '' : 'lg:flex-nowrap'"
        >
          <div class="w-full" :class="isAlwaysColumn ? '' : 'lg:w-auto'">
            <h6
              v-text="title"
              class="text-sm sm:text-xl md:text-2xl lg:text-3xl text-white font-bold w-full block pr-0 mb-3 text-center"
              :class="isAlwaysColumn ? '' : ' lg:pr-5 lg:text-left lg:mb-0'"
            />
          </div>

          <button
            type="button"
            v-if="isEvent"
            :class="btnClass"
            @click="$emit('handle')"
            @mouseenter="toSmall"
            @mouseleave="backToNormal"
            @touchstart="toSmall"
            @touchend="backToNormal"
            @touchleave="backToNormal"
            @touchcancel="backToNormal"
          >
            {{ linkTitle }}
          </button>

          <nuxt-link
            v-else-if="isRouter"
            :to="url"
            class="block w-full lg:w-auto"
          >
            <button
              type="button"
              :class="btnClass"
              @mouseenter="toSmall"
              @mouseleave="backToNormal"
              @touchstart="toSmall"
              @touchend="backToNormal"
              @touchleave="backToNormal"
              @touchcancel="backToNormal"
            >
              {{ linkTitle }}
            </button>
          </nuxt-link>

          <a
            v-else
            :href="url"
            :class="btnClass"
            @mouseenter="toSmall"
            @mouseleave="backToNormal"
            @touchstart="toSmall"
            @touchend="backToNormal"
            @touchleave="backToNormal"
            @touchcancel="backToNormal"
          >
            {{ linkTitle }}
          </a>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppTitleWithButton',

  props: {
    isEvent: {
      type: Boolean,
      default() {
        return false
      },
    },
    isRouter: {
      type: Boolean,
      default() {
        return false
      },
    },
    isAlwaysColumn: {
      type: Boolean,
      default() {
        return false
      },
    },
    title: {
      type: String,
      required: true,
    },
    linkTitle: {
      type: String,
      default() {
        return 'Подробнее'
      },
    },
    url: {
      type: String,
      default() {
        return ''
      },
    },
  },

  data() {
    let defaultBtnClass =
      'btn block px-10 py-1.5 md:py-3 text-sm md:text-lg font-semibold bg-white block rounded-full mx-auto w-3/4 lg:w-auto text-center'

    defaultBtnClass = this.isAlwaysColumn
      ? defaultBtnClass
      : defaultBtnClass + 'lg:mx-0'

    return {
      defaultBtnClass,
      isVisible: !process.client,
      btnClass: defaultBtnClass,
    }
  },

  methods: {
    toSmall() {
      this.btnClass += ' btn-pressed'
    },

    backToNormal() {
      this.btnClass = this.defaultBtnClass
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
  transition: transform 0.3s ease;
}

.btn-pressed {
  transform: scale(0.96);
}
</style>
