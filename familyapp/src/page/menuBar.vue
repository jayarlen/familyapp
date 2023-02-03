<template>
  <div>
    <Menu mode="horizontal" :theme="theme" active-name="1"  style="padding-top: 0">
    <MenuItem name="1" to="/menuBar">
      <Icon type="ios-home" />
      首页
    </MenuItem>
    <MenuItem name="2">
      <Icon type="ios-people" />
      用户管理
    </MenuItem>
    <Submenu name="3">
      <template #title>
       <Icon type="ios-information-circle" />
        消息
      </template>
       <MenuItem name="3-1">聊天纪录</MenuItem>
        <MenuItem name="3-2">群公告</MenuItem>
        <MenuItem name="3-3">悄悄话</MenuItem>
        <MenuItem name="3-4">秘密</MenuItem>

    </Submenu>
    <MenuItem name="4">
      <Icon type="ios-document" />
      日记本
    </MenuItem>
    <Submenu name="5">
      <template #title>
        <Icon type="ios-youtube" />
        娱乐
      </template>
      <MenuItem name="5-1">电影</MenuItem>
      <MenuItem name="5-2">电视剧</MenuItem>
      <MenuItem name="5-3">音乐</MenuItem>
      <MenuItem name="5-4">期刊</MenuItem>
      <MenuItem name="5-5" to="/bookList" append="true">电子书籍</MenuItem>
    </Submenu>
    <Submenu name="6">
      <template #title>
        <Icon type="ios-hammer" />
        工具
      </template>
        <MenuItem name="6-1">ppt模板</MenuItem>
        <MenuItem name="6-2">年度总结</MenuItem>
        <MenuItem name="6-3">财务报表</MenuItem>
        <MenuItem name="6-4">软件资源</MenuItem>
        <MenuItem name="6-5">工具网站</MenuItem>

    </Submenu>
      <MenuItem name="7" >
        <Icon type="ios-settings" />
        设置
      </MenuItem>
    <MenuItem name="8" style="margin-left: 800px">
      <Icon type="ios-log-in" />
      登录
    </MenuItem>
    <MenuItem name="9" >
      <Icon type="ios-log-out" />
      注册
    </MenuItem>
  </Menu>
  <div style="display: flex;justify-content: space-between;margin: 80px 150px;" >
    <Card style="width:320px ;height: 520px;padding: 10px"  >
      <div style="text-align:center">
        <span style="color: #353836;font-size: 20px;padding-bottom: 20px ">快来添加今日行程吧 </span>
        <Calendar  cell-height="30" style="padding-top: 20px" @on-today="giveText" ></Calendar>
        <div id="xcheng" style="height: 50px;color: #B500FE;padding-top: 20px;font-size: 20px">
          <ul>

          </ul>
        </div>
      </div>
    </Card>
    <Card style="width:320px">
      <div style="text-align:center">
        <h3> {{time}}</h3>
        <br>
        <br>
        <h2>{{speek}}</h2>
        <br>
        <h3> {{this.$store.state.shuxin}}</h3>

      </div>
    </Card>

    <Card style="width:320px ;height: 520px;" >
      <div style="text-align:center">
        <span style="color: #2e2f31;font-size: 30px">新鲜咨讯</span>
        <Divider orientation="right">热搜榜</Divider>
        <Scroll :on-reach-bottom="handleReachBottom" >
          <Card dis-hover v-for="(val,key, index) in list" :key="index" style="margin: 12px 0;text-align: left;">
            <a :href=" val"> {{key}}</a>
          </Card>
        </Scroll>
      </div>
    </Card>

  </div>


</div>
</template>

<script>

export default {


  data () {
    return {
      theme: 'dark',
      customSize: 50,
   txt :'jie',
      //第三个
      list:{'1微博':'https://s.weibo.com/top/summary/',
        '2知乎':'https://www.zhihu.com/billboard','3微信读书':'https://weread.qq.com/web/category/newbook',
        '4百度热搜':'https://top.baidu.com/board?tab=realtime'

        ,'5bibilili':' https://www.bilibili.com/v/popular/rank/all','6抖音':'https://www.douyin.com/hot',
        '7什么值得买':'https://post.smzdm.com/hot_30/','8雪球热帖':'https://xueqiu.com/today#/'},
      //第四个
      time:1,
speek:2
    }

  },
  methods:{

    getspeek(){
      //console.log(this.$socket);
      setInterval(()=>{
        this.$socket.socket.emit('msg',{a:1},(res)=>{
           this.speek=res
        })
return this.speek
      },5000)


      }

   ,

    gettime(){
       setInterval(()=>{
        var date=new Date();
        var h=date.getHours();
        h=h<10?'0'+h:h;
        var half=h<12?'上午':'下午'
        var m=date.getMinutes();
        m=m<10?'0'+m:m;
        var s= date.getSeconds();
        s=s<10?'0'+s:s;
         var current= half+h+'时'+m+'分'+s+'秒'
         return this.time=current
      },1000)


    }
    ,
 giveText(){
let prompt1=prompt('请输入');
let txt;
   txt = prompt1;
   let ul1=document.querySelector('#xcheng');
   ul1.innerHTML=txt;
   },
    handleReachBottom () {
      return new Promise(resolve => {
        setTimeout(() => {
          const last = this.list[this.list.length - 1];
          for (let i = 1; i < 11; i++) {
            this.list.push(last + i);
          }
          resolve();
        }, 2000);
      });
    },



},
  created() {
    this.getspeek(),
        this.gettime()
  }

  ,
  sockets:{
    connect(data){
      console.log('连接成功'+data)
    },
    reconnect(data){
      console.log('重新连接成功'+data)
    },
    connect_failed() {
      console.log('连接失败')
    },
    disconnect(){
      console.log('断开连接成功')
    }
  },
  beforeUnmount() {
    clearInterval()
    this.$socket.close()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
