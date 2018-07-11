<template>
    <select :name="name" v-model="selectvalue" @change="change">
        <option v-for="(v,k) in options" :value="k" :key="k">{{v.text}}</option>
        <!-- <slot></slot> -->
    </select>
</template>
<script>
import { find } from "../utils";
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
    return {
      selectvalue: ""
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
    options: {
      deep: true,
      hander() {
        this.render();
      }
    }
  },
  computed: {},
  created() {},
  methods: {
    render() {
      if (window.layui) {
        this.selectvalue = find(this.options, this.value);
        layui.form.render("select");
      } else {
        setTimeout(() => {
          this.render();
        }, 100);
      }
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
