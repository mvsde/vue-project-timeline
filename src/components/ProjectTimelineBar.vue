<template>
  <div
    v-if="isVisible"
    title="Planned time"
    aria-hidden="true"
    class="project-timeline-bar"
    :style="{
      gridArea: `${order} / ${startIndex} / auto / ${endIndex}`,
      backgroundColor: color
    }"
  />
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
    }
  },

  computed: {
    /**
     * @returns {Boolean}
     */
    isVisible () {
      // Don’t render project if it starts after the timeline ends
      // or ends before the timeline starts
      return this.start < this.timeline.end && this.end > this.timeline.start
    },
    /**
     * @returns {Number}
     */
    startIndex () {
      const start = differenceInCalendarDays(this.start, this.timeline.start)
      // Start at day 1 if the first timeline day is after the project start day
      // Add 1 to offset CSS Grid line numbering
      return Math.max(0, start) + 1
    },
    /**
     * @returns {Number}
     */
    endIndex () {
      // Add 1 to include first and last day of time span
      const end = differenceInCalendarDays(this.end, this.timeline.start) + 1
      // End at last timeline day if project end day is after last timeline day
      // Add 1 to offset CSS Grid line numbering
      return Math.min(this.timeline.columns, end) + 1
    }
  }
}
</script>

<style>
.project-timeline-bar {
  align-self: end;
  height: 0.5em;
  margin-bottom: 1em;

  background-color: silver;

  filter: brightness(80%);
}
</style>
