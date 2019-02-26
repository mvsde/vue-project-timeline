<template>
  <div class="project-timeline-team">
    <img
      v-for="member in members"
      :key="member.name"
      class="project-timeline-team__member"
      :src="member.avatar"
      :alt="member.name"
      :title="member.name"
    >
  </div>
</template>

<script>
export default {
  name: 'ProjectTimelineTeam',

  props: {
    members: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.project-timeline-team {
  margin-top: 0.5em;
}

.project-timeline-team__member {
  border-radius: 50%;
  margin-right: 0.5em;
}
</style>
