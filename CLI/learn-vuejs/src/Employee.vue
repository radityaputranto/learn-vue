<template>
  <div>
    <h3>Scope CSS</h3>
    <ul>
      <li v-for="item in employee">{{item}}</li>
    </ul>
    <small>Component CSS</small>

    <hr />
    <center>
      <h4>Tes Object</h4>
    </center>
    <div id="emp">
      <ul class="emp-ul">
        <li v-for="emp in employees" @click="emp.show = !emp.show" class="emp-li">
          <strong>
            <h4>{{ emp.name }}</h4>
          </strong>
          <small v-show="emp.show">{{ emp.speciality }}</small>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employee: ["Radit", "Putranto", "Test", "local"],
      employees: [
        { name: "Radit", speciality: "tes1", show: false },
        { name: "Putranto", speciality: "tes2", show: false },
        { name: "Dave", speciality: "tes3", show: false },
        { name: "Bred", speciality: "tes4", show: false },
        { name: "June", speciality: "tes4", show: true },
        { name: "Sonya", speciality: "tes4", show: false }
      ]
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
/* Test Object */
#emp {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
.emp-ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
.emp-li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>