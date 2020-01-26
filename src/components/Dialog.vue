<template>
  <v-row>
    <v-btn class="ma-1" dark @click.stop="dialog = true">Menu-X-001</v-btn>

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">pop-up</v-card-title>

        <v-card-text>Vuetifyの機能により実装しています。別メニューに飛んだり、ポップアップ画面出したり。</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="success" @click="dialog = false">YES</v-btn>

          <v-btn color="error" @click="dialog = false">NO</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>