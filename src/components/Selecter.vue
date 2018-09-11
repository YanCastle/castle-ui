<template>
    <select :name="name" v-model="selectvalue" :lay-filter="selectfilter" @change="change">
        <option v-for="(v,k) in optionResult" :value="v.value" :key="k" :selected="v.selected?'selected':''" :disabled="v.disabled?'disabled':''">{{v.title}}</option>
    </select>
</template>
<script>
import { find } from "../utils";
const selectConfig = {
  index: 0
};
export default {
  name: "Select",
  props: {
    value: {
      type: [String, Number, Array, Object]
    },
    verify: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: () => {
        return `selecter${selectConfig.index}`;
      }
    },
    options: {
      type: [Array]
      // validator:(v)=>{

      // }
    }
  },
  data() {
    selectConfig.index++;
    return {
      selectvalue: "",
      selectfilter: "select" + selectConfig.index,
      d: Date.now()
    };
  },
  mounted() {
    //组件被加载的时候触发
    this.selectvalue = this.value;
    this.$nextTick(() => {
      layui.form.render("select");
    });
  },
  watch: {},
  computed: {
    optionResult() {
      let options = [];
      this.options.forEach(v => {
        options.push(
          Object.assign(
            {
              title: "未设置名称",
              value: "",
              disabled: false,
              selected: this.value.indexOf(v.value) !== -1
            },
            v
          )
        );
      });
      this.$nextTick(() => {
        layui.form.render("select");
      });
      return options;
    }
  },
  created() {},
  methods: {
    change(event) {
      this.$emit("input", event.target.value);
      this.$emit("change", event.target.value);
    }
  }
};
</script>
<style scoped>
</style>
