<template>
    <div :id="id">
    </div>
</template>
<script>
const pageConfig = {
  index: 0
};
export default {
  name: "Page",
  props: {
    total: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 0
    },
    //通过v-model绑定
    value: {
      type: Number,
      default: 0
    },
    next: {
      type: Number,
      default: 0
    },
    prev: {
      type: Number,
      default: 0
    },
    first: {
      type: Number,
      default: 0
    },
    last: {
      type: Number,
      default: 0
    },
    options: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      id: `page` + pageConfig.index
    };
  },
  methods: {
    page() {
      if (layui) {
        layui.laypage.render(
          Object.assign(
            {
              elem: this.id,
              count: this.total,
              limit: this.limit,
              prev: this.prev,
              curr: this.value,
              next: this.next,
              first: this.first,
              last: this.last,
              jump: (obj, first) => {
                this.$emit("input", obj.curr);
              }
            },
            this.options
          )
        );
      } else {
        setTimeout(() => {
          this.page();
        }, 50);
      }
    }
  },
  computed: {},
  created() {
    pageConfig.index++;
  },
  watch: {
    value: "page",
    total: "page",
    limit: "page"
  },
  mounted() {
    this.$nextTick(() => {
      this.page();
    });
  }
};
</script>
<style scoped>
</style>
