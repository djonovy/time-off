<template>
  <form @submit.prevent="add">
    <div class="grid-x grid-padding-x">
      <h2 class="cell title">Add event</h2>
      <div class="medium-4 cell">
        <label for="eventTitle">Title</label>
        <input type="text" name="eventTitle" id="eventTitle" v-model="newEvent.title">
      </div>
    </div>
    <div class="grid-x grid-padding-x">
      <div class="medium-6 cell">
        <label for="eventImage">Image URL</label>
        <input type="text" name="eventImage" id="eventImage" v-model="newEvent.image">
      </div>
    </div>
    <div class="grid-x grid-padding-x">
      <div class="medium-6 cell">
        <label for="eventDescription">Description</label>
        <textarea name="eventDescription" id="eventDescription" v-model="newEvent.description" rows="3"></textarea>
      </div>
    </div>
    <div class="grid-x grid-padding-x">
      <div class="medium-4 cell">
        <label for="eventLocation">Location</label>
        <input type="text" name="eventLocation" id="eventLocation" v-model="newEvent.location">
      </div>
    </div>
    <div class="grid-x grid-padding-x">
      <div class="medium-2 cell">
        <button type="submit" class="button expanded" title="Add">Add</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      newEvent: {}
    };
  },
  methods: {
    add () {
      let event = this.newEvent;
      if (!event.title) {
        return true;
      }
      this.$store.dispatch('addEvent', event);
      this.$toasted.success('Event has been added.');
      event.title = '';
      event.description = '';
      event.location = '';
    }
  }
};
</script>
