<template>
  <section>
    <div class="article-empty" v-if="list && list.length === 0">暂无文章~</div>
    <ul class="article-box" v-if="list && list.length > 0">
      <li
        v-for="(item, index) in list"
        @click="toArticleDetail(item.id)"
        :key="index"
      >
        <nuxt-link
          class="articles-item"
          :to="{
            path: '/article/detail',
            query: { id: item.id, title: item.title }
          }"
        >
          <div class="articles-item-info">
            <h1 class="articles-item-title">{{ item.title }}</h1>
            <div class="articles-item-description">
              {{ item.description }}
            </div>
            <ul class="articles-item-intro">
              <li class="articles-item-category" v-if="item.category">
                {{ item.category.name }}
              </li>
              <li v-for="(val, Valindex) in tabList" :key="Valindex">
                <i :class="val.icon"></i>
                {{ item[val.id] }}
              </li>
            </ul>
          </div>
          <div class="articles-images">
            <el-image :src="item.cover" lazy>
              <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
              </div>
            </el-image>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
"use strict"
import { Component, Vue, Prop } from "nuxt-property-decorator"
@Component({
  components: {}
})
export default class extends Vue {
  @Prop(Array)
  readonly list!: any
  // data
  tabList: Array<object> = [
    {
      id: "created_at",
      icon: "el-icon-time"
    },
    {
      id: "author",
      icon: "el-icon-user"
    },
    {
      id: "browse",
      icon: "el-icon-view"
    }
  ]
  // created
  created() {}
  // methods
  toArticleDetail(id: string | number) {}
}
</script>
<style lang="less" scoped>
.article-empty {
  text-align: center;
  padding: 32px 0;
  color: #515a6e;
  font-size: 16px;
}

.articles-item {
  cursor: pointer;
  padding: 24px;
  display: flex;
  border-bottom: 1px solid #f6f6f6;
  transition: 0.12s ease-in;
  background: #fff;
  &:hover {
    background: #f6f6f6;
  }

  &:hover .articles-item-title {
    color: #2d8cf0;
  }
}

.articles-item-info {
  flex: 1;
}

.articles-item-title {
  color: #17233d;
  font-size: 20px;
  font-weight: 500;
}

.articles-item-description {
  color: #808695;
  font-size: 18px;
  padding: 16px 0;
}

.articles-item-intro {
  display: flex;
  align-items: center;
}

.articles-item-intro li {
  display: flex;
  align-items: center;
  margin-right: 32px;
  font-size: 14px;
  color: #9ea7b4;
  white-space: nowrap;
}

.articles-item-intro .articles-item-category {
  color: #409eff;
  border-radius: 15px;
  padding: 4px 20px;
  background: rgba(51, 119, 255, 0.1);
}
</style>

<style lang="less">
.articles-images {
  width: 125px;
  margin-left: 32px;
  & img {
    width: 100%;
    border-radius: 3px;
  }
}
</style>
