<template>
  <div class="register">
    <div class="registerone">
      <ul class="register-one">
        <li>
          <a href="#">YOKA 时尚网</a>
        </li>
        <li>
          <a href="#">YOKA 移动</a>
        </li>
      </ul>
      <ul class="register-two">
        <li>你好，欢迎来到YOKA</li>
        <li>
          <router-link to="/login">[登录]</router-link>
        </li>
        <li>
          <router-link to="/register">[注册]</router-link>
        </li>
        <li>
          <a href="#">精彩专题</a>
        </li>
        <li>|</li>
        <li>
          <a href="#">积分商城</a>
        </li>
      </ul>
    </div>
    <hr />
    <div class="registertwo">
      <hr />
      <img src="../../public/img/logo(1).png" alt />
    </div>

    <div class="registerthree">
      <div class="registerthree-frist">
        <div class="registerthree-one">
          <p>
            <span>注册</span>我有账号,
            <router-link to="/register">登录</router-link>
          </p>
        </div>
        <div class="registerthree-two">
            电话：
            <input type="text" class="ti" placeholder="请输入手机号码" maxlength="11" v-model="phone" @blur="yanzhen">
            <br />密码：
            <input type="password" class="ti" placeholder="请设置密码" v-model="pwd" @blur="isPwd">
            <br />邮箱：
            <input type="text" placeholder="请输入邮箱" class="email" v-model="email" />
            <br />
            <button @click="res">立即注册</button>
        </div>
      </div>
      <div class="registerthree-scend">
        <img src="../../public/img/regBG.jpg" alt />
      </div>
    </div>
    <div class="registerfour">
      <a href="#">关于我们</a> |
      <a href="#">版权信息</a> |
      <a href="#">合作伙伴</a> |
      <a href="#">招聘信息</a> |
      <a href="#">联系我们</a> |
      <a href="#">意见反馈</a> |
      <a href="#">网站地图</a> |
      <a href="#">网站帮助</a> |
      <a href="#">rss订阅</a> |
      <a href="#">聚合阅读</a>
    </div>

    <div class="registerfive">
      <p>YOKA时尚网 京ICP证070512号 北京市公安局朝阳分局备案编号：1101050667</p>
      <br />
      <p class="registerfive-one">Copyright © 2006-2014 Yoka.com, All rights reserved.</p>
    </div>
  </div>
</template>
<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
body {
  background-color: #f8f8f8;
}
.register {
  width: 980px;
  margin: 0 auto;
}
.registerone {
  height: 20px;
  position: relative;
  background-color: #f3f3f3;
}
.register-one,
.register-two {
  list-style: none;
  display: flex;
  justify-content: space-around;
}
.register-one {
  position: absolute;
}
.register-two {
  position: absolute;
  right: 10px;
}
ul > li,
ul > li > a {
  font-size: 12px;
  color: #000;
  text-decoration: none;
  padding: 0px 5px;
}
ul > li > a:hover {
  color: #ff5400;
  text-decoration: underline;
}
.registertwo {
  position: relative;
  height: auto;
}
.registertwo > hr {
  position: absolute;
  width: 100%;
  top: 40px;
}
.registertwo > img {
  top: 20px;
  left: 30px;
  position: absolute;
}
.registerthree {
  height: 515px;
  border: 0.01rem solid #e6e6e6;
  margin-top: 80px;
  background-color: #fff;
  position: relative;
}
.registerthree-frist {
  margin: 100px 40px;
  position: absolute;
}
.registerthree-scend {
  position: absolute;
  top: 2px;
  right: 2px;
}
.registerthree-one > p > span {
  font-size: 25px;
  margin-right: 10px;
}
.registerthree-one > p {
  margin: 15px 20px;
  color: #000;
}
.registerthree-one > p > a {
  color: #4b85d4;
  text-decoration: none;
}
.registerthree-one > p > a:hover {
  color: #ff5400;
}
.registerthree-two {
  margin-top: 30px;
  margin-left: 40px;
}
.registerthree-two > form > button {
  width: 212px;
  font-size: 12px;
}
.registerfour {
  text-align: center;
  margin-top: 20px;
}
.registerfour > a {
  text-align: center;
  text-decoration: none;
  color: #333;
  font-size: 12px;
}
.registerfive {
  margin-top: 10px;
  text-align: center;
}
.registerfive > p {
  color: #999;
  font-size: 5px;
}
.registerfive-one {
  margin-top: -10px;
  margin-bottom: 10px;
}
</style>
<script>
export default {
  data() {
    return {
      phone: "",
      pwd: "",
      email:""
    };
  },
  methods:{
    res() {
      // console.log('登录')
      if(!this.msg && !this.pmsg && !this.codemsg){
        // let data = this.qs.stringify({ phone: this.phone, pwd: this.pwd });
        let data = "uname=" + this.phone + "&upwd=" + this.pwd;
        this.axios.post("/user/register", data).then(result => {
          console.log('注册')
          console.log(result.data);
          if(result.data){
            this.$router.push('/login');
          }
        });
      }else{
        return
      }
    },
     yanzhen() {
      let reg = /^1[3-9]\d{9}$/;
      let data = "phone=" + this.phone
      if (reg.test(this.phone)) {
        this.axios.post("/user/hasuser", data).then(res => {
          console.log(res.data);
          if (res.data !== 0) {
            this.msg = "手机号已经注册!"
          } else {
            this.msg = ""
          }
        });
      } else {
        this.msg = "手机号格式错误！!"
      }
    },
    isPwd(){
      if(this.pwd.replace(/\s+/g,'')){
        this.pmsg = "";
      }else{
        this.pmsg = "密码不能为空";
      }
    }
  },
}
</script>  