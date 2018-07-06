<template>
    <input type="radio" :name="name" :title="title" :value="value">
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
    name: String,
    title: String,
    value: String
  },
  components: {}
})
//TODO 更改类名
export default class Radio extends Vue {
  mounted() {
    //组件被加载的时候触发

    this.$nextTick(() => {
      layui.form.render("radio");
    });
  }
  created() {
    // 组件被创建的时候触发
  }
}
</script>
<style scoped>
</style>
