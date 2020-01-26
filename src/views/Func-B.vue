<template>
  <v-container fluid fill-height class="align-start">
    <MenuFuncB />
    <v-container fluid>
      <TreeView2 />
    </v-container>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import TreeView from "../components/TreeView.vue";
import TreeView2 from "../components/TreeView2.vue";
import MenuFuncB from "./TopMenu/Menu_Func-B.vue";

export default Vue.extend({
  name: "Func-B",

  components: {
    TreeView,
    TreeView2,
    MenuFuncB
  }
});
</script>