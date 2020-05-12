// ==========================
// 获取修改用户信息
// ==========================

//获取用户信息
$.get(base+"/user/getInfo",
    {"userId":localStorage.getItem('myuserId')},
    function(e){
        var mat_head = document.querySelector(".mat_head");
        mat_head.style.background = 'url('+e.info.avatar+') no-repeat';
        mat_head.style.backgroundSize = '100% 100%';
        img1.src = e.info.avatar;
        mat_name[0].innerHTML = e.info.nickname;
        console.log(e.info);
        lastTd[0].innerHTML = e.info.gender;
        lastTd[1].innerHTML = e.info.introduction;
        lastTd[2].innerHTML = e.info.trade;
        lastTd[3].innerHTML = e.info.resume;
})
//修改昵称
mat_preserve[0].addEventListener('click',function(){
     mat_name[0].innerHTML = $(".mat_input0").val();
     axios.post(base+'/user/alterInfo', {
     userId:localStorage.getItem('myuserId'),
     direction:0,
     content:$(".mat_input0").val()
     })
     .then(function (response) {
     })
     .catch(function (error) {
         console.log(error);
     });
})

mat_preserve[1].addEventListener('click',function(){
     lastTd[0].innerHTML = $(".mat_input1").val();
     axios.post(base+'/user/alterInfo', {
     userId:localStorage.getItem('myuserId'),
     direction:1,
     content:$(".mat_input1").val()
     })
     .then(function (response) {
        
     })
     .catch(function (error) {
         console.log(error);
     });
})

mat_preserve[2].addEventListener('click',function(){
     lastTd[1].innerHTML = $(".mat_input2").val();
     axios.post(base+'/user/alterInfo', {
     userId:localStorage.getItem('myuserId'),
     direction:2,
     content:$(".mat_input2").val()
     })
     .then(function (response) {
        
     })
     .catch(function (error) {
         console.log(error);
     });
})

mat_preserve[3].addEventListener('click',function(){
     lastTd[2].innerHTML = $(".mat_input3").val();
     axios.post(base+'/user/alterInfo', {
     userId:localStorage.getItem('myuserId'),
     direction:3,
     content:$(".mat_input3").val()
})
     .then(function (response) {
     })
     .catch(function (error) {
     console.log(error);
     });

})

mat_preserve[4].addEventListener('click',function(){
     lastTd[3].innerHTML = $(".mat_input4").val();
     axios.post(base+'/user/alterInfo', {
     userId:localStorage.getItem('myuserId'),
     direction:4,
     content:$(".mat_input4").val()
})
     .then(function (response) {
    
     })
     .catch(function (error) {
     console.log(error);
     });

})
//点击头像后出现的小框框
material.addEventListener('click',function(){
     tip_logout.style.display = 'none';
     container.style.display = 'none';
     myMaterial[0].style.display = 'block';
 })
 goback.addEventListener('click',function(){
     container.style.display = 'block';
     myMaterial[0].style.display = 'none';
 })



theTr[0].addEventListener('mouseenter',function(){
     mat_update[0].style.opacity = '1';
 })
 theTr[0].addEventListener('mouseleave',function(){
     mat_update[0].style.opacity = '0';
 }) 
 mat_update1[0].addEventListener('click',function(){
     tr_input[0].style.display = 'block';
     this.style.display = 'none';
 })
 mat_preserve[0].addEventListener('click',function(){
     mat_update[0].style.display = 'block';
     tr_input[0].style.display = 'none';
 })
 mat_cancel[0].addEventListener('click',function(){
     mat_update[0].style.display = 'block';
     tr_input[0].style.display = 'none';
 })
 
for(let i = 1;i < theTr.length;i++){
     
     mat_update[i].addEventListener('click',function(){
         lastTd[i-1].style.display = 'none';
         tr_input[i].style.display = 'block';
         this.style.display = 'none';
     })
     mat_preserve[i].addEventListener('click',function(){
         mat_update[i].style.display = 'block';
         lastTd[i-1].style.display = 'block';
         tr_input[i].style.display = 'none';
     })
     mat_cancel[i].addEventListener('click',function(){
         mat_update[i].style.display = 'block';
         tr_input[i].style.display = 'none';
         lastTd[i-1].style.display = 'block';
     })     
    
}
 //点击头像修改头像
$("#myBtn").click(function(){
    var file = $("#myfile").get(0).files[0];
    console.log(file);
    var formData = new FormData();
    formData.append("image1",file);
    console.log(formData.get("image1"));
    $.ajax({
        type: 'post',
        url: base+'/user/alterAvatar',
        data: formData,
        processData: false,
        contentType: false,
        xhrFields:{withCredentials:true},
        success: function(data){
            console.log(data);
            
        }
    })
})