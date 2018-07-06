/**
 * Created by gggzzz on 2018/7/3.
 */



$(function(){


  //1.发送ajax请求，通过模板引擎获取菜单栏数据
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getindexmenu",
    dataType:'json',
    success:function(info){
      console.log(info);



      var htmlStr=template("tmp",info);
    $(".mmm-nav").html(htmlStr);


    }
  })


  //1-1.点击更多，来回切换显示
  //$(".more").nextAll().css('display','none');
  $(".mmm-nav").on("click",".more",function(){
    //console.log(1);
    $(this).nextAll().stop().slideToggle();
  })
  //2.发送ajax请求，通过模板引擎获取折扣列表中的数据
  $.ajax({
    type:'get',
    url:"http://127.0.0.1:9090/api/getmoneyctrl",
    dataType:"json",
    success:function(info){
      console.log(info);


      var obj=template("tpl",info);
      $(".recom-main").html(obj);
    }
  })


//3.点击按钮回到顶部
  $(".retu").click(function(){
    $("body,html").animate({
      scrollTop:0
    },1000)
  })



})
