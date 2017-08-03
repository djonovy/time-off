<template>
  <div class="grid-y grid-margin-y grid-padding-x">
    <h2 class="title cell">Events</h2>
    <div class="grid-x grid-padding-x cell">
      <div class="small-3 cell">
        <label class="title middle">Total: {{filteredEvents.length}}</label>
      </div>
      <div class="small-3 medium-6 cell text-right">
        <label for="filterBy" class="text-right middle title">Filter by:</label>
      </div>
      <div class="small-6 medium-3 cell">
        <select name="filterBy" id="filterBy" class="select" v-model="filterBy">
          <option v-for="status in statuses" :value="status">{{status}}</option>
        </select>
      </div>
    </div>
    <template v-for="event in filteredEvents">
      <div class="grid-x grid-padding-x cell">
        <div class="small-6 medium-3 cell" v-if="event.image">
          <img :src="event.image" :alt="event.title">
        </div>
        <div class="small-6 medium-9 cell">
          <h3 class="title">{{event.title}}</h3>
          <div class="description">{{event.description}}</div>
          <p class="location" v-if="event.location">Location: {{event.location}}</p>
          <div class="more text-right">
            <router-link :to="{ name: 'Event', params: {id: event.id} }" title="View all">View all</router-link>
          </div>
        </div>
      </div>
    </template>
    <p v-if="events === undefined || !filteredEvents.length" class="cell">There are no events.</p>
  </div>
</template>

<script>
export default {
  name: 'Events',
  computed: {
    events () {
      return this.$store.getters.getEvents();
    },
    filterBy: {
      get () {
        return this.$store.getters.getEventesActiveFilter;
      },
      set (type) {
        this.$store.dispatch('filterEvents', type);
      }
    },
    filteredEvents () {
      let currentFilter = this.filterBy;
      return this.events.filter((item) => item.status === currentFilter);
    },
    statuses () {
      return this.$store.getters.getStatuses;
    }
  }
};
</script>
