<template>
    <select :name="name" v-model="selectvalue" @change="change">
        <!-- <option v-for="(v,k) in options" :value="k" :key="k">{{v.text}}</option> -->
        <slot></slot>
    </select>
</template>
<script>
export default {
  name: "Select",
  props: {
    value: {
      type: [String, Number]
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
    }
  },
  computed: {},
  created() {},
  methods: {
    render() {
      if (window.layui) {
        this.selectvalue = this.value;
        layui.form.render("select");
      } else {
        setTimeout(() => {
          this.render();
        }, 100);
      }
    },
    change() {
      this.$emit("input", this.selectvalue);
    }
  }
};
</script>
<style scoped>
</style>
