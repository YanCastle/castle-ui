<template>
    <button :class="classes">
        <slot></slot>
    </button>
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
      default: "",
      validator: v => {
        return (
          ["", "primary", "normal", "warn", "danger", "disabled"].indexOf(v) >
          -1
        );
      }
    },
    size: {
      type: String,
      default: "",
      validator: v => {
        return ["", "lg", "sm", "xs"].indexOf(v) > -1;
      }
    },
    radius: {
      type: Boolean,
      default: false
    }
  },
  components: {}
})
//TODO 更改类名
export default class Button extends Vue {
  type: string;
  size: string;
  radius: string;
  get classes() {
    let c = ["layui-btn"];
    if (this.type) {
      c.push("layui-btn-" + this.type);
    }
    if (this.size) {
      c.push(`layui-btn-${this.size}`);
    }
    if (this.radius) {
      c.push("layui-btn-radius");
    }
    return c;
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
