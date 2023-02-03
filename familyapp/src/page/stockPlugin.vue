<template>
  <div id="jie" style="padding-left: 300px;padding-top: 100px" >

    <Card style="width:500px;margin: 20px">
      <div style="text-align:center">
       {{ sxml1.volume}} &nbsp;&nbsp;{{sxml1.cname}} &nbsp;&nbsp;{{sxml1.price}} &nbsp;&nbsp;{{ sxml1.amplitude}}
      </div>
    </Card>

    <Card style="width:500px;margin: 20px">
      <div style="text-align:center">
        {{ sxml2.volume}} &nbsp;&nbsp;{{sxml2.cname}}&nbsp;&nbsp; {{sxml2.price}}&nbsp;&nbsp; {{ sxml2.amplitude}}
      </div>
    </Card>
    <Card style="width:500px;margin: 20px">
      <div style="text-align:center">
        {{ sxml3.volume}} &nbsp;&nbsp;{{sxml3.cname}}&nbsp; &nbsp;{{sxml3.price}} &nbsp;&nbsp;{{ sxml3.amplitude}}
      </div>
    </Card>
    <Card style="width:500px;margin: 20px">
      <div style="text-align:center">
        {{ sxml4.volume}}&nbsp;&nbsp; {{sxml4.cname}}&nbsp;&nbsp; {{sxml4.price}}&nbsp;&nbsp; {{ sxml4.amplitude}}
      </div>
    </Card>
    <Card style="width:500px;margin: 20px">
      <div style="text-align:center">
        {{ sxml5.volume}} &nbsp;&nbsp;{{sxml5.cname}}&nbsp;&nbsp; {{sxml5.price}}&nbsp;&nbsp; {{ sxml5.amplitude}}
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  data() {

    return {

      sxml1: {cname:'',volume:'',price:'',amplitude:''},
      sxml2: {cname:'',volume:'',price:'',amplitude:''},
      sxml3: {cname:'',volume:'',price:'',amplitude:''},
      sxml4: {cname:'',volume:'',price:'',amplitude:''},
      sxml5: {cname:'',volume:'',price:'',amplitude:''},



    }
  }
  ,
  methods: {
    getdata() {
      this.$http.get('http://localhost:3000')
          .then((response)=> {
            // 处理成功情况
            let sxml1=eval(response.data.result.data[0]);
            let sxml2=eval(response).data.result.data[1];
            let sxml3=eval(response).data.result.data[2];
            let sxml4=eval(response).data.result.data[3];
            let sxml5=eval(response).data.result.data[4];


            this.sxml1.cname=sxml1.cname;
            this.sxml1.price=sxml1.price;
            this.sxml1.volume=sxml1.volume;
            this.sxml1.amplitude=sxml1.amplitude;

            this.sxml2.cname=sxml2.cname;
            this.sxml2.price=sxml2.price;
            this.sxml2.volume=sxml2.volume;
            this.sxml2.amplitude=sxml2.amplitude;

            this.sxml3.cname=sxml3.cname;
            this.sxml3.price=sxml3.price;
            this.sxml3.volume=sxml3.volume;
            this.sxml3.amplitude=sxml3.amplitude;

            this.sxml4.cname=sxml4.cname;
            this.sxml4.price=sxml4.price;
            this.sxml4.volume=sxml4.volume;
            this.sxml4.amplitude=sxml4.amplitude;

            this.sxml5.cname=sxml5.cname;
            this.sxml5.price=sxml5.price;
            this.sxml5.volume=sxml5.volume;
            this.sxml5.amplitude=sxml5.amplitude;

          })
      .catch(()=>{
        alert('服务器未开启')
      })

    }
    },
  created(){
    this.getdata()
  }


}





</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
