<template>
    <div :class="classes" :lay-showpercent="showpercent" :lay-filter="name">
        <div class="layui-process-bar" lay-percent="0%"></div>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
declare let layui: any;
declare let window: any;
//TODO 导入搜索接口
//props的属性一般不需要再在类中进行初始化
@Component({
  props: {
    // demo:{
    //     type:String,
    //     default:()=>{return {}}
    // }
    percent: {
      type: [Number, String],
      default: 50
    },
    big: {
      type: Boolean,
      default: true
    },
    name: {
      type: String,
      default: "process"
    },
    showpercent: {
      type: Boolean,
      default: true
    }
  },
  components: {}
})
//TODO 更改类名
export default class Progress extends Vue {
  big: boolean | any;
  name: string | any;
  percent: string | any;
  get classes() {
    let c = ["layui-progress"];
    if (this.big) {
      c.push("layui-progress-big");
    }
    return c;
  }
  mounted() {
    //组件被加载的时候触发
    this.$nextTick(() => {
      if (window["layui"])
        layui.element.progress(this.name, `${this.percent}%`);
    });
  }
  created() {
    // 组件被创建的时候触发
  }
}
</script>
<style scoped>
</style>
