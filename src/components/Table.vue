<template>
    <table class="layui-table" v-bind="attr"></table>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

// http://www.layui.com/doc/element/table.html
//props的属性一般不需要再在类中进行初始化
@Component({
  props: {
    // demo:{
    //     type:String,
    //     default:()=>{return {}}
    // }
    size: {
      type: String,
      default: "",
      validator: v => {
        return ["", "sm", "lg"].indexOf(v) > -1;
      }
    },
    skin: {
      type: String,
      default: "",
      validator: v => {
        return ["", "line", "row", "nob"].indexOf(v) > -1;
      }
    },
    even: {
      type: Boolean,
      default: true
    }
  },
  components: {}
})
//TODO 更改类名
export default class Table extends Vue {
  size: string;
  skin: string;
  even: boolean;
  get attr() {
    let a = {};
    if (this.even) {
      a["lay-even"] = "lay-even";
    }
    if (this.size) {
      a["lay-size"] = this.size;
    }
    if (this.skin) {
      a["lay-skin"] = this.skin;
    }
    return a;
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
