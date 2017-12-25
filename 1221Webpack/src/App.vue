<!-- 组件的HTML 结构 -->
<template>
  <div id="id">
    <h1>hell {{ message }}</h1>
    <button @click="handleClick">按钮</button>
  </div>
</template>

<!-- 组件的行为 -->
<script>
  // 一个单文件组件直接导出默认对象
  export default {
    data () {
      return {
        message: 'app'
      }
    },
    methods: {
      handleClick () {
        window.alert('四月春蚕');
      }
    }
  }
</script>

<!-- 组件样式 -->
<style></style>
