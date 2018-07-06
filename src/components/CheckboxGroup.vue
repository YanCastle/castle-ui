<template>
    <div>
        <input type="checkbox" :lay-skin="skin" :name="name" v-for="(v,k) in checkboxs" :key="k" :checked="v.checked" @change="change(v.value,$event)" :value="k" :title="v.title">
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import * as _ from "lodash";
//TODO 导入搜索接口
//props的属性一般不需要再在类中进行初始化
declare let layui: any;
@Component({
  props: {
    // demo:{
    //     type:String,
    //     default:()=>{return {}}
    // }
    name: {
      type: String,
      default: ""
    },
    value: {
      type: Array,
      default: []
    },
    skin: {
      type: String,
      default: ""
    },
    options: {
      type: [Object, Array],
      default: [],
      validator: (v: any) => {
        for (let o of v) {
          if (!o.value || !o.title) {
            console.warn(
              `CheckboxGroup need a Object or Array,which contains value and title properties`
            );
            return false;
          }
        }
        return true;
      }
    }
  },
  components: {}
})
//TODO 更改类名
export default class CheckboxGroup extends Vue {
  name: string | any;
  options: any;
  value: any;
  get checkboxs() {
    let options: any = [];
    this.options.forEach((e: any) => {
      let o = Object.assign(e);
      o.checked = this.value.indexOf(e.value) > -1;
      options.push(o);
    });
    return options;
  }
  change(v: any, event: any) {
    if (event.target.checked) {
      //选中
      if (this.value.indexOf(v) == -1) {
        this.$emit("input", this.value.concat([v]));
      }
    } else {
      //取消选中
      let i = this.value.indexOf(v);
      if (i != -1) {
        let c = Object.assign(this.value);
        c.splice(i, 1);
        this.$emit("input", c);
      }
    }
    this.$emit("change", { data: v, event });
  }
  mounted() {
    //组件被加载的时候触发
    this.$nextTick(() => {
      layui.form.render("checkbox");
    });
  }
}
</script>
<style scoped>
</style>
