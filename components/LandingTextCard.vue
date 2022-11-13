<template>
  <div class="rounded-lg bg-violet-200 p-5 sm:p-8 max-w-2xl w-full mx-auto">
    <div class="flex items-center flex-nowrap">
      <div class="shrink-0 w-9 sm:w-12">
        <outline-cursor-click-icon class="h-6 sm:h-8 w-6 sm:w-8" />
      </div>
      <div class="text-md sm:text-xl">
        {{ title }}  
      </div>
    </div>
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
