<template>
  <div class="relative overflow-x-hidden">
    <img v-lazy-load data-src="/steps-bg.svg" class="absolute top-5 h-3/4 -right-5" alt="" />

    <div class="container mb-14">
      <app-heading-third title="Этапы работы" />
      <WorkStepsSlider />
    </div>
  </div>
</template>

<script>
import WorkStepsSlider from '@/components/WorkStepsSlider'

export default {
  components: {
    WorkStepsSlider,
  }
}
</script>
