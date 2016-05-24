/*
 * @Author: laihaibo
 * @Date:   2016-05-10 15:29:15
 * @Last Modified by:   laihaibo
 * @Last Modified time: 2016-05-10 15:35:16
 */

window.onload = function() {
  var container = document.getElementById('container');
  var typein = document.getElementById('type-in');
  var list = document.getElementById('list');

  var data = []; //用于储存输入的数字

  //渲染数组
  function render(data) {
    list.innerHTML = ''; //每次渲染之前清除前一次数据
    for (var i = 0; i < data.length; i++) {
      var newNode = document.createElement('a');
      newNode.innerHTML = data[i];
      list.appendChild(newNode);
      typein.value = ''; //渲染完成后清除输入框内容
    }
  }

  function check(num) {
    if (num.match(/^-?\d+$/) || num.match(/^-?(\d*\.)?\d+$/)) { //匹配整数，浮点数
      return num;
    } else {
      alert("请输入一个数字！");
      return; //仍会返回undifinde被接受
    }
  }

  function addBtnHandle(e) {
    if (e.target.nodeName == 'BUTTON') {
      var func = e.target.value; //获得所点击按钮的属性
      if (e.target.value === 'unshift' || e.target.value === 'push') {
        var recive = check(typein.value);
        if (recive) { //避免接受不需要的非数字
          data[func](recive); //通过【】方法接收按钮属性
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

  //var btn = document.querySelectorAll('button');
  // btn[1].onclick=function(){
  //  alert(this.value);
  // }
  container.addEventListener('click', addBtnHandle, false);
}
