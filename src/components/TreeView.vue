<template>
  <!-- Dark系カラーにする場合の設定
  <div class="blue-grey darken-4">
    <v-treeview color="lime" class="white--text" hoverable activatable :items="items"></v-treeview>
  </div>
  -->
  <v-treeview hoverable activatable :items="items"></v-treeview>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        name: "Category-A",
        children: [
          { id: 2, name: "Category-A-1" },
          { id: 3, name: "Category-A-2" },
          { id: 4, name: "Category-A-3" }
        ]
      },
      {
        id: 5,
        name: "Category-B",
        children: [
          {
            id: 6,
            name: "Category-B-1",
            children: [
              { id: 7, name: "Category-B-1-1" },
              { id: 8, name: "Category-B-1-2" }
            ]
          }
        ]
      }
    ]
  })
};
</script>
