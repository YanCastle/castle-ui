<template>
    <li class="layui-timeline-item">
        <i class="layui-icon layui-timeline-axis">&#xe63f;</i>
        <div class="layui-timeline-content layui-text">
        <h3 class="layui-timeline-title">{{title}}</h3>
        <p>
           <slot></slot>
        </p>
        </div>
    </li>
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
  },
  components: {}
})
//TODO 更改类名
export default class TimelineItem extends Vue {
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
