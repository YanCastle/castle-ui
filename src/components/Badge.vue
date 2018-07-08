<template>
    <span :class="classes">
        <slot></slot>
    </span>
</template>
<script>
import { rangeValidator } from "../utils";
export default {
  name: "Badage",
  props: {
    type: {
      type: String,
      default: "badge",
      validator: v => {
        return ["", "badge", "dot", "rim"].indexOf(v) > -1;
      }
    },
    color: {
      type: String,
      default: "",
      validator: v => {
        return rangeValidator(
          v,
          ["", "orange", "green", "cyan", "blue", "black", "gray"],
          "Badge color"
        );
      }
    }
  },
  computed: {
    classes() {
      let a = [];
      switch (this.type) {
        case "dot":
          a.push("layui-badge-dot");
          break;
        case "rim":
          a.push("layui-badge-rim");
          break;
        case "badge":
        default:
          a.push("layui-badge");
          break;
      }
      if (this.color) {
        a.push(`layui-bg-${this.color}`);
      }
      return a;
    }
  }
};
</script>
<style scoped>
</style>
