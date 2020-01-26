<template>
  <v-app>
    <v-app-bar app>
      <div class="d-flex align-center ma-1 headline">Func-X</div>
      <v-btn class="ma-5" color="secondary">
        <v-icon>mdi-home-account</v-icon>
        <router-link class="ma-1" tag="div" to="/">HOME</router-link>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn class="ma-1" dark>
        <v-icon>mdi-car-side</v-icon>
        <router-link class="ma-1" tag="div" to="/funcx">FuncX-menu1</router-link>
      </v-btn>
      <v-btn class="ma-1" dark>
        <v-icon>mdi-chart-bell-curve</v-icon>
        <router-link class="ma-1" tag="div" to="/funcx">FuncX-menu2</router-link>
      </v-btn>
      <v-btn class="ma-1" dark>
        <v-icon>mdi-file-find-outline</v-icon>
        <router-link class="ma-1" tag="div" to="/funcx">FuncX-menu3</router-link>
      </v-btn>
      <v-btn class="ma-1" dark>
        <v-icon>mdi-settings-outline</v-icon>
        <router-link class="ma-1" tag="div" to="/funcx">FuncX-menu4</router-link>
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn href target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MenuFuncX",

  data: () => ({
    //
  })
});
</script>