/*
* @Author: YangKun
* @Date:   2017-12-02 10:20:37
 * @Last Modified by: YangKun
 * @Last Modified time: 2017-12-04 18:14:53
*/

/* 大屏幕点击面包按钮,侧边导航栏的显示与隐藏 */
$('.hamburg-button').on('click', function (){
  $('.navbar').toggleClass('hidden');
  $('.page-content').toggleClass('col-md-10');
  $('.page-content').toggleClass('col-md-12');
  if($('.page-content-wrapper').css('margin-left') != '-15px') {
    $('.page-content-wrapper').css('margin-left', '-15px');
  }else {
    $('.page-content-wrapper').css('margin-left', '-5%');
  };
});
/* 首页图表 */
var secondCanvas = $('.chartOne')[0];
var myChartOne = echarts.init(secondCanvas);
optionOne = {
  color : ['#ff0000'],
  title : {
    text: '2017年注册人数',
    subtext: '',
    x:'left'
  },
  tooltip : {
    trigger: 'axis',
    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis : [
    {
      type : 'category',
      data : ['1月', '2月', '3月', '4月', '5月', '6月', '7'],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis : [
    {
      type : 'value'
    }
  ],
  series : [
    {
      name:'直接访问',
      type:'bar',
      barWidth: '60%',
      data:[1000, 2000, 3500, 1200, 1100, 2100, 2200]
    }
  ]
};

myChartOne.setOption(optionOne);
var firstCanvas = $('.chartTwo')[0];
var myChartTwo = echarts.init(firstCanvas);
var optionSecond = {
  title : {
    text: '热门品牌销售',
    subtext: '2017年6月',
    x:'center'
  },
  tooltip : {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['耐克','阿迪','新百伦','安踏','李宁']
  },
  series : [
    {
      name: '访问来源',
      type: 'pie',
      radius : '55%',
      center: ['50%', '60%'],
      data:[
        {value:335, name:'耐克'},
        {value:310, name:'阿迪'},
        {value:234, name:'新百伦'},
        {value:135, name:'安踏'},
        {value:1548, name:'李宁'}
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
myChartTwo.setOption(optionSecond);
/* artTemplate调用事件函数 */
//一级分类调用
$('.first-stage').on('click', function() {
  var firstStageRender = template.compile(firstStage);
  var firstStageHtml = firstStageRender({data:firstStageData});
  $('.content').html(firstStageHtml);
  $('.breadcrumb').html('<li><a href="./index.html">管理系统</a></li><li class="active"><a class="stageManage" href="javascript:;">分类管理</a></li><li>一级分类</li>');
});
//路径导航一级分类调用
$('.main-content').on('click', '.stageManage', function() {
  var firstStageRender = template.compile(firstStage);
  var firstStageHtml = firstStageRender({data:firstStageData});
  $('.content').html(firstStageHtml);
  $('.breadcrumb').html('<li><a href="./index.html">管理系统</a></li><li class="active"><a class="stageManage" href="javascript:;">分类管理</a></li><li>一级分类</li>');
});
//二级分类调用
$('.second-stage').on('click', function () {
  var secondStageRender = template.compile(secondStage);
  var secondStageHtml = secondStageRender({data:secondStageData});
  $('.content').html(secondStageHtml);
  $('.breadcrumb').html('<li><a href="./index.html">管理系统</a></li><li class="active"><a class="stageManage" href="javascript:;">分类管理</a></li><li>二级分类</li>');
});
//用户管理调用
$('.user-management').on('click', function () {
  var userManagementRender = template.compile(userManagement);
  var userManagementHtml = userManagementRender({data:userManagementData});
  $('.content').html(userManagementHtml);
  $('.breadcrumb').html('<li><a href="./index.html">管理系统</a></li><li>用户管理</li>');
});






/* 测试数据 */
var firstStageData = [
  {
    "id": 1,
    "categoryName": "女装",
    "isDelete": 1
  },
  {
    "id": 2,
    "categoryName": "男装",
    "isDelete": 1
  },
  {
    "id": 3,
    "categoryName": "家电",
    "isDelete": 1
  },
  {
    "id": 4,
    "categoryName": "家具",
    "isDelete": 1
  },
  {
    "id": 5,
    "categoryName": "箱包",
    "isDelete": 1
  },
  {
    "id": 6,
    "categoryName": "珠宝",
    "isDelete": 1
  }
];

var secondStageData = {
  page: 1,
  size: 5,
  data:
   [  {
       id: 1,
       brandName: '耐克',
       categoryId: 1,
       brandLogo: '/pic/1.jpg',
       isDelete: 1,
       hot: 1 },
      {
       id: 2,
       brandName: '阿迪',
       categoryId: 1,
       brandLogo: '/pic/2.jpg',
       isDelete: 1,
       hot: 1 },
      {
       id: 3,
       brandName: '新百伦',
       categoryId: 1,
       brandLogo: '/pic/3.jpg',
       isDelete: 1,
       hot: 1 },
      {
       id: 4,
       brandName: '哥伦比亚',
       categoryId: 1,
       brandLogo: '/pic/4.jpg',
       isDelete: 1,
       hot: 0 },
      {
       id: 5,
       brandName: '匡威',
       categoryId: 1,
       brandLogo: '/pic/5.jpg',
       isDelete: 1,
       hot: 1 } ],
  count: 9 };


var userManagementData = {
  page: 1,
  size: 5,
  data:
   [  {
       id: 1,
       username: 'klt',
       password: '456',
       mobile: '13902060052',
       isDelete: 1 },
      {
       id: 2,
       username: 'zhoushugang',
       password: '4QrcOUm6Wau+VuBX8g+IPg==',
       mobile: '15102324243',
       isDelete: 1 },
      {
       id: 3,
       username: 'zhoushugang12',
       password: '4QrcOUm6Wau+VuBX8g+IPg==',
       mobile: '15102334243',
       isDelete: 1 } ],
  count: 3
};
