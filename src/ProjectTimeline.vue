<template>
  <div
    class="project-timeline"
    :style="{
      '-webkit-overflow-scrolling': 'touch',
      overflowX: 'auto'
    }"
  >
    <div
      class="project-timeline-grid"
      :style="{
        display: 'grid',
        gridTemplate: `repeat(${rows}, 1fr) min-content / repeat(${columns}, 1fr)`,
        width: `${width}%`
      }"
    >
      <project-timeline-pillar
        v-for="(month, name, i) in months"
        :key="`pillar-${i}`"
        :order="i + 1"
        :start-index="month.startDay"
        :end-index="month.endDay"
      />

      <project-timeline-bar
        v-for="(project, i) in projects"
        :key="`project-bar-${i}`"
        :timeline="{ start, end, columns }"
        :color="project.color"
        :order="i + 1"
        :start="project.start"
        :end="project.end"
      />

      <project-timeline-bar
        v-for="(project, i) in projects"
        :key="`project-bar-actual-${i}`"
        :timeline="{ start, end, columns }"
        :color="project.color"
        :order="i + 1"
        :start="project.actualStart || project.start"
        :end="project.actualEnd || project.end"
        actual
      />

      <project-timeline-label
        v-for="(project, i) in projects"
        :key="`project-label-${i}`"
        :timeline="{ start, end, columns }"
        :order="i + 1"
        :start="project.start"
        :end="project.end"
      >
        {{ project.name }}
      </project-timeline-label>

      <project-timeline-month
        v-for="(month, name, i) in months"
        :key="`month-${i}`"
        :start-index="month.startDay"
        :end-index="month.endDay"
      >
        {{ name }}
      </project-timeline-month>
    </div>
  </div>
</template>

<script>
import ProjectTimelineBar from '@/components/ProjectTimelineBar'
import ProjectTimelineLabel from '@/components/ProjectTimelineLabel'
import ProjectTimelineMonth from '@/components/ProjectTimelineMonth'
import ProjectTimelinePillar from '@/components/ProjectTimelinePillar'

import { eachDayOfInterval, getDaysInMonth } from 'date-fns'

import formatYearMonth from '@/functions/formatYearMonth'
import getFirstDayOfMonth from '@/functions/getFirstDayOfMonth'
import getLastDayOfMonth from '@/functions/getLastDayOfMonth'

export default {
  name: 'ProjectTimeline',

  components: {
    ProjectTimelineBar,
    ProjectTimelineLabel,
    ProjectTimelineMonth,
    ProjectTimelinePillar
  },

  props: {
    startMonth: {
      type: Date,
      required: true
    },
    endMonth: {
      type: Date,
      required: true
    },
    projects: {
      type: Array,
      required: true
    },
    displayMonths: {
      type: Number,
      default: 12
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
     * @returns {Number}
     */
    columns () {
      return this.days.length
    },
    /**
     * @returns {Date}
     */
    start () {
      return getFirstDayOfMonth(this.startMonth)
    },
    /**
     * @returns {Date}
     */
    end () {
      return getLastDayOfMonth(this.endMonth)
    },
    /**
     * @returns {Date[]}
     */
    days () {
      return eachDayOfInterval({ start: this.start, end: this.end })
    },
    /**
     * @returns {{ 'y-MM': { startDay: Number, endDay: Number } }}
     */
    months () {
      return this.days.reduce((accumulator, current, index) => {
        const month = formatYearMonth(current)

        if (!accumulator[month]) {
          // Add 1 to offset CSS Grid line numbering
          const startDay = index + 1
          const endDay = startDay + getDaysInMonth(current)

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
