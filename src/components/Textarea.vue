<template>
   <textarea name="" :lay-verify="required?'required':''" :value="value" @change="change" :placeholder="placeholder" class="layui-textarea"></textarea>
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
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "请输入"
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  components: {}
})
//TODO 更改类名
export default class Textarea extends Vue {
  _value: string = "";
  value: string | any;
  change(event: any) {
    this.$emit("input", event.target.value);
  }
}
</script>
<style scoped>
</style>
