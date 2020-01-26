<template>
  <v-container fluid fill-height class="align-start">
    <MenuFuncA />
    <v-row>
      <v-col cols="3">
        <v-card>
          <TreeView />
        </v-card>
      </v-col>
      <v-col cols="9">
        <v-card>other contents</v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import TreeView from "../components/TreeView.vue";
import MenuFuncA from "./TopMenu/Menu_Func-A.vue";

export default Vue.extend({
  name: "Func-A",

  components: {
    TreeView,
    MenuFuncA
  }
});
</script>