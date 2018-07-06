/**
 * Created by gggzzz on 2018/7/5.
 */



$(function () {

  var shopId;
  var areaId;
  var flag = true;
  render();


  //1.下拉京东-------------------------------------------------------------------------
  $(".nav .list .jd-a").click(function(){
    if(flag){
      flag = false;
      $.ajax({
        type:"get",
        url:'http://127.0.0.1:9090/api/getgsshop',
        dataType:"json",
        success:function(info){
          console.log(info);
          var obj=template("tpl",info);
          $(".nav .jd-ul").html(obj);
          $(".nav .jd-ul").slideDown();
          var lis=$(".jd-ul li")//获取jd下面所有的li
          lis.each(function(i,v){
            $(this).click(function(){
              shopId=$(this).find('a').data("shopid");

              console.log(shopId);

              var shopName=$(this).find('a').data("shopname");
              console.log(shopName);
              $(".jd-name").text(shopName);

              $(this).addClass("active").siblings().removeClass("active");//显示切换类名
              $(this).parent().hide()//隐藏jd-ul
              render(shopId,areaId);
            })
          })
        }
      })
    } else {
      $('.nav .jd-ul').stop().slideToggle().siblings().hide();
    }

  })



  //2.下拉华北-------------------------------------------------------------------------
  $(".nav .list .hb-a").click(function(){

    if(flag){
      //flag=false;
      $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getgsshoparea",
        dataType:'json',
        success:function(info){
          console.log(info);

          var htmlSt=template("thb",info);
          $(".nav .hb-ul").html(htmlSt);
          $(".nav .hb-ul").slideDown();


          var lists=$(".hb-ul li")//获取jd下面所有的li
          lists.each(function(i,v){
            $(this).click(function(){
              areaId=$(this).find('a').data("areaid");
              console.log(areaId);

              var areaName=$(this).find('a').data("areaname");
              $(".hb-name").text(areaName);
              console.log(areaName);

              $(this).addClass("active").siblings().removeClass("active");//显示切换类名
              $(this).parent().hide()//隐藏hb-ul

              render(shopId,areaId);
            })
          })
        }
      })
    }else{
      $(".nav .hb-ul").stop().slideToggle().siblings().hide();
    }


  })





  //3.凑单品商品列表-------------------------------------------------------------------------
  function render(shopId,areaId) {
    $.ajax({
      type: "get",
      url: 'http://127.0.0.1:9090/api/getgsproduct',
      data: {
        shopid: shopId || 0,
        areaid: areaId || 0
      },
      dataType: "json",
      success: function (info) {
        //console.log(info);

        var htmlStr=template("tmp",info)
        $(".product-info").html(htmlStr);
      }
    })
  }




})