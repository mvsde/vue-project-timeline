<template>
  <main>
    <h1>Vue.js Project Timeline</h1>

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
          start: new Date('2018-11-20'),
          end: new Date('2019-01-28'),
          plannedStart: new Date('2018-11-10'),
          plannedEnd: new Date('2019-01-13'),
          team: [
            {
              name: 'Nellie Bender',
              avatar: 'https://source.unsplash.com/3402kvtHhOo/32x32'
            },
            {
              name: 'Alex Wilkerson',
              avatar: 'https://source.unsplash.com/das6NrjLoM0/32x32'
            }
          ]
        },
        {
          name: 'Streamline customized models',
          color: 'coral',
          start: new Date('2019-01-30'),
          end: new Date('2019-03-05'),
          plannedStart: new Date('2019-01-01'),
          onClick () {
            console.log('Hello World!')
          }
        },
        {
          name: 'Evolve front-end infrastructures',
          color: 'lightblue',
          start: new Date('2019-04-10'),
          end: new Date('2019-06-23'),
          team: [
            {
              name: 'Lord ‘Devious’ Brandon',
              avatar: 'https://source.unsplash.com/uvCxkUuImSw/32x32'
            }
          ]
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
