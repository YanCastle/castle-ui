<template>
    <div :class="classes"><slot></slot></div>    
</template>
<script>
export default {
  name: "TabPanel",
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {
    classes() {
      let c = ["layui-tab-item"];
      if (this.show) {
        c.push("layui-show");
      }
      return c;
    }
  },
  created() {},
  methods: {}
};
</script>
<style scoped>
</style>
