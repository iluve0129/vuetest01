<template>
  <div>
    <v-card>
      <v-card-title>
        News
        <v-spacer></v-spacer>
      </v-card-title>

      <v-data-table :headers="headers" :items="newsitems" :items-per-page="5" class="elevation-3"></v-data-table>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "DataTable",

  data() {
    return {
      headers: [
        {
          text: "News Items",
          align: "left",
          sortable: false,
          value: "item"
        },
        { text: "Published Date", sortable: false, value: "pdate" },
        { text: "Description", sortable: false, value: "desc" }
      ],
      newsitems: [
        {
          item: "Release v1.0.13",
          pdate: "2019/11/24",
          desc: "Function XXX is released."
        },
        {
          item: "System Downtime",
          pdate: "2019/12/11",
          desc: "Downtime is between 2019/12/18 10:00 and 18:00."
        },
        {
          item: "Release v1.0.14",
          pdate: "2019/11/12",
          desc: "Function YYY is released."
        }
      ]
    };
  }
});
</script>
