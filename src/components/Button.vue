<template>
    <button :class="classes" @click="click" @blur="blur" @contextmenu="contextmenu" @dblclick="dblclick">
        <slot></slot>
    </button>
</template>
<script>
import { rangeValidator, types, types2layui, size } from "../utils";
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "",
      validator: v => {
        return rangeValidator(v, types, "Button type");
      }
    },
    size: {
      type: String,
      default: "",
      validator: v => {
        return rangeValidator(v, size, "Button size");
      }
    },
    radius: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      let c = ["layui-btn"];
      if (this.type) {
        c.push(
          "layui-btn-" +
            (types.indexOf(this.type) > -1
              ? types2layui[types.indexOf(this.type)]
              : this.type)
        );
      }
      if (this.size) {
        c.push(`layui-btn-${this.size}`);
      }
      if (this.radius) {
        c.push("layui-btn-radius");
      }
      return c;
    }
  },
  methods: {
    click(event) {
      this.$emit("click", event);
    },
    blur(event) {
      this.$emit("blur", event);
    },
    contextmenu(event) {
      this.$emit("contextmenu", event);
    },
    dblclick(event) {
      this.$emit("dblclick", event);
    }
  }
};
</script>
<style scoped>
</style>
