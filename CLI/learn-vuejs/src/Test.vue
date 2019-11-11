<template>
  <div id="test1">
    <h1>Test Component</h1>
    <p>{{msg}}</p>
    <hr />
  </div>
</template>
<script>
export default {
  name: "test1",
  data() {
    return {
      msg: "test new component"
    };
  }
};
</script>

<style>