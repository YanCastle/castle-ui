<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

//TODO 导入搜索接口
//props的属性一般不需要再在类中进行初始化
@Component({
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
        return (
          ["", "red", "orange", "green", "cyan", "blue", "black"].indexOf(v) >
          -1
        );
      }
    },
    space: {
      type: [Number, String],
      default: 0,
      validator: (value: any) => {
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
  components: {}
})
//TODO 更改类名
export default class Col extends Vue {
  span: number | any;
  lg: number | any;
  md: number | any;
  xs: number | any;
  sm: number | any;
  space: number | any;
  offset: number | any;
  "offset-lg": number | any;
  "offset-md": number | any;
  "offset-sm": number | any;
  "offset-xs": number | any;
  color: string | any;
  get classes() {
    let c: any = [];
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
}
</script>
<style scoped>
</style>
