<template>
    <hr :class="`layui-bg-${color}`">
</template>
<script>
import { rangeValidator } from "../utils";
export default {
  name: "Hr",
  props: {
    color: {
      type: String,
      default: "",
      validator: v => {
        return rangeValidator(
          v,
          ["", "red", "orange", "green", "cyan", "blue", "black", "gray"],
          "Hr color"
        );
      }
    }
  }
};
</script>
<style scoped>
</style>
