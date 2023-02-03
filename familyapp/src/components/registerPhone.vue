<template>
  <div class="demo-login">
    <Login @on-submit="handleSubmit">
      <Mobile name="mobile" />
      <Captcha name="captcha" :field="['mobile']" @on-get-captcha="handleGetCaptcha" />
      <UserName name="username" />
      <Password name="password" />
      <Captcha class="demo-login-captcha" name="captcha" :count-down="0" @on-get-captcha="handleGetCaptcha">
        <template #text>
          <img :src="'https://file.iviewui.com/iview-pro/' + captcha">
        </template>
      </Captcha>
      <submit>注册</submit>
    </Login>
  </div>
</template>

<script>
export default {
  data () {
    return {
      captcha: 'captcha1.png'
    }
  },
  methods: {
    handleSubmit (valid, { username, password, captcha }) {
      if (valid) {
        this.$Modal.info({
          title: '输入的内容如下：',
          content: 'username: ' + username + ' | password: ' + password + ' | captcha: ' + captcha
        });
      }
    },
    handleGetCaptcha () {
      // 这里只是模拟切换图形验证码
      if (this.captcha === 'captcha1.png') {
        this.captcha = 'captcha2.png';
      } else {
        this.captcha = 'captcha1.png';
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.demo-login{
  width: 400px !important;
  margin: 0 auto;
}
.demo-login-captcha .ivu-btn{
  padding: 0;
}
.demo-login-captcha .ivu-btn img{
  height: 28px;
  position: relative;
  top: 4px;
}
</style>
