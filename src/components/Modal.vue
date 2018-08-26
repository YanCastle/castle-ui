<template>  
    <div ref="content" class="hidden">
        <slot></slot>
    </div>
</template>
<script>
import { rangeValidator } from "../utils";
import { setInterval } from "timers";
const type = ["content", "html", "iframe", "loading", "tips"];
const modalConfig = {
  intl: false
};
export default {
  name: "Modal",
  props: {
    type: {
      type: String,
      default: "content",
      validator: v => {
        return rangeValidator(v, type, "Modal type");
      }
    },
    title: {
      type: String,
      default: "标题"
    },
    options: {
      type: Object,
      default: () => {
        return {};
      }
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    //组件被加载的时候触发
    this.$nextTick(() => {
      // layui.$(this.$refs.content).hide();
      if (this.value) {
        this.open();
      }
    });
  },
  created() {
    // 组件被创建的时候触发
    window.modalid++;
  },
  watch: {
    value(n) {
      if (n) {
        this.open();
      } else {
        if (this.layerIndex > -1) {
          layui.layer.close(this.layerIndex);
          this.layerIndex = -1;
        }
      }
    }
  },
  data() {
    return {
      layerIndex: -1
    };
  },
  computed: {
    classes() {
      // return this.value ? "" : "hidden";
      // return [];
    }
  },
  methods: {
    open() {
      this.show();
    },
    show() {
      layui.$(this.$refs.content).show();
      this.layerIndex = layui.layer.open(
        Object.assign(
          {
            title: this.title,
            content: layui.$(this.$refs.content),
            type: type.indexOf(this.type) + 1,
            shade: 0,
            success: () => {
              layui.$(".layui-layer-content");
              this.$emit("success", { dom: this.$refs.content });
            },
            end: () => {
              layui.$(this.$refs.content).hide();
              this.$emit("input", false);
              this.$emit("closed", { dom: this.$refs.content });
            }
          },
          this.options
        )
      );
    }
  }
};
</script>
<style scoped>
.hidden {
  display: none;
}
</style>