/* 顶部图片轮播 */
//获得slider插件对象
var gallery = mui('.mui-slider');
gallery.slider({
  interval: 1500 //自动轮播周期，若为0则不自动播放，默认为0；
});