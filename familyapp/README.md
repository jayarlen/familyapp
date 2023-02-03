# familyapp

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



在组件中应用字体图标，用import引入，出现can't  resolve字眼说明路径错了，src要用@
css样式：color:bule,vue动态绑定时 在数据中要写color:'bule'
类用不到跟css无关
ui组件引用时需要引入样式
到node—modules找插件找不到，则可用npm安装
组件中的true和false不用引号
v-bind:style="'display:none;'"
this.$refs.名字.属性
失去获得焦点js(onBlur,onFocus),vue(@blur,@focus)
顶部菜单栏置顶，所有都是在id为APP的盒子中，将其margin-top改为0
组件没有的属性结合审查元素用style去改
如果对一个盒子设内下边距无效，可以试着给另一个添加内上边距
组件有的事件直接@事件名=“函数”
js获取对象键即为for item in items的item，items[item]为值
vue则为v-for='(val,key,index)in items'
JSON其实就是JavaScript中的一个对象，跟var obj={}在质上完全一样，只是在量上可以无限扩展
。简单地讲，json其实就是JavaScript中的对象(Object)和数组(Array，其实也是对象
当引入的组件库在页面上结构存在，但无样式需要检查是否引入样式
中文、为键盘上的\
<h1>分页怎么实现切换跳转相应页面</h1>
摄氏度拼音可以直接打出来°
axios引入vue时不能用use，要将其挂载到原型中，在vue3中使用app.config.globalProperties.$http=axios
然后用thi.$http
解决axios在webpack中的跨域问题
axios请求直接在vue的sxml后面添加属性和方法不行的话，转变思路直接在方法拿到
table组件数据只能是定下来的
设置一个定时器实现实时获取时间，返回值赋给this.time
elementui菜单栏导航路由跳转，先el-menu中router为true，然后el-menu-item中index
