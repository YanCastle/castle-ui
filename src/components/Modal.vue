<template>
    <div style="display:none;">    
        <div ref="content">
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { rangeValidator } from "../utils";
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
    type: {
      type: String,
      default: "content",
      validator: v => {
        return rangeValidator(
          v,
          ["content", "html", "iframe", "loading", "tips"],
          "Modal type"
        );
      }
    },
    title: {
      type: String,
      default: "标题"
    },
    options: {
      type: Object,
      default: () => {
        return {};
      }
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  components: {}
})
//TODO 更改类名
export default class Modal extends Vue {
  value: boolean | any;
  title: string | any;
  options: any;

  mounted() {
    //组件被加载的时候触发
    this.$nextTick(() => {
      if (this.value) {
        this.open();
      }
    });
  }
  created() {
    // 组件被创建的时候触发
    this.$watch("value", n => {
      if (n) {
        this.open();
      } else {
        if (this.layerIndex > -1) {
          layui.layer.close(this.layerIndex);
          this.layerIndex = -1;
        }
      }
    });
  }
  open() {
    if (window.layui) {
      this.show();
    } else {
      setTimeout(this.open, 100);
    }
  }
  layerIndex: number = -1;
  show() {
    let content: any = this.$refs.content;
    this.layerIndex = layui.layer.open(
      Object.assign(this.options, {
        title: this.title,
        content: content.innerHTML,
        end: () => {
          this.$emit("input", false);
        }
      })
    );
  }
}
</script>
<style scoped>
</style>
