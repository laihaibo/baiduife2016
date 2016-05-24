/*
 * @Author: laihaibo
 * @Date:   2016-05-24 14:12:56
 * @Last Modified by:   laihaibo
 * @Last Modified time: 2016-05-24 15:32:34
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
  // var traTop = document.getElementById('traTop');
  // var traLef = document.getElementById('traLef');
  // var traBot = document.getElementById('traBot');
  // var traRig = document.getElementById('traRig');
  // var movTop = document.getElementById('movTop');
  // var movLef = document.getElementById('movLef');
  // var movBot = document.getElementById('movBot');
  // var movRig = document.getElementById('movRig');

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
    countTop = checkRange(countTop);
    countLeft = checkRange(countLeft);
    // this.style.transform='rotate('+current+'deg)';
    // directionCount[0]=current;
    // console.log(directionCount[0]);
    //变换
    square.style.top = countTop + 'px';
    square.style.left = countLeft + 'px';
  };

  function checkRange(num) {
    if (num <= 0) {
      num = 0;
    }
    if (num >= 400) {
      num = 400;
    }
    return num;
  }


  var squObj = {
    gotraTop: function() {
      directionCount[0] = 0;
      goCommand();
    },

    gotraBot: function() {
      directionCount[0] = 180;
      goCommand();
    },
    gotraLef: function() {
      directionCount[0] = 270;
      goCommand();
    },
    gotraRig: function() {
      directionCount[0] = 90;
      goCommand();
    },

    gomovTop: function() {
      current = 0;
      square.style.transform = 'rotate(' + current + 'deg)';
      directionCount[0] = current;
      squObj.gotraTop();
    },
    gomovBot: function() {
      current = 180;
      square.style.transform = 'rotate(' + current + 'deg)';
      directionCount[0] = current;
      squObj.gotraBot();
    },

    gomovRig: function() {
      current = 90;
      square.style.transform = 'rotate(' + current + 'deg)';
      directionCount[0] = current;
      squObj.gotraRig();
    },

    gomovLef: function() {
      current = 270;
      square.style.transform = 'rotate(' + current + 'deg)';
      directionCount[0] = current;
      squObj.gotraLef();
    },
  }

  //addEvent(traTop, 'click', pp['gotraTop']);
  // addEvent(traLef, 'click', gotraLef);
  // addEvent(traRig, 'click', gotraRig);
  // addEvent(traBot, 'click', gotraBot);
  // addEvent(movTop, 'click', gomovTop);
  // addEvent(movLef, 'click', gomovLef);
  // addEvent(movRig, 'click', gomovRig);
  // addEvent(movBot, 'click', gomovBot);
  //增加键盘
  // addEvent(document, 'keydown', function(e) {
  //   var event = e || window.event;
  //   switch (event.keyCode) {
  //     case 37:
  //       tunlefCommand();
  //       break;
  //     case 38:
  //       goCommand();
  //       break;
  //     case 39:
  //       tunrigCommand();
  //       break;
  //     case 40:
  //       tunbacCommand();
  //       break;
  //   }
  // });



  function addBtnHandle(e) {
    if (e.target.nodeName == 'BUTTON') {
      var btn = e.target;
      var action = 'go' + e.target.value;
      addEvent(btn, 'click', squObj[action]);
    }
  }
  var control = document.getElementById('control');
  addEvent(control, 'mouseover', addBtnHandle);
}
