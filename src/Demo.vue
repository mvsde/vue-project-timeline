<template>
  <div>
    <button
      aria-label="Zoom in"
      @click="zoomIn"
    >
      +
    </button>
    <button
      aria-label="Zoom out"
      @click="zoomOut"
    >
      -
    </button>

    <project-timeline
      :visible-months="months"
      :start="new Date('2018-11-10')"
      :end="new Date('2019-07-01')"
    >
      <project-timeline-bar
        name="Visualize vertical interfaces"
        :order="1"
        :start="new Date('2018-11-20')"
        :end="new Date('2019-01-15')"
        :actual-start="new Date('2018-11-20')"
        :actual-end="new Date('2019-01-20')"
      />

      <project-timeline-bar
        name="Streamline customized models"
        color="crimson"
        :order="2"
        :start="new Date('2019-02-10')"
        :end="new Date('2019-03-04')"
        :actual-start="new Date('2019-02-15')"
      />

      <project-timeline-bar
        name="Evolve front-end infrastructures"
        :order="3"
        :start="new Date('2019-04-10')"
        :end="new Date('2019-06-23')"
      />
    </project-timeline>
  </div>
</template>

<script>
import { ProjectTimeline, ProjectTimelineBar } from '@/library'

export default {
  name: 'Demo',

  components: {
    ProjectTimeline,
    ProjectTimelineBar
  },

  data () {
    return {
      months: null
    }
  },

  methods: {
    zoomIn () {

    },
    zoomOut () {

    }
  }
}
</script>
