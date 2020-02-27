// 完成rem适配（动态根据页面宽度设置rem的基准值-->html标签font-size）
(function () {
  // 1. 页面初始化 获取当前页面的宽度  约定页面宽度除以80  计算rem的基准值  设置html标签
  var setRem = function () {
    var html = document.querySelector('html'); // document.documentElement  获取文档元素html标签
    // 3. 适配区间  1024-1920 之间
    var width = html.clientWidth
    if (width < 1024) {
      width = 1024;
    }
    if (width > 1920) {
      width = 1920;
    }
    var fontSize = width / 80 + 'px';
    html.style.fontSize = fontSize;
  }
  setRem();
  // 2. 在页面尺寸改变的时候 同上
  window.onresize = function () {
    setRem();
  };
})();


// 监控功能模块
(function () {
  // 选项卡切换
  //  - 操作的标题  .monitor .tabs a
  //     - 标题的类名.active
  //  -显示隐藏的底部内容 .monitor .content
  //      - show()  hide()


  // 1 设置标题点击事件
  //   - 设置时间方式：方式1：给所有a标签设置事件  方式2：设置事件委托
  $('.monitor .tabs a').on('click', function () {
    // 2 设置当前a标签的高亮 同级a标签去除高亮
    $(this).addClass('active').siblings().removeClass('active');
    // 根据a标签的索引，选择底部对应content的索引进行显示隐藏
    // 3.1获取当前元素的索引
    var index = $(this).data('index');
    // 3.2根据索引找到对应的content
    //   - eq()是jQuery选择器，结果为jQuery对象
    $('.monitor .content').eq(index).show().siblings('.content').hide();

  });

  // 底部列表滚动

  // 如果希望数据可以呈现循环滚动展示的效果，首先需要进行结构处理
  //  1 获取要进行克隆的元素
  //    .row是要进行克隆的对象，因为数据不同 所以要进行遍历


  $('.marquee').each(function (i, ele) {

    $(this).prepend($(ele).children().clone());
  });

})();

// 点位分部模块
(function () {

  option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    series: [
      // series内部的每个对象都是一个图表的信息
      {
        name: '数据展示',
        // 饼状图
        type: 'pie',
        // 内圆半径和外圆半径  百分比基于DOM容器的半径
        radius: ['10%', '70%'],
        // 在dom元素中的显示位置
        center: ['50%', '50%'],
        roseType: 'radius',
        // 图表中使用的数据
        data: [
          { value: 20, name: '云南' },
          { value: 26, name: '北京' },
          { value: 24, name: '山东' },
          { value: 25, name: '河北' },
          { value: 20, name: '江苏' },
          { value: 25, name: '浙江' },
          { value: 30, name: '四川' },
          { value: 42, name: '湖北' }
        ],
        // 设置文字字号
        label: {
          fontSize: 10
        },
        labelLine: {
          length: 8,
          length2: 10
        },
        // 设置图表项颜色
        // 如果有好几个类型图表，就把color写在series外边
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff']

      }
    ]
  };
  // 1 获取图表
  var pie = $('.pie')[0];
  var myChart = echarts.init(pie);
  myChart.setOption(option);

})();


// 用户模块
(function () {
  // 申明 省略柱子的数据
  var item = {
    value: 1200,
    tooltip: { extraCssText: 'opacity:0' },
    itemStyle: {
      color: '#254065'
    },
    emphasis: {
      itemStyle: {
        color: '#254065'
      },
    }
  }
  var option = {
    tooltip: {
      // item 表示鼠标移动到每个柱上面处罚的效果
      trigger: 'item',
    },
    grid: {
      // 显示边框
      show: true,
      top: '3%',
      left: '3%',
      right: '3%',
      bottom: '0%',
      containLabel: true,
      // 边框颜色
      borderColor: 'rgba(0, 240, 255, 0.3)'
    },
    xAxis: [
      {
        type: 'category',
        data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
        axisTick: {
          alignWithLabel: false,
          // 刻度隐藏
          show: false
        },
        // 设置刻度文字颜色
        axisLabel: {
          color: '#4c9bfd'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: {
          alignWithLabel: false,
          // 刻度隐藏
          show: false
        },
        // 设置刻度文字颜色
        axisLabel: {
          color: '#4c9bfd'
        },
        // 设置y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: 'rgba(0, 240, 255, 0.3)'
          }
        }
      }
    ],
    series: [
      {
        name: '用户数据',
        type: 'bar',
        // 设置每个柱的宽度
        barWidth: '60%',
        // 中间三个1200为假数据，最重要设置为省略信息的效果
        // 每个数据都能书写为详细的配置方式，设置为对象{value:1200}
        // data: [2100, 1900, 1700, 1560, 1400, 1200, 1200, 1200, 900, 750, 600, 480, 240]
        data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240],
        // 设置柱的具体样式
        itemStyle: {
          color: new echarts.graphic.LinearGradient(
            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
            0, 0, 0, 1,
            [
              { offset: 0, color: '#00fffb' }, // 0 起始颜色
              { offset: 1, color: '#0061ce' }  // 1 结束颜色
            ]
          )
        }
      }
    ]
  };

  var bar = $('.bar')[0];
  var myChart = echarts.init(bar);
  myChart.setOption(option);
})();


// 订单模块：
(function () {
  // 1 准备数据
  var data = {
    day365: { orders: '20,301,987', amount: '99834' },
    day90: { orders: '301,987', amount: '9834' },
    day30: { orders: '1,987', amount: '3834' },
    day1: { orders: '987', amount: '834' }
  }

  // 保存元素
  var $orders = $('.order .data h4:eq(0)');
  var $amount = $('.order .data h4:eq(1)');
  // 2 标题点击事件
  $('.order .filter').on('click', 'a', function () {
    // 3 高亮效果设置
    $(this).addClass('active').siblings().removeClass('active');

    // 4 进行数据内容修改
    // 4.1获取当前标题的data-key属性
    var key = $(this).data('key');
    // 4.2获取data中的对应属性设置给对应元素
    // 属性名保存在key变量中，进行对象属性访问，需要使用[]的属性访问方式
    $orders.text(data[key].orders);
    $amount.text(data[key].amount);

    // 5.7如果希望点击标题后，可以重置自动播放的顺序，需要将index设置为当前元素索引
    index = $(this).index();
    // 5.8希望重置自动播放顺序的同时，重置播放时间，需要停止旧的定时器,重新开始定时器
    changeDate();
  });

  // 5 自动切换功能
  //  5.1获取要进行触发的元素 顶部的4个a标签
  var $titles = $('.order .filter a');
  // 5.2 设置变量 计数 要进行点击元素的索引值
  var index = 0;
  // 5.3设置定时器
  var timer = null;
  changeDate();

  function changeDate() {
    // 清除旧的定时器
    clearInterval(timer);
    timer = setInterval(function () {
      // 5.4设置计数自增
      index++;
      // 5.5检测索引值是否超出范围
      if (index > $titles.length - 1) {
        index = 0;
      }
      // 5.6根据索引设置对应元素的点击事件
      $titles.eq(index).click();

    }, 2000)
  }
})();


// 销售模块
(function () {
  // 1 准备数据
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
  var option = {
    // 图表默认展示时，显示的区域非常小，需要通过grid进行位置调整
    grid: {
      show: true,
      top: '20%', // 图表顶部具有标签内容，需要让图表往下多移动，避免覆盖
      left: '3%',
      right: '4%',
      bottom: '3%',
      borderColor: '#012f4a',// 边框颜色
      containLabel: true
    },
    xAxis: {
      type: 'category',
      // 替换数据
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      // 修改刻度效果
      axisTick: {
        // 隐藏刻度
        show: false
      },
      axisLabel: {
        // 刻度文字演示
        color: '#4c9bfd'
      },
      axisLine: {
        show: false // 去除x轴的轴线
      },
      boundaryGap: false  // 去除轴内间距
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: '#4c9bfd'
      },
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a'
        }
      }
    },
    // 添加图例（通常一个区域内具有多个图表时，需要使用图例）
    legend: {
      textStyle: {
        color: '#4c9bfd'
      },
      right: '10%' // 距离右边10%
    },
    // 修改提示框的触发方式，更改为axis触发，触发更方便，多个图表还可以进行对比
    tooltip: {
      trigger: 'axis'
    },
    // 设置顶部标题点击切换功能，切换的是series中的两个线型图的data属性
    series: [{
      name: '预期销售额',
      // data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      data: data.year[0],
      type: 'line',
      smooth: true,
      itemStyle: {
        color: '#00f2f1'  // 线颜色
      }
    }, {
      name: '实际销售额',
      // data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
      data: data.year[1],
      type: 'line',
      smooth: true,
      itemStyle: {
        color: '#ed3f35'  // 线颜色
      }
    }
    ]
  }
  // 2初始化图标
  var myChart = echarts.init($('.line')[0]);

  // 3 调用配置进行设置
  myChart.setOption(option);

  // 4 给顶部的标题设置点击事件
  $('.sales .caption').on('click', 'a', function () {
    // 4.1切换类名
    $(this).addClass('active').siblings().removeClass('active');
    // 4.2修改数据
    var type = $(this).data('type');
    option.series[0].data = data[type][0];
    option.series[1].data = data[type][1];
    // 4.3根据数据，重新设置图表
    myChart.setOption(option);

    index = $(this).index() - 1;
    changeDate();


  });

  // 5 自动切换功能
  //  5.1获取要进行触发的元素 顶部的4个a标签
  var $titles = $('.sales .caption a');
  // 5.2 设置变量 计数 要进行点击元素的索引值
  var index = 0;
  // 5.3设置定时器
  var timer = null;
  changeDate();

  function changeDate() {
    // 清除旧的定时器
    clearInterval(timer);
    timer = setInterval(function () {
      // 5.4设置计数自增
      index++;
      // 5.5检测索引值是否超出范围
      if (index > $titles.length - 1) {
        index = 0;
      }
      // 5.6根据索引设置对应元素的点击事件
      $titles.eq(index).click();

    }, 2000);
  }

})();

// 销售进度
(function () {
  var option = {
    series: [
      {
        name: '',
        type: 'pie',
        radius: ['130%', '150%'],
        center: ['48%', '80%'],
        label: {
          show: false
        },
        // 起始的角度
        startAngle: 180,
        // 鼠标经过没有 变大
        hoverOffset: 0,
        data: [
          {
            value: 100, itemStyle: {
              color: new echarts.graphic.LinearGradient(
                // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                0, 0, 0, 1,
                [
                  { offset: 0, color: '#00fffb' }, // 0 起始颜色
                  { offset: 1, color: '#0061ce' }  // 1 结束颜色
                ]
              )
            }
          },
          { value: 100, itemStyle: { color: '#12274d' } },
          { value: 200, itemStyle: { color: 'transparent' } }
        ]
      }
    ]
  };

  var myChart = echarts.init($('.gauge')[0]);
  myChart.setOption(option);
})();

// 排行榜
(function () {
  var data = [
    { name: '可爱多', num: '9,086' },
    { name: '娃哈哈', num: '8,341' },
    { name: '喜之郎', num: '7,407' },
    { name: '八喜', num: '6,080' },
    { name: '小洋人', num: '6,724' },
    { name: '好多鱼', num: '2,170' },
  ];
  var $sub = $('.province .sub');

  $('.province .sup').on('mouseover', 'li', function () {
    $(this).addClass('active').siblings().removeClass('active');

    data.sort(function (a, b) {
      return 0.5 - Math.random();
    });

    var str = '';
    $.each(data, function (i, obj) {
      str += `<li><span>${obj.name}</span><span>${obj.num} <s class="icon-up"></s></span></li>`;
    });
    $sub.html(str);

    index = $(this).index();
    changeDate();

  });

  // 5 自动切换功能
  //  5.1获取要进行触发的元素 
  var $titles = $('.province .sup li');
  // 5.2 设置变量 计数 要进行点击元素的索引值
  var index = 0;
  // 5.3设置定时器
  var timer = null;
  changeDate();

  function changeDate() {
    // 清除旧的定时器
    clearInterval(timer);
    timer = setInterval(function () {
      // 5.4设置计数自增
      index++;
      // 5.5检测索引值是否超出范围
      if (index > $titles.length - 1) {
        index = 0;
      }
      // 5.6根据索引设置对应元素的点击事件
      $titles.eq(index).mouseover();

    }, 2000);
  }

  var $lis = $('.province .sup>li');
  $lis.eq(0).mouseover();
})();

// 地图
(function () {
  var geoCoordMap = {
    '新疆玛纳斯基地': [86.22, 44.30],
    '九江': [116.00, 29.70],
    '新乡': [116.402217, 35.311657],
    ' ': [79.92, 37.12],
    '  ': [86.85, 47.70],
    '若羌县': [88.17, 39.02],
    '上海': [121.4648, 31.2891],
    '东莞': [113.8953, 22.901],
    '东营': [118.7073, 37.5513],
    '中山': [113.4229, 22.478],
    '临汾': [111.4783, 36.1615],
    '临沂': [118.3118, 35.2936],
    '丹东': [124.541, 40.4242],
    '丽水': [119.5642, 28.1854],
    '乌鲁木齐': [87.9236, 43.5883],
    '佛山': [112.8955, 23.1097],
    '保定': [115.0488, 39.0948],
    '兰州': [103.5901, 36.3043],
    '包头': [110.3467, 41.4899],
    '北京': [116.4551, 40.2539],
    '北海': [109.314, 21.6211],
    '南京': [118.8062, 31.9208],
    '南宁': [108.479, 23.1152],
    '南昌': [116.0046, 28.6633],
    '南通': [121.1023, 32.1625],
    '厦门': [118.1689, 24.6478],
    '台州': [121.1353, 28.6688],
    '合肥': [117.29, 32.0581],
    '呼和浩特': [111.4124, 40.4901],
    '咸阳': [108.4131, 34.8706],
    '哈尔滨': [127.9688, 45.368],
    '唐山': [118.4766, 39.6826],
    '嘉兴': [120.9155, 30.6354],
    '大同': [113.7854, 39.8035],
    '大连': [122.2229, 39.4409],
    '天津': [117.4219, 39.4189],
    '太原': [112.3352, 37.9413],
    '威海': [121.9482, 37.1393],
    '宁波': [121.5967, 29.6466],
    '宝鸡': [107.1826, 34.3433],
    '宿迁': [118.5535, 33.7775],
    '常州': [119.4543, 31.5582],
    '广州': [113.5107, 23.2196],
    '廊坊': [116.521, 39.0509],
    '延安': [109.1052, 36.4252],
    '张家口': [115.1477, 40.8527],
    '徐州': [117.5208, 34.3268],
    '德州': [116.6858, 37.2107],
    '惠州': [114.6204, 23.1647],
    '成都': [103.9526, 30.7617],
    '扬州': [119.4653, 32.8162],
    '承德': [117.5757, 41.4075],
    '拉萨': [91.1865, 30.1465],
    '无锡': [120.3442, 31.5527],
    '日照': [119.2786, 35.5023],
    '昆明': [102.9199, 25.4663],
    '杭州': [119.5313, 29.8773],
    '枣庄': [117.323, 34.8926],
    '柳州': [109.3799, 24.9774],
    '株洲': [113.5327, 27.0319],
    '武汉': [114.3896, 30.6628],
    '汕头': [117.1692, 23.3405],
    '江门': [112.6318, 22.1484],
    '沈阳': [123.1238, 42.1216],
    '沧州': [116.8286, 38.2104],
    '河源': [114.917, 23.9722],
    '泉州': [118.3228, 25.1147],
    '泰安': [117.0264, 36.0516],
    '泰州': [120.0586, 32.5525],
    '济南': [117.1582, 36.8701],
    '济宁': [116.8286, 35.3375],
    '海口': [110.3893, 19.8516],
    '淄博': [118.0371, 36.6064],
    '淮安': [118.927, 33.4039],
    '深圳': [114.5435, 22.5439],
    '清远': [112.9175, 24.3292],
    '温州': [120.498, 27.8119],
    '渭南': [109.7864, 35.0299],
    '湖州': [119.8608, 30.7782],
    '湘潭': [112.5439, 27.7075],
    '滨州': [117.8174, 37.4963],
    '潍坊': [119.0918, 36.524],
    '烟台': [120.7397, 37.5128],
    '玉溪': [101.9312, 23.8898],
    '珠海': [113.7305, 22.1155],
    '盐城': [120.2234, 33.5577],
    '盘锦': [121.9482, 41.0449],
    '石家庄': [114.4995, 38.1006],
    '福州': [119.4543, 25.9222],
    '秦皇岛': [119.2126, 40.0232],
    '绍兴': [120.564, 29.7565],
    '聊城': [115.9167, 36.4032],
    '肇庆': [112.1265, 23.5822],
    '舟山': [122.2559, 30.2234],
    '苏州': [120.6519, 31.3989],
    '莱芜': [117.6526, 36.2714],
    '菏泽': [115.6201, 35.2057],
    '营口': [122.4316, 40.4297],
    '葫芦岛': [120.1575, 40.578],
    '衡水': [115.8838, 37.7161],
    '衢州': [118.6853, 28.8666],
    '西宁': [101.4038, 36.8207],
    '西安': [109.1162, 34.2004],
    '贵阳': [106.6992, 26.7682],
    '连云港': [119.1248, 34.552],
    '邢台': [114.8071, 37.2821],
    '邯郸': [114.4775, 36.535],
    '郑州': [113.4668, 34.6234],
    '鄂尔多斯': [108.9734, 39.2487],
    '重庆': [107.7539, 30.1904],
    '金华': [120.0037, 29.1028],
    '铜川': [109.0393, 35.1947],
    '银川': [106.3586, 38.1775],
    '镇江': [119.4763, 31.9702],
    '长春': [125.8154, 44.2584],
    '长沙': [113.0823, 28.2568],
    '长治': [112.8625, 36.4746],
    '阳泉': [113.4778, 38.0951],
    '青岛': [120.4651, 36.3373],
    '韶关': [113.7964, 24.7028]
  };

  var BJData = [
    [{
      name: '新乡'
    }, {
      name: '新乡',
      value: 200
    }],
    [{
      name: '新乡'
    }, {
      name: '呼和浩特',
      value: 90
    }],
    [{
      name: '新乡'
    }, {
      name: '哈尔滨',
      value: 90
    }],
    [{
      name: '新乡'
    }, {
      name: '石家庄',
      value: 90
    }],
    [{
      name: '新乡'
    }, {
      name: '昆明',
      value: 30
    }],
    [{
      name: '新乡'
    }, {
      name: '北京',
      value: 100
    }],
    [{
      name: '新乡'
    }, {
      name: '长春',
      value: 40
    }],
    [{
      name: '新乡'
    }, {
      name: '重庆',
      value: 40
    }],
    [{
      name: '新乡'
    }, {
      name: '贵阳',
      value: 50
    }],
    [{
      name: '新乡'
    }, {
      name: '南宁',
      value: 30
    }],
    [{
      name: '新乡'
    }, {
      name: '济南',
      value: 10
    }],
    [{
      name: '新乡'
    }, {
      name: '太原',
      value: 40
    }],
    [{
      name: '新乡'
    }, {
      name: '西安',
      value: 60
    }],
    [{
      name: '新乡'
    }, {
      name: '武汉',
      value: 50
    }],
    [{
      name: '新乡'
    }, {
      name: '合肥',
      value: 40
    }],
    [{
      name: '新乡'
    }, {
      name: '南京',
      value: 30
    }],
    [{
      name: '新乡'
    }, {
      name: '沈阳',
      value: 20
    }],
    [{
      name: '新乡'
    }, {
      name: '成都',
      value: 10
    }]
  ];

  var SHData = [
    [{
      name: '九江'
    }, {
      name: '九江',
      value: 200
    }],

    [{
      name: '九江'
    }, {
      name: '长沙',
      value: 95
    }],
    [{
      name: '九江'
    }, {
      name: '武汉',
      value: 30
    }],
    [{
      name: '九江'
    }, {
      name: '南昌',
      value: 20
    }],
    [{
      name: '九江'
    }, {
      name: '合肥',
      value: 70
    }],
    [{
      name: '九江'
    }, {
      name: '南京',
      value: 60
    }],
    [{
      name: '九江'
    }, {
      name: '福州',
      value: 50
    }],
    [{
      name: '九江'
    }, {
      name: '上海',
      value: 100
    }],
    [{
      name: '九江'
    }, {
      name: '深圳',
      value: 100
    }],

  ];

  var GZData = [
    [{
      name: '新疆玛纳斯基地'
    }, {
      name: '新疆玛纳斯基地',
      value: 200
    }],
    [{
      name: '新疆玛纳斯基地'
    }, {
      name: '  ',
      value: 90
    }],
    [{
      name: '新疆玛纳斯基地'
    }, {
      name: ' ',
      value: 40
    }],
    [{
      name: '新疆玛纳斯基地'
    }, {
      name: '呼和浩特',
      value: 90
    }],
    [{
      name: '新疆玛纳斯基地'
    }, {
      name: '昆明',
      value: 40
    }],
    [{
      name: '新疆玛纳斯基地'
    }, {
      name: '成都',
      value: 10
    }],
    [{
      name: '新疆玛纳斯基地'
    }, {
      name: '兰州',
      value: 95
    }],
    [{
      name: '新疆玛纳斯基地'
    }, {
      name: '银川',
      value: 90
    }],
    [{
      name: '新疆玛纳斯基地'
    }, {
      name: '西宁',
      value: 80
    }],

  ];

  var planePath = 'path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705';

  var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i];
      var fromCoord = geoCoordMap[dataItem[0].name];
      var toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push([{
          coord: fromCoord
        }, {
          coord: toCoord
        }]);
      }
    }
    return res;
  };

  var color = ['#3ed4ff', '#ffa022', '#a6c84c'];
  var series = [];
  [
    ['新乡', BJData],
    ['九江', SHData],
    ['新疆', GZData]
  ].forEach(function (item, i) {
    series.push({
      name: item[0] + ' Top10',
      type: 'lines',
      zlevel: 1,
      effect: {
        show: true,
        period: 6,
        trailLength: 0.7,
        color: '#fff',
        symbolSize: 3
      },
      lineStyle: {
        normal: {
          color: color[i],
          width: 0,
          curveness: 0.2
        }
      },
      data: convertData(item[1])
    }, {
      name: item[0] + ' Top10',
      type: 'lines',
      zlevel: 2,
      effect: {
        show: true,
        period: 6,
        trailLength: 0,
        symbol: planePath,
        symbolSize: 15
      },
      lineStyle: {
        normal: {
          color: color[i],
          width: 1,
          opacity: 0.4,
          curveness: 0.2
        }
      },
      data: convertData(item[1])
    }, {
      name: item[0] + ' Top10',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: {
        brushType: 'stroke'
      },
      label: {
        normal: {
          show: true,
          position: 'right',
          formatter: '{b}'
        }
      },
      symbolSize: function (val) {
        return val[2] / 8;
      },
      itemStyle: {
        normal: {
          color: color[i]
        }
      },
      data: item[1].map(function (dataItem) {
        return {
          name: dataItem[1].name,
          value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
        };
      })
    });
  });

  option = {
    backgroundColor: '#080a20',
    title: {
      text: '模拟迁徙',
      subtext: '数据纯属虚构',
      left: 'left',
      textStyle: {
        color: '#fff'
      }
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      top: 'bottom',
      left: 'right',
      data: ['北京 Top10', '上海 Top10', '广州 Top10'],
      textStyle: {
        color: '#fff'
      },
      selectedMode: 'single'
    },
    geo: {
      map: 'china',
      label: {
        emphasis: {
          show: false
        }
      },
      roam: true,
      itemStyle: {
        normal: {
          areaColor: '#132937',
          borderColor: '#0692a4'
        },
        emphasis: {
          areaColor: '#0b1c2d'
        }
      }
    },
    series: series
  };

  var myChart = echarts.init($('.map .geo')[0]);
  myChart.setOption(option);
})();