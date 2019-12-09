<template>
  <header>
    <h1>{{title}}</h1>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: "Test title"
    };
  }
};
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  align-items: center;
}
</style>

