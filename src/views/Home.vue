<template>
  <v-content>
    <v-container class="d-flex justify-center">
      <v-flex xs8 md8>
        <DataTable class="mx-auto" />
      </v-flex>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import Vue from "vue";
import DataTable from "../components/DataTable.vue";

export default Vue.extend({
  name: "Home",

  components: {
    DataTable
  }
});
</script>
