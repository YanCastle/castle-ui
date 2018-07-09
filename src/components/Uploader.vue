<template>
    <button type="button" class="layui-btn" :id="id">
        <i class="layui-icon">&#xe67c;</i>上传图片
    </button>
</template>
<script>
import { rangeValidator } from "../utils";
const uploaderConfig = {
  index: 0
};
export default {
  name: "Uploader",
  props: {
    url: {
      type: String,
      required: true,
      validator: v => {
        if (
          /http[s]{0,1}:\/\/[A-Za-z0-9\-]{1,}(\.[A-Za-z0-9\-]{1,}){1,}/.test(v)
        ) {
          return true;
        } else {
          console.error(
            "Uploader`s url is invald,need a http url,your value is " + v
          );
          return false;
        }
      }
    },
    method: {
      type: String,
      default: "post",
      validator: v => {
        return (
          rangeValidator(v.toLowerCase(), ["post", "put"]), "Uploader method"
        );
      }
    },
    data: {
      type: Object,
      default: () => {
        return {};
      }
    },
    headers: {
      type: Object,
      default: () => {
        return {};
      }
    },
    accept: {
      type: String,
      default: "images",
      validator: v => {
        return (
          rangeValidator(v, ["images", "file", "video", "audio"]),
          "Uploader accept"
        );
      }
    },
    acceptMime: {
      type: String,
      default: ""
      //   validator: v => {
      //     return v.test(/[a-z]{3,}\/[]/);
      //   }
    },
    exts: {
      type: String,
      default: ""
      //   validator: v => {
      //     return v.length==0||v;
      //   }
    },
    size: {
      type: Number,
      default: 0
      //   validator: v => {
      //     return v.length==0||v;
      //   }
    },
    field: {
      type: String,
      default: "upload"
      //   validator: v => {
      //     return v.length==0||v;
      //   }
    },
    multiple: {
      type: Boolean,
      default: false
      //   validator: v => {
      //     return v.length==0||v;
      //   }
    },
    number: {
      type: Number,
      default: 1
      //   validator: v => {
      //     return v.length==0||v;
      //   }
    },
    drug: {
      type: Boolean,
      default: true
      //   validator: v => {
      //     return v.length==0||v;
      //   }
    },
    auto: {
      type: Boolean,
      default: true
      //   validator: v => {
      //     return v.length==0||v;
      //   }
    }
  },
  data() {
    return {
      id: `uploader${uploaderConfig.index}`
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.render();
    });
  },
  methods: {
    render() {
      if (!window.layui) {
        setTimeout(() => {
          this.render();
        }, 20);
      } else {
        layui.upload.render({
          elem: `#${this.id}`,
          url: this.url,
          done: this.done,
          error: this.error,
          before: this.before,
          choose: this.choose,
          drug: this.drug,
          number: this.number,
          multiple: this.multiple,
          size: this.size,
          field: this.field,
          auto: this.auto,
          exts: this.exts,
          accept: this.accept,
          acceptMime: this.acceptMime,
          headers: this.headers,
          data: this.data,
          method: this.method
        });
      }
    },
    choose(obj) {
      console.log(obj);
    },
    done(res, index, upload) {
      this.$emit("success", {
        res,
        index,
        upload
      });
    },
    before(obj) {
      console.log(obj);
    },
    error(index, upload) {
      console.log(index, upload);
    }
  },
  created() {
    uploaderConfig.index++;
  }
};
</script>
<style scoped>
</style>
