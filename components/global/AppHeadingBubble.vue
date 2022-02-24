<template>
  <div class="relative">
    <client-only>
      <intersect @enter="animate">
        <span></span>
      </intersect>

      <transition :name="textSide === 'right' ? 'slideRight' : 'slideLeft'">
        <div v-show="isVisible" :class="bubbleClass" />
      </transition>

      <transition :name="textSide === 'right' ? 'slideLeft' : 'slideRight'">
        <div v-show="isVisible" :class="dotsClass">
          <div
            v-for="i in 15"
            :key="i"
            class="w-3 h-3 rounded-full bg-violet-200"
          ></div>
        </div>
      </transition>
    </client-only>

    <transition name="fadeUp">
      <div
        v-show="isVisible"
        class="flex flex-wrap lg:justify-between lg:flew-nowrap"
      >
        <h2 :class="titleClass">{{ title }}</h2>

        <slot name="button" />
      </div>
    </transition>
  </div>
</template>

<script>
const defaultTitleClasses = 'relative text-2xl lg:text-5xl font-bold z-20'
const rightTitlePositionClasses = defaultTitleClasses + ' text-right ml-auto'

const defaultBubbleClasses =
  'absolute -top-16 w-40 h-40 bg-violet-200 rounded-full '
const rightBubbleClasses = '-right-16'
const leftBubbleClasses = '-left-16'

const dotsDefaultClass = 'absolute flex justify-between top-9 md:top-5 w-96 '

export default {
  name: 'AppHeadingBubble',

  props: {
    textSide: {
      type: String,
      default() {
        return 'left'
      },
    },
    title: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      isVisible: !process.client,
      isTitleVisible: !process.client,

      titleClass:
        this.textSide === 'right'
          ? rightTitlePositionClasses
          : defaultTitleClasses,

      bubbleClass:
        this.textSide === 'right'
          ? defaultBubbleClasses + rightBubbleClasses
          : defaultBubbleClasses + leftBubbleClasses,

      dotsClass:
        this.textSide === 'right'
          ? dotsDefaultClass + '-left-60'
          : dotsDefaultClass + '-right-60',
    }
  },

  methods: {
    animate() {
      this.isVisible = true

      setTimeout(() => {
        this.isTitleVisible = true
      }, 1000)
    },
  },
}
</script>
