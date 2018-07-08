<template>
    <fieldset class="layui-elem-field">
        <legend>{{title}}</legend>
        <div class="layui-field-box">
            <slot></slot>
        </div>
    </fieldset>
</template>
<script>
export default {
  name: "Fieldset"
};
</script>
<style scoped>
</style>
