<template>
    <ul :class="classes" :lay-filter="filter">
      <slot></slot>
    </ul>
</template>
<script>
import { rangeValidator } from "../utils";
export default {
  name: "Menu",
  props: {
    type: {
      type: String,
      validator: v => {
        return rangeValidator(v, ["", "side", "tree"], "Menu type");
      }
    },
    filter: {
      type: String,
      default: "menu"
    }
  },
  computed: {
    classes() {
      let c = ["layui-nav"];
      switch (this.type) {
        case "side":
          c.push("layui-nav-tree");
          c.push("layui-nav-side");
          break;
        case "tree":
          c.push("layui-nav-tree");
          break;
      }
      return c;
    }
  },

  mounted() {
    //组件被加载的时候触发
    this.$nextTick(() => {
      setTimeout(() => {
        if (window["layui"])
          layui.element.render(
            `nav${this.filter.length > 0 ? `(${this.filter})` : ""}`
          );
      }, 1000);
    });
  }
};
</script>
<style scoped>
</style>
