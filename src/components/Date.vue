<template>
    <input type="text" class="layui-input" :id="id">
</template>
<script>
import { rangeValidator } from "../utils";
const DateConfig = {
  index: 0
};
export default {
  name: "Date",
  props: {
    //   选择器类型
    type: {
      type: String,
      default: "date",
      validator: v => {
        return rangeValidator(
          v,
          ["year", "month", "date", "time", "datetime"],
          "Date type"
        );
      }
    },
    //分隔符
    range: {
      type: [String, Boolean],
      default: false,
      validator: v => {
        return "boolean" == v || v.length > 0;
      }
    },
    format: {
      type: String,
      default: "yyyy-MM-dd HH:mm:ss"
    },
    value: {
      type: Date | String,
      default: new Date()
    },
    init: {
      type: Boolean,
      default: true
    },
    max: {
      type: Date | String,
      default: ""
    },
    min: {
      type: Date | String,
      default: ""
    },
    options: {
      type: {},
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      id: "date" + DateConfig.index
    };
  },
  watch: {
    value() {
      this.render();
    }
  },
  methods: {
    render() {
      if (layui) {
        layui.laydate.render(
          Object.assign({
            elem: "#" + this.id,
            value: this.value,
            max: this.max,
            min: this.min,
            isInitValue: this.init,
            range: this.range,
            type: this.type,
            value: this.value
          })
        );
      } else {
        setTimeout(() => {
          this.render();
        }, 50);
      }
    }
  },
  computed: {},
  created() {
    DateConfig.index++;
  },
  mounted() {
    this.$nextTick(() => {
      this.render();
    });
  }
};
</script>
<style scoped>
</style>
