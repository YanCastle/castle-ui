<template>
<Container>
  <Row>
    <Col span="12">
    
      <Hr color="blue"></Hr>
    <Form>
      <FormItem label="按钮 默认大小">
        <Button type="">默认样式</Button>
        <Button type="primary">primary</Button>
        <Button type="normal">normal</Button>
        <Button type="warn">warn</Button>
        <Button type="danger">danger</Button>
        <Button type="disabled">disabled</Button>
      </FormItem>
      <FormItem label="按钮尺寸控制">
        <Button type="primary" size="lg">lg大</Button>
        <Button type="normal" size="sm">sm中</Button>
        <Button type="warn" size="xs">xs小</Button>
      </FormItem>
      <FormItem label="Select选择框">
        <Select>
          <option value="1">1</option>
        </Select>
      </FormItem>
      <FormItem label='input'>
        <Input v-model="input"></Input>
      </FormItem>
      <FormItem label='原生风格CheckboxGroup'>
        <CheckboxGroup name="check" skin="primary" :options="options" v-model="selected" @change="change"></CheckboxGroup>
      </FormItem>
      <FormItem label='默认风格CheckboxGroup'>
        <CheckboxGroup name="check" :options="options" v-model="selected" @change="change"></CheckboxGroup>
      </FormItem>
      <FormItem label='开关Switcher'>
        <Switcher :value="true" name="check"></Switcher>
        <Switcher name="check" text="开|关"></Switcher>
        <Switcher name="check" text="开启|关闭"></Switcher>
        <Switcher name="check" text="OPEN|CLOSE"></Switcher>
      </FormItem>

      <FormItem label='单选Radio'>
        <Radio name="name" title="男" value=1></Radio>
        <Radio name="name" title="女" value=0></Radio>
      </FormItem>
      <FormItem label='文本域Textarea'>
        <Textarea v-model="textarea"></Textarea>
      </FormItem>
      <FormItem label='进度条'>
        <!-- <Progress percent="30"></Progress> -->
        <Progress :showpercent="false" :big="false"></Progress>
      </FormItem>

    </Form>
    </Col>
    <Col span="12">
    
      <Hr color="cyan"></Hr>
      <Card title="卡片面板标题">
        卡片面板内容；如果你的网页采用的是默认的白色背景，不建议使用卡片面板。
      </Card>
    </Col>
    <Col span="12">
    
      <Hr color="green"></Hr>
      <Collapse>
        <CollapseItem title="折叠面板标题">
          <div>折叠面板内容</div>
        </CollapseItem>
        <CollapseItem title="折叠面板标题1">
          <div>折叠面板内容1</div>
        </CollapseItem>
      </Collapse>
    </Col>
    <Col span="12">    
      <Hr color="orange"></Hr>
      <Collapse :accordion="true">
        <CollapseItem title="折叠面板标题-手风琴">
          <div>折叠面板内容</div>
        </CollapseItem>
        <CollapseItem title="折叠面板标题1-手风琴">
          <div>折叠面板内容1</div>
        </CollapseItem>
      </Collapse>
    </Col>
    <Col span="12">
      <Hr color="red"></Hr>
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
  textarea: string = "文本域内容";
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
