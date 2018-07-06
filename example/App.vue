<template>
  <Container>
    <Row v-model="v">
    <Col span=6>
      <Button type="">1</Button>
      <Button type="primary">1</Button>
      <Button type="normal">1</Button>
      <Button type="warn">1</Button>
      <Button type="danger">1</Button>
      <Button type="disabled">1</Button>
    </Col>
    <Col span=6>
      <Button type="primary" size="lg">1</Button>
      <Button type="normal" size="xs">1</Button>
      <Button type="warn" size="sm">1</Button>
      <Button type="disabled">1</Button>
    </Col>
    <Col span="6">
    <Form>
      <FormItem label="abc">          
        <Select>
          <option value="1">1</option>
        </Select>
      </FormItem>
      <FormItem label='input'>
        <Input v-model="input"></Input>
      </FormItem>
      <FormItem label='input'>
        <!-- <Checkbox name="abc" title="abcc" value="1"></Checkbox>
        <Checkbox name="abc" title="abdc" value="2"></Checkbox> -->
        <CheckboxGroup name="check" :options="options" v-model="selected" @change="change"></CheckboxGroup>
      </FormItem>

    </Form>
    </Col>
  </Row>
  </Container>
    <!-- <router-view></router-view> -->
</template>

<script lang='ts'>
import Vue from "./vue";
import Component from "vue-class-component";
// import Menu from "./components/Menu.vue";
// import { M_SHOW_MENU, A_MENU } from "./store/modules/Menu";
// import { A_LOGIN, A_SELECT, M_LOGIN, EmptyUsers } from "./store/modules/Users";
declare let layui: any;
@Component({
  components: {
    // Menu
  }
})
export default class App extends Vue {
  input: string = "a";
  selected: any = [1, 2];
  v: boolean = true;
  options: any = [
    { value: 1, title: 1 },
    { value: 2, title: 2 },
    { value: 3, title: 3 },
    { value: 4, title: 4 },
    { value: 5, title: 5 }
  ];
  change() {
    console.log(this.selected);
  }
  mounted() {}
  created() {}
}
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #ffffff;
  /*margin-top: 20px;*/
}
.layout {
  height: 100vh;
}
</style>
