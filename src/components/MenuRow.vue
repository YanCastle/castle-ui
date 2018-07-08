<template>
    <li class="layui-nav-item">
        <a href="javascript:;">{{title}}</a>
        <dl class="layui-nav-child">            
            <slot></slot>
        </dl>
    </li>
</template>
<script>
export default {
  name: "MenuRow",
  props: {
    // demo:{
    //     type:String,
    //     default:()=>{return {}}
    // }
    title: {
      type: String,
      default: "Menu"
    }
  }
};
</script>
<style scoped>
</style>
