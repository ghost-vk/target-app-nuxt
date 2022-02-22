<template>
  <section id="buy" class="mb-20 pt-20 md:pt-40">
    <div class="container">
      <ProductCardWithSideBadge
        :bg="bg"
        :title="title"
        :features="features"
        :price="price"
        @click-btn="onButtonClick"
      />
    </div>
  </section>
</template>

<script>
import ProductCardWithSideBadge from '@/components/ProductCardWithSideBadge'

export default {
  components: {
    ProductCardWithSideBadge,
  },

  props: {
    bg: {
      type: String,
      default() {
        return '/purple-phone-in-hands.jpg'
      },
    },

    title: {
      type: String,
      required: true,
    },

    features: {
      type: Array,
      required: true,
    },

    price: {
      type: String,
      default() {
        return ''
      },
    },
  },

  methods: {
    onButtonClick() {
      if (this.$store.getters['product-landing/isProductBuyThroughBot']) {
        this.$store.dispatch('product-landing/showModal')
        return
      }

      this.$store.dispatch('lead/showDialog', {
        shouldCallback: true,
        source: `Заявка на покупку '${this.title}'`,
      })
    },
  },
}
</script>
