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
        gridTemplateColumns: `repeat(${days}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr) min-content`,
        width: `${zoom}%`
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
        :start-day="month.start"
        :end-day="month.end"
        :days="month.days"
      >
        {{ name }}
      </project-timeline-month>
    </div>
  </div>
</template>

<script>
import ProjectTimelineBar from '@/components/ProjectTimelineBar'
import ProjectTimelineMonth from '@/components/ProjectTimelineMonth'

import { differenceInDays, eachDayOfInterval, format, getDaysInMonth } from 'date-fns'

export default {
  name: 'ProjectTimeline',

  components: {
    ProjectTimelineBar,
    ProjectTimelineMonth
  },

  props: {
    start: {
      type: Date,
      required: true
    },
    end: {
      type: Date,
      required: true
    },
    projects: {
      type: Array,
      required: true
    },
    zoom: {
      type: Number,
      default: 100
    }
  },

  computed: {
    rows () {
      return this.projects.length
    },
    days () {
      return differenceInDays(this.end, this.start)
    },
    months () {
      return eachDayOfInterval({ start: this.start, end: this.end })
        .reduce((accumulator, current, index) => {
          const month = format(current, 'y-MM')

          if (!accumulator[month]) {
            const start = index + 1
            const days = getDaysInMonth(current)
            // End at last timeline day if month end day is after last timeline day
            // Add 1 to the result to adjust the CSS Grid offset
            const end = Math.min(start + days, this.days) + 1

            accumulator[month] = { start, end, days }
          }

          return accumulator
        }, {})
    }
  }
}
</script>
