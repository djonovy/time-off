<template>
<div class="grid-x grid-padding-x">
  <h1 class="cell">{{ msg }}</h1>
</div>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
      msg: 'HR Portal'
    };
  }
};
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
