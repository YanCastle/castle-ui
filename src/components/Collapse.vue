<template>
    <div class="layui-collapse" v-bind="attr">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: "Collapse",
  props: {
    accordion: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    attr() {
      let r = {};
      if (this.accordion) {
        r["lay-accordion"] = "lay-accordion";
      }
      return r;
    }
  }
};
</script>
<style scoped>
</style>
