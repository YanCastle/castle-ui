<template>
    <input ref="radio" type="radio" :name="name" :title="title" v-model="radiovalue" :checked="value==val?'checked':''" @change="change">
</template>
<script>
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
    this.$nextTick(() => {
      layui.form.render("radio");
    });
  },
  created() {},
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
