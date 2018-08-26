<template>
    <div class="layui-card" @click="click">
        <div class="layui-card-header" v-html="title"></div>
        <div class="layui-card-body">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String
    }
  },
  methods: {
    click(e) {
      this.$emit("click", e);
    }
  }
};
</script>
<style scoped>
</style>
