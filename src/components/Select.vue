<template>
    <select :name="name">
        <option v-for="(v,k) in options" :value="v.value" :key="k">{{v.text}}</option>
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
    return {};
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
        layui.form.render("select");
      } else {
        setTimeout(() => {
          this.render();
        }, 100);
      }
    }
  }
};
</script>
<style scoped>
</style>
