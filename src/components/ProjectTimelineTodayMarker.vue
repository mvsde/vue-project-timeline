<template>
  <div
    aria-hidden="true"
    class="project-timeline-today-marker"
    :style="{
      gridArea: `1 / ${index} / -1 / ${index}`
    }"
  />
</template>

<script>
export default {
  name: 'ProjectTimelineTodayMarker',

  props: {
    index: {
      type: Number,
      required: true
    }
  }
}
</script>

<style>
.project-timeline-today-marker {
  background-color: rgba(0, 0, 0, 0.25);
}
</style>
