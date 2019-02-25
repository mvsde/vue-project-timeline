<template>
  <div
    v-if="isVisible"
    class="project-timeline-bar"
    :style="{
      backgroundColor: color,
      gridArea: `${order} / ${startDay} / auto / ${endDay}`
    }"
  >
    <slot />
  </div>
</template>

<script>
import { differenceInCalendarDays } from 'date-fns'

export default {
  name: 'ProjectTimelineBar',

  props: {
    timeline: {
      type: Object,
      required: true
    },
    color: {
      type: String,
      default: undefined
    },
    order: {
      type: Number,
      default: undefined
    },
    start: {
      type: Date,
      required: true
    },
    end: {
      type: Date,
      required: true
    },
    actualStart: {
      type: Date,
      default: undefined
    },
    actualEnd: {
      type: Date,
      default: undefined
    },
    team: {
      type: Array,
      default: undefined
    }
  },

  computed: {
    isVisible () {
      // Don’t render project if it starts after the timeline ends
      // or ends before the timeline starts
      return this.start < this.timeline.end && this.end > this.timeline.start
    },
    startDay () {
      const start = differenceInCalendarDays(this.start, this.timeline.start)
      // Start at day 1 if the first timeline day is after the project start day
      return Math.max(1, start)
    },
    endDay () {
      const end = differenceInCalendarDays(this.end, this.timeline.start)
      // End at last timeline day if project end day is after last timeline day
      return Math.min(this.timeline.days, end)
    },
    actualStartDay () {
      const actualStart = differenceInCalendarDays(this.actualStart, this.timeline.start)
      // Start at day 1 if the first timeline day is after the project start day
      return Math.max(1, actualStart)
    },
    actualEndDay () {
      const actualEnd = differenceInCalendarDays(this.actualEnd, this.timeline.start)
      // End at last timeline day if project end day is after last timeline day
      return Math.min(this.timeline.days, actualEnd)
    }
  }
}
</script>

<style>
.project-timeline-bar {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
