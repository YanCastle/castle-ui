<template>
    <input type="password" class="layui-input" v-bind="attr" @input="handleInput">    
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
    },
    value: {
      type: [String],
      default: ""
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
