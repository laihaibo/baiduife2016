/*
 * @Author: laihaibo
 * @Date:   2016-07-26 22:11:50
 * @Last Modified by:   laihaibo
 * @Last Modified time: 2016-07-26 23:28:36
 */

'use strict';

var state = document.getElementById('selectState');
var province = document.getElementById('selectPro');
var city = document.getElementById('selectCity');
var stateIndex = '';
var stateSelected = '';
var data = {
  '中国': {
    '浙江': ['宁波', '台州', '杭州'],
    '上海': ['松江', '崇明', '浦东'],
    '江苏': ['苏州', '无锡', '常州']
  },
  '日本': {
    '神奈川县': ['横滨市', '川崎市', '相模原市'],
    '东京都': ['世田谷区', '涩谷区', '八王子市'],
    '大阪府': ['大阪市', '堺市', '岸和田市']
  }
}


function choiceState() {
  province.innerHTML = '';
  var pros = [];
  stateIndex = state.selectedIndex;
  stateSelected = state[stateIndex].value;
  for (var key in data[stateSelected]) {
    pros.push(key);
  }
  for (var i = pros.length - 1; i >= 0; i--) {
    province.options.add(new Option(pros[i], pros[i]));
  }
  choicePro();

}

function choicePro() {
  city.innerHTML = '';
  var provinceIndex = province.selectedIndex;
  var provinceSelected = province[provinceIndex].value;
  var citys = data[stateSelected][provinceSelected];
  // console.log(data[stateSelected][provinceSelected]);
  for (var i = 0; i < citys.length; i++) {
    // console.log(citys[i]);
    city.options.add(new Option(citys[i], citys[i]));
  }
}
//添加监听事件
state.addEventListener('change', choiceState);
province.addEventListener('change', choicePro);
//初始化
choiceState();
