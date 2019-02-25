<template>
  <project-timeline
    :timeline-start="timelineStart"
    :timeline-end="timelineEnd"
    :projects="projects"
  />
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
      timelineStart: new Date('2018-11-10'),
      timelineEnd: new Date('2019-05-20'),
      projects: [
        {
          name: 'Visualize vertical interfaces',
          start: new Date('2018-11-20'),
          end: new Date('2019-01-23'),
          actualStart: new Date('2018-11-20'),
          actualEnd: new Date('2019-01-20')
        },
        {
          name: 'Streamline customized models',
          color: 'crimson',
          start: new Date('2019-02-10'),
          end: new Date('2019-03-04'),
          actualStart: new Date('2019-02-15')
        },
        {
          name: 'Evolve front-end infrastructures',
          start: new Date('2019-04-10'),
          end: new Date('2019-06-23')
        }
      ]
    }
  }
}
</script>
