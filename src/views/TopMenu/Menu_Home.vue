<template>
  <v-app-bar app>
    <div class="d-flex align-center ma-1 headline">IrubeApps - Home</div>
    <v-btn class="ma-5" color="secondary">
      <v-icon>mdi-home-account</v-icon>
      <router-link class="ma-1" tag="div" to="/">HOME</router-link>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn class="ma-1" color="primary">
      <v-icon>mdi-car-side</v-icon>
      <router-link class="ma-1" tag="div" to="/funca">Func-A</router-link>
    </v-btn>
    <v-btn class="ma-1" color="warning">
      <v-icon>mdi-chart-bell-curve</v-icon>
      <router-link class="ma-1" tag="div" to="/funcb">Func-B</router-link>
    </v-btn>
    <v-btn class="ma-1" color="error">
      <v-icon>mdi-file-find-outline</v-icon>
      <router-link class="ma-1" tag="div" to="/funcc">Func-C</router-link>
    </v-btn>
    <v-btn class="ma-1" color="success">
      <v-icon>mdi-settings-outline</v-icon>
      <router-link class="ma-1" tag="div" to="/funcd">Func-D</router-link>
    </v-btn>
    <v-spacer></v-spacer>

    <v-btn href target="_blank" text>
      <span class="mr-2">Latest Release</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MenuHome",

  data: () => ({
    //
  })
});
</script>