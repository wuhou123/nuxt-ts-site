<template>
  <section>
    <article-list :list="list" />
  </section>
</template>

<script lang="ts">
"use strict"
import { Component, Vue } from "nuxt-property-decorator"
import ArticleList from "~/components/ArticleList.vue"

@Component({
  components: {
    ArticleList
  }
})
export default class extends Vue {
  // data
  list: Array<object> = []
  // created
  created() {
    this.getAllArticle(1)
  }
  // methods
  getAllArticle(page: number, searchCnt: any = "") {
    let params: any = {}
      // 获取对应文章列表
    ;(<any>this).$axios
      .get(
        "https://www.wuhou123.cn/api/v1/article",
        Object.assign(
          {
            page: page
          },
          params
        )
      )
      .then((res: any) => {
        this.list = res.data.data.data || []
      })
  }
}
</script>

<style lang="less" scoped>
.category {
  overflow: hidden;
  overflow-x: auto;
  display: flex;
  border-bottom: 1px solid #f0f0f0;
}

.category-item {
  margin-left: 32px;
  cursor: pointer;
  color: #515a6e;
  font-size: 16px;
  font-weight: normal;

  &:hover {
    color: #2d8cf0;
  }
}

.category-item-active {
  color: #2d8cf0;
}
</style>
