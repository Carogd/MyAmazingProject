<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <CompetencePro />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import CompetencePro from "@/components/CompetencePro.vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    CompetencePro,
  },
};
</script>
