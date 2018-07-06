<template>
    <input type="text" class="layui-input" v-bind="attr" @input="handleInput">    
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
      type: [String, Number],
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ""
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
export default class Input extends Vue {
  //   _value: string | any = "";
  required: boolean | any;
  autocomplete: boolean | any;
  verify: string | any;
  placeholder: string | any;
  name: string | any;
  value: string | any;
  handleInput(event: any) {
    let value = event.target.value;
    this.$emit("input", value);
  }
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
    if (this.name) {
      p.name = this.name;
    }
    p.autocomplete = this.autocomplete ? "on" : "off";
    return p;
  }
  mounted() {
    //组件被加载的时候触发
  }
  created() {
    // 组件被创建的时候触发
    this.$watch("value", () => {
      //   if (this.value != this._value) {
      //     this._value = this.value;
      //   }
    });
  }
}
</script>
<style scoped>
</style>
