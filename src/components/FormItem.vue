<template>
    <div class="layui-form-item">
        <label class="layui-form-label">{{label}}</label>
        <div class="layui-input-block">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
  name: "FormItem",
  props: {
    label: String
  }
};
</script>
<style scoped>
</style>
