<template>
    <dd>
        <a :href="href" @click="click">{{title}}</a>
    </dd>    
</template>
<script>
export default {
  name: "MenuItem",
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
  methods: {
    click(event) {
      this.$emit("click", event);
    }
  }
};
</script>
<style scoped>
</style>
