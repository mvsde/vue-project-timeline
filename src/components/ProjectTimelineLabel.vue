<template>
  <section
    v-if="isVisible"
    class="project-timeline-label"
    :style="{ gridArea: `${order} / ${startIndex} / auto / ${endIndex}` }"
  >
    <slot />
  </section>
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
    team: {
      type: Array,
      default: undefined
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
.project-timeline-label {
  position: relative;
  padding: 0.5em 0.75em;
}
</style>
