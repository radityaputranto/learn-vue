<template>
  <div>
    <h3>Scope CSS</h3>
    <ul>
      <li v-for="item in employee">{{item}}</li>
    </ul>
    <small>Component CSS</small>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employee: ["Radit", "Putranto", "Test", "local"]
    };
  }
};
</script>

<style scoped>
h3 {
  color: darkcyan;
}
small {
  color: brown;
}
</style>