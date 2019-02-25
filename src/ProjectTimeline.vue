<template>
  <div
    class="project-timeline"
    :style="{
      overflowX: 'auto'
    }"
  >
    <div
      class="project-timeline-grid"
      :style="{
        display: 'grid',
        gridTemplate: `repeat(${rows}, 1fr) min-content / repeat(${days}, 1fr)`,
        width: `${width}%`
      }"
    >
      <project-timeline-bar
        v-for="(project, i) in projects"
        :key="`project-${i}`"
        :timeline="{ start, end, days }"
        :color="project.color"
        :order="i + 1"
        :start="project.start"
        :end="project.end"
      >
        {{ project.name }}
      </project-timeline-bar>

      <project-timeline-month
        v-for="(month, name, i) in months"
        :key="`month-${i}`"
        :start-day="month.startDay"
        :end-day="month.endDay"
      >
        {{ name }}
      </project-timeline-month>
    </div>
  </div>
</template>

<script>
import ProjectTimelineBar from '@/components/ProjectTimelineBar'
import ProjectTimelineMonth from '@/components/ProjectTimelineMonth'

import {
  differenceInDays,
  eachDayOfInterval,
  format,
  getDaysInMonth,
  lastDayOfMonth,
  setDate
} from 'date-fns'

export default {
  name: 'ProjectTimeline',

  components: {
    ProjectTimelineBar,
    ProjectTimelineMonth
  },

  props: {
    timelineStart: {
      type: Date,
      required: true
    },
    timelineEnd: {
      type: Date,
      required: true
    },
    projects: {
      type: Array,
      required: true
    },
    displayMonths: {
      type: Number,
      default: 6
    }
  },

  computed: {
    /**
     * @returns {Number}
     */
    rows () {
      return this.projects.length
    },
    /**
     * @returns {Date}
     */
    start () {
      return setDate(this.timelineStart, 1)
    },
    /**
     * @returns {Date}
     */
    end () {
      return lastDayOfMonth(this.timelineEnd)
    },
    /**
     * @returns {Number}
     */
    days () {
      return differenceInDays(this.end, this.start)
    },
    /**
     * @returns {{ 'y-MM': { startDay: Number, endDay: Number } }}
     */
    months () {
      return eachDayOfInterval({ start: this.start, end: this.end })
        .reduce((accumulator, current, index) => {
          const month = format(current, 'y-MM')

          if (!accumulator[month]) {
            const startDay = index + 1
            // End at last timeline day if month end day is after last timeline day
            // Add 1 to the result to adjust the CSS Grid offset
            const endDay = Math.min(startDay + getDaysInMonth(current), this.days)

            accumulator[month] = { startDay, endDay }
          }

          return accumulator
        }, {})
    },
    /**
     * @returns {Number}
     */
    width () {
      return Math.max(100, Object.values(this.months).length / this.displayMonths * 100)
    }
  }
}
</script>
