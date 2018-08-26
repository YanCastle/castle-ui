<template>
    <select :name="name" v-model="selectvalue" :lay-filter="selectfilter" @change="change">
        <slot></slot>
    </select>
</template>
<script>
import { find } from "../utils";
import { setTimeout } from "timers";
const selectConfig = {
  index: 0
};
export default {
  name: "Select",
  props: {
    value: {
      type: [String, Number, Array, Object]
    },
    verify: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: () => {
        return `selecter${selectConfig.index}`;
      }
    },
    options: {
      type: [Object, Array]
      // validator:(v)=>{

      // }
    }
  },
  data() {
    selectConfig.index++;
    return {
      selectvalue: "",
      selectfilter: "select" + selectConfig.index,
      d: Date.now()
    };
  },
  mounted() {
    //组件被加载的时候触发
    this.selectvalue = this.value;
    this.render();
  },
  watch: {
    value() {}
  },
  computed: {},
  created() {},
  methods: {
    render() {
      layui.form.render("select");
    },
    change(event) {
      this.$emit("input", event.target.value);
      this.$emit("change", event.target.value);
    }
  }
};
</script>
<style scoped>
</style>
