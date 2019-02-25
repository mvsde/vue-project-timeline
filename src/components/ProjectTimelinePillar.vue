<template>
  <div
    aria-hidden="true"
    class="project-timeline-pillar"
    :class="{
      'is-even': order % 2 === 0,
      'is-odd': order % 2 === 1
    }"
    :style="{
      gridArea: `1 / ${startDay} / -1 / ${endDay}`
    }"
  />
</template>

<script>
export default {
  name: 'ProjectTimelinePillar',

  props: {
    order: {
      type: Number,
      required: true
    },
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

<style>
.project-timeline-pillar.is-odd {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
