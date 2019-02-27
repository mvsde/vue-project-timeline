<template>
  <main>
    <div class="zoom">
      <button
        aria-label="Zoom out"
        @click="displayMonths--"
      >
        -
      </button>

      {{ displayMonths }} months

      <button
        aria-label="Zoom in"
        @click="displayMonths++"
      >
        +
      </button>
    </div>

    <project-timeline
      :start-month="startMonth"
      :end-month="endMonth"
      :display-months="displayMonths"
      :projects="projects"
    />
  </main>
</template>

<script>
import ProjectTimeline from '@/ProjectTimeline'

import projects from './projects'

export default {
  name: 'Demo',

  components: {
    ProjectTimeline
  },

  data () {
    return {
      startMonth: new Date('2018-11-10'),
      endMonth: new Date('2019-05-20'),
      displayMonths: 6,
      projects
    }
  }
}
</script>

<style>
body {
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
}

.zoom {
  margin-bottom: 1em;
}
</style>
