<template>
  <div
    aria-hidden="true"
    class="project-timeline-month"
    :style="{
      gridArea: `auto / ${startIndex} / -1 / ${endIndex}`
    }"
  >
    <span class="project-timeline-month__content">
      <slot />
    </span>
  </div>
</template>

<script>
export default {
  name: 'ProjectTimelineMonth',

  props: {
    startIndex: {
      type: Number,
      required: true
    },
    endIndex: {
      type: Number,
      required: true
    }
  }
}
</script>

<style>
.project-timeline-month {
  position: sticky;
  bottom: 0;

  color: #fff;

  background: rgba(0, 0, 0, 0.5);
}

.project-timeline-month__content {
  position: sticky;
  display: inline-block;
  left: 0;
  padding: 0.5em 0.75em;
}
</style>
