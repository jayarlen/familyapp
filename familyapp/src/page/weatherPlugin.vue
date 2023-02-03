<template>
  <div >

    <Card style="width:320px;background-color: #b3d4fc;margin-top: 100px;margin-left: 300px">
      <div style="text-align:center">
        <span style="font-size: 30px">南京</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size: 30px">21°</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span></span>
        <br>
        <span style="font-size: 30px">{{info1.tempMin}}°C</span>
        <i style="font-size: 30px">~</i>
        <span style="font-size: 30px">{{info1.tempMax}}°C</span>
        <Divider />
        <space>
          <Card style="width:80px;background-color: #b3d4fc">
            <div style="text-align:center">
              <span> {{info1.fxDate}}</span>
              <br>
              <skycon condition="wind" size="30" speed="1" />
              <br>
              <span style="font-size: 15px">{{info1.tempMax}}°C</span>
              <br>
              <span style="font-size: 15px">{{info1.tempMin}}°C</span>
            </div>
          </Card>
          <Card style="width:80px;background-color: #b3d4fc">
            <div style="text-align:center">
              <span>  {{info2.fxDate}}</span>
              <br>
              <skycon condition="rain" size="30" speed="1" />
              <br>
              <span style="font-size: 15px">{{info2.tempMax}}°C</span>
              <br>
              <span style="font-size: 15px">{{info2.tempMin}}°C</span>
            </div>
          </Card>
          <Card style="width:80px;background-color: #b3d4fc">
            <div style="text-align:center">
              <span>  {{info3.fxDate}}</span>
              <br>
              <skycon condition="partly-cloudy-day" size="30" speed="1" />
              <br>
              <span style="font-size: 15px">{{info3.tempMax}}°C</span>
              <br>
              <span style="font-size: 15px">{{info3.tempMin}}°C</span>
            </div>
          </Card>
        </space>
      </div>
    </Card>


  </div>

</template>

<script >


export default {
  data() {
    return {
      info1:{fxDate:'',tempMax:'',tempMin:''},
      info2:{fxDate:'',tempMax:'',tempMin:''},
      info3:{fxDate:'',tempMax:'',tempMin:''},

    }
  },

  created() {
    this.giveData()
  },
  methods:{

    giveData(){
      this.$http.get('', {
        baseURL: 'https://devapi.qweather.com/v7/weather/3d?',
        params: {
          location: 101010100,
          key: '4a37f56d1328420396547bb6cd6f250d'
        }

      }).then((res)=> {
console.log(res)
         let info1 = eval(res).data.daily[0];
        let info2 = eval(res).data.daily[1];
        let info3 = eval(res).data.daily[2];


        this.info1=info1;
        this.info2=info2;
        this.info3=info3;

      })
          .catch((err) => {
            console.log(err)
          })
      ;
    }
  },








}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
