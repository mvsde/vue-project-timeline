<template>
  <main class="demo">
    <header class="controls">
      <div class="controls__item">
        <label
          class="controls__label"
          for="start-month"
        >Start:</label>
        <input
          id="start-month"
          v-model="startMonth"
          class="controls__input"
          type="month"
        >
      </div>

      <div class="controls__item">
        <label
          class="controls__label"
          for="end-month"
        >End:</label>
        <input
          id="end-month"
          v-model="endMonth"
          class="controls__input"
          type="month"
        >
      </div>

      <div class="controls__item">
        <label
          class="controls__label"
          for="visible-months"
        >Visible months:</label>
        <input
          id="visible-months"
          v-model.number="visibleMonths"
          class="controls__input"
          type="number"
          min="1"
          step="1"
        >
      </div>
    </header>

    <project-timeline
      :start-month="new Date(startMonth)"
      :end-month="new Date(endMonth)"
      :visible-months="visibleMonths"
      :projects="projects"
      class="timeline"
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
      startMonth: '2018-11',
      endMonth: '2019-05',
      visibleMonths: 6,
      projects
    }
  }
}
</script>

<style>
body {
  margin: 0;

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

.demo {
  box-sizing: border-box;

  display: grid;
  grid-template-rows: min-content 1fr;
  height: 100vh;
  padding: 1em;
}

.controls {
  display: flex;
  flex-wrap: wrap;
}

.controls__item {
  display: flex;
  align-items: center;
  margin: 0 1em 1em 0;
}

.controls__label {
  margin-right: 0.5em;
}

.controls__input {
  height: 1.5em;
  padding: 0.25em 0.5em;

  font-family: inherit;
  font-size: inherit;

  border: 1px solid rgba(0, 0, 0, 0.2);
}
</style>
