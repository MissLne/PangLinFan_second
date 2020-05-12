// ==========================
// 登陆页面
// ==========================

logon_eye.onclick = function(){
     if(flag){
         this.innerHTML = '&#xe6a0;';
         this.style.right = '.5vw';
         logon_password.type = 'text';
         flag = 0;
     } else {
         this.innerHTML = '&#xe503;';
         this.style.right = '0';
         logon_password.type = 'password';
         flag = 1;
     }
}

head_sculpture.addEventListener('click',function(){
     if(flag){
         tip_logout.style.display = 'block';
         flag = 0;
     } else {
         tip_logout.style.display = 'none';
         flag = 1;
     }
     
})

logon_account.onfocus = function(){
     if(this.value == '手机号或邮箱' || this.value == '请输入手机号或邮箱'){
         this.value = '';
         this.style.color = '#2b2b2b';
     }
}
logon_account.onblur = function(){
     if(this.value == ''){
         this.value = '请输入手机号或邮箱';
         this.style.color = '#f00';
     }
}
logon_password.onfocus = function(){
     if(logon_pd.innerHTML == '密码' || logon_pd.innerHTML == '请输入密码'){
         logon_pd.innerHTML = '';
         logon_pd.style.color = '#2b2b2b';
     }
}
logon_password.onblur = function(){
     if(this.value == ''){
         logon_pd.innerHTML = '请输入密码';
         logon_pd.style.color = '#f00';
     }
}
 

$(".logon_button").click(function(){  
     $.ajax({
         type: 'post',
         url: 'http://47.97.204.234:3000/user/login',
         data: {"username":$('.logon_account').val(),"password":$('.logon_password').val()},
         xhrFields:{withCredentials:true},
         success: function(e){
             console.log(e);
             if(e.result == 'success' ){
                 localStorage.setItem('myuserId',e.userId);
                 localStorage.setItem('username', $('.logon_account').val());
                 localStorage.setItem('password', $('.logon_password').val());
                 know.style.display = 'block';
                 logon.style.display = 'none';
                 mybody[0].style.background = '#f6f6f6';
                 location.reload();
             
             }
             
         }
      })
 })

 $(".logout").click(function(){
     tip_logout.style.display = 'none';
     $.ajax({
         type: 'post',
         url: 'http://47.97.204.234:3000/user/logout',
         data: {username:localStorage.getItem('username'),password:localStorage.getItem('password')},
         xhrFields:{withCredentials:true},
         success: function(e){
             if(e.result == 'success' ){
                 know.style.display = 'none';
                 logon.style.display = 'block';
                 mybody[0].style.background = '#B8E5F8';
                 localStorage.setItem('myuserId',"undefined");
               }
             
         }
      })
 
 })

 $(".backToLogon").click(function(){
     know.style.display = 'none';
     logon.style.display = 'block';
     mybody[0].style.background = '#B8E5F8';
 })

$.ajax({
     type: 'get',
     url: base+'http://47.97.204.234:3000/user/state',
     xhrFields:{withCredentials:true},
     success: function(data){
       
     }
})

if(localStorage.getItem('myuserId') == 'undefined'){
    know.style.display = 'none';
    logon.style.display = 'block';
    mybody[0].style.background = '#B8E5F8';
    } else {
    know.style.display = 'block';
    logon.style.display = 'none';
    mybody[0].style.background = '#f6f6f6';
}