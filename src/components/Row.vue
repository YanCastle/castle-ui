<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
import { rangeValidator } from "../utils";
export default {
  name: "Row",
  props: {
    color: {
      type: String,
      default: "",
      validator: v => {
        return rangeValidator(
          v,
          ["", "red", "orange", "green", "cyan", "blue", "black"],
          "Row color"
        );
      }
    }
  },
  computed: {
    classes() {
      let c = ["layui-row"];
      if (this.color) {
        c.push(`layui-bg-${this.color}`);
      }
      return c;
    }
  },
  data() {
    return {};
  },
  mounted() {},
  created() {},
  methods: {}
};
</script>
<style scoped>
</style>
