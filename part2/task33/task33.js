/*
 * @Author: laihaibo
 * @Date:   2016-05-24 11:17:00
 * @Last Modified by:   laihaibo
 * @Last Modified time: 2016-05-24 13:30:19
 */

window.onload = function() {

  function addEvent(element, event, listener) {
    if (element.addEventListener) {
      element.addEventListener(event, listener, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + event, listener);
    } else {
      element["on" + event] = listener;
    }
  }

  var current = 0;
  var directionCount = [0];
  var square = document.getElementById('square');
  var go = document.getElementById('go');
  var tunlef = document.getElementById('tunlef');
  var tunrig = document.getElementById('tunrig');
  var tunbac = document.getElementById('tunbac');

  function goCommand() {
    // current=(current+90)%360;
    //根据方块的方向确定行进的方向
    switch (directionCount[0]) {
      case 0:
        var countTop = square.offsetTop - 40;
        var countLeft = square.offsetLeft;
        break;
      case 90:
        var countTop = square.offsetTop;
        var countLeft = square.offsetLeft + 40;
        break;
      case 180:
        var countTop = square.offsetTop + 40;
        var countLeft = square.offsetLeft;
        break;
      case 270:
        var countTop = square.offsetTop;
        var countLeft = square.offsetLeft - 40;
        break;
    }

    //设置边缘的范围
    if (countLeft <= 0) {
      countLeft = 0;
    }
    if (countTop <= 0) {
      countTop = 0;
    }
    if (countTop >= 400) {
      countTop = 400;
    }
    if (countLeft >= 400) {
      countLeft = 400;
    }
    // this.style.transform='rotate('+current+'deg)';
    // directionCount[0]=current;
    // console.log(directionCount[0]);
    //变换
    square.style.top = countTop + 'px';
    square.style.left = countLeft + 'px';
  };

  function tunbacCommand() {
    current = (current + 180) % 360;
    square.style.transform = 'rotate(' + current + 'deg)';
    directionCount[0] = current;
  };

  function tunrigCommand() {
    current = (current + 90) % 360;
    square.style.transform = 'rotate(' + current + 'deg)';
    directionCount[0] = current;
  };

  function tunlefCommand() {
    current = (current + 270) % 360;
    square.style.transform = 'rotate(' + current + 'deg)';
    directionCount[0] = current;
  };

  addEvent(go, 'click', goCommand);
  addEvent(tunlef, 'click', tunlefCommand);
  addEvent(tunrig, 'click', tunrigCommand);
  addEvent(tunbac, 'click', tunbacCommand);
  //增加键盘
  addEvent(document, 'keydown', function(e) {
    var event = e || window.event;
    switch (event.keyCode) {
      case 37:
        tunlefCommand();
        break;
      case 38:
        goCommand();
        break;
      case 39:
        tunrigCommand();
        break;
      case 40:
        tunbacCommand();
        break;
    }
  });
}
