<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>
        <heard />
      </el-header>
      <el-main><nuxt /></el-main>
      <el-footer>Footer</el-footer>
    </el-container>
    <el-aside width="200px">Aside</el-aside>
  </el-container>
</template>

<script lang="ts">
"use strict"
import { Component, Vue } from "nuxt-property-decorator"
import Heard from "~/components/Heard.vue"

@Component({
  components: {
    Heard
  }
})
export default class extends Vue {
  // data
  activeName: string = "first"
}
</script>

<style lang="less">
body {
  background: #f9f9f9;
}
.el-footer {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  min-height: calc(100vh - 136px);
  color: #333;
  background: #fff;
  padding: 0;
}
.el-container {
  width: 1100px;
  margin: 0 auto;
}
</style>
