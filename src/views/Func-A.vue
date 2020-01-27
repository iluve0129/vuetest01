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
        <v-card>
          <v-card-title>
            Item Description
            <v-spacer></v-spacer>
          </v-card-title>
          <v-form class="pl-5 pr-5 pb-5" ref="form" v-model="valid">
            <v-text-field label="Field-01" required></v-text-field>
            <v-text-field label="Field-02"></v-text-field>

            <div style="display:inline-flex">
              <v-text-field class="mr-2" label="Field-03" required></v-text-field>
              <v-text-field class="mr-2" label="Field-04"></v-text-field>
              <v-text-field class="mr-2" label="Field-05"></v-text-field>
            </div>

            <v-select
              v-model="select"
              :items="items"
              :rules="[v => !!v || 'Item is required']"
              label="Item"
              required
            ></v-select>

            <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'You must agree to continue!']"
              label="Term of Use"
              required
            ></v-checkbox>

            <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn>

            <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

            <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
          </v-form>
        </v-card>
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
  },
  data: () => ({}),

  methods: {}
});
</script>