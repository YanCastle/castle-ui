<template>
    <div style="display:none;">    
        <div ref="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
  name: "Modal",
  props: {
    type: {
      type: String,
      default: "content",
      validator: v => {
        return rangeValidator(
          v,
          ["content", "html", "iframe", "loading", "tips"],
          "Modal type"
        );
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
      if (this.value) {
        this.open();
      }
    });
  },
  created() {
    // 组件被创建的时候触发
    this.$watch("value", n => {
      if (n) {
        this.open();
      } else {
        if (this.layerIndex > -1) {
          layui.layer.close(this.layerIndex);
          this.layerIndex = -1;
        }
      }
    });
  },
  data() {
    return {
      layerIndex: -1
    };
  },
  methods: {
    open() {
      if (window.layui) {
        this.show();
      } else {
        setTimeout(this.open, 100);
      }
    },
    show() {
      let content = this.$refs.content;
      this.layerIndex = layui.layer.open(
        Object.assign(this.options, {
          title: this.title,
          content: content.innerHTML,
          end: () => {
            this.$emit("input", false);
          }
        })
      );
    }
  }
};
</script>
<style scoped>
</style>
