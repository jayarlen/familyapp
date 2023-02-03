<template>
<div>
  <ButtonGroup size="large" >
    <Button @click="phoneRegister" v-bind:kaiGuan1="ab">手机注册</Button>
    <Button @click="emailRegister" v-bind:kaiGuan2="ba">邮箱注册</Button>
  </ButtonGroup>

  <Card  style="justify-content: center;display: flex" :bordered=false>
    <div style="min-height: 500px; ">
      <div class="demo-login" v-show="ab">
        <register-phone></register-phone>
      </div>
      <div class="demo-login" v-show="ba" >
        <register-email></register-email>
      </div>
    </div>
  </Card>
  <br>
  <Divider orientation="center">其他方式登录</Divider>
    <span class="   iconfont icon-QQ" style="color: #0086b3;font-size: 60px"></span>
    <i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
    <span class="  iconfont icon-weixin" style="color: #55a532;font-size: 50px"></span>
    <br>
    <span > 未注册手机验证后自动登录，注册即代表同意《隐私保护指引》</span>


</div>
</template>

<script>

import registerPhone from "@/components/registerPhone";
import registerEmail from "@/components/registerEmail";
export default {
  components:{
    registerPhone,
    registerEmail,
  },
  data () {

    return {
 ab:true,
 ba:false,
    }
  },
  methods: {
    phoneRegister(){
      this.ba=false  ;
      this.ab=true;


    },
    emailRegister(){
      this.ab=false  ;
      this.ba=true;
    }


},

  computed: {


  },

}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
