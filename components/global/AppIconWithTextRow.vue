<template>
  <div class="flex items-center">

    <div class="mr-3 text-purple-300">
      <slot name="icon"></slot>
    </div>

    <div class="text-left">
      <slot name="body"></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: 'AppIconWithTextRow'
}
</script>
