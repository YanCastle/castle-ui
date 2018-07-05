<template>
    <div :class="classes" :lay-showPercent="show">
        <div class="layui-process-bar" :lay-percent="`${percent}%`"></div>
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
    percent: Number,
    big: {
      type: Boolean,
      default: true
    },
    showPercent: {
      type: Boolean,
      default: false
    }
  },
  components: {}
})
//TODO 更改类名
export default class Progress extends Vue {
  big: boolean;
  get classes() {
    let c = ["layui-progress"];
    if (this.big) {
      c.push("layui-progress-big");
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
