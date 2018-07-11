<template>
    <input type="text" ref="input" class="layui-input" v-bind="attr" @input="handleInput">    
</template>
<script>
export default {
  name: "Input",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ""
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
      if (this.name) {
        p.name = this.name;
      }
      p.autocomplete = this.autocomplete ? "on" : "off";
      return p;
    }
  },
  mounted() {
    this.$refs.input.value = this.value;
  },
  watch: {
    value() {
      this.$refs.input.value = this.value;
    }
  },
  methods: {
    handleInput(event) {
      let value = event.target.value;
      this.$emit("input", value);
    }
  }
};
</script>
<style scoped>
</style>
