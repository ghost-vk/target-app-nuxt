<template>
  <section id="features" class="lg:mb-44 py-20 overflow-hidden">
    <div class="container">
      <app-heading-bubble class="mb-28 lg:mb-40" :title="title" />
    </div>
    <div class="md:container">
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-8 lg:gap-y-28 md:gap-x-6 lg:gap-x-10"
      >
        <slot name="items" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default() {
        return 'Для кого этот материал?'
      },
    },
  },
}
</script>
