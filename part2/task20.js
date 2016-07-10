/*
 * @Author: laihaibo
 * @Date:   2016-05-10 19:57:29
 * @Last Modified by:   laihaibo
 * @Last Modified time: 2016-06-05 16:48:05
 */

window.onload = function() {
  var container = document.getElementById('container');
  var typein = document.getElementById('type_in');
  var list = document.getElementById('list');
  var contral = document.getElementById('contral');
  var searchtext = document.getElementById('search_text')
  var search = document.getElementById('search');
  var data = []; //用于储存输入的数字
  //var colour = ['aqua', 'fuchsia', 'gray', 'green', 'lime', 'olive', 'orange', 'purple', 'red', 'silver', 'teal', 'yellow'];

  //渲染数组
  function render(data) {
    list.innerHTML = ''; //每次渲染之前清除前一次数据
    for (var i = 0; i < data.length; i++) {
      var newNode = document.createElement('a');
      newNode.innerHTML = data[i];
      var randomc = i % 10;
      //var randomc = Math.round(Math.random() * 16);
      //newNode.style.background = colour[randomc];
      list.appendChild(newNode);
      //typein.value = ''; //渲染完成后清除输入框内容
    }
  }

  function sepertor(str) {
    var arr = str.split(/,|，|、|\s|\n|\r|\t/gm);
    return arr;
  }

  function addBtnHandle(e) {
    if (e.target.nodeName == 'BUTTON') {
      var func = e.target.value; //获得所点击按钮的属性
      var recive = sepertor(typein.value.trim());
      if (e.target.value === 'unshift' || e.target.value === 'push') {
        //避免接受不需要的非数字
        for (var i = 0; i < recive.length; i++) {
          if (recive[i]) {
            data[func](recive[i]);
          }
          // else {
          //   alert("请输入一个值！")
          // }
          //console.log(data);
        }
        //通过【】方法接收按钮属性

      } else {
        if (list.innerHTML == '') {
          alert('list中没有值！');
        }
        data[func]();
      }
      render(data);
    }
  }

  contral.addEventListener('click', addBtnHandle, false);
  search.addEventListener('click',valid,false);
  function valid() {
    validtext = new RegExp(searchtext.value.trim().toLowerCase());//大小写匹配
    for (var i = 0; i < data.length; i++) {
      list.children[i].style.background = '';
      if (data[i].toLowerCase().match(validtext)) {
        list.children[i].style.background = 'red';
        //console.log(list.children[i]);
      }
    }
  }
}
