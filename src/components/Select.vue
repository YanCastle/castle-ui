<template>
    <select :name="name">
        <slot></slot>
    </select>
</template>
<script>
export default {
  name: "Select",
  props: {
    value: Object,
    verify: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: "name"
    }
  },
  data() {
    return {};
  },
  mounted() {
    //组件被加载的时候触发
    this.$nextTick(() => {
      if (window["layui"]) layui.form.render("select");
    });
  },
  computed: {},
  created() {},
  methods: {}
};
</script>
<style scoped>
</style>
