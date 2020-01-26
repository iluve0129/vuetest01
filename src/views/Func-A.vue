<template>
  <div>
    <MenuFuncA />
    <v-container fluid class="grey lighten-5">
      <div class="full-width">
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
      </div>
    </v-container>
  </div>
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