<template>
  <v-container fluid>
    <div>
      <TreeView2 />
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import TreeView from "../components/TreeView.vue";
import TreeView2 from "../components/TreeView2.vue";

export default Vue.extend({
  name: "Func-B",

  components: {
    TreeView,
    TreeView2
  }
});
</script>