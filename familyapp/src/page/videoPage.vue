<template>
  <Grid square :col=4 center :border="false">
<div v-for="(val,key,index) in items" :key="index">
  <GridItem>
      <Card style="width:300px;height:300px;background-color: #cbdaee">
        <template #title>
          <Icon type="ios-youtube"></Icon>
          <Tag color="cyan">视频网站</Tag>
        </template>
        <a :href="key" target="_blank" style="color: #40b8b8;font-size: 40px;">{{val}}</a>
        <br>
        <br>
        <br>
       <span style="font-size: 18px;color: #a12eb6;"> {{'Tips:'+desc[index+1]}}</span>
      </Card>
    </GridItem>


</div>

  </Grid>
</template>

<script>
export default {
data(){
  return{
    items: {
      'https://www.ixigua.com/': '西瓜视频',
      'https://www.youku.com/': '优酷视频',
      'https://v.qq.com/': '腾讯视频',
      'https://www.douyin.com/': '抖音',
      'https://www.bilibili.com/': '哔哩哔哩',
      'https://www.mgtv.com/': '芒果',
      'https://www.ksksl.com/': '视中心影视',
      'https://www.cupfox.com': '茶杯狐',
      'https://haokan.baidu.com/': '好看视频',
      'https://tv.sohu.com/': '搜狐视频',
      'https://www.lgyy.cc/': '蓝光影院',
      'https://halihali7.com/': '哈里哈里',
      'www.qdaily.com': '.好奇心研究所',
      'www.znjchina.com': '智能界',
      'http://pilipali.cc/': '批里啪里',
      'https://www.iqiyi.com/': '爱奇艺',
},
    desc:{1:'美食游戏板块内容丰富',2:'老牌视频网站，没啥亮点',
      3:'腾讯出品，白嫖走开',4:'短视频内容量爆炸',
      5:'众所周知，学习网站',6:'马桶台的肥皂剧',
      7:'白嫖VIP电影网站',8:'白嫖VIP电影网站',
      9:'内容含金量还可以',10:'不温不火',
      11:'白嫖VIP电影网站',12:'b站破解版',
      13:'创意视频网站',14:'主要跟智能设备相关',
      15:'b站破解版',16:'没钱走开',
    },


  }

}
,

  methods:{


  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  background-color: #cccccc;
}
</style>
