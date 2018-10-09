<template>
    <div>
      <label v-for="(v,k) in checkboxs" :key="k" :for="getId(v)">
        <input type="checkbox"
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
  name: "CheckboxGroup",
  props: {
    name: {
      type: String,
      default: () => {
        return "checkbox" + ++config.index;
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
              `CheckboxGroup need a Object or Array,which contains value and title properties`
            );
            return false;
          }
        }
        return true;
      }
    }
  },
  computed: {
    checkboxs() {
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
      let css = ["mgc"];
      if (v.type) {
        rangeValidator(v.type, types, v.title);
        css.push("mgc-" + v.type);
      }
      if (v.size) {
        rangeValidator(v.size, size, v.size);
        css.push("mgc-" + v.size);
      }
      return css;
    },
    change(event) {
      let value = Object.assign(this.value);
      if (event.target.checked) {
        //选中
        value.push(event.target.value);
        this.$emit("input", value);
      } else {
        // 取消
        let index = value.indexOf(event.target.value);
        if (index > -1) {
          value.splice(index, 1);
        }
        this.$emit("input", value);
      }
    }
  },
  mounted() {
    //组件被加载的时候触发
  }
};
</script>
<style scoped>
</style>
