<template>
  <form @submit.prevent="add">
    <div class="grid-x grid-padding-x">
      <h2 class="cell title">Add event</h2>
      <div class="medium-4 cell">
        <label for="title">Title:</label>
        <input v-validate="'required'" :class="{'is-invalid-input': errors.has('title') }" type="text" name="title" id="title" v-model="newEvent.title">
        <span v-show="errors.has('title')" class="form-error is-visible">{{ errors.first('title') }}</span>
      </div>
    </div>
    <div class="grid-x grid-padding-x">
      <div class="medium-6 cell">
        <label for="eventImage">Image URL:</label>
        <input type="text" name="eventImage" id="eventImage" v-model="newEvent.image">
      </div>
    </div>
    <div class="grid-x grid-padding-x">
      <div class="medium-6 cell">
        <label for="eventDescription">Description:</label>
        <textarea name="eventDescription" id="eventDescription" v-model="newEvent.description" rows="3"></textarea>
      </div>
    </div>
    <div class="grid-x grid-padding-x">
      <div class="medium-4 cell">
        <label for="eventLocation">Location:</label>
        <input type="text" name="eventLocation" id="eventLocation" v-model="newEvent.location">
      </div>
    </div>
    <div class="grid-x grid-padding-x">
      <div class="medium-4 cell">
        <label for="eventCoordinates">Coordinates:</label>
        <input type="text" name="eventCoordinates" id="eventCoordinates" v-model="newEvent.coordinates">
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
  name: 'AddEvent',
  data () {
    return {
      newEvent: {
        title: '',
        status: 'Active'
      }
    };
  },
  methods: {
    add () {
      this.$validator.validateAll().then(result => {
        if (result) {
          let event = this.newEvent;
          this.$store.dispatch('addEvent', event);
          this.$toasted.success('Event has been added.');
          event.title = '';
          event.image = '';
          event.description = '';
          event.location = '';
          event.coordinates = '';
          this.$nextTick(() => {
            this.errors.clear();
          });
        }
      });
    }
  }
};
</script>
