<template>
    <div>
      <label v-for="(v,k) in radios" :key="k" :for="getId(v)">
        <input type="radio"
        :name="name" 
        :id="getId(v)"
        :checked="v.checked" 
        @change="change" 
        :value="v.value"
        :title="v.title"
        :class="getClass(v)"
      >
      {{v.title}}
      </label>
    </div>
</template>
<script>
import { rangeValidator, types, size } from "../utils";
const config = {
  index: 0
};
export default {
  name: "RadioGroup",
  props: {
    name: {
      type: String,
      default: () => {
        return "radio" + ++config.index;
      }
    },
    value: {
      type: Array,
      default: () => {
        return [];
      }
    },
    skin: {
      type: String,
      default: ""
    },
    options: {
      type: [Object, Array],
      default: () => {
        return [];
      },
      validator: v => {
        for (let o of v) {
          if (!o.value || !o.title) {
            console.warn(
              `radioGroup need a Object or Array,which contains value and title properties`
            );
            return false;
          }
        }
        return true;
      }
    }
  },
  computed: {
    radios() {
      let options = [];
      this.options.forEach(e => {
        let o = Object.assign(e);
        o.value = o.value.toString();
        o.checked = this.value.indexOf(e.value) > -1;
        options.push(o);
      });
      return options;
    }
  },
  methods: {
    getId(v) {
      return this.name + v.value;
    },
    getClass(v) {
      let css = ["mgr"];
      if (v.type) {
        rangeValidator(v.type, types, v.title);
        css.push("mgr-" + v.type);
      }
      if (v.size) {
        rangeValidator(v.size, size, v.size);
        css.push("mgr-" + v.size);
      }
      if (v.class) {
        css.push(v.class);
      }
      return css;
    },
    change(event) {
      this.$emit("input", event.target.value);
    }
  },
  mounted() {
    //组件被加载的时候触发
  }
};
</script>
<style scoped>
</style>
