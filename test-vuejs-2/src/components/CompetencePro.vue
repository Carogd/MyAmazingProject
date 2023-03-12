<template>
  <div class="wrapper-comp-pro">test</div>
  <div>Vous avec cliqué {{ total }} fois</div>
  <button @click="increment">Incrementer</button>
  <button @click="decrementer">Decrementer</button>
</template>

<script>
export default {
  name: "CompetencePro",
  data() {
    return { total: 0 };
  },
  methods: {
    increment() {
      this.total++;
    },
    decrementer() {
      this.total -= 1;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
