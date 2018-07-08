<template>
    <div>
        <input type="checkbox" :lay-skin="skin" :name="name" v-for="(v,k) in checkboxs" :key="k" :checked="v.checked" @change="change(v.value,$event)" :value="k" :title="v.title">
    </div>
</template>
<script>
export default {
  name: "CheckboxGroup",
  props: {
    name: {
      type: String,
      default: ""
    },
    value: {
      type: Array,
      default: []
    },
    skin: {
      type: String,
      default: ""
    },
    options: {
      type: [Object, Array],
      default: [],
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
        o.checked = this.value.indexOf(e.value) > -1;
        options.push(o);
      });
      if (window["layui"]) layui.form.render("checkbox");
      return options;
    }
  },
  methods: {
    change(v, event) {
      if (event.target.checked) {
        //选中
        if (this.value.indexOf(v) == -1) {
          this.$emit("input", this.value.concat([v]));
        }
      } else {
        //取消选中
        let i = this.value.indexOf(v);
        if (i != -1) {
          let c = Object.assign(this.value);
          c.splice(i, 1);
          this.$emit("input", c);
        }
      }
      this.$emit("change", { data: v, event });
    }
  },
  mounted() {
    //组件被加载的时候触发
    this.$nextTick(() => {
      if (window["layui"]) layui.form.render("checkbox");
    });
  }
};
</script>
<style scoped>
</style>
