<template>
  <div style="width: 160px" class="relative">
    <client-only>
      <vue-ellipse-progress
        :progress="percent"
        :size="160"
        color="#A78BF9"
        :legend="false"
        animation="default 1000 0"
        empty-color="#DFD3FD"
      />
    </client-only>

    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
      style="width: 130px"
    >
      <div class="font-bold text-xl">{{ stat }}</div>
      <div class="">{{ name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    percent: {
      type: Number,
      required: true,
    },

    stat: {
      type: String,
      default() {
        return ''
      },
    },

    name: {
      type: String,
      default() {
        return ''
      },
    },
  },
}
</script>
