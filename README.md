# 数据可视化

## DAY01-可视化项目

### 01-项目介绍

​	应对现在数据可视化的趋势，越来越多企业需要在很多场景(营销数据，生产数据，用户数据)下使用，可视化图表来展示体现数据，让数据更加直观，数据特点更加突出。我们引入 '立可得' 数据可视化项目。

​	该项目除了使用了基础的DIV+CSS布局，还引入了一些C3技术，还引入了各类图表的绘制，以及高级的地图数据可视化案例。主要功能有：饼状图、柱状图、线形图、地图 ...

![1576208177581](docs/media/1576208177581.png)

课程目标：

- 实践css布局相关技术
- 实践jquery相关技术
- 掌握echarts的基本使用

### 02-使用技术

完成该项目需要具备以下知识：

- div + css 布局
- flex 布局
- css3动画
- css3渐变
- css3边框图片
- 原生js + jquery 使用
- rem适配
- **echarts基础**

粗略代码统计：

- css  580行
- html  450行
- js 400行 (有效)

### 03-Echarts-介绍

> ECharts，一个使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），底层依赖矢量图形库 [ZRender](https://github.com/ecomfe/zrender)，提供直观，交互丰富，可高度个性化定制的数据可视化图表。

大白话：

- 是一个JS库
- 性能好可流畅运行PC与移动设备
- 兼容主流浏览器
- 提供很多常用图表，且可**定制**。
  - [折线图](https://www.echartsjs.com/zh/option.html#series-line)、[柱状图](https://www.echartsjs.com/zh/option.html#series-bar)、[散点图](https://www.echartsjs.com/zh/option.html#series-scatter)、[饼图](https://www.echartsjs.com/zh/option.html#series-pie)、[K线图](https://www.echartsjs.com/zh/option.html#series-candlestick)



### 04-Echarts-体验

官方教程：[五分钟上手ECharts](https://www.echartsjs.com/zh/tutorial.html#5 分钟上手 ECharts)

自己步骤：

- 下载echarts  https://github.com/apache/incubator-echarts/tree/4.5.0  
- 引入echarts  `dist/echarts.min.js`
- 准备一个具备大小（宽高）的 DOM

```html
<div id="main" style="width: 600px;height:400px;"></div>
```

- 初始化echart实例

```js
var myChart = echarts.init(document.getElementById('main'));
```

- 指定图表的配置项和数据 (根据文档提供示例找到option)

```js
var option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
};
```

- 使用刚指定的配置项和数据显示图表

```js
myChart.setOption(option);
```

### 05-Echarts-基础配置

> 需要了解的主要配置：`series` `xAxis` `yAxis` `grid` `tooltip` `title` `legend` `color` 

- series
  - 系列列表。每个系列通过 `type` 决定自己的图表类型
  - 大白话：图标数据，指定什么类型的图标，可以多个图表重叠。
- xAxis：直角坐标系 grid 中的 x 轴
- yAxis：直角坐标系 grid 中的 y 轴
- grid：直角坐标系内绘图网格
- title：标题组件
- tooltip：提示框组件
- legend：图例组件
- color：调色盘颜色列表

演示代码：

```js
var option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        name:'线形图'
    },
    {
        data: [22, 333, 111, 222, 444, 666, 777],
        type: 'bar',
        name:'饼状图'
    }],
    grid: {
        show: true
    },
    title: {
        text: '标题'
    },
    tooltip: {
        padding: 20
    },
    legend: {
        data: ['线形图']
    },
    color: ['red','green']
};
```



### 06-REM适配

- 设计稿是1920px ，约定rem基准值为 24px 。
- 那么：设备宽度与rem基准值比例为 80 。
- 结论：适配设备的时候保持80的比例即可。
- 将来：换算rem单位的时候，使用24px基准值即可。

实现代码，在页面底部加载`index.js`文件实现动态设置基准值逻辑：

```html
<script src="js/index.js"></script>
```

```js
// 实现rem适配
(function () {
  var setFont = function () {
    var html = document.documentElement
    var width = html.clientWidth
    if (width < 1024) width = 1024
    if (width > 1920) width = 1920
    var fontSize = width / 80 + 'px'
    html.style.fontSize = fontSize
  }
  setFont()
  window.onresize = function () {
    setFont()
  }
})()
```



### 07-基础布局

html结构：

```html
<body>
  <div class="viewport">
  	<div class="column">
      <!--概览-->                                    
    	<div></div>
			<!--监控-->                                    
    	<div></div> 
			<!--点位-->                                    
    	<div></div>                                           
    </div>
    <div class="column">
      <!--地图-->                                    
    	<div></div>
			<!--用户-->                                    
    	<div></div>                                          
    </div>
    <div class="column">
      <!--订单-->                                    
    	<div></div>
			<!--销售-->                                    
    	<div></div>                                  
    	<div>
      	<!--渠道-->                                    
    		<div></div>
      	<!--季度-->                                    
    		<div></div>
      </div>
			<!--排行-->                                    
    	<div></div>                                     
    </div>                        
  </div>
</body>
```

- body 设置背景图 ，行高1.15
- viewport 主体容器，限制最小宽度1024px，与最大宽度1920px，最小高度780px。
  - 需要居中显示
  - 使用logo.png做为背景图，在容器内显示
  - 内间距 88px 20px 0
- column 列容器，分三列，占比 3：4：3
  - 中间容器外间距  32px  20px 0

css样式：

```css
/* 基础布局 */
body{
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  font-size: 0.5rem;
  line-height: 1.15;
  background: url(../images/bg.jpg) no-repeat 0 0 / cover;
}
h4,h3,ul{
  margin: 0;
  padding: 0;
  font-weight: normal;
}
ul{
  list-style: none;
}
a{
  text-decoration: none;
}
.viewport{
  max-width: 1920px;
  min-width: 1024px;
  margin: 0 auto;
  min-height: 780px;
  padding: 3.667rem 0.833rem 0;
  background: url(../images/logo.png) no-repeat 0 0 / contain;
  display: flex;
}
.column{
  flex: 3;
  position: relative;
}
.column:nth-child(2){
  flex: 4;
  margin: 1.333rem 0.833rem 0;
}
```



### 08-边框图片

> css3中自适应边框图片运用：

![1576483576664](docs/media/1576483576664.png)

组合写法：

```css
border-image: url("images/border.jpg") 167/20px round;
```

拆分写法：

```css
border-image-source: url("images/border.jpg");
border-image-slice: 167 167 167 167;
border-image-width: 20px;
border-image-repeat: round;
```

解释：

- 边框图片资源地址
- 裁剪尺寸（上 右 下 左）单位默认px，可使用百分百。
- 边框图片的宽度，默认边框的宽度。
- 平铺方式：
  - stretch 拉伸（默认）
  - repeat 平铺，从边框的中心向两侧开始平铺，会出现不完整的图片。
  - round 环绕，是完整的使用切割后的图片进行平铺。

DEMO代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>边框图片</title>
    <style>
        ul{
            margin: 0;
            padding: 0;
            list-style: none;
        }
        li{
            width: 350px;
            height: 160px;
            border: 20px solid #ccc;
            margin-top: 20px;
        }
        li:nth-child(1){
            /*border-image: url("images/border.jpg") 167/20px round;*/
            border-image-source: url("images/border.jpg");
            border-image-slice: 167 167 167 167;
            border-image-width: 20px;
            /*环绕  是完整的使用切割后的图片进行平铺*/                    
            border-image-repeat: round; 
        }
        li:nth-child(2){
            /*平铺 从边框的中心向两侧开始平铺 会出现不完整的图片*/                                         border-image: url("images/border.jpg") 167/20px repeat;
        }
        li:nth-child(3){
            /*默认的平铺方式*/
            border-image: url("images/border.jpg") 167/20px stretch;
        }
    </style>
</head>
<body>
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>
</body>
</html>
```



### 09-公用面板样式

> 所有的面板的基础样式是一致的，提前布局好。

切割示例图：

![1576489873296](docs/media/1576489873296.png)

- 面板 .panel 
  - 容器 .inner
    - 标题 h3

```css
/* 面板样式 */
.panel{
  box-sizing: border-box;
  border: 2rem solid transparent;
  border-width: 2.125rem 1.583rem 0.833rem 5.5rem;
  border-image: url(../images/border.png) 51 38 21 132;
  margin-bottom: 0.833rem;
  position: relative;
}
.panel .inner{
  padding: 1rem 1.5px;
  position: absolute;
  top: -2.125rem;
  right: -1.583rem;
  bottom: -0.833rem;
  left: -5.5rem;
}
.panel h3{
  font-size: 0.833rem;
  color: #fff;
}
```



### 10-概览区域-布局

html结构：

```html
      <div class="overview panel">
        <div class="inner">
          <div class="item">
            <h4>2,190</h4>
            <span>
              <i class="icon-dot" style="color: #006cff"></i>
              设备总数
            </span>
          </div>
          <div class="item">
            <h4>190</h4>
            <span>
              <i class="icon-dot" style="color: #6acca3"></i>
              季度新增
            </span>
          </div>
          <div class="item">
            <h4>3,001</h4>
            <span>
              <i class="icon-dot" style="color: #6acca3"></i>
              运营设备
            </span>
          </div>
          <div class="item">
            <h4>108</h4>
            <span>
              <i class="icon-dot" style="color: #ed3f35"></i>
              异常设备
            </span>
          </div>
        </div>
      </div>
```

样式描述：

- 容器高度 110px
- h4字体  28px   #fff   左边距 4.8px   下间隙 8px
- span字体  16px  #4c9bfd

```css
/* 概览区域 */
.overview{
  height: 4.583rem;
}
.overview .inner{
  display: flex;
  justify-content: space-between;
}
.overview h4{
  font-size: 1.167rem;
  padding-left: 0.2rem;
  color: #fff;
  margin-bottom: 0.333rem
}
.overview span{
  font-size: 0.667rem;
  color: #4c9bfd;
}
```



### 11-监控区域-布局

html结构：

```html
      <!--监控-->
      <div class="monitor panel">
        <div class="inner">
          <div class="tabs">
            <a href="javascript:;" data-index="0" class="active">故障设备监控</a>
            <a href="javascript:;" data-index="1">异常设备监控</a>
          </div>
          <div class="content" style="display: block;">
            <div class="head">
              <span class="col">故障时间</span>
              <span class="col">设备地址</span>
              <span class="col">异常代码</span>
            </div>
            <div class="marquee-view">
              <div class="marquee">
                <div class="row">
                  <span class="col">20180701</span>
                  <span class="col">11北京市昌平西路金燕龙写字楼</span>
                  <span class="col">1000001</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190601</span>
                  <span class="col">北京市昌平区城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190704</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000003</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20180701</span>
                  <span class="col">北京市昌平区建路金燕龙写字楼</span>
                  <span class="col">1000004</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000005</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000006</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建西路金燕龙写字楼</span>
                  <span class="col">1000007</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000008</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000009</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190710</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000010</span>
                  <span class="icon-dot"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="head">
              <span class="col">异常时间</span>
              <span class="col">设备地址</span>
              <span class="col">异常代码</span>
            </div>
            <div class="marquee-view">
              <div class="marquee">
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000001</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190703</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190704</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190705</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190706</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190707</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190708</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190709</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190710</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
```

结构解释：

- .tabs  标签选项   加上active激活选项  默认激活第一个选项
- .content  切换内容  加上`style="display: block;"`显示内容   默认激活第一个内容

样式描述：

- .inner 容器内间距  24px  0
- .tabs 容器内间距 0 36px
  - a 容器  颜色： #1950c4  内间距：0 27px  字体：18px
  - 第一个a容器  去除左侧内间距   加上右侧2px宽度边框#00f2f1
  - 激活的时候  颜色白色
- .content容器
  - 占满剩余高度  flex:1
  - 默认隐藏
- .head 容器
  - 行高 1.05  背景 rgba(255, 255, 255, 0.1)  内间距  12px 36px  颜色 #68d8fe 字体大小 14px
- row 容器
  - 行高 1.05  内间距  12px 36px  颜色 #68d8ff 字体大小 12px
  - .icon-dot 字体图标   绝对定位  左边0.64rem  透明度0
  - 鼠标经过后：背景 rgba(255, 255, 255, 0.1)  透明度1
- col容器
  - 宽度：3.2rem   8.4rem    3.2rem
  - 第二个col   一行不换行  溢出  省略

```css
/* 监控区域 */
.monitor{
  height: 20rem;
}
.monitor .inner{
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
}
.monitor .tabs{
  padding: 0 1.5rem;
  margin-bottom: 0.75rem;
  display: flex;
}
.monitor .tabs a{
  color:#1950c4;
  font-size: 0.75rem;
  padding: 0 1.125rem;
}
.monitor .tabs a:first-child{
  padding-left: 0;
  border-right: 0.083rem solid #00f2f1;
}
.monitor .tabs a.active{
  color: #fff;
}
.monitor .content{
  flex: 1;
  position: relative;
  display: none;
}
.monitor .head{
  display: flex;
  justify-content: space-between;
  line-height: 1.05;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1.5rem;
  color: #68d8fe;
  font-size: 0.583rem;
}
.monitor .row{
  display: flex;
  justify-content: space-between;
  line-height: 1.05;
  font-size: 0.5rem;
  color: #61a8ff;
  padding: 0.5rem 1.5rem;
}
.monitor .row .icon-dot{
  position: absolute;
  left: 0.64rem;
  opacity: 0;
}
.monitor .row:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #68d8fe;
}
.monitor .row:hover .icon-dot{
  opacity: 1;
}
.monitor .col:first-child{
  width: 3.2rem;
}
.monitor .col:nth-child(2){
  width: 8.4rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.monitor .col:nth-child(3){
  width: 3.2rem;
}
```



### 12-监控区域-效果

切换功能：

- 绑定 标签页点击 事件
- 点击的时候获取data-index的值
- 当前容器加active其他容器移除active
- index对应的内容容器显示其他容器隐藏

```js
  // 切换
  $('.monitor').on('click','.tabs a', function(){
    $(this).addClass('active').siblings().removeClass('active')
    $('.monitor .content').eq(this.dataset.index).show().siblings('.content').hide()
  })
```

动画功能：

- 实现思路：
  - 先克隆列表，追加在后面
  - marquee-view 占满剩余高度，溢出隐藏
    - 绝对定位，top 1.6rem bottom 0 
    - 宽度100%，溢出隐藏
  - 使用animation实现动画
  - 使用 translateY 向上位移 50%
  - 动画时间15s，匀速播放，循环执行。

js代码：

```js
  // 动画
  $('.marquee').each(function(){
    var $cloneList = $(this).children().clone()
    $(this).append($cloneList)
  })
```

css代码：

```css
/* 动画 */
.monitor .marquee-view{
  position: absolute;
  width: 100%;
  top: 1.6rem;
  bottom: 0;
  overflow: hidden;
}
.monitor .marquee{
  animation: scroll-top 15s linear infinite;
}
.monitor .marquee:hover{
  animation-play-state: paused;
}
@keyframes scroll-top {
  0%{}
  100%{
    transform: translateY(-50%);
  }
}
```



### 13-点位区域-布局

html结构：

```html
      <!-- 点位 -->
      <div class="point panel">
        <div class="inner">
          <h3>点位分布统计</h3>
          <div class="chart">
            <div class="pie"></div>
            <div class="data">
              <div class="item">
                <h4>320,11</h4>
                <span>
                  <i class="icon-dot" style="color: #ed3f35"></i>
                  点位总数
                </span>
              </div>
              <div class="item">
                <h4>418</h4>
                <span>
                  <i class="icon-dot" style="color: #eacf19"></i>
                  本月新增
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
```

css样式：

```css
/* 点位 */
.point {
  height: 14.167rem;
}
.point .chart {
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
}
.point .pie {
  width: 13rem;
  height: 10rem;
  margin-left: -0.4rem;
}
.point .data {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 7rem;
  padding: 1.5rem 1.25rem;
  box-sizing: border-box;
  background-image: url(../images/rect.png);
  background-size: cover;
}
.point h4 {
  margin-bottom: 0.5rem;
  font-size: 1.167rem;
  color: #fff;
}
.point span {
  display: block;
  color: #4c9bfd;
  font-size: 0.667rem;
}
```



### 14-点位区域-饼图

实现步骤：

- 从官方示例中找到最接近项目需求的例子，适当修改。
- 在自己的项目中使用起来
- 按照产品需求，来定制图表。

第一步：参考官方例子

```js
option = {
    // 控制提示
    tooltip: {
      // 非轴图形，使用item的意思是放到数据对应图形上触发提示
      trigger: 'item',
      // 格式化提示内容：
      // a 代表图表名称 b 代表数据名称 c 代表数据  d代表  当前数据/总数据的比例
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // 控制图表
    series: [
      {
        // 图表名称
        name: '点位统计',
        // 图表类型
        type: 'pie',
        // 南丁格尔玫瑰图 有两个圆  内圆半径10%  外圆半径70%
        // 百分比基于  图表DOM容器的半径
        radius: ['10%', '70%'],
        // 图表中心位置 left 50%  top 50% 距离图表DOM容器
        center: ['50%', '50%'],
        // 半径模式，另外一种是 area 面积模式
        roseType: 'radius',
        // 数据集 value 数据的值 name 数据的名称
        data: [
                {value:10, name:'rose1'},
                {value:5, name:'rose2'},
                {value:15, name:'rose3'},
                {value:25, name:'rose4'},
                {value:20, name:'rose5'},
                {value:35, name:'rose6'},
                {value:30, name:'rose7'},
                {value:40, name:'rose8'}
            ]
        }
    ]
};
```

第二步：使用起来

```js
// 实现点位-饼状图
(function () {
  var option = {
    // 控制提示
    tooltip: {
      // 非轴图形，使用item的意思是放到数据对应图形上触发提示
      trigger: 'item',
      // 格式化提示内容：
      // a 代表图表名称 b 代表数据名称 c 代表数据  d代表  当前数据/总数据的比例
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // 控制图表
    series: [
      {
        // 图表名称
        name: '点位统计',
        // 图表类型
        type: 'pie',
        // 南丁格尔玫瑰图 有两个圆  内圆半径10%  外圆半径70%
        // 百分比基于  图表DOM容器的半径
        radius: ['10%', '70%'],
        // 图表中心位置 left 50%  top 50% 距离图表DOM容器
        center: ['50%', '50%'],
        // 半径模式，另外一种是 area 面积模式
        roseType: 'radius',
        // 数据集 value 数据的值 name 数据的名称
        data: [
          { value: 10, name: 'rose1' },
          { value: 5, name: 'rose2' },
          { value: 15, name: 'rose3' },
          { value: 25, name: 'rose4' },
          { value: 20, name: 'rose5' },
          { value: 35, name: 'rose6' },
          { value: 30, name: 'rose7' },
          { value: 40, name: 'rose8' }
        ]
      }
    ]
  };
  var myChart = echarts.init($('.pie')[0])
  myChart.setOption(option)
})();
```

第三步：按照需求定制

- 需求1：数据使用

```js
          { value: 20, name: '云南' },
          { value: 26, name: '北京' },
          { value: 24, name: '山东' },
          { value: 25, name: '河北' },
          { value: 20, name: '江苏' },
          { value: 25, name: '浙江' },
          { value: 30, name: '四川' },
          { value: 42, name: '湖北' }
```

- 需求2：颜色设置

```js
['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
```

- 需求3：字体略小些  10 px
- 需求4：引导线略短些 
  - 连接图表 8 px
  - 连接文字 10 px

```diff
-     data:[
-         {value:10, name:'rose1'},
-         {value:5, name:'rose2'},
-         {value:15, name:'rose3'},
-         {value:25, name:'rose4'},
-         {value:20, name:'rose5'},
-         {value:35, name:'rose6'},
-         {value:30, name:'rose7'},
-         {value:40, name:'rose8'}
-     ]
+			data: [
+          { value: 20, name: '云南' },
+          { value: 26, name: '北京' },
+          { value: 24, name: '山东' },
+          { value: 25, name: '河北' },
+          { value: 20, name: '江苏' },
+          { value: 25, name: '浙江' },
+          { value: 30, name: '四川' },
+          { value: 42, name: '湖北' }
+        ],
+        // 文字调整
+        label:{
+          fontSize: 10
+        },
+        // 引导线调整
+        labelLine: {
+          // 连接扇形图线长
+          length: 8,
+          // 连接文字线长
+          length2: 10
+        } 
+      }
+    ],
+    // 每块图颜色
+    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff']
```



### 15-地图区域-预留布局

html结构：

```html
      <!-- 地图 -->
      <div class="map">
        <h3>
          <span class="icon-cube"></span>
          设备数据统计
        </h3>
        <div class="chart">
          <div class="geo"></div>
        </div>
      </div>
```

css样式：

```css
/* 地图  */
.map {
  height: 24.1rem;
  margin-bottom: 0.833rem;
  display: flex;
  flex-direction: column;
}
.map h3 {
  line-height: 1;
  padding: 0.667rem 0;
  margin: 0;
  font-size: 0.833rem;
  color: #fff;
}
.map .icon-cube {
  color: #68d8fe;
}
.map .chart {
  flex: 1;
  background-color: rgba(255, 255, 255, 0.05);
}
.map .geo {
  width: 100%;
  height: 100%;
}
```



### 16-用户统计-布局

html结构：

```html
      <!-- 用户 -->
      <div class="users panel">
        <div class="inner">
          <h3>全国用户总量统计</h3>
          <div class="chart">
            <div class="bar"></div>
            <div class="data">
              <div class="item">
                <h4>120,899</h4>
                <span>
                  <i class="icon-dot" style="color: #ed3f35"></i>
                  用户总量
                </span>
              </div>
              <div class="item">
                <h4>248</h4>
                <span>
                  <i class="icon-dot" style="color: #eacf19"></i>
                  本月新增
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
```

css样式：

```css
/* 用户模块 */
.users {
  height: 14.167rem;
  display: flex;
}
.users .chart {
  display: flex;
  margin-top: 1rem;
}
.users .bar {
  width: 24.5rem;
  height: 10rem;
}
.users .data {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 7rem;
  padding: 1.5rem 1.25rem;
  box-sizing: border-box;
  background-image: url(../images/rect.png);
  background-size: cover;
}
.users h4 {
  margin-bottom: 0.5rem;
  font-size: 1.167rem;
  color: #fff;
}
.users span {
  display: block;
  color: #4c9bfd;
  font-size: 0.667rem;
}
```



### 17-用户统计-柱状图

实现步骤：

- 从官方示例中找到最接近项目需求的例子，适当修改。
- 在自己的项目中使用起来
- 按照产品需求，来定制图表。

第一步：参考官方示例 + 分析

```js
option = {
    // 工具提示
    tooltip: {
      // 触发类型  经过轴触发axis  经过轴触发item
      trigger: 'axis',
      // 轴触发提示才有效
      axisPointer: {    
        // 默认为直线，可选为：'line' 线效果 | 'shadow' 阴影效果       
        type: 'shadow'        
      }
    },
    // 图表边界控制
    grid: {
      // 距离 上右下左 的距离
      left: '3%',
      right: '4%',
      bottom: '3%',
      // 是否包含文本
      containLabel: true
    },
    // 控制x轴
    xAxis: [
      {
        // 使用类目，必须有data属性
        type: 'category',
        // 使用 data 中的数据设为刻度文字
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        // 刻度设置
        axisTick: {
          // true意思：图形在刻度中间
          // false意思：图形在刻度之间
          alignWithLabel: true
        }
      }
    ],
    // 控制y轴
    yAxis: [
      {
        // 使用数据的值设为刻度文字
        type: 'value'
      }
    ],
    // 控制x轴
    series: [
      {
        // 图表数据名称
        name: '用户统计',
        // 图表类型
        type: 'bar',
        // 柱子宽度
        barWidth: '60%',
        // 数据
        data: [10, 52, 200, 334, 390, 330, 220]
      }
    ]
  };
```

第二步：使用起来

```js
// 用户统计-柱状图
(function () {
  var option = {
    // 参考上面即可...                    
  };
  var myChart = echarts.init($('.bar')[0])
  myChart.setOption(option)
})();
```

第三步：按照需求修改

- 调整刻度
  - 柱子在刻度之间
  - 剔除刻度
  - 文字颜色  #4c9bfd

```diff
    // 控制x轴
    xAxis: [
      {
        // 使用类目，必须有data属性
        type: 'category',
        // 使用 data 中的数据设为刻度文字
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        // 刻度设置
        axisTick: {
          // true意思：图形在刻度中间
          // false意思：图形在刻度之间
-          alignWithLabel: true,
+          alignWithLabel: false,
+          show: false
        },        
+        // 文字
+        axisLabel: {
+          color: '#4c9bfd'
+        }
      }
```

```diff
    // 控制y轴
    yAxis: [
      {
        // 使用数据的值设为刻度文字
        type: 'value',
+        // 刻度设置
+        axisTick: {
+          show: false
+        },
+        // 文字
+        axisLabel: {
+          color: '#4c9bfd'
+        }
+      }
    ],
```

- 调整边框与间距
  - 加上边框，颜色  rgba(0, 240, 255, 0.3)
  - 边距调整   3% 3% 3% 0%
  - y轴分割线颜色 rgba(0, 240, 255, 0.3)

```diff
    // 图表边界控制
    grid: {
      // 距离 上右下左 的距离
+      top: '3%',
+      right: '3%',
+      bottom: '3%',
+      left: '0%',
      // 是否包含文本
      containLabel: true,
+      // 显示边框
+      show: true,
+      // 边框颜色
+      borderColor: 'rgba(0, 240, 255, 0.3)'
    },
```

```diff
    // 控制y轴
    yAxis: [
      {
        // 使用数据的值设为刻度文字
        type: 'value',
        // 刻度设置
        axisTick: {
          show: false
        },
        // 文字
        axisLabel: {
          color: '#4c9bfd'
        },
+        splitLine: {
+          lineStyle: {
+            color: 'rgba(0, 240, 255, 0.3)'
+          }
+        }
      }
    ],
```

- 调整数据，与省略图形。

```js
// series
data: [2100,1900,1700,1560,1400,1200,1200,1200,900,750,600,480,240]
```

```js
// xAxis
data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆']
```

- 柱子颜色，和工具提示。

  - 颜色，使用[渐变](https://www.echartsjs.com/zh/option.html#grid.tooltip.axisPointer.crossStyle.color)，从上#00fffb  到下#0061ce

  ```js
  // series配置
          // 颜色
          itemStyle: {
            // 提供的工具函数生成渐变颜色
            color: new echarts.graphic.LinearGradient(
              // (x1,y2) 点到点 (x2,y2) 之间进行渐变
              0, 0, 0, 1,
              [
                {offset: 0, color: '#00fffb'}, // 0 起始颜色
                {offset: 1, color: '#0061ce'}  // 1 结束颜色
              ]
            )
          }
  ```

  - 经过图形才显示提示，且省略的柱子不需要提示

  ```diff
      // 经过图形才显示工具提示
      tooltip: {
  -      trigger: 'axis',
  +      trigger: 'item',
  ```

  ```js
  // 中间省略的数据  准备三项
  var item = {
      name:'',
      value: 1200,
      // 柱子颜色
      itemStyle: {
        color: '#254065'
      },
      // 鼠标经过柱子颜色
      emphasis: {
        itemStyle: {
          color: '#254065'
        }
      },
      // 工具提示隐藏
      tooltip: {
        extraCssText: 'opacity:0'
      }
    }
  ```

  ```diff
  // series配置data选项在中使用
  - data: [2100,1900,1700,1560,1400,1200,1200,1200,900,750,600,480,240],
  + data: [2100,1900,1700,1560,1400,item,item,item,900,750,600,480,240],
  ```

总结：写echarts就像写css样式，且繁杂难记，今后在工作中只需要按照需求去查找，切勿死记硬背。



## DAY02-可视化项目



### 01-订单区域-布局

html结构：

```html
      <!-- 订单 -->
      <div class="order panel">
        <div class="inner">
          <!-- 筛选 -->
          <div class="filter">
            <a href="javascript:;" data-key="day365" class="active">365天</a>
            <a href="javascript:;" data-key="day90">90天</a>
            <a href="javascript:;" data-key="day30">30天</a>
            <a href="javascript:;" data-key="day1">24小时</a>
          </div>
          <!-- 数据 -->
          <div class="data">
            <div class="item">
              <h4>20,301,987</h4>
              <span>
                <i class="icon-dot" style="color: #ed3f35;"></i>
                订单量
              </span>
            </div>
            <div class="item">
              <h4>99834</h4>
              <span>
                <i class="icon-dot" style="color: #eacf19;"></i>
                销售额(万元)
              </span>
            </div>
          </div>
        </div>
      </div>
```

css样式：

```css
/* 订单 */
.order {
  height: 6.167rem;
}
.order .filter {
  display: flex;
}
.order .filter a {
  display: block;
  height: 0.75rem;
  line-height: 1;
  padding: 0 0.75rem;
  color: #1950c4;
  font-size: 0.75rem;
  border-right: 0.083rem solid #00f2f1;
}
.order .filter a:first-child {
  padding-left: 0;
}
.order .filter a:last-child {
  border-right: none;
}
.order .filter a.active {
  color: #fff;
  font-size: 0.833rem;
}
.order .data {
  display: flex;
  margin-top: 0.833rem;
}
.order .item {
  width: 50%;
}
.order h4 {
  font-size: 1.167rem;
  color: #fff;
  margin-bottom: 0.417rem;
}
.order span {
  display: block;
  color: #4c9bfd;
  font-size: 0.667rem;
}
```



### 02-订单区域-效果

实现步骤：

- 提前准备数据
- 点击后切tab激活样式
- 点击后切换数据内容
- 开启定时器动态切换数据

```js
// 订单功能
(function(){
  // 1. 准备数据
  var data = {
    day365: { orders: '20,301,987', amount: '99834' },
    day90: { orders: '301,987', amount: '9834' },
    day30: { orders: '1,987', amount: '3834' },
    day1: { orders: '987', amount: '834' }
  }
  // 获取显示 订单数量 容器
  var $h4Orders = $('.order h4:eq(0)')
  // 获取显示 金额数量 容器
  var $h4Amount = $('.order h4:eq(1)')
  $('.order').on('click','.filter a',function(){
    // 2. 点击切换激活样式
    $(this).addClass('active').siblings().removeClass('active')
    // 3. 点击切换数据
    var currdata = data[this.dataset.key]
    $h4Orders.html(currdata.orders)
    $h4Amount.html(currdata.amount)
  })
  // 4. 开启定时器切换数据
  var index = 0
  var $allTab = $('.order .filter a')
  setInterval(function(){
    index ++ 
    if (index >= 4) index = 0
    $allTab.eq(index).click()
  },5000)
})();
```



### 03-销售统计-布局

html结构：

```html
      <!-- 销售额 -->
      <div class="sales panel">
        <div class="inner">
          <div class="caption">
            <h3>销售额统计</h3>
            <a href="javascript:;" class="active" data-type="year">年</a>
            <a href="javascript:;" data-type="quarter">季</a>
            <a href="javascript:;" data-type="month">月</a>
            <a href="javascript:;" data-type="week">周</a>
          </div>
          <div class="chart">
            <div class="label">单位:万</div>
            <div class="line"></div>
          </div>
        </div>
      </div>
```

css样式：

```
/* 销售区域 */
.sales {
  height: 10.333rem;
}
.sales .caption {
  display: flex;
  line-height: 1;
}
.sales h3 {
  height: 0.75rem;
  padding-right: 0.75rem;
  border-right: 0.083rem solid #00f2f1;
}
.sales a {
  padding: 0.167rem;
  font-size: 0.667rem;
  margin: -0.125rem 0 0 0.875rem;
  border-radius: 0.125rem;
  color: #0bace6;
}
.sales a.active {
  background-color: #4c9bfd;
  color: #fff;
}
.sales .inner {
  display: flex;
  flex-direction: column;
}
.sales .chart {
  flex: 1;
  padding-top: 0.6rem;
  position: relative;
}
.sales .label {
  position: absolute;
  left: 1.75rem;
  top: 0.75rem;
  color: #4996f5;
  font-size: 0.583rem;
}
.sales .line {
  width: 100%;
  height: 100%;
}
```



### 04-销售统计-线形图

实现步骤：

- 寻找官方的类似示例，给予分析。
- 在项目中使用起来。
- 按照需求来定制它。

**第一步：**寻找官方的类似示例，给予分析。

官方参考示例：https://www.echartsjs.com/examples/zh/editor.html?c=line-smooth

```js
var option = {
    xAxis: {
        // 类目类型                                  
        type: 'category',
        // x轴刻度文字                                  
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        // 数据作为刻度文字                                  
        type: 'value'
    },
    series: [{
        // 数据                                  
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        // 图表类型                                  
        type: 'line',
        // 圆滑连接                                  
        smooth: true
    }]
};
```

**第二步：**在项目中使用起来。

```js
(function () {
  var option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true
    }]
  };
  var myChart = echarts.init($('.line')[0])
  myChart.setOption(option)
})();
```

**第三步：**按照需求来定制它。

定制需求：

- 设置自己的图表大小，显示边框设置颜色：#012f4a，包含刻度文字在内。

```js
    // 设置网格样式
    grid: {
      show: true,// 显示边框
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      borderColor: '#012f4a',// 边框颜色
      containLabel: true // 包含刻度文字在内
    },
```

- x轴的刻度去除，字体颜色：#4c9bfd，剔除坐标轴线（将来使用Y轴分割线）, 轴两端是不需要内间距。

```diff
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
+      axisTick: {
+        show: false // 去除刻度线
+      },
+      axisLabel: {
+        color: '#4c9bfd' // 文本颜色
+      },
+      axisLine: {
+        show: false // 去除轴线
+      },
+      boundaryGap: false  // 去除轴内间距
    },
```

- y轴的刻度去除，字体颜色：#4c9bfd，分割线颜色：#012f4a

```diff
    yAxis: {
      type: 'value',
+      axisTick: {
+        show: false  // 去除刻度
+      },
+      axisLabel: {
+        color: '#4c9bfd' // 文字颜色
+      },
+      splitLine: {
+        lineStyle: {
+          color: '#012f4a' // 分割线颜色
+        }
+      }
    },
```

- 显示图例组件（对图表的说明）, series数据必须有名称。

```js
    // 图例组件
    legend: {
      textStyle: {
        color: '#4c9bfd' // 图例文字颜色
      },
      right: '10%' // 距离右边10%
    },
```

```diff
    series: [{
+      name:'预期销售额',
```

- 鼠标经过需要工具提示

```js
    // 工具提示
    tooltip:{
      trigger: 'axis'
    },
```

- 两条线形图颜色分别：#00f2f1  #ed3f35

```js
    series: [{
      name:'预期销售额',
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true,
      itemStyle: {
        color: '#00f2f1'  // 线颜色
      }
    },{
      name:'实际销售额',
      data: [100, 331, 200, 123, 233, 543, 400],
      type: 'line',
      smooth: true,
      itemStyle: {
        color: '#ed3f35'  // 线颜色
      }
    }]
```

- 套入数据

```diff
// x轴的文字
xAxis: {
  type: 'category',
- data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] 
+ data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
```

```diff
// 图标数据
    series: [{
      name:'预期销售额',
-      data: [820, 932, 901, 934, 1290, 1330, 1320],
+      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120]
      type: 'line',
      smooth: true,
      itemStyle: {
        color: '#00f2f1'  // 线颜色
      }
    },{
      name:'实际销售额',
-      data: [100, 331, 200, 123, 233, 543, 400],
+      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      type: 'line',
      smooth: true,
      itemStyle: {
        color: '#ed3f35'  // 线颜色
      }
    }]
```

总结：现在给的是年份数据，还需要切换效果。



### 05-销售统计-切换效果

实现步骤：

- 准备切换需要依赖的数据
- 绑定点击事件
  - 切换激活  tab  的样式
  - 切换图表依赖的数据
- 开启定时器，进行切换。

第一步：准备数据，使用数据

```js
  var data = {
    year: [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
    ],
    quarter: [
      [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
      [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
    ],
    month: [
      [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
      [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
    ],
    week: [
      [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
      [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
    ]
  }
```

```diff
    series: [{
      name:'预期销售额',
+      data: data.year[0],
      type: 'line',
      smooth: true,
      itemStyle: {
        color: '#00f2f1'
      }
    },{
      name:'实际销售额',
+      data: data.year[1],
      type: 'line',
      smooth: true,
      itemStyle: {
        color: '#ed3f35'
      }
    }]
```

第二步：点击后切换

```js
  // 切换
  $('.sales').on('click', '.caption a', function(){
    // 样式
    $(this).addClass('active').siblings().removeClass('active')
    // currData 当前对应的数据  
    // this.dataset.type 标签上的data-type属性值，对应data中的属性                  
    var currData = data[this.dataset.type]
    // 修改图表1的数据
    option.series[0].data = currData[0]
    // 修改图表2的数据                  
    option.series[1].data = currData[1]
    // 重新设置数据  让图标重新渲染                  
    myChart.setOption(option)
  })
```

第三步：自动切换

```js
  // tab索引
  var index = 0;
  // 所有tab
  var allTab = $('.sales .caption a')
  setInterval(function () {
    index++
    // 大于等于4索引切换到0索引
    if (index >= 4) index = 0
    // 选中对应tab触发点击
    allTab.eq(index).click()
  }, 1000)
```



### 06-渠道区域&销售进度-布局

html结构：

```html结构
      <!-- 渠道 季度 -->
      <div class="wrap">
        <div class="channel panel">
          <div class="inner">
            <h3>渠道分布</h3>
            <div class="data">
              <div class="item">
                <h4>39 <small>%</small></h4>
                <span>
                  <i class="icon-plane"></i>
                  机场
                </span>
              </div>
              <div class="item">
                <h4>28 <small>%</small></h4>
                <span>
                  <i class="icon-bag"></i>
                  商场
                </span>
              </div>
            </div>
            <div class="data">
              <div class="item">
                <h4>20 <small>%</small></h4>
                <span>
                  <i class="icon-train"></i>
                  地铁
                </span>
              </div>
              <div class="item">
                <h4>13 <small>%</small></h4>
                <span>
                  <i class="icon-bus"></i>
                  火车站
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="quarter panel">
          <div class="inner">
            <h3>一季度销售进度</h3>
            <div class="chart">
              <div class="box">
                <div class="gauge"></div>
                <div class="label">75<small> %</small></div>
              </div>
              <div class="data">
                <div class="item">
                  <h4>1,321</h4>
                  <span>
                    <i class="icon-dot" style="color: #6acca3"></i>
                    销售额(万元)
                  </span>
                </div>
                <div class="item">
                  <h4>150%</h4>
                  <span>
                    <i class="icon-dot" style="color: #ed3f35"></i>
                    同比增长
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>   
```

css样式：

```css
/* 渠道区块 */
.wrap {
  display: flex;
}
.channel,
.quarter {
  flex: 1;
  height: 9.667rem;
}
.channel {
  margin-right: 0.833rem;
}
.channel .data {
  overflow: hidden;
}
.channel .item {
  margin-top: 0.85rem;
}
.channel .item:first-child {
  float: left;
}
.channel .item:last-child {
  float: right;
}
.channel h4 {
  color: #fff;
  font-size: 1.333rem;
  margin-bottom: 0.2rem;
}
.channel small {
  font-size: 50%;
}
.channel span {
  display: block;
  color: #4c9bfd;
  font-size: 0.583rem;
}
/* 季度区块 */
.quarter .inner {
  display: flex;
  flex-direction: column;
  margin: 0 -0.25rem;
}
.quarter .chart {
  flex: 1;
  padding-top: 0.75rem;
}
.quarter .box {
  position: relative;
}
.quarter .label {
  transform: translate(-50%, -30%);
  color: #fff;
  font-size: 1.25rem;
  position: absolute;
  left: 50%;
  top: 50%;
}
.quarter .label small {
  font-size: 50%;
}
.quarter .gauge {
  height: 3.5rem;
}
.quarter .data {
  display: flex;
  justify-content: space-between;
}
.quarter .item {
  width: 50%;
}
.quarter h4 {
  color: #fff;
  font-size: 1rem;
  margin-bottom: 0.4rem;
}
.quarter span {
  display: block;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #4c9bfd;
  font-size: 0.583rem;
}
```



### 07-销售进度-饼状图

实现步骤：

- 寻找官方的类似示例，给予分析。
- 在项目中使用起来。
- 按照需求来定制它。

**第一步**：参考官方示例：https://www.echartsjs.com/examples/zh/editor.html?c=pie-doughnut

```js
var option = {
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            label: {
                show: false,
            },
            data:[
                {value:100, name:'直接访问'},
                {value:100, name:'邮件营销'},
                {value:200, name:'联盟广告'}
            ]
        }
    ]
};
```

**第二步**：使用起来

```js
// 销量进度-饼状图
(function () {
  var option = {
    series: [
      {
        type: 'pie',
        radius: ['50%', '70%'],
        label: {
          show: false,
        },
        data: [
          { value: 100, name: '直接访问' },
          { value: 100, name: '邮件营销' },
          { value: 200, name: '联盟广告' }
        ]
      }
    ]
  }
  var myChart = echarts.init($('.gauge')[0])
  myChart.setOption(option)
})();
```

**第三步**：进行定制

需求：改成半圆，大一些，让`75%`文字在中心。

```diff
  var option = {
    series: [
      {
        type: 'pie',
-        radius: ['50%', '70%'],
+        radius: ['130%', '150%'],  // 放大图形
+        center: ['48%', '80%'],    // 往下移动  套住75%文字
        label: {
          show: false,
        },
        startAngle: 180,
        data: [
-          { value: 100, name: '直接访问' },
-          { value: 100, name: '邮件营销' },
-          { value: 200, name: '联盟广告' }
+          { value: 100 }, // 不需要名称
+          { value: 100,}, // 不需要名称
+          { value: 200, itemStyle: { color: 'transparent' } } // 透明隐藏第三块区域
        ]
      }
    ]
  }
```

需求：鼠标经过无需变大，第一段颜色渐变#00c9e0->#005fc1，第二段颜色#12274d。

```diff
+        hoverOffset: 0,  // 鼠标经过不变大
        data: [
          {
            value: 100,
+            itemStyle: { // 颜色渐变#00c9e0->#005fc1
+              color: {
+                type: 'linear',
+                x: 0,
+                y: 0,
+                x2: 0,
+                y2: 1,
+                colorStops: [
+                  { offset: 0, color: '#00c9e0' },
+                  { offset: 1, color: '#005fc1' }
+                ]
+              }
+            }
+          },  
+          { value: 100, itemStyle: { color: '#12274d' } }, // 颜色#12274d
```

总结：实现一个需求，需要去推导，具备推导的能力需要练习，时间问题。

### 08-热销排行-布局

html结构：

```html
      <!-- 排行榜 -->
      <div class="top panel">
        <div class="inner">
          <div class="all">
            <h3>全国热榜</h3>
            <ul>
              <li>
                <i class="icon-cup1" style="color: #d93f36;"></i>
                可爱多
              </li>
              <li>
                <i class="icon-cup2" style="color: #68d8fe;"></i>
                娃哈啥
              </li>
              <li>
                <i class="icon-cup3" style="color: #4c9bfd;"></i>
                喜之郎
              </li>
            </ul>
          </div>
          <div class="province">
            <h3>各省热销 <i class="date">// 近30日 //</i></h3>
            <div class="data">
              <ul class="sup">
                <li>
                  <span>北京</span>
                  <span>25,179 <s class="icon-up"></s></span>
                </li>
                <li>
                  <span>河北</span>
                  <span>23,252 <s class="icon-down"></s></span>
                </li>
                <li>
                  <span>上海</span>
                  <span>20,760 <s class="icon-up"></s></span>
                </li>
                <li>
                  <span>江苏</span>
                  <span>23,252 <s class="icon-down"></s></span>
                </li>
                <li>
                  <span>山东</span>
                  <span>20,760 <s class="icon-up"></s></span>
                </li>
              </ul>
              <ul class="sub">
                <!-- <li><span></span><span> <s class="icon-up"></s></span></li> -->
              </ul>
            </div>
          </div>
        </div>
      </div>
```

css样式：

```css
/* 排行榜 */
.top {
  height: 11.8rem;
}
.top .inner {
  display: flex;
}
.top .all {
  display: flex;
  flex-direction: column;
  width: 7rem;
  color: #4c9bfd;
  font-size: 0.6rem;
  vertical-align: middle;
}
.top .all ul {
  padding-left: 0.5rem;
  margin-top: 0.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.top .all li {
  overflow: hidden;
}
.top .all [class^="icon-"] {
  font-size: 1.5rem;
  vertical-align: middle;
  margin-right: 0.5rem;
}
.top .province {
  flex: 1;
  display: flex;
  flex-direction: column;
  color: #fff;
}
.top .province i {
  padding: 0 0.5rem;
  margin-top: 0.208rem;
  float: right;
  font-style: normal;
  font-size: 0.583rem;
  color: #0bace6;
}
.top .province s {
  display: inline-block;
  transform: scale(0.8);
  text-decoration: none;
}
.top .province .icon-up {
  color: #dc3c33;
}
.top .province .icon-down {
  color: #36be90;
}
.top .province .data {
  flex: 1;
  display: flex;
  margin-top: 0.6rem;
}
.top .province ul {
  flex: 1;
  line-height: 1;
  margin-bottom: 0.25rem;
}
.top .province ul li {
  display: flex;
  justify-content: space-between;
}
.top .province ul span {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.top .province ul.sup {
  font-size: 0.583rem;
}
.top .province ul.sup li {
  color: #4995f4;
  padding: 0.5rem;
}
.top .province ul.sup li.active {
  color: #a3c6f2;
  background-color: rgba(10, 67, 188, 0.2);
}
.top .province ul.sub {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 0.5rem;
  background-color: rgba(10, 67, 188, 0.2);
}
.top .province ul.sub li {
  color: #52ffff;
  padding: 0.417rem 0.6rem;
}
.clock {
  position: absolute;
  top: -1.5rem;
  right: 1.667rem;
  font-size: 0.833rem;
  color: #0bace6;
}
.clock i {
  margin-right: 5px;
  font-size: 0.833rem;
}
@media screen and (max-width: 1600px) {
  .top span {
    transform: scale(0.9);
  }
  .top .province ul.sup li {
    padding: 0.4rem 0.5rem;
  }
  .top .province ul.sub li {
    padding: 0.23rem 0.5rem;
  }
  .quarter span {
    transform: scale(0.9);
  }
}
```



### 09-热销排行-效果

**实现思路**：

- 准备假数据，只有一组
- 当数据进入 tab 的时候
  - 激活当前的tab样式，删除其他tab的样式
  - 随机打乱事先准备好的一组数据
  - 根据新数据拼接html格式字符串，进行渲染
- 默认激活第一个tab的效果
- 开启定时器，按顺便切换

**预备知识**：

- 扩展知识1：排序sort函数

- 扩展知识2：ES6模版字符

```js
// 数据
var data = [1,5,12,10]
// 从小到大排序
data.sort(function(a,b){return a-b})
// 从大到小排序
data.sort(function(a,b){return b-a})
// 每次取出两个值进行比较  a 是第二个  b 是第一个
// 如果回调函数返回值 大于0  a排b后
// 如果回调函数返回值 等于0  不排
// 如果回调函数返回值 小于0  b排a后
// 随机排序
data.sort(function(a,b){return 0.5-Math.random()})
```

```js
// 模版字符
var data = {name:'tom'}
var str = `你的名字是：${data.name}`
// 用户拼接字符串，可以换行，在拼接html的时候常用。
```

**开始实现**：

第一步：模拟数据

```js
   var data = [
    { name: '可爱多', num: '9,086' },
    { name: '娃哈哈', num: '8,341' },
    { name: '喜之郎', num: '7,407' },
    { name: '八喜', num: '6,080' },
    { name: '小洋人', num: '6,724' },
    { name: '好多鱼', num: '2,170' },
  ]
```

第二步：绑定鼠标经过事件，激活样式，根据随机数据渲染内容。

```js
  $('.province').on('mouseenter','.sup li',function(){
     // 样式
     $(this).addClass('active').siblings().removeClass('active')
     // 打乱数据
     var randomData = data.sort(function(a,b){
       return 0.5 - Math.random()
     })
     // 拼接字符串
     var html = ''
     randomData.forEach(function(item){
       html += `<li><span>${item.name}</span><span>${item.num} <s class="icon-up"></s></span></li>`
     })
     // 渲染
     $('.sub').html(html)
  })
```

第三步：默认激活第一个tab

```js
  // 所有的LI
  var $lis = $('.province .sup li')
  // 第一个默认激活
  $lis.eq(0).mouseenter()
```

第四步：开启定时切换

```js
  // 开启定时器 切换
  var index = 0
  setInterval(function () {
    index++
    // 大于等于5索引切换到0索引
    if (index >= 5) index = 0
    // 选中对应tab触发点击
    $lis.eq(index).mouseenter()
  }, 1000)
```



### 10-Echarts-社区介绍

> [社区](https://gallery.echartsjs.com/explore.html#sort=rank~timeframe=all~author=all)就是一些，活跃的echart使用者，交流和贡献定制好的图表的地方。

![1576664444951](docs/media/1576664444951.png)

- 在这里可以找到一些基于echart的高度定制好的图表，相当于基于jquery开发的插件，这里是基于echarts开发的第三方的图表。

### 11-Echarts-map使用（扩展）

参考社区的例子：https://gallery.echartsjs.com/editor.html?c=x2Ei_JbHZb

实现步骤：

- 第一需要下载china.js提供中国地图的js文件
- 导入后，使用社区提供的配置即可。

```js
(function () {
	// 使用配置即可...
  var myecharts = echarts.init($('.map .geo')[0])
  myecharts.setOption(option)
})()
```

需要修改：

```diff
    geo: {
      map: 'china',
+      zoom: 1.2,
      label: {
        emphasis: {
          show: false
        }
      },
      roam: false,
      itemStyle: {
        normal: {
+          areaColor: '#142957',
          borderColor: '#0692a4'
        },
        emphasis: {
          areaColor: '#0b1c2d'
        }
      }
    },
```

总结：这例子是扩展案例，大家以后可以多看看社区里面的案例。



### 12-总结







