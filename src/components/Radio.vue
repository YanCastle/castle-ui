<template>
    <input ref="radio" type="radio" :name="name" :title="title" :checked="value==val?'checked':''" @change="change">
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
    name: {
      type: [String, Number],
      default: "Radio"
    },
    title: {
      type: [String, Number],
      default: "Radio"
    },
    value: {
      type: [String, Number],
      default: "Radio"
    },
    val: {
      type: [String, Number],
      default: "Radio"
    }
  },
  components: {}
})
//TODO 更改类名
export default class Radio extends Vue {
  val: any;
  mounted() {
    //组件被加载的时候触发
    this.$nextTick(() => {
      layui.form.render("radio");
    });
  }
  change(event: any) {
    this.$emit("input", this.val);
  }
  created() {
    // 组件被创建的时候触发
    this.$watch("value", () => {
      this.$nextTick(() => {
        layui.form.render("radio");
      });
    });
  }
}
</script>
<style scoped>
</style>
