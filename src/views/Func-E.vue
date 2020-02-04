<template>
  <v-container fluid fill-height class="align-start">
    <MenuFuncX />
    <v-container fluid>
      <v-card>
        <!-- input type="file" をv-btnで偽装するにはこうする。
            <v-btn class="ma-5" color="secondary">
            <label for="file-upload">File UpLoad</label>
            <input id="file-upload" type="file" />
            </v-btn>
        <v-file-input
          @change="getFileContent(e)"
          class="ml-1 mr-2"
          label="CSV input"
          accept=".csv"
          ref="myFiles"
        >{{ content }}</v-file-input>
      

        <v-file-input label="テキストファイルを選択" @change="getFileContent(test)" />
        <v-text-field id="text1" label="テキスト" @input="updateField({id:'text1',value:$event})"></v-text-field>
        -->
        <v-file-input @change="getFileName" accept="image/*" label="File input"></v-file-input>

        <v-file-input label="テキストファイルを選択" @change="getFileContent" />

        {{ content }}
      </v-card>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

import MenuFuncX from "./TopMenu/Menu_Func-X.vue";

export default Vue.extend({
  name: "Func-D",

  components: {
    MenuFuncX
  },
  data() {
    return {
      content: ""
    };
  },
  methods: {
    getFileName(e) {
      console.log("fileが選択されました。");
      console.log(e.name);
    },

    async getFileContent(file) {
      try {
        const content = await this.readFileAsync(file);
        this.content = content;
      } catch (e) {
        console.log(e);
      }
    },
    readFileAsync(file) {

      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsText(file);
      });
      
    }
  }
});
</script>

<style scoped>
input[type="file"] {
  display: none;
}
</style>