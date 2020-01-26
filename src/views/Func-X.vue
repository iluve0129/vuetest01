<template>
  <v-content>
    <MenuFuncX />
    <div class="about">
      <h1>This is page of Function-X</h1>
    </div>
  </v-content>
</template>

<script lang="ts">
import Vue from "vue";
import MenuFuncX from "./TopMenu/Menu_Func-X.vue";

export default Vue.extend({
  name: "Func-X",

  components: {
    MenuFuncX
  }
});
</script>