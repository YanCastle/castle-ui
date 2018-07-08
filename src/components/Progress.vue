<template>
    <div :class="classes" :lay-showpercent="showpercent" :lay-filter="name">
        <div class="layui-process-bar" lay-percent="0%"></div>
    </div>
</template>
<script>
export default {
  name: "Progress",
  props: {
    percent: {
      type: [Number, String],
      default: 50
    },
    big: {
      type: Boolean,
      default: true
    },
    name: {
      type: String,
      default: "process"
    },
    showpercent: {
      type: Boolean,
      default: true
    }
  },
  methods: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
    //组件被加载的时候触发
    this.$nextTick(() => {
      if (window["layui"])
        layui.element.progress(this.name, `${this.percent}%`);
    });
  },
  computed: {
    classes() {
      let c = ["layui-progress"];
      if (this.big) {
        c.push("layui-progress-big");
      }
      return c;
    }
  }
};
</script>
<style scoped>
</style>
