<template>
  <section
    v-if="isVisible"
    class="project-timeline-label"
    :style="{
      gridArea: `${order} / ${startIndex} / auto / ${endIndex}`,
      backgroundColor: color,
      color: textColor
    }"
  >
    <button
      v-if="onClick"
      class="project-timeline-label__button"
      @click="onClick"
    >
      <slot />
    </button>
    <span
      v-else
      class="project-timeline-label__text"
    >
      <slot />
    </span>
    <project-timeline-team
      v-if="team"
      :members="team"
      class="project-timeline-team"
    />
  </section>
</template>

<script>
import ProjectTimelineTeam from '@/components/ProjectTimelineTeam'

import { differenceInCalendarDays } from 'date-fns'

export default {
  name: 'ProjectTimelineLabel',

  components: {
    ProjectTimelineTeam
  },

  props: {
    timeline: {
      type: Object,
      required: true
    },
    order: {
      type: Number,
      default: 1
    },
    color: {
      type: String,
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
    },
    onClick: {
      type: Function,
      default: undefined
    }
  },

  data () {
    return {
      textColor: '#000'
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
  },

  mounted () {
    this.$nextTick(() => {
      const [r, g, b] = getComputedStyle(this.$el).backgroundColor.match(/\d{1,3}/g)
      /**
      * W3C perceived brightness calculator
      * @see {@link https://www.w3.org/TR/AERT/#color-contrast}
      */
      const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000

      if (brightness < 140) {
        this.textColor = '#fff'
      }
    })
  }
}
</script>

<style>
.project-timeline-label {
  position: relative;
  margin: 1em 0;
  padding: 0.5em 0.75em 1em;

  background-color: silver;
}
</style>
