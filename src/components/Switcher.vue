<template>
    <input type="checkbox"  name="switcher" lay-skin="switch" :lay-text="text" :checked="value?'checked':''" @change="change">
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
declare let layui: any;
//TODO 导入搜索接口
//props的属性一般不需要再在类中进行初始化
@Component({
  props: {
    // demo:{
    //     type:String,
    //     default:()=>{return {}}
    // }
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    text: {
      type: String,
      default: "ON|OFF",
      validator: (v: any) => {
        return v.split("|").length == 2;
      }
    }
  },
  components: {}
})
//TODO 更改类名
export default class Switcher extends Vue {
  value: boolean | any;
  change(event: any) {
    this.$emit("input", event.target.checked);
    this.$emit("change", { event });
  }
  mounted() {
    //组件被加载的时候触发
  }
  created() {
    // 组件被创建的时候触发
    this.$watch("value", () => {
      this.$nextTick(() => {
        layui.form.render("checkbox");
      });
    });
  }
}
</script>
<style scoped>
</style>
