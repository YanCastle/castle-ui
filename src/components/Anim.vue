<template>
    <div :class="['layui-anim',`layui-anim-${way}`]">
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
    loop: {
      type: Boolean,
      default: false
    },
    way: {
      type: String,
      default: "up",
      validator: v => {
        return (
          [
            "up",
            "upbit",
            "scale",
            "scaleSpring",
            "fadein",
            "fadeout",
            "rotate"
          ].indexOf(v) > -1
        );
      }
    }
  },
  components: {}
})
//TODO 更改类名
export default class Anim extends Vue {
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
