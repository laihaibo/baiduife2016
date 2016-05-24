/*
* @Author: laihaibo
* @Date:   2016-05-23 00:07:25
* @Last Modified by:   laihaibo
* @Last Modified time: 2016-05-24 10:06:54
*/
window.onload=function(){
  var nickname = document.getElementById('nickname');
  var nameinfo=document.getElementById('nameinfo');
  var password = document.getElementById('password');
  var pwinfo = document.getElementById('pwinfo');
  var repassword = document.getElementById('repassword');
  var repwinfo = document.getElementById('repwinfo');
  var email = document.getElementById('email');
  var emailinfo = document.getElementById('emailinfo');
  var mobile = document.getElementById('mobile');
  var mobileinfo = document.getElementById('mobileinfo');
  var wronginfo = [];

  var btn = document.getElementById('btn');
  function validatename(){
        var stepinfo='';
        var fuck = nickname.value.trim();
        var lens = countlen(fuck);
        if (lens==0) {
          nameinfo.innerHTML = '姓名不能为空';
          nameinfo.style.color = 'red';
        }else if (lens<=16 && lens>=4) {
          nameinfo.innerHTML = '名称格式正确';
          nameinfo.style.color = 'green';
        }else{
          nameinfo.innerHTML = '长度必须为4~16个字符';
          nameinfo.style.color = 'orange';
        }
  }

  function validatepw(){
    var fuck = password.value.trim();
        var lens = countlen(fuck);
        if (lens==0) {
          pwinfo.innerHTML = '密码不能为空';
          pwinfo.style.color = 'red';
        }else if (fuck.match(/^[a-zA-Z]\w{5,17}$/)) {
          pwinfo.innerHTML = '密码格式正确';
          pwinfo.style.color = 'green';
        }else{
          pwinfo.innerHTML = '密码必须为字母、数字或下划线';
          pwinfo.style.color = 'orange';
        }
  }

  function validaterepw(){
    var fuck = repassword.value.trim();
        var lens = countlen(fuck);
        if (lens==0) {
          repwinfo.innerHTML = '密码不能为空';
          repwinfo.style.color = 'red';
        }else if (lens<=16 && lens>=4) {
          repwinfo.innerHTML = '名称格式正确';
          repwinfo.style.color = 'green';
        }else{
          repwinfo.innerHTML = '长度必须为4~16个字符';
          repwinfo.style.color = 'orange';
        }
  }

  function validateemail(){
    var fuck = email.value.trim();
        var lens = countlen(fuck);
        if (lens==0) {
          emailinfo.innerHTML = '请输入邮箱地址';
          emailinfo.style.color = 'red';
        }else if (fuck.match(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
          emailinfo.innerHTML = '邮箱格式正确';
          emailinfo.style.color = 'green';
        }else{
          emailinfo.innerHTML = '邮箱格式错误';
          emailinfo.style.color = 'orange';
        }
  }

  function validatemobile(){
    var fuck = mobile.value.trim();
        var lens = countlen(fuck);
        if (lens==0) {
          mobileinfo.innerHTML = '手机号码不能为空';
          mobileinfo.style.color = 'red';
        }else if (fuck.match(/^1(34[0-8]|(3[5-9]|47|5[0127-9]|78|8[2-478])\\d)\\d{7}$/)) {
          mobileinfo.innerHTML = '手机号码格式正确';
          mobileinfo.style.color = 'green';
        }else{
          mobileinfo.innerHTML = '请输入正确的手机号码';
          mobileinfo.style.color = 'orange';
        }
  }

  function countlen(str){
        var len = 0;
        for (var i = 0; i < str.length; i++) {
          var charCode = str.charCodeAt(i);
          if (charCode >=0 && charCode <=128) {
            len ++;
          }else{
            len +=2;
          }
        }
        return len;
 }

 function validate(){
  validatename();
  validatepw();
  validaterepw();
  validateemail();
  validatemobile();
  // if (wronginfo.length == 0) {
  //   alert('输入无误，正在提交')
  // }else{
  //     alert(wronginfo);
  // }
 }

 function disname(){
  nameinfo.className ='';
  nickname.style.marginBottom=0;
 }
 function dispw(){
  pwinfo.className ='';
  password.style.marginBottom=0;
 }
 function disrepw(){
  repwinfo.className ='';
  repassword.style.marginBottom=0;
 }
 function disemail(){
  emailinfo.className ='';
  email.style.marginBottom=0;
 }
 function dismobile(){
  mobileinfo.className ='';
  mobile.style.marginBottom=0;
 }

  btn.addEventListener('click', validate, false);
  var input = document.getElementsByTagName('input');
  nickname.addEventListener('focus',disname,false);
  nickname.addEventListener('blur',validatename,false);
  password.addEventListener('focus',dispw,false);
  password.addEventListener('blur',validatepw,false);
  repassword.addEventListener('focus',disrepw,false);
  repassword.addEventListener('blur',validaterepw,false);
  email.addEventListener('focus',disemail,false);
  email.addEventListener('blur',validateemail,false);
  mobile.addEventListener('focus',dismobile,false);
  mobile.addEventListener('blur',validatemobile,false);
}
