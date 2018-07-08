<template>
    <input type="password" class="layui-input" v-bind="attr">    
</template>
<script>
export default {
  name: "InputPassword",
  props: {
    required: {
      type: Boolean,
      default: false
    },
    verify: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    autocomplete: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    attr() {
      let p = {};
      if (this.required) {
        p.required = "required";
      }
      if (this.verify) {
        p["lay-verify"] = this.verify;
      }
      if (this.placeholder) {
        p.placeholder = this.placeholder;
      }
      p.autocomplete = this.autocomplete ? "on" : "off";
      return p;
    }
  }
};
</script>
<style scoped>
</style>
