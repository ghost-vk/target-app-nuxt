<template>
  <div class="h-full flex justify-center items-center">
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
