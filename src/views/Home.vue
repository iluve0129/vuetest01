<template>
  <div>
    <MenuHome />
    <v-container class="d-flex justify-center">
      <v-flex xs8 md8>
        <DataTable class="mx-auto" />
      </v-flex>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DataTable from "../components/DataTable.vue";
import MenuHome from "./TopMenu/Menu_Home.vue";

export default Vue.extend({
  name: "Home",

  components: {
    DataTable,
    MenuHome
  }
});
</script>
