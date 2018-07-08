<template>
    <div class="layui-colla-item">
        <h2 class="layui-colla-title">{{title}}</h2>
        <div class="layui-colla-content layui-show">
          <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
  name: "CollapseItem",
  props: {
    title: String
  },
  methods: {},

  mounted() {
    //组件被加载的时候触发
    this.$nextTick(() => {
      if (window["layui"]) layui.element.render();
    });
  }
};
</script>
<style scoped>
</style>
