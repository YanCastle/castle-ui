<template>
    <input type="checkbox"  name="switcher" lay-filter="switcher" lay-skin="switch" :lay-text="text" :checked="value?'checked':''" @change="change">
    <!-- <input type="checkbox" name="switch" lay-skin="switch"> -->
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
  mounted() {
    this.$nextTick(() => {
      this.render();
    });
  },
  computed: {},
  created() {
    // 组件被创建的时候触发
  },
  watch: {
    value() {
      this.render();
    }
  },
  methods: {
    render() {
      if (window.layui) {
        layui.form.render();
      } else {
        setTimeout(() => {
          this.render();
        }, 50);
      }
    },
    change(event) {
      this.$emit("input", event.target.checked);
      this.$emit("change", { event });
    }
  }
};
</script>
<style scoped>
</style>
