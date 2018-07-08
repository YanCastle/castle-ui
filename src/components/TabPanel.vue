<template>
    <div :class="classes"><slot></slot></div>    
</template>
<script>
export default {
  name: "TabPanel",
  props: {
    label: {
      type: String,
      default: "Title"
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.$parent.addPanel(this.label);
  },
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
