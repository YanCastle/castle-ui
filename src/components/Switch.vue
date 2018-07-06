<template>
    <input type="checkbox" name="switch" lay-skin="switch" :checked="value" @change="change(v,$event)">
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
    value: {
      type: Boolean,
      default: true
    }
  },
  components: {}
})
//TODO 更改类名
export default class Switch extends Vue {
  value: boolean | any;
  change(v, event) {
    this.$emit("input", event.target.checked);
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
