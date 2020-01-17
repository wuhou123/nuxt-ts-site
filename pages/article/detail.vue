<template>
  <div class="article-detail">
    <div class="article-container">
      <section v-if="article">
        <h1 class="article-title">
          {{ article.title }}
        </h1>
        <ul class="article-intro">
          <li class="articles-item-category" v-if="article.category">
            {{ article.category.name }}
          </li>
          <li v-for="(val, Valindex) in tabList" :key="Valindex">
            <i :class="val.icon"></i>
            {{ article[val.id] }}
          </li>
        </ul>
        <div class="article-content">
          <mavon-editor
            style="height: 100%"
            :ishljs="true"
            v-model="article.content"
            :defaultOpen="'preview'"
            :editable="false"
            :subfield="false"
            :toolbarsFlag="false"
            :boxShadow="false"
            previewBackground="#fff"
          />
        </div>

        <!-- 新建评论-->
        <div class="comment-header">
          <i class="el-icon-edit-outline" />
          欢迎评论
        </div>
        <v-comment-create
          :target_id="article.id"
          :target_type="targetType"
          @updateComment="updateComment"
        />
        <!-- 评论列表-->
        <div v-if="article.article_comment.data.length > 0">
          <v-comment-list
            :target_id="parseInt(id)"
            :comment="list"
            @updateComment="updateComment"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
"use strict"
import { Component, Vue, Watch } from "nuxt-property-decorator"
import VCommentList from "~/components/Comment-list.vue"
import VCommentCreate from "~/components/Comment-create.vue"

@Component({
  head() {
    return {
      title: this.$route.query.title as string
    }
  },
  async asyncData(app: any) {
    const data: any = await app.$axios
      .get(`https://www.wuhou123.cn/api/v1/article/${app.query.id}`, {})
      .then((res: any) => {
        if (res.data.code === 200) {
          return res.data
        }
      })
    return {
      article: data.data,
      list: data.data.article_comment.data
    }
  },
  components: {
    VCommentList,
    VCommentCreate
  }
})
export default class extends Vue {
  // data
  id: any = 1
  targetType: string = "article"
  list: Array<object> = []
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
  article: any = null
  // watch
  // @Watch("article")
  // onArticleChanged(val: any) {
  //   console.log("watch", val)
  // }
  // created
  created() {
    this.id = this.$route.query.id || ""
  }
  // methods
  updateComment(newComment: string, type: string) {
    if (type === "comment") {
      this.article.article_comment.data.unshift(newComment)
    } else if (type === "reply") {
      this.getArticle()
    }
  }
  getArticle() {}
}
</script>

<style scoped lang="less">
.article-detail {
  width: 600px;
  margin: 24px auto;
  min-height: 80vh;
  border-radius: 6px;
  box-sizing: border-box;
  display: flex;
}

.article-container {
  box-sizing: border-box;
  flex: 1;
  padding: 32px;
  margin-right: 32px;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
}

.article-title {
  color: #17233d;
  text-align: center;
  font-size: 40px;
  font-weight: 500;
}

.article-intro {
  color: #515a6e;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 32px 0;
}

.article-intro li {
  display: flex;
  align-items: center;
  margin-right: 24px;
  font-size: 12px;
  color: #9ea7b4;
  white-space: nowrap;
}

li.articles-item-category {
  height: 28px;
  line-height: 28px;
  padding: 0 24px;
  font-size: 12px;
  color: #409eff;
  border-radius: 64px;
  background: rgba(51, 119, 255, 0.1);
}

.comment-header {
  font-size: 16px;
  font-weight: 500;
  color: #2d8cf0;
  padding: 32px 0 16px;
  display: flex;
  align-items: center;
}

@media screen and (min-width: 200px) and (max-width: 750px) {
  .article-detail {
    width: 100%;
  }

  .article-container {
    margin-right: 0;
  }
}
</style>
