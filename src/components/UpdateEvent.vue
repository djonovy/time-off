<template>
  <form @submit.prevent="update">
    <div class="grid-x grid-padding-x">
      <h2 class="cell title">Update event</h2>
      <div class="medium-4 cell">
        <label for="eventTitle">Title:</label>
        <input type="text" name="eventTitle" id="eventTitle" @input="updateField($event, 'title')" :value="event.title">
      </div>
      <div class="medium-2 cell">
        <label for="eventStatus">Status:</label>
        <select name="eventStatus" id="eventStatus" @input="updateField($event, 'status')" :value="event.status">
          <option v-for="(status, index) in statuses" :value="status" :key="index">{{status}}</option>
        </select>
      </div>
    </div>
    <div class="grid-x grid-padding-x">
      <div class="medium-6 cell">
        <label for="eventImage">Image URL:</label>
        <input type="text" name="eventImage" id="eventImage" @input="updateField($event, 'image')" :value="event.image">
      </div>
    </div>
    <div class="grid-x grid-padding-x">
      <div class="medium-6 cell">
        <label for="eventDescription">Description:</label>
        <textarea name="eventDescription" id="eventDescription" @input="updateField($event, 'description')" :value="event.description" rows="3"></textarea>
      </div>
    </div>
    <div class="grid-x grid-padding-x">
      <div class="medium-4 cell">
        <label for="eventLocation">Location:</label>
        <input type="text" name="eventLocation" id="eventLocation" @input="updateField($event, 'location')" :value="event.location">
      </div>
    </div>
    <div class="grid-x grid-padding-x">
      <div class="medium-4 cell">
        <label for="eventCoordinates">Coordinates:</label>
        <input type="text" name="eventCoordinates" id="eventCoordinates" @input="updateField($event, 'coordinates')" :value="event.coordinates">
      </div>
    </div>
    <div class="grid-x grid-padding-x">
      <div class="medium-2 cell">
        <button type="submit" class="button expanded" title="Update">Update</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'UpdateEvent',
  props: ['id'],
  data () {
    return {
      updatedFields: {}
    };
  },
  methods: {
    updateField (e, field) {
      let value = e.target.value;
      this.updatedFields[field] = value;
    },
    update () {
      let event = this.updatedFields;
      let id = +this.id;
      if (event.title === '') {
        return true;
      }
      this.$store.dispatch('updateEvent', {event, id});
      this.$toasted.success('Event has been updated.');
    }
  },
  computed: {
    event () {
      let id = +this.id;
      return this.$store.getters.getEvents(id);
    },
    statuses () {
      return this.$store.getters.getStatuses;
    }
  }
};
</script>
