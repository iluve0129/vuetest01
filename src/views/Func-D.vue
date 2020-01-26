<template>
  <v-container fluid fill-height class="align-start">
    <MenuFuncX />
    <div>
      <h1>This is page of Function-D</h1>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

import MenuFuncX from "./TopMenu/Menu_Func-X.vue";

export default Vue.extend({
  name: "Func-D",

  components: {
    MenuFuncX
  }
});
</script>