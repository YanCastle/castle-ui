<template>
    <ul :class="classes" :lay-filter="filter">
      <slot></slot>
    </ul>
</template>
<script lang="ts">
// template 组件使用文档 https://sunshineji.github.io/amaze-vue-docs/#/close
import Vue from "vue";
import Component from "vue-class-component";
import { rangeValidator } from "../utils";
//TODO 导入搜索接口
//props的属性一般不需要再在类中进行初始化
declare let layui: any;
declare let window: any;
@Component({
  props: {
    // demo:{
    //     type:String,
    //     default:()=>{return {}}
    // }
    type: {
      type: String,
      validator: (v: any) => {
        return rangeValidator(v, ["", "side", "tree"], "Menu type");
      }
    },
    filter: {
      type: String,
      default: "menu"
    }
  },
  components: {}
})
//TODO 更改类名
export default class Menu extends Vue {
  type: string | any;
  filter: string | any;
  get classes() {
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
  created() {
    // 组件被创建的时候触发
  }
}
</script>
<style scoped>
</style>
