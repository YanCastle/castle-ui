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
      default: 12
    },
    md: {
      type: [Number, String],
      default: 12
    },
    sm: {
      type: [Number, String],
      default: 12
    },
    xs: {
      type: [Number, String],
      default: 12
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
  span: number;
  lg: number;
  md: number;
  xs: number;
  sm: number;
  space: number;
  offset: number;
  "offset-lg": number;
  "offset-md": number;
  "offset-sm": number;
  "offset-xs": number;
  get classes() {
    let c = [];
    ["xs", "lg", "md", "xs"].forEach(v => {
      c.push(`layui-col-${v}${this[v]}`);
      if (Number(this[`offset-${v}`]) > 0) {
        c.push(`layui-col-${v}-offset${this[v]}`);
      }
    });
    if (Number(this.space)) {
      c.push(`layui-col-space${this.space}`);
    }
    return c;
  }
}
</script>
<style scoped>
</style>
