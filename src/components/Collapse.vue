<template>
    <div class="layui-collapse" v-bind="attr">
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
    // demo:{
    //     type:String,
    //     default:()=>{return {}}
    // }
    Accordion: {
      type: Boolean,
      default: false
    }
  },
  components: {}
})
//TODO 更改类名
export default class Collapse extends Vue {
  Accordion: boolean;
  get attr() {
    let r = {};
    if (this.Accordion) {
      r["lay-accordion"] = "lay-accordion";
    }
    return r;
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
