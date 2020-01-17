<template>
  <section class="heard-config">
    <el-tabs v-model="activeName">
      <el-tab-pane label="首页" name="home"></el-tab-pane>
      <el-tab-pane label="关于" name="about"></el-tab-pane>
      <el-tab-pane label="文档中心" name="doc"></el-tab-pane>
    </el-tabs>
  </section>
</template>

<script lang="ts">
"use strict"
import { Component, Vue } from "nuxt-property-decorator"
import { State } from "vuex-class"

@Component({
  components: {}
})
export default class extends Vue {
  // data
  activeName: string = "home"
}
</script>

<style lang="less">
.heard-config {
  .el-tabs__nav-wrap::after {
    background-color: transparent;
  }
}
</style>
