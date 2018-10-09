<template>
    <input type="checkbox"  name="switcher" :class="classes" :checked="value?'checked':''" @change="change">
    <!-- <input type="checkbox" name="switch" lay-skin="switch"> -->
</template>
<script>
import { rangeValidator, size } from "../utils";
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
    },
    size: {
      type: String,
      default: "",
      validator: v => {
        return rangeValidator(v, size, "Switcher");
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
  computed: {
    classes() {
      let css = ["mgc-switch"];
      if (this.size) {
        css.push(`mgc-${this.size}`);
      }
      return css;
    }
  },
  created() {
    // 组件被创建的时候触发
  },
  watch: {
    value() {
      this.render();
    }
  },
  methods: {
    render() {},
    change(event) {
      this.$emit("input", event.target.checked);
      this.$emit("change", { event });
    }
  }
};
</script>
<style scoped>
</style>
