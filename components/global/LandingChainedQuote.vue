<template>
  <div>
    <client-only>
      <intersect @enter="isVisible = true">
        <span></span>
      </intersect>
    </client-only>

    <transition name="fadeUp">
      <section v-show="isVisible" class="mb-12 md:mb-20">
        <div class="container">
          <div
            class="relative border-l-2 border-gray-700 p-4 sm:p-6 md:p-10 lg:p-20 text-base sm:text-xl md:text-2xl"
          >
            <div
              class="absolute -top-1.5 -left-1.5 h-3 w-3 bg-gray-700 rounded-full"
            ></div>

            <div
              class="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-gray-700 rounded-full"
            ></div>

            <slot />
          </div>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  data: () => ({
    isVisible: !process.client,
  }),
}
</script>
