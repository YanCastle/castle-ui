<template>
    <input type="checkbox"  name="switcher" lay-skin="switch" :lay-text="text" :checked="value?'checked':''" @change="change">
</template>
<script>
export default {
  name: "Switcher",
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    text: {
      type: String,
      default: "ON|OFF",
      validator: v => {
        return v.split("|").length == 2;
      }
    }
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  created() {
    // 组件被创建的时候触发
    this.$watch("value", () => {
      this.$nextTick(() => {
        if (window["layui"]) layui.form.render("checkbox");
      });
    });
  },
  methods: {
    change(event) {
      this.$emit("input", event.target.checked);
      this.$emit("change", { event });
    }
  }
};
</script>
<style scoped>
</style>
