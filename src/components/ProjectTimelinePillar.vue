<template>
  <div
    aria-hidden="true"
    class="project-timeline-pillar"
    :class="{
      'is-even': order % 2 === 0,
      'is-odd': order % 2 === 1
    }"
    :style="{
      gridArea: `1 / ${startIndex} / -1 / ${endIndex}`
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
.project-timeline-pillar.is-odd {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
