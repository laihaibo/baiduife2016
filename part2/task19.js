/*
 * @Author: laihaibo
 * @Date:   2016-05-10 15:30:56
 * @Last Modified by:   laihaibo
 * @Last Modified time: 2016-05-10 19:30:30
 */

window.onload = function() {
  var container = document.getElementById('container');
  var typein = document.getElementById('type-in');
  var list = document.getElementById('list');
  var sort = document.getElementById('sort');
  var initDa = document.getElementById('initDa');
  var btn = document.getElementsByClassName('btn');
  var contral = document.getElementById('contral');

  var data = []; //用于储存输入的数字
  // var snap = []; //用于可视化的快照集合
  // var timer = null;
  var colour = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 'silver', 'teal', 'yellow', 'white'];


  //初始化data
  initData();
  //产生随机图像
  function initData() {
    data = [];
    for (var i = 0; i < 40; i++) {
      data.push(Math.round(Math.random() * 90 + 10));
    }
    render(data);
  };

//渲染数组
  function render(data) {
    list.innerHTML = ''; //每次渲染之前清除前一次数据
    for (var i = 0; i < data.length; i++) {
      var newNode = document.createElement('a');
      newNode.style.height = data[i] + 'px';
      var randomc = data[i] % 10;
      //var randomc = Math.round(Math.random()*15);
      newNode.style.background = colour[randomc];
      list.appendChild(newNode);
      //typein.value = ''; //渲染完成后清除输入框内容
    }
    console.log(data.length);
  }
//检查输入合法性
  function check(num) {
    if (num.match(/^-?\d+$/) || num.match(/^-?(\d*\.)?\d+$/)) { //匹配整数，浮点数
      if (num > 100 || num < 10) {
        alert('请输入10到100之间的数！');
        return false;
      }
      return num;
    } else {
      alert("请输入一个数字！");
      return; //仍会返回undifinde被接受
    }
  }
//点击按钮
  function addBtnHandle(e) {
    if (e.target.nodeName == 'BUTTON') {
      var func = e.target.value; //获得所点击按钮的属性
      if (e.target.value === 'unshift' || e.target.value === 'push') {
        var recive = check(typein.value);
        if (recive) { //避免接受不需要的非数字
          if (data.length > 59) {
            alert('队列数量超出限制！')
          } else {
            data[func](recive);
          } //通过【】方法接收按钮属性
        }
      } else {
        if (list.innerHTML == '') {
          alert('list中没有数字！');
        }
        data[func]();
      }
      render(data);
    }
  }

  // function bubbleSort(arr) {
  //   snap = [];
  //   if (arr.length < 1) {
  //     return arr;
  //   }
  //   var temp;
  //   var length = arr.length;
  //   for (var i = 0; i < length; i++) {
  //     for (var j = 0; j < length - 1 - i; j++) {
  //       if (arr[j] > arr[j + 1]) {
  //         temp = arr[j + 1];
  //         arr[j] = arr[j + 1];
  //         arr[j + 1] = temp;
  //         snap.push(JSON.parse(JSON.stringify(arr)));
  //       }
  //     }
  //   }
  //   return arr;
  // };

  // Array.prototype.bubbleSort = function() {
  //   return bubbleSort(this);
  // }

  // function sortArr() {
  //   if (data.length == 0) {
  //     alert("队列为空");
  //     return;
  //   }
  //   data.bubbleSort();
  //   timer = setInterval(draw, 50);

  //   function draw() {
  //     var snap = [];
  //     if (snap.length !== 0) {
  //       render(snap);
  //     } else {
  //       clearInterval(timer);
  //       return;
  //     }
  //   }
  // }

  contral.addEventListener('click', addBtnHandle, false);
  //sort.addEventListener('click', sortArr, false);
  initDa.addEventListener('click', initData, false);
}
