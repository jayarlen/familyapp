<template>
  <div id="tu">
  <Card style="width:400px;height: 400px;margin-left: 400px" >
    <div style="text-align:center;width:380px;height: 380px" id="tu1">

    </div>
  </Card>
  <Card style="width:400px;height: 400px;margin-left: 400px" >
    <div style="text-align:center;width:380px;height: 380px" id="tu2">

    </div>
  </Card>
  </div>
</template>

<script>

import * as echarts from "echarts"
export default {
  data(){
    return{

    }
  },
  methods:{
    initecharts(){

      let myechart=echarts.init(document.getElementById('tu1'));
      myechart.setOption({
            title: {
              text: '掌握程度'
            },
            tooltip: {
              trigger: 'axis'
            },

            radar: [
              {
                indicator: [
                  { text: 'html,css,js', max: 100 },
                  { text: 'nodejs', max: 100 },
                  { text: 'vue', max: 100 },
                  { text: 'websocket,express', max: 100 },
                  { text: 'ajax,axios', max: 100 },
                  { text: 'webpack', max: 100 }
                ],
                center: ['35%', '40%'],
                radius: 80
              },

            ],
            series: [
              {
                type: 'radar',
                tooltip: {
                  trigger: 'item'
                },
                areaStyle: {},
                data: [
                  {
                    value: [87, 73, 76, 64,77,64,],
                    name: '指数'
                  }
                ]
                ,


              }
            ]
          }

      )
    },
    initechartst(){
//console.log(echarts)
     // console.log(document.getElementById('tu2'))注意在mounted中调用，因为此时页面才构建出来
     // console.log(document.getElementById('tu'))
      let mychartt=echarts.init(document.getElementById('tu2'));
      mychartt.setOption(
          {
            tooltip: {
              trigger: 'item'
            },
            legend: {
              top: '5%',
              left: 'center'
            },
            series: [
              {
                name: '技术栈',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                  borderRadius: 10,
                  borderColor: '#fff',
                  borderWidth: 2
                },
                label: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                  }
                },
                labelLine: {
                  show: false
                },
                data: [
                  { value: 978, name: 'js' },
                  { value: 735, name: 'css' },
                  { value: 580, name: 'html' },
                  { value: 484, name: 'vue' },
                  { value: 300, name: 'nodejs' },
                  { value: 978, name: 'iview' },
                  { value: 735, name: 'websocket' },
                  { value: 978, name: 'axios' },
                  { value: 735, name: 'express' },
                ]
              }
            ]
          },
      )
    }

  },
  mounted (){
    this.initecharts();
this.initechartst();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
