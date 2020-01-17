<template>
  <section class="comment">
    <div class="comment-header">
      <i class="el-icon-document"></i>
      评论列表
    </div>
    <ul class="comment-box" v-if="comment && comment.length > 0">
      <li class="comment-item" v-for="(item, index) in comment" :key="index">
        <div class="comment-avatar">
          <!-- <Avatar
            size="small"
            style="background-color: #2d8cf0"
            icon="ios-person"
          /> -->
        </div>
        <div class="comment-info">
          <h1 class="comment-username">{{ item.nickname }}</h1>
          <p class="comment-content">
            {{ item.content }}
          </p>
          <div class="comment-reply" v-if="item.reply && item.reply.length > 0">
            <ul class="comment-box">
              <li
                class="comment-item"
                v-for="(reply, index2) in item.reply"
                :key="index2"
              >
                <div class="comment-avatar">
                  <!-- <Avatar
                    size="small"
                    style="background-color: #2d8cf0"
                    icon="ios-chatbubbles"
                  /> -->
                </div>
                <div class="comment-info">
                  <h1 class="comment-username">
                    来自「{{ reply.nickname }}」的回复
                    {{ reply.reply_username }}
                  </h1>
                  <p class="comment-content">
                    {{ reply.content }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <p class="comment-reply-btn" @click="reply(item.id, item.nickname)">
            点击回复
          </p>
        </div>
      </li>
    </ul>

    <ul
      class="load-more-comment"
      @click="loadMoreComment"
      v-if="page && page.current_page < page.total_pages"
    >
      <i type="md-ionic" style="color: #f00;" />
      点击加载更多
    </ul>

    <!-- <Modal v-model="show" :z-index="zIndex" :title="replyNickname">
      <v-comment-create
        @updateComment="updateComment"
        :comment_type="commentType"
        :comment_id="comment_id"
      />
    </Modal> -->
  </section>
</template>

<script lang="ts">
"use strict"
import { Component, Vue, Prop } from "nuxt-property-decorator"
@Component({
  components: {}
})
export default class extends Vue {
  // @Prop(Number)
  // readonly target_id: Number | String = -1
  // @Prop(String)
  // readonly target_type: String = "article"
  @Prop({
    type: Array,
    required: true,
    default: []
  })
  comment!: Array<object>
  // data
  page: number = 1
  // created
  created() {}
  // methods
}
</script>
<style lang="less" scoped>
.comment-header {
  font-size: 16px;
  font-weight: 500;
  color: #2d8cf0;
  padding: 32px 0 16px;
}

.comment-item {
  margin: 16px 0;
  display: flex;
}

.comment-avatar {
  margin-right: 16px;
}

.comment-username {
  color: #17233d;
  font-size: 18px;
  font-weight: 500;
}

.comment-info {
  flex: 1;
}

.comment-content {
  color: #515a6e;
  line-height: 36px;
  font-size: 16px;
}

.comment-reply {
  padding: 12px 24px;
  margin: 24px 0;
  border-radius: 6px;
  background: #f8f8f8;
}

.comment-reply-btn {
  color: #2d8cf0;
  font-size: 16px;
  cursor: pointer;
}

.time {
  font-size: 14px;
  font-weight: bold;
}

.content {
  padding-left: 5px;
}

.load-more-comment {
  text-align: center;
  margin: 32px 0;
  font-size: 18px;
  color: #2d8cf0;
  cursor: pointer;
}
</style>
