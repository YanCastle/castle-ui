# castle-ui
base on layui [http://www.layui.com/doc/],基于layui.
## use 使用方法
```shell
npm i -D castle-ui
```
## main.ts
```typescript
import ui from 'castle-ui'
Vue.use(ui,{
    prefix:''//ui前缀，会添加到所有ui模块的前面，用于复用
})
```


2018-09-11
添加Selecter组件，通过传入options参数的方式设置select的选项，options结构要求为数组，组件内部自动处理更新算法
```
<Selecter v-modal="value" :options="[{title:'显示标题',value:'值',disabled:false}]">
```
添加DataPicker组件，允许进行日期选择
```
<DatePicker v-modal="date">
```
修复CheckboxGroup组件BUG，该BUG会导致layui渲染时vue还没处理完dom
