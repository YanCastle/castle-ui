<template>
    <input type="password" class="layui-input" v-bind="attr">    
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
    required: {
      type: Boolean,
      default: false
    },
    verify: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    autocomplete: {
      type: Boolean,
      default: false
    }
  },
  components: {}
})
//TODO 更改类名
export default class InputPassword extends Vue {
  required: boolean | any;
  autocomplete: boolean | any;
  verify: string | any;
  placeholder: string | any;
  get attr() {
    let p: any = {};
    if (this.required) {
      p.required = "required";
    }
    if (this.verify) {
      p["lay-verify"] = this.verify;
    }
    if (this.placeholder) {
      p.placeholder = this.placeholder;
    }
    p.autocomplete = this.autocomplete ? "on" : "off";
    return p;
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
