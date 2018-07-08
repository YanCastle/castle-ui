<template>
   <textarea name="" :lay-verify="required?'required':''" :value="value" @change="change" :placeholder="placeholder" class="layui-textarea"></textarea>
</template>
<script>
export default {
  name: "Textarea",
  props: {
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "请输入"
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  created() {},
  methods: {
    change(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>
<style scoped>
</style>
