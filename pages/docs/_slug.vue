<template>
  <div class="bg-gradient-to-r from-purple-300 to-blue-200">
    <div class="container py-20 text-gray-800 prose">
      <nuxt-content :document="doc" />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',

  async asyncData({ $content, params }) {
    const doc = await $content('docs', params.slug).fetch()

    return { doc }
  },
}
</script>
