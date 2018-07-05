<template>
    <fieldset class="layui-elem-field">
        <legend>{{title}}</legend>
        <div class="layui-field-box">
            <slot></slot>
        </div>
    </fieldset>
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
    title: String
  },
  components: {}
})
//TODO 更改类名
export default class Fieldset extends Vue {
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
