// ==========================
// 获取评论及点赞踩评论
// ==========================

function myarticleId2(myartiId){
     var yournumber = 0;
     var flag = 1,mylike = true,mylike1 = true,mylike2 = true,mylike3 = true;
     var article_comment = $(".article_comment");
     var arcticle_comments = $(".arcticle_comments");
     var array3 = [];
     var array5 = [];
     
     for(let i = 0;i < 18;i++){
          article_comment[i].onclick = function(){
               var tool = 1;
               console.log("this"+i);
               var fals = 1,fals1 = 1,fals2 = 1,fals3 = 1,fals4 = 1,fals5 = 1;
               if(flag) {
                    arcticle_comments[i].innerHTML = "<div class='comments_title'>评论</div>";
                    //获取评论
                    $.get(base+"/article/getComments",
                    {userId: localStorage.getItem('myuserId'),
                    articleId: myartiId[i].articleId},
                    function(e){
                         console.log(e);
                         var array2 = [];
                         for(var items in e.comments){
                              array2.push(e.comments[items]);
                         }
            
                    console.log(array2);
            
                    for(var a = 0;a < array2.length;a++){
                 
                         array3.push(e.comments[a].commentId);
                    }
               
               for(var a = 0;a < myartiId.length;a++){
                 
                 array4.push(myartiId[a].articleId);
               }
               for(var a = 0;a < array2.length;a++){
                
                 array5.push(e.comments[a].userId);
               }
             
               
              let myLength = array2.length;

              if(myLength > 5){
                    if(myLength%5 == 0){

                    for(let x = 0;x < myLength/5;x++){
                         arcticle_comments[i].innerHTML += "<div class='com_container "+x+" lis'></div>";
                        
                    }
                    //创建评论的相关元素
                     for(let y = 0,k = 0;k < myLength/5;y +=5,k++){
                         for(let j = y;j < y+5;j++){
                             
                              let str = 
                              "<div class='comment_all"+j+"'>"+
                              "<img class='comment_avatar comment_avatar"+j+"' src="+array2[j].avatar+">"+
                              "<span class='comment_name comment_name"+j+"'>"+array2[j].nickname+"</span>"+
                              "<div class='comment_btn comment_btn"+j+"'>"+
                              "<span class='iconfont comment_agree comment_agree"+j+"'>&#xe506;</span>"+
                              "<span class='iconfont check_comment check_comment"+j+"'>&#xe8c6; 查看回复</span>"+
                              "<span class='iconfont comment_comment comment_comment"+j+"'>&#xe528; 回复</span>"+
                              "<span class='iconfont comment_disagree comment_disagree"+j+"'>&#xe600; 踩</span>"+
                              "<span class='iconfont comment_report comment_report"+j+"'>&#xe65f; 举报</span>"+
                              "<span class='iconfont comment_delete comment_delete"+j+"'> 删除</span>"+
                              "</div>"+
                              "</div>";
                              let com_container = $(".com_container");
                              com_container[k].innerHTML += str;
                              let strin = document.createElement("p");
                              strin.setAttribute('class','comments_contents'+j+' comment_content comment_content'+j+'');
                              strin.innerText = array2[j].content;
                              $(".comment_btn"+j+"").before(strin);

                         }
                    }
                  } else {
                    for(let x = 0;x < Math.ceil(myLength/5);x++){
                         arcticle_comments[i].innerHTML += "<div class='com_container "+x+" lis'></div>";
                        
                    }
                    for(let y = 0,k = 0;k < Math.floor(myLength/5);y +=5,k++){
                         for(let j = y;j < y+5;j++){
                             
                     let str = 
                         "<div class='comment_all"+j+"'>"+
                         "<img class='comment_avatar comment_avatar"+j+"' src="+array2[j].avatar+">"+
                         "<span class='comment_name comment_name"+j+"'>"+array2[j].nickname+"</span>"+
                         "<div class='comment_btn comment_btn"+j+"'>"+
                         "<span class='iconfont comment_agree comment_agree"+j+"'>&#xe506;</span>"+
                         "<span class='iconfont check_comment check_comment"+j+"'>&#xe8c6; 查看回复</span>"+
                         "<span class='iconfont comment_comment comment_comment"+j+"'>&#xe528; 回复</span>"+
                         "<span class='iconfont comment_disagree comment_disagree"+j+"'>&#xe600; 踩</span>"+
                         "<span class='iconfont comment_report comment_report"+j+"'>&#xe65f; 举报</span>"+
                         "<span class='iconfont comment_delete comment_delete"+j+"'> 删除</span>"+
                         "</div>"+
                         "</div>";
                         let com_container = $(".com_container");
                         com_container[k].innerHTML += str;
                         let strin = document.createElement("p");
                         strin.setAttribute('class','comments_contents'+j+' comment_content comment_content'+j+'');
                         strin.innerText = array2[j].content;
                        $(".comment_btn"+j+"").before(strin);

                    }
               }
               for(let j = Math.floor(myLength/5)*5;j < myLength;j++){
                    let com_container = $(".com_container");
                     
                    com_container[Math.floor(myLength/5)].innerHTML += 
                    "<div class='comment_all"+j+"'>"+
                    "<img class='comment_avatar comment_avatar"+j+"' src="+array2[j].avatar+">"+
                    "<span class='comment_name comment_name"+j+"'>"+array2[j].nickname+"</span>"+
                    "<p class='comment_content comment_content"+j+"'></p>"+
                    "<div class='comment_btn comment_btn"+j+"'>"+
                    "<span class='iconfont comment_agree comment_agree"+j+"'>&#xe506;</span>"+
                    "<span class='iconfont check_comment check_comment"+j+"'>&#xe8c6; 查看回复</span>"+
                    "<span class='iconfont comment_comment comment_comment"+j+"'>&#xe528; 回复</span>"+
                    "<span class='iconfont comment_disagree comment_disagree"+j+"'>&#xe600; 踩</span>"+
                    "<span class='iconfont comment_report comment_report"+j+"'>&#xe65f; 举报</span>"+
                    "<span class='iconfont comment_delete comment_delete"+j+"'> 删除</span>"+
                    "</div>"+
                    "</div>";
                    $(".comment_content"+j+"").text(array2[j].content);
               }
              
          }
             } else {
                    for(let j = 0;j < myLength;j++){
                    arcticle_comments[i].innerHTML +="<div class='comment_all"+j+"'>"+
                    "<img class='comment_avatar comment_avatar"+j+"' src="+array2[j].avatar+">"+
                    "<span class='comment_name comment_name"+j+"'>"+array2[j].nickname+"</span>"+
                    "<p class='comment_content comment_content"+j+"'></p>"+
                    "<div class='comment_btn comment_btn"+j+"'>"+
                    "<span class='iconfont comment_agree comment_agree"+j+"'>&#xe506;</span>"+
                    "<span class='iconfont check_comment check_comment"+j+"'>&#xe8c6; 查看回复</span>"+
                    "<span class='iconfont comment_comment comment_comment"+j+"'>&#xe528; 回复</span>"+
                    "<span class='iconfont comment_disagree comment_disagree"+j+"'>&#xe600; 踩</span>"+
                    "<span class='iconfont comment_report comment_report"+j+"'>&#xe65f; 举报</span>"+
                    "<span class='iconfont comment_delete comment_delete"+j+"'> 删除</span>"+
                    "</div>"+
                    "</div>";
                    $(".comment_content"+j+"").text(array2[j].content);
                    
                    }
                  
                    
               }
               
              
               let com_container = $(".com_container");
               for(let x = 1;x < com_container.length;x++){
                    com_container[x].style.display = "none";
               }
                 
               var comments_input = document.createElement('input');
               comments_input.setAttribute('class','comments_input comments_input'+i+'');
               arcticle_comments[i].appendChild(comments_input);
                    
               var comments_submit = document.createElement('button');
               comments_submit.setAttribute('class','comments_submit comments_submit'+i+'');
               arcticle_comments[i].appendChild(comments_submit);
               var page_btn = document.createElement('div');
               page_btn.setAttribute('class','page_btn page_btn'+i+'');
               $('.comments_input'+i+'').before(page_btn);
               let mysring = "<button class='page_left page_left"+i+"'><</button>"+
                             "<button class='page_right page_right"+i+"'>></button>";
               $('.page_btn'+i+'').append(mysring);
                 
               let btn_number = 0;
               let page_left = document.querySelector(".page_left");
               let page_right = document.querySelector(".page_right");
            
               page_right.onclick = function(){
                    if(btn_number == com_container.length - 1) {
                         btn_number = 0;
                    }
                    btn_number++;
                    for(let i = 0;i < com_container.length;i++){
                         com_container[i].style.display = "none";
                    }
                    com_container[btn_number].style.display = "block";
                         
               }
               page_left.onclick = function(){
                    if(btn_number == 0) {
                         btn_number = com_container.length - 1;
                    }
                    btn_number--;
                    for(let i = 0;i < com_container.length;i++){
                         com_container[i].style.display = "none";
                    }
                    com_container[btn_number].style.display = "block";
               }

                  
               var flag1 = 1;
               for(let x = 0;x < array3.length;x++){
                    $(".check_comment"+x+"").click(function(){
                    var mycomments = document.querySelector(".mycomments");
                    mycomments.style.display = 'block';
                    var mycom_close = document.querySelector(".mycom_close");
                    mycom_close.onclick = function(){
                    mycomments.style.display = 'none';
               }
               $.ajax({
                    type : 'get',
                    data : {userId: localStorage.getItem('myuserId'),
                    commentId: localStorage.getItem('commentnumber'+x+'')},
                    url : base+'/article/getReplies',
                    success : function(data){
                         console.log(data);
                         let mycom_container1 = document.querySelector(".mycom_container1");
                         mycom_container1.innerHTML = '';
                         for(let x = 0;x < data.replies.length;x++){
                              localStorage.setItem('replynumber'+x+'',data.replies[x].replyId);
                              mycom_container1.innerHTML += 
                              "<div class='comment__all comment__all"+x+"'>"+
                              "<img class='comment_avatar1 comment_avatar1"+x+"' src="+data.replies[x].avatar+">"+
                              "<span class='comment_name1 comment_name1"+x+"'>"+data.replies[x].nickname+"</span>"+
                              "<p class='comment_content1 comment_content1"+x+"'>"+data.replies[x].content+"</p>"+
                              "<div class='comment_btn1 comment_btn1"+x+"'>"+
                              "<span class='iconfont comment__agree comment__agree"+x+"'>&#xe506;</span>"+
                              "<span class='iconfont comment__disagree comment__disagree"+x+"'>&#xe600; 踩</span>"+
                              "<span class='iconfont comment_report1 comment_report1"+x+"'>"+data.replies[x].time+"</span>"+
                              "<span class='iconfont comment__delete comment__delete"+x+"'> 删除</span>"+
                              "</div>"+
                              "</div>";
                                     
                         }
                         var array7 = [];
                                         
                         var comment__all = $(".comment__all");
                         console.log("嗯哼"+comment__all.length);

                         for(let mynumber = 0;mynumber < comment__all.length;mynumber++){
                              $(".comment__delete"+mynumber+"").click(function(){
                                   if(e.comments[mynumber].userId == localStorage.getItem('myuserId')){
                                        $(".comment__all"+(mynumber)+"").remove();
                                   }
                                   $.ajax({
                                        type : 'DELETE',
                                        data : {userId: localStorage.getItem('myuserId'),
                                        replyId: localStorage.getItem('replynumber'+(mynumber)+'')},
                                        url : 'http://47.97.204.234:3000/article/deleteReply',
                                                    
                                        success : function(data){
                                                  console.log(data);
                                             }
                                        })
                                   })
                                        if(fals4){
                                             for(let mynumber = 0;mynumber < comment__all.length;mynumber++){
                                                  $(".comment__agree"+mynumber+"").click(function(){
                                                       axios.post('http://47.97.204.234:3000/article/likeReply', {
                                                       userId: localStorage.getItem('myuserId'),
                                                       replyId: localStorage.getItem('replynumber'+(mynumber)+''),
                                                       like: mylike2
                                                       })
                                                       .then(function (response) {
                                                            if(mylike2) {
                                                                 mylike2 = false;
                                                            } else {
                                                                 mylike2 = true;
                                                            }
                                                       })
                                                       .catch(function (error) {
                                                            console.log(error);
                                                       });
                                                  })
                                                        
                                             }
                                             fals4 = 0;
                                        }
                                        if(fals5){
                                             for(let mynumber = 0;mynumber < comment__all.length;mynumber++){
                                                  $(".comment__disagree"+mynumber+"").click(function(){
                                                       axios.post('http://47.97.204.234:3000/article/dislikeReply', {
                                                       userId: localStorage.getItem('myuserId'),
                                                       replyId: localStorage.getItem('replynumber'+(mynumber)+''),
                                                       dislike: mylike3
                                                       })
                                                       .then(function (response) {
                                                            if(mylike3) {
                                                                 mylike3 = false;
                                                            } else {
                                                                 mylike3 = true;
                                                            }
                                                             
                                                       })
                                                       .catch(function (error) {
                                                            console.log(error);
                                                       });
                                                  })
                                             }
                                             fals5 = 0;
                                        }     
                                   }
                             }
                         })
                    })
               }
               for(let i = 0;i < myartiId.length;i++){
                    $(".comments_submit"+i+"").click(function(){
                         $.get(base+"/user/getInfo",
                         {"userId":localStorage.getItem('myuserId')},
                         function(e){
                              img1.src = e.info.avatar;
                              mat_name[0].innerHTML = e.info.nickname;
                              mygetname(e.info);
                         })

                         function mygetname(myinfo){
                              var string1 = 
                              "<img class='comment_avatar' src="+myinfo.avatar+">"+
                              "<span class='comment_name'>"+myinfo.nickname+"</span>"+
                              "<p class='comment_content'>"+$(".comments_input"+i+"").val()+"</p>"+
                              "<div class='comment_btn'>"+
                              "<span class='iconfont comment_agree'>&#xe506;</span>"+
                              "<span class='iconfont check_comment'>&#xe8c6; 查看回复</span>"+
                              "<span class='iconfont comment_comment'>&#xe528; 回复</span>"+
                              "<span class='iconfont comment_disagree'>&#xe600; 踩</span>"+
                              "<span class='iconfont comment_report'>&#xe65f; 举报</span>"+
                              "<span class='iconfont comment_delete'> 删除</span>"+
                              "</div>";
                              $(".page_btn").before(string1);
                         }
                         axios.post(base+'/article/comment', {
                         userId: localStorage.getItem('myuserId'),
                         articleId: array4[i],
                         content: $(".comments_input"+i+"").val()
                         })
                         .then(function (response) {
                         })
                         .catch(function (error) {
                             console.log(error);
                         });
                    })
               }
               var comment_comment = $(".comment_comment"),
               comments_input = $(".comments_input"),
               comments_submit = $(".comments_submit");
               for(let i = 0;i < comments_input.length;i++){
                    if($(".comments_input").val() != ''){
                         comments_submit[i].style.background = '#0084FF';
                    } else {
                         comments_submit[i].style.background = '#80C2FF';
                    }
               var comment_btn = $(".comment_btn");
               for(let yournumber = 0;yournumber < array5.length;yournumber++){
                    $(".comment_delete"+yournumber+"").click(function(){
                         if(e.comments[yournumber].userId == localStorage.getItem('myuserId')){
                              $(".comment_all"+yournumber+"").remove();
                         }
                         $.ajax({
                              type : 'DELETE',
                              data : {userId: localStorage.getItem('myuserId'),
                              commentId: localStorage.getItem('commentnumber'+yournumber+'')},
                              url : base+'/article/deleteComment',
                              success : function(data){
                                   console.log(data);
                              }
                         })
                    })
                    
               }
               if(fals3){
                    for(var number = 0;number < comment_comment.length;number++){
                         var string3 = 
                         "<div class='mycomment_all mycomment_all"+number+"'>"+
                         "<input type='text' class='mycomment_input mycomment_input"+number+"'>"+
                         "<button type='submit' class='mycomment_submit mycomment_submit"+number+"'>发送</button>"+
                         "</div>";
                         $(".comment_all"+number+"").append(string3);
                         fals3 = 0;
                    }
               }
               $(".mycomment_all").css("display","none");
               
               let mycomment_all = document.getElementsByClassName('mycomment_all');
               for(let number = 0;number < comment_comment.length;number++){
                    $(".comment_comment"+number+"").click(function(){
                         console.log("enenen"+number);
                         
                    if(1){
                         $(".mycomment_all"+number+"").css("display","block");
                         mycomment_all[number].style.display = 'block';
                         
                         tool = 0;
                    } else {
                         mycomment_all[number].style.display = 'none';
                         $(".mycomment_all"+number+"").css("display","none");
                         tool = 1;
                    }
                    $(".mycomment_submit"+number+"").click(function(){
                         $.get(base+"/user/getInfo",
                         {"userId":localStorage.getItem('myuserId')},
                         function(e){
                              img1.src = e.info.avatar;
                              mat_name[0].innerHTML = e.info.nickname;
                              mygetname1(e.info);
                         })
                         function mygetname1(myinfo){
                              var string3 = 
                              "<img class='comment_avatar' src="+myinfo.avatar+">"+
                              "<span class='comment_name1'>"+myinfo.nickname+"</span>"+
                              "<p class='comment_content1'>"+$(".mycomment_input"+number+"").val()+"</p>"+
                              "<div class='comment_btn1'>"+
                              "<span class='iconfont comment__agree'>&#xe506;</span>"+
                              "<span class='iconfont comment__disagree'>&#xe600; 踩</span>"+
                              "<span class='iconfont comment__delete'> 删除</span>"+
                              "</div>";
                              $(".mycom_container1").append(string3);
                         }
                         $.ajax({
                              type : 'post',
                              data : {userId: localStorage.getItem('myuserId'),
                              commentId: localStorage.getItem('commentnumber'+number+''),
                              content: $(".mycomment_input"+number+"").val()},
                              url : base+'/article/reply',
                              success : function(data){}
                              })
                         })
                    })
               }
               var comment_agree = $(".comment_agree");
               if(fals){
                    for(let x = 0;x < comment_agree.length;x++){
                         $(".comment_agree"+x+"").click(function(){
                              axios.post(base+'/article/likeComment', {
                              userId: localStorage.getItem('myuserId'),
                              commentId: localStorage.getItem('commentnumber'+x+''),
                              like: mylike
                         })
                              .then(function (response) {
                                   console.log(response);
                                   if(mylike) {
                                        mylike = false;
                                   } else {
                                        mylike = true;
                                   }
                              })
                              .catch(function (error) {
                                   console.log(error);
                              });
                         });
                    }
                    fals = 0;
               }
             var comment_disagree = $(".comment_disagree");
             if(fals1){
               for(let x = 0;x < comment_disagree.length;x++){
                    $(".comment_disagree"+x+"").click(function(){
                         console.log("me");
                         axios.post(base+'/article/dislikeComment', {
                         userId: localStorage.getItem('myuserId'),
                         commentId: localStorage.getItem('commentnumber'+x+''),
                         dislike: mylike1
                         })
                         .then(function (response) {
                              console.log(response);
                              if(mylike1) {
                                   mylike1 = false;
                              } else {
                                   mylike1 = true;
                              }
                         })
                         .catch(function (error) {
                              console.log(error);
                         });
     
                       });
                    }
                     fals1 = 0;
               }
          }
          })
     
          arcticle_comments[i].style.display = 'block';
          flag = 0;
          } else {
               arcticle_comments[i].style.display = 'none';
               $(".com_container").remove();
               $(".page_btn").remove();
               flag = 1;
          }
             
     }
}
     }

