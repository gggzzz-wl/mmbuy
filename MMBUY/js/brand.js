/**
 * Created by gggzzz on 2018/7/6.
 */


$(function(){

  function getSearch(name) {
    var search = location.search;
    // 中文解码
    search = decodeURI( search );
    search = search.slice( 1 );
    var arr = search.split("&");  //  ["categoryId=1", "category=空调"]
    var obj = {};
    arr.forEach(function( v, i ) {
      var key = v.split("=")[0];  // categoryId
      var value = v.split("=")[1]; // 1
      obj[ key ] = value;
    });
    return obj[name];
  }

  var brandtitleid=getSearch("brandtitleId");
  //console.log(brandtitleId);

  var productId=getSearch("productId");




  //<!--1.根据品牌的标题id获取该品牌标题下的十大品牌列表 并渲染到十大品牌列表里面-->
  $.ajax({
    type:"get",
    url: "http://127.0.0.1:9090/api/getbrand",
    data:{
      brandtitleid:brandtitleid
    },
    dataType:"json",
    success:function(info){
      console.log(info);

      var htmlStr=template("tmp",info)
      $(".main-last").html(htmlStr);
    }
  })


  //2.根据品牌的标题id获取该品牌标题下的十大品牌的销量排行列表商品 并渲染到该品牌的销量排行商品列表里面
  //var productId;
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getbrandproductlist",
    data:{
      brandtitleid:brandtitleid,
      pagesize:4
    },
    dataType:"json",
    success:function(info){
      console.log(info);

      //productId=info.result[0].productId;

      var htmlStr1=template("tpl",info)
      $(".pro").html(htmlStr1);
    }
  })

  //3.销量排行商品的评论
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getproductcom",
    data:{
      productid:1
    },
    dataType:'json',
    success:function(info){
      console.log(info);
      var htmlStr3=template("tpl3",info)
      $(".com-box").html(htmlStr3);
    }
  })










})
