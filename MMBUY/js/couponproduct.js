/**
 * Created by gggzzz on 2018/7/5.
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

  var couponid=getSearch("couponId");
  console.log(couponid);
  //优惠券列表
  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getcouponproduct',
    data:{
      couponid:couponid
    },
    dataType:'json',
    success:function(info){
      console.log(info);


      var htmlStr=template("tmp",info)
      $(".main-info").html(htmlStr);
    }
  })
})
