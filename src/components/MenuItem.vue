<template>
    <dd>
        <a :href="href" @click="click">{{title}}</a>
    </dd>    
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
    title: {
      type: String,
      default: "Menu"
    },
    href: {
      type: String,
      default: "javascript:;"
    },
    route: {
      type: String,
      default: ""
    }
  },
  components: {}
})
//TODO 更改类名
export default class MenuItem extends Vue {
  title: string | any;
  href: string | any;
  route: string | any;
  click(event: any) {
    this.$emit("click", event);
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
