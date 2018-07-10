<template>
    <div class="layui-tab">
        <ul class="layui-tab-title">
          <li v-for="(v,k) in titles" :key="k">{{v.title}}</li>
        </ul>
        <div class="layui-tab-content">
          <slot></slot>
        </div>
    </div>
</template>
<script>
import { rangeValidator } from "../utils";
export default {
  name: "Tabs",
  props: {},
  data() {
    return {
      titles: []
    };
  },

  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        layui.element.render("tab");
      }, 100);
    });
  },
  computed: {},
  created() {},
  methods: {
    addPanel(title) {
      this.titles.push({
        title
      });
      layui.element.render("tab");
    }
  }
};
</script>
<style scoped>
</style>
