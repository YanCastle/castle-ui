<template>
    <li class="layui-timeline-item">
        <i class="layui-icon layui-timeline-axis">&#xe63f;</i>
        <div class="layui-timeline-content layui-text">
        <h3 class="layui-timeline-title">{{title}}</h3>
        <p>
           <slot></slot>
        </p>
        </div>
    </li>
</template>
<script>
export default {
  name: "TimelineItem",
  props: {},
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  created() {},
  methods: {}
};
</script>
<style scoped>
</style>
