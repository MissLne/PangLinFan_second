// ==========================
// 获取好友列表及聊天
// ==========================

head_friends.onclick = function(){
     if(flag){
         tip_friends.style.display = 'block';
         flag = 0;
     } else {
         tip_friends.style.display = 'none'
         flag = 1;
     }
}

$.get(base+"/user/friendList",
{"userId":localStorage.getItem('myuserId')},
function(e){
    for(let i = 0;i < e.friends.length;i++){
        var string3 = 
        "<li>"+
        "<img src='"+e.friends[i].avatar+"' class='friend_avatar friend_avatar"+i+"'>"+
        "<span class='friend_nickname'>"+e.friends[i].nickname+"</span>"+
        "<span class='friend_introduction'>"+e.friends[i].introduction+"</span>"+
        "</li>";
        $(".friend_ul").append(string3);
        localStorage.setItem('friendId'+i+'',e.friends[i].userId);
        localStorage.setItem('friendL',"e.friends.length");
    }
    var ouo = 1;
    for(let i = 0;i < e.friends.length;i++){
          $(".friend_avatar"+i+"").click(function(){
               $("#chat").css("display","block");
               $(".chat_close").click(function(){
                    $("#chat").css("display","none");
               })
          $(".chat_title").html("与"+e.friends[i].nickname+"聊天中");
          $.get(base+"/chat/getMessage",
          {userId: localStorage.getItem('myuserId')},
          function(e){
               console.log(e);
               for(let x = 0;x < e.newMessages.length;x++){
                
                    var str1_li = 
                    "<li class='mychat_content'><div class='yourchat_content1'>"+e.newMessages[x].content+"<div></li>";

                    $(".chat_ul").append(str1_li);
               }
          })
          $(".chat_btn").click(function(){

               let str_li = 
               "<li class='mychat_content mychat_content"+i+"'><div class='mychat_content1'>"+$(".chat_input").val()+"<div></li>";
               $(".chat_ul").append(str_li);
               
               $.post(base+"/chat/sendMessage",
               {userId: localStorage.getItem('myuserId'),
               friendId: localStorage.getItem('friendId'+i+''),
               content: $(".chat_input").val()},
                    function(e){
                         console.log(e);
                    })
               })
          })
     }

})