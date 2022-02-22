<template>
  <div>
    <client-only>
      <intersect @enter='isVisible = true'>
        <span></span>
      </intersect>
    </client-only>

    <transition name='fade'>
      <section v-show="isVisible" class="bg-gray-800">
        <div
          class="
        container
        max-w-screen-sm
        flex
        justify-center
        items-center
        text-gray-100
        py-8
        md:py-12
        lg:py-16
        text-base
        sm:text-lg sm:text-xl
        lg:text-2xl
      "
        >
          <solid-information-circle-icon class="flex-shrink-0 w-12 lg:w-20 h-12 lg:h-20 mr-3 lg:mr-4" />

          <p>{{ text }}</p>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    isVisible: !process.client
  })
}
</script>
