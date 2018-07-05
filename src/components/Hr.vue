<template>
    <hr :class="`layui-bg-${color}`">
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
export default class Hr extends Vue {
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
