<template>
  <div
    class="project-timeline"
    :style="{
      '-webkit-overflow-scrolling': 'touch',
      'overflow': 'auto'
    }"
  >
    <div
      class="project-timeline__grid"
      :style="{
        display: 'grid',
        gridTemplate: `repeat(${rows}, max-content) min-content / repeat(${columns}, 1fr)`,
        width: `${width}%`
      }"
    >
      <project-timeline-pillar
        v-for="(month, key, i) in months"
        :key="`pillar-${key}`"
        :order="i + 1"
        :start-index="month.startDay"
        :end-index="month.endDay"
      />

      <project-timeline-today-marker
        ref="todayMarker"
        :index="today"
      />

      <project-timeline-label
        v-for="(project, i) in projects"
        :key="`project-label-${i}`"
        :timeline="{ start, end, columns }"
        :order="i + 1"
        :color="project.color"
        :start="project.start || project.plannedStart"
        :end="getProjectEnd(project)"
        :team="project.team"
        :on-click="project.onClick"
      >
        {{ project.name }}
      </project-timeline-label>

      <project-timeline-bar
        v-for="(project, i) in projects"
        :key="`project-bar-${i}`"
        :timeline="{ start, end, columns }"
        :color="project.color"
        :order="i + 1"
        :start="project.plannedStart || project.start"
        :end="project.plannedEnd || project.end"
      />

      <project-timeline-month
        v-for="(month, key) in months"
        :key="`month-${key}`"
        :start-index="month.startDay"
        :end-index="month.endDay"
      >
        {{ month.format }}
      </project-timeline-month>
    </div>
  </div>
</template>

<script>
import ProjectTimelineBar from '@/components/ProjectTimelineBar'
import ProjectTimelineLabel from '@/components/ProjectTimelineLabel'
import ProjectTimelineMonth from '@/components/ProjectTimelineMonth'
import ProjectTimelinePillar from '@/components/ProjectTimelinePillar'
import ProjectTimelineTodayMarker from '@/components/ProjectTimelineTodayMarker'

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
    ProjectTimelinePillar,
    ProjectTimelineTodayMarker
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
    visibleMonths: {
      type: Number,
      default: 12
    },
    autoScrollToday: {
      type: Boolean,
      default: false
    },
    locale: {
      type: String,
      default: 'en-US'
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
          const format = current.toLocaleDateString(this.locale, {
            year: 'numeric', month: 'short'
          })

          accumulator[month] = { startDay, endDay, format }
        }

        return accumulator
      }, {})
    },
    /**
     * @returns {Number}
     */
    width () {
      return Math.max(100, Object.values(this.months).length / this.visibleMonths * 100)
    },
    today () {
      let todayDate = new Date()
      if (this.start < todayDate && todayDate < this.end) {
        return eachDayOfInterval({ start: this.start, end: todayDate }).length
      }
      return null
    }
  },

  mounted () {
    if (this.autoScrollToday) {
      this.$refs.todayMarker.$el.scrollIntoView({ inline: 'center' })
    }
  },

  methods: {
    getProjectEnd (project) {
      if (project.end) {
        return project.end
      }

      if (!project.end && new Date(project.plannedEnd) > new Date()) {
        return project.plannedEnd
      }

      return new Date()
    }
  }
}
</script>
