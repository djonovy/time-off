<template>
  <div class="grid-x grid-padding-x event-section">
    <div class="cell">
      <h2>{{event.title}}</h2>
      <p v-if="event.image"><img :src="event.image" :alt="event.title" class="image"></p>
      <div class="description">{{event.description}}</div>
      <p class="location" v-if="event.location">Location: {{event.location}}</p>
      <iframe v-if="event.location" :src="mapUrl(event.location, event.coordinates)" width="100%" height="350" frameborder="0" style="border:0"></iframe>
      <button class="button alert remove" type="button" title="Remove" @click="remove(event.id)">Remove</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Event',
  props: ['id'],
  data () {
    return {
      key: 'AIzaSyDvIMEGr7BYQA5IKV7tzm91vCy1zIv8GRw',
      zoom: 12
    };
  },
  methods: {
    mapUrl (q, location) {
      let center = location ? `&center=${location}` : '';
      return `https://www.google.com/maps/embed/v1/place?key=${this.key}&q=${q}&zoom=${this.zoom}` + center;
    },
    remove (id) {
      this.$store.dispatch('removeEvent', id);
      this.$router.push({name: 'Events'});
      this.$toasted.success('Event has been removed.');
    }
  },
  computed: {
    event () {
      let id = +this.id;
      let events = this.$store.getters.getEvents(id);
      if (events === undefined) {
        this.$router.push({name: 'NotFound'});
        return false;
      }
      return events;
    }
  }
};
</script>

<style lang="scss" scoped>
.event-section {
  & {
    position: relative;
  }
  .image {
    max-height: 300px;
  }
  .remove {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
