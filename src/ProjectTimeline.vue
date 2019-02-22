<template>
  <div
    class="project-timeline"
    :style="{
      gridTemplateColumns: `repeat(${days}, 1fr)`,
      gridTemplateRows: `repeat(${rows}, 1fr) min-content`
    }"
  >
    <slot />
    <p
      v-for="(monthStart, month) in months"
      :key="monthStart"
      class="project-timeline__month"
      :style="{
        gridColumnStart: monthStart
      }"
    >
      <span>
        {{ month }}
      </span>
    </p>
  </div>
</template>

<script>
import { differenceInDays, eachDayOfInterval, format } from 'date-fns'

export default {
  name: 'ProjectTimeline',

  props: {
    visibleMonths: {
      type: Number,
      default: 12
    },
    start: {
      type: Date,
      required: true
    },
    end: {
      type: Date,
      required: true
    },
    defaultColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.2)'
    }
  },

  provide () {
    return {
      defaultColor: this.defaultColor,
      timelineStart: this.start
    }
  },

  data () {
    return {
      rows: 0
    }
  },

  computed: {
    days () {
      return differenceInDays(this.end, this.start)
    },
    months () {
      return eachDayOfInterval({ start: this.start, end: this.end })
        .reduce((accumulator, current, index) => {
          const date = format(current, 'y-MM')

          if (!accumulator[date]) {
            accumulator[date] = index
          }

          return accumulator
        }, {})
    }
  },

  mounted () {
    this.rows = this.$children.length
  }
}
</script>

<style>
.project-timeline {
  display: grid;
}

.project-timeline__month {
  grid-row-end: -1;
}

.project-timeline__month > * {
  position: absolute;
}
</style>
