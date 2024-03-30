<template>
  <div v-if="props.type == 'svg'">
    <SvgIcon :name="props.name" />
  </div>
  <div v-else>
    <SvgIcon :name="props.name" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: 'svg',
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '#333',
  },
  className: {
    type: String,
    default: '',
  },
})
</script>

<style scoped></style>
