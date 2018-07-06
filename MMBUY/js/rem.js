/**
 * Created by gggzzz on 2018/7/3.
 */



var design = 750; // 设计图大小
var base = 50;  // 基准值

function responsive() {
  // 获取屏幕宽度
  var pageWidth = window.innerWidth;

  if ( pageWidth < 320 ) {
    pageWidth = 320;
  }

  if ( pageWidth > 750 ) {
    pageWidth = 750;
  }

  // 根据屏幕宽度, 算出当前屏幕的 html 根字体大小
  var size = pageWidth / design * base;

  // 设置给 html 元素
  document.documentElement.style.fontSize = size + "px";
}

responsive();
// 监听屏幕变化
window.addEventListener("resize", responsive);
