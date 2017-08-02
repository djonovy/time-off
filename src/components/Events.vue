<template>
  <div class="grid-y grid-margin-y grid-padding-x">
    <h2 class="title cell">Events</h2>
    <template v-for="event in events">
      <div class="grid-x grid-padding-x cell">
        <div class="small-6 medium-3 cell" v-if="event.image">
          <img :src="event.image" :alt="event.title">
        </div>
        <div class="small-6 medium-9 cell">
          <h3 class="title">{{event.title}}</h3>
          <div class="description">{{event.description}}</div>
          <p class="location" v-if="event.location">Location: {{event.location}}</p>
          <div class="more">
            <router-link :to="{ name: 'Event', params: {id: event.id} }">View all</router-link>
          </div>
        </div>
      </div>
    </template>
    <p v-if="events === undefined || !events.length" class="cell">There are no events.</p>
  </div>
</template>

<script>
export default {
  name: 'Events',
  computed: {
    events () {
      return this.$store.getters.getEvents();
    }
  }
};
</script>
