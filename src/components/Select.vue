<template>
    <select :name="name" v-model="selectvalue" @change="change">
        <option v-for="(v,k) in options" :value="k" :selected="selectvalue==v" :key="k">{{v.text}}</option>
        <!-- <slot></slot> -->
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
      default: "name"
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
    this.render();
  },
  watch: {
    value() {
      this.render();
    },
    options() {
      console.log(this.options);
      this.$nextTick(() => {
        this.render();
      });
    }
  },
  computed: {},
  created() {},
  methods: {
    render() {
      if (window.layui) {
        // setTimeout(() => {
        this.layui();
        // }, 50);
      } else {
        setTimeout(() => {
          this.render();
        }, 100);
      }
    },
    layui() {
      console.log(this.selectfilter, "layui");
      this.selectvalue = find(this.options, this.value);
      layui.form.render("select");
    },
    change() {
      this.$emit(
        "input",
        this.options[this.selectvalue]
          ? this.options[this.selectvalue].value
          : ""
      );
      this.$emit(
        "change",
        this.options[this.selectvalue]
          ? this.options[this.selectvalue].value
          : ""
      );
    }
  }
};
</script>
<style scoped>
</style>
