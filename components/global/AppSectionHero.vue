<template>
  <section
    lazy-background="/head-bg.svg"
    class="flex flex-col text-gray-100 min-h-screen py-24 justify-center bg-cover bg-no-repeat bg-center"
  >
    <div class="container">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionHero',
}
</script>
