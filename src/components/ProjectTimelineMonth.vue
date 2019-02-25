<template>
  <time
    class="project-timeline-month"
    :style="{
      gridArea: `auto / ${startDay} / -1 / ${endDay}`
    }"
  >
    <slot />
  </time>
</template>

<script>
export default {
  name: 'ProjectTimelineMonth',

  props: {
    startDay: {
      type: Number,
      required: true
    },
    endDay: {
      type: Number,
      required: true
    },
    days: {
      type: Number,
      required: true
    }
  }
}
</script>

<style>
.project-timeline-month {
  position: relative;
  white-space: nowrap;
}
</style>
