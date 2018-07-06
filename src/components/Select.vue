<template>
    <select :name="name">
        <slot></slot>
    </select>
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
    value: Object,
    verify: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: "name"
    }
  },
  components: {}
})
//TODO 更改类名
export default class Select extends Vue {
  value: any;
  //   get selected() {
  //     return this.value;
  //   }
  //   set selected(v) {
  //     this.$emit("input", v);
  //   }
  mounted() {
    //组件被加载的时候触发
    this.$nextTick(() => {
      layui.form.render("select");
    });
  }
  created() {
    // 组件被创建的时候触发
    this.$watch("selected", () => {
      //   this.$emit("input", this.selected);
    });
  }
}
</script>
<style scoped>
</style>
