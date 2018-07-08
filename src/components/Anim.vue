<template>
    <div :class="['layui-anim',`layui-anim-${way}`]">
        <slot></slot>
    </div>
</template>
<script>
import { rangeValidator } from "../utils";
export default {
  name: "Anim",
  props: {
    loop: {
      type: Boolean,
      default: false
    },
    way: {
      type: String,
      default: "up",
      validator: v => {
        let c = [
          "up",
          "upbit",
          "scale",
          "scaleSpring",
          "fadein",
          "fadeout",
          "rotate"
        ];
        return rangeValidator(v, c, "Anim way");
      }
    }
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>
