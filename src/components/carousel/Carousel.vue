<template>
    <div class="layui-carousel">
        <div carousel-item>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
  name: "Carousel",
  props:{
      options:{
          type:Object,
          default:()=>{return {}}
      }
  },
  data() {
    return {};
  },
  watch: {},
  methods: {},
  computed: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>
</style>
