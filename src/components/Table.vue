<template>
    <table class="layui-table" v-bind="attr"></table>
</template>
<script>
export default {
  name: "Table",
  props: {
    size: {
      type: String,
      default: "",
      validator: v => {
        return ["", "sm", "lg"].indexOf(v) > -1;
      }
    },
    skin: {
      type: String,
      default: "",
      validator: v => {
        return ["", "line", "row", "nob"].indexOf(v) > -1;
      }
    },
    even: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {
    attr() {
      let a = {};
      if (this.even) {
        a["lay-even"] = "lay-even";
      }
      if (this.size) {
        a["lay-size"] = this.size;
      }
      if (this.skin) {
        a["lay-skin"] = this.skin;
      }
      return a;
    }
  },
  created() {},
  methods: {}
};
</script>
<style scoped>
</style>
