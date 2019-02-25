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
    }
  }
}
</script>
