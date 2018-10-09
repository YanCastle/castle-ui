<template>
    <input ref="radio" type="radio" :name="name" :title="title" :class="classes" :checked="value==val?'checked':''" @change="change">
</template>
<script>
import { rangeValidator, types, size } from "../utils";
export default {
  name: "Radio",
  props: {
    name: {
      type: [String, Number],
      default: "Radio"
    },
    title: {
      type: [String, Number],
      default: "Radio"
    },
    type: {
      type: String,
      default: "",
      validator: v => {
        return rangeValidator(v, types, "Checkbox`s type");
      }
    },
    size: {
      type: String,
      default: "",
      validator: v => {
        return rangeValidator(v, size, "Checkbox`s size");
      }
    },
    value: {
      type: [String, Number],
      default: "Radio"
    },
    val: {
      type: [String, Number],
      default: "0"
    }
  },
  data() {
    return {
      radiovalue: ""
    };
  },
  mounted() {
    //组件被加载的时候触发
    this.radiovalue = this.value;
    // this.$nextTick(() => {
    //   layui.form.render("radio");
    // });
  },
  created() {},
  computed: {
    classes() {
      let css = ["mgr"];
      if (this.size) {
        css.push("mgr-" + this.size);
      }
      if (this.type) {
        css.push("mgr-" + this.type);
      }
      return css;
    }
  },
  watch: {
    value() {
      this.radiovalue = this.value;
      // this.$nextTick(() => {
      //   layui.form.render("radio");
      // });
    }
  },
  methods: {
    change(event) {
      this.$emit("input", this.val);
    }
  }
};
</script>
<style scoped>
</style>
