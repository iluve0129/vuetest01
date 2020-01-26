<template >
  <v-container fluid fill-height>
    <MenuHome />
    <v-row fluid class="justify-center">
      <v-col cols="8">
        <DataTable />
      </v-col>
    </v-row>
  </v-container>
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
