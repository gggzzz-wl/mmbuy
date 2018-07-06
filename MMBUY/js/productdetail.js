/**
 * Created by gggzzz on 2018/7/4.
 */



$(function () {

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


  //通过地址栏传参方法获取后面的值


  var brandName = getSearch('brandName');
  //console.log(brandName);

  var  productid = getSearch('productId');
  //console.log( productid);



  var category=getSearch('category');
  //console.log(category);

  var brandName=getSearch('brandName');
  //console.log(brandName);


  var obj={
    category:category,
    brandName:brandName
  }

  var htmlStr1 = template("tpl", obj);
  $(".productList-header").html(htmlStr1);

//获取商品详情

  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getproduct",
    data: {
      productid: productid
    },
    dataType: "json",
    success: function (info) {
      console.log(info);

      var htmlStr = template("tmp", info);
      $(".productList-main").html(htmlStr);
    }
  })



//  获取商品评论
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getproductcom",
    data:{
      productid:productid
    },
    dataType:"json",
    success:function(info){


      var htmlst=template("tmm",info);
      $(".main").html(htmlst);
    }
  })




})
