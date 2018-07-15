<template>
    <i :class="classes"></i>
</template>
<script>
import { config } from "../";
export default {
  name: "Iconfont",
  props: {
    icon: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  watch: {},
  methods: {},
  computed: {
    classes() {
      return [config.iconfont, this.icon];
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
</style>
