<template>
    <span :class="classes">
        <slot></slot>
    </span>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

//TODO 导入搜索接口
//props的属性一般不需要再在类中进行初始化
@Component({
  props: {
    // demo:{
    //     type:String,
    //     default:()=>{return {}}
    // }
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
        return (
          ["", "orange", "green", "cyan", "blue", "black", "gray"].indexOf(v) >
          -1
        );
      }
    }
  },
  components: {}
})
//TODO 更改类名
export default class Badge extends Vue {
  type: string | any;
  color: string | any;
  get classes() {
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
  mounted() {
    //组件被加载的时候触发
  }
  created() {
    // 组件被创建的时候触发
  }
}
</script>
<style scoped>
</style>
