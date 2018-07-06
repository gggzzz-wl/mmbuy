/**
 * Created by gggzzz on 2018/7/5.
 */




$(function(){


  //用来国内折扣商品列表数据 并渲染到页面上
 function render(){
   $.ajax({
     type:"get",
     url:'http://127.0.0.1:9090/api/getinlanddiscount',
     dataType:'json',
     success:function(info){
       console.log(info);

       var htmlStr=template("tmp",info);
       $(".discount").html(htmlStr);
     }
   })
 }
  render();

  //实现延迟加载功能










  //返回顶部功能
  $(".retu").click(function(){
    $("body,html").animate({
      scrollTop:0
    },1000)
  })


})