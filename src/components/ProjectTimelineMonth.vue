<template>
  <div
    aria-hidden="true"
    class="project-timeline-month"
    :style="{
      gridArea: `auto / ${startIndex} / -1 / ${endIndex}`
    }"
  >
    <slot />
  </div>
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
