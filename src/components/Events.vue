<template>
  <div class="grid-y grid-margin-y grid-padding-x">
    <div class="cell">
      <h2 class="title">Events</h2>
    </div>
    <template v-for="event in events">
      <div class="grid-x grid-padding-x cell">
        <div class="small-6 medium-3 cell" v-if="event.image">
          <img :src="event.image" :alt="event.title">
        </div>
        <div class="small-6 medium-9 cell">
          <h3 class="title">{{event.title}}</h3>
          <div class="description">{{event.description}}</div>
          Location: {{event.location}}
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    events () {
      return this.$store.getters.getEvents;
    }
  }
};
</script>
