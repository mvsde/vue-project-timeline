<template>
  <div>
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
  </div>
</template>

<script>
import ProjectTimeline from '@/ProjectTimeline'

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
      projects: [
        {
          name: 'Visualize vertical interfaces',
          start: new Date('2018-11-10'),
          end: new Date('2019-01-23'),
          actualStart: new Date('2018-11-20'),
          actualEnd: new Date('2019-01-28')
        },
        {
          name: 'Streamline customized models',
          color: 'coral',
          start: new Date('2019-01-30'),
          end: new Date('2019-03-05'),
          actualStart: new Date('2019-02-15')
        },
        {
          name: 'Evolve front-end infrastructures',
          color: 'lightblue',
          start: new Date('2019-04-10'),
          end: new Date('2019-06-23')
        }
      ]
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
