<template>  
    <div ref="content">
        <slot></slot>
    </div>
</template>
<script>
import { rangeValidator } from "../utils";
const type = ["content", "html", "iframe", "loading", "tips"];
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
      $(this.$refs.content).hide();
      if (this.value) {
        this.open();
      }
    });
  },
  created() {
    // 组件被创建的时候触发
    window.modalid++;
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
  computed: {
    classes() {
      // return this.value ? "" : "hidden";
      // return [];
    }
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
      //   let content = this.$refs.content;
      //   console.log($(this.$refs.content).parents);
      $(this.$refs.content).show();
      this.layerIndex = layui.layer.open(
        Object.assign(this.options, {
          title: this.title,
          content: $(this.$refs.content),
          type: type.indexOf(this.type) + 1,
          btn: [],
          shade: 0,
          success: () => {
            $(".layui-layer-content");
          },
          end: () => {
            $(this.$refs.content).hide();
            this.$emit("input", false);
          }
        })
      );
    }
  }
};
</script>
<style scoped>
.hidden {
  /* display: none; */
}
</style>
