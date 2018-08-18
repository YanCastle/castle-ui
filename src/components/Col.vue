<template>
    <div :class="classes" @click="click">
        <slot></slot>
    </div>
</template>
<script>
import { rangeValidator } from "../utils";
export default {
  name: "Col",
  props: {
    span: {
      type: [Number, String],
      default: 0
    },
    lg: {
      type: [Number, String],
      default: 0
    },
    md: {
      type: [Number, String],
      default: 0
    },
    sm: {
      type: [Number, String],
      default: 0
    },
    xs: {
      type: [Number, String],
      default: 0
    },
    color: {
      type: String,
      default: "",
      validator: v => {
        return rangeValidator(
          v,
          ["", "red", "orange", "green", "cyan", "blue", "black"],
          "Col color"
        );
      }
    },
    space: {
      type: [Number, String],
      default: 0,
      validator: value => {
        try {
          return Math.abs(Number(value)) < 30;
        } catch (error) {}
        return false;
      }
    },
    offset: {
      type: [Number, String],
      default: 0
    },
    "offset-lg": {
      type: [Number, String],
      default: 0
    },
    "offset-md": {
      type: [Number, String],
      default: 0
    },
    "offset-xs": {
      type: [Number, String],
      default: 0
    },
    "offset-sm": {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    classes() {
      let c = [];
      c.push(`layui-col-xs${this.xs > 0 ? this.xs : this.span}`);
      c.push(`layui-col-md${this.md > 0 ? this.md : this.span}`);
      c.push(`layui-col-lg${this.lg > 0 ? this.lg : this.span}`);
      c.push(`layui-col-sm${this.sm > 0 ? this.sm : this.span}`);
      if (this.color) {
        c.push(`layui-bg-${this.color}`);
      }
      if (this.space > 0) {
        c.push(`layui-col-space${this.space}`);
      }
      if (this.offset > 0 || this["offset-xs"] > 0) {
        c.push(
          `layui-col-xs-offset${
            this["offset-xs"] > 0 ? this["offset-xs"] : this.offset
          }`
        );
      }
      if (this.offset > 0 || this["offset-sm"] > 0) {
        c.push(
          `layui-col-sm-offset${
            this["offset-sm"] > 0 ? this["offset-sm"] : this.offset
          }`
        );
      }
      if (this.offset > 0 || this["offset-md"] > 0) {
        c.push(
          `layui-col-md-offset${
            this["offset-md"] > 0 ? this["offset-md"] : this.offset
          }`
        );
      }
      if (this.offset > 0 || this["offset-lg"] > 0) {
        c.push(
          `layui-col-lg-offset${
            this["offset-lg"] > 0 ? this["offset-lg"] : this.offset
          }`
        );
      }
      return c;
    }
  },
  methods:{    
    click(e){
      this.$emit('click',e)
    }
  }
};
</script>
<style scoped>
</style>
