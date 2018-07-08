<template>
    <i :class="['layui-icon',`layui-icon-${icon}`]"></i>
</template>
<script>
export default {
  name: "Icon",
  props: {
    icon: String
  }
};
</script>
<style scoped>
</style>
