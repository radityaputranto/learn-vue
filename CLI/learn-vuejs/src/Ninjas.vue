<template>
  <ul>
    <li v-for="item in ninjas">{{item}}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      ninjas: ["Jhon", "Doe", "Test"]
    };
  }
};
</script>

<style>
</style>