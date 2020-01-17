<template>
  <ul class="category" v-show="categoryList && categoryList.length > 0">
    <li class="category-item" @click="getAllArticle">
      全部
    </li>
    <li
      v-for="(item, index) in categoryList"
      :class="
        categoryIndex === index
          ? 'category-item category-item-active'
          : 'category-item'
      "
      @click="changCategory(item.id, index)"
      :key="index"
    >
      <Icon
        v-if="item.type"
        class="icon"
        :style="{ color: item.color }"
        :type="item.type"
      />
      {{ item.name }}
    </li>
  </ul>
</template>

<script lang="ts">
"use strict"
import { Component, Vue } from "nuxt-property-decorator"
import { State } from "vuex-class"

@Component({
  components: {}
})
export default class extends Vue {
  // vuex
  @State("category")
  Category: any
  // data
  categoryList: Array<object> = []
  categoryIndex: number = -1
  created() {
    this.categoryList = this.Category
    console.log(111, this.categoryList)
  }
  // methods
}
</script>
<style lang="less" scoped></style>
