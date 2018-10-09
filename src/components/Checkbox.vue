<template>
    <label :for="id">
        <input :id="id" type="checkbox" :class="classes" @change="change" :name="name" :checked="checked">
    </label>
</template>
<script>
import { rangeValidator, types, size } from "../utils";
const config = {
  index: 0
};
export default {
  name: "Checkbox",
  props: {
    value: Array,
    type: {
      type: String,
      default: "",
      validator: v => {
        return rangeValidator(v, types, "Checkbox`s type");
      }
    },
    size: {
      type: String,
      default: "",
      validator: v => {
        return rangeValidator(v, size, "Checkbox`s size");
      }
    },
    name: {
      type: String,
      default: "checkbox"
    },
    checked: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  watch: {},
  methods: {
    change(event) {
      this.$emit("input", event.target.value);
    }
  },
  computed: {
    classes() {
      let css = ["mgc"];
      if (this.size) {
        css.push("mgc-" + this.size);
      }
      if (this.type) {
        css.push("mgc-" + this.type);
      }
      return css;
    },
    id() {
      if (this.id) {
        return this.id;
      }
      config.index++;
      return this.name + config.index;
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
</style>
