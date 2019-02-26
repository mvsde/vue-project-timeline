<template>
  <time
    class="project-timeline-month"
    :style="{
      gridArea: `auto / ${startIndex} / -1 / ${endIndex}`
    }"
  >
    <slot />
  </time>
</template>

<script>
export default {
  name: 'ProjectTimelineMonth',

  props: {
    startIndex: {
      type: Number,
      required: true
    },
    endIndex: {
      type: Number,
      required: true
    }
  }
}
</script>

<style>
.project-timeline-month {
  padding: 0.5em 0.75em;
}
</style>
