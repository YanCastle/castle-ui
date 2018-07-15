# castle-ui
base on layui [http://www.layui.com/doc/],基于layui
## use 使用方法
```shell
npm i -D castle-ui
```
## main.ts
```typescript
import ui from 'castle-ui'
Vue.use(ui,{
    server:'your layui js and css server root',
    iconfont:'you iconfont name'
    iconfont_url:'you iconfont url'
})
```
