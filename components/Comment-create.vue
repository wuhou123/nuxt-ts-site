<template>
  <el-form ref="params" :model="params" :rules="ruleValidate">
    <el-form-item label="昵称" prop="nickname">
      <el-input
        v-model="params.nickname"
        placeholder="请输入您的昵称"
        size="mini"
      />
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input
        v-model="params.email"
        placeholder="请输入您的邮箱（不会被公开）"
        size="mini"
      />
    </el-form-item>
    <el-form-item label="评论" prop="content">
      <el-input
        v-model="params.content"
        placeholder="请输入您的评论内容..."
        size="mini"
      />
    </el-form-item>
    <el-form-item>
      <el-button @click="resetCommentInput('params')" size="mini"
        >清空</el-button
      >
      <el-button
        type="primary"
        style="margin-left: 8px"
        @click="submit('params')"
        size="mini"
      >
        {{ comment_type === "comment" ? "评论" : "回复" }}
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
"use strict"
import { Component, Vue, Prop } from "nuxt-property-decorator"
@Component({
  components: {}
})
export default class extends Vue {
  @Prop(Array)
  readonly comment_type!: string
  // data
  params: any = {
    nickname: "",
    email: "",
    content: ""
  }
  ruleValidate: any = {
    nickname: [{ required: true, message: "请输入您的昵称", trigger: "blur" }],
    email: [
      { required: true, message: "请输入您的邮箱", trigger: "blur" },
      { type: "email", message: "请输入正确的邮箱", trigger: "blur" }
    ],
    content: [
      { required: true, message: "请输入评论", trigger: "blur" },
      { type: "string", min: 2, message: "评论不能少于2个字", trigger: "blur" }
    ]
  }
  // created
  created() {}
  // methods
  resetCommentInput(name: string) {
    const formObject: any = this.$refs[name]
    formObject.resetFields()
  }
}
</script>
<style lang="less" scoped></style>
