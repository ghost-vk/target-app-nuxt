<template>
  <a :href="href" :target="target" @click.prevent="onClick">
    <slot />
  </a>
</template>

<script>
export default {
  name: 'AnalyticsLink',

  props: {
    route: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    target: {
      type: String,
      default() {
        return '_self'
      },
    },
  },

  methods: {
    onClick() {
      this.$gtag('query')('go_away', {
        event_category: 'directing',
        event_label: `Переход: ${this.route}`,
      })

      this.$fbq('event')('GoAway', { route: `Переход: ${this.route}` })

      setTimeout(() => {
        window.open(this.href, this.target)
      }, 300)
    },
  },
}
</script>
