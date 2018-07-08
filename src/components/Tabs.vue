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
  props: {
    titles: [Array, Object],
    validator: v => {
      try {
        for (let o of v) {
          if (!o.title || o.title.length == 0) {
            console.error('Tabs titles shoud contain title,[{title:"a"}]');
            return false;
          }
        }
      } catch (error) {}
      return true;
    }
  },
  data() {},
  mounted() {},
  computed: {},
  created() {},
  methods: {},
  TabPanel
};
</script>
<style scoped>
</style>
