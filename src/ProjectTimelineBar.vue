<template>
  <div
    class="project-timeline-bar"
    :style="{
      backgroundColor: color,
      gridColumn: `${startDay} / span ${days}`,
      gridRow: order
    }"
  >
    <p>
      {{ name }}
    </p>
  </div>
</template>

<script>
import { differenceInDays } from 'date-fns'

export default {
  name: 'ProjectTimelineBar',

  inject: [
    'defaultColor',
    'timelineStart'
  ],

  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default () {
        return this.defaultColor
      }
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
    startDay () {
      return differenceInDays(this.start, this.timelineStart)
    },
    days () {
      return differenceInDays(this.end, this.start)
    },
    actualDays () {
      return differenceInDays(this.actualEnd, this.actualStart)
    }
  }
}
</script>
