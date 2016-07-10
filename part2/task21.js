/*
 * @Author: laihaibo
 * @Date:   2016-07-10 11:30:32
 * @Last Modified by:   laihaibo
 * @Last Modified time: 2016-07-10 16:16:03
 */

window.onload = function() {
  var tagInput = document.getElementById('tagInput');
  var habitInput = document.getElementById('habitInput');
  var tagList = document.getElementById('tagList');
  var habitList = document.getElementById('habitList');
  var habitConfirm = document.getElementById('habitConfirm');
  var data = []; //用于储存输入的数字
  var habbit = [];
  //var colour = ['aqua', 'fuchsia', 'gray', 'green', 'lime', 'olive', 'orange', 'purple', 'red', 'silver', 'teal', 'yellow'];

  //渲染数组
  function render(data,source,showplace) {
          if (data.length > 10) {
        data.shift();
      }

    source.innerHTML = '';
    showplace.innerHTML = ''; //每次渲染之前清除前一次数据
    for (var i = 0; i < data.length; i++) {
      var newNode = document.createElement('a');
      newNode.innerHTML = data[i];
      var randomc = i % 10;
      //var randomc = Math.round(Math.random() * 16);
      //newNode.style.background = colour[randomc];
      showplace.appendChild(newNode);
      //typein.value = ''; //渲染完成后清除输入框内容
    }
  }

  function trimstr(str) {
    var p = str.indexOf(',');
    var sstr = str.slice(0, p);
    return sstr;
  }

  tagInput.addEventListener('keyup', function(e) {
    // var data = [];
    var recive = tagInput.value.trim();
    if (e.keyCode == 13 || e.keyCode == 188 || e.keyCode == 32) {
      if (e.keyCode == 188) {
        recive = trimstr(recive);
      }
      tagInput.value = '';
            for (var i = 0; i < data.length; i++) {
              if ((data[i] ^ recive) ==0) {data.splice(i,1)}
      }
          data.push(recive);
      render(data,tagInput,tagList);
    }

      function deleta(e){
                  var xixi = e.target.innerHTML;
                  e.target.innerHTML = '点击删除 '+xixi;
      }
      var tags = tagList.querySelectorAll('a');
              for (var i = 0; i < tags.length; i++) {
                tags[i].addEventListener('mouseover',function(e){
                  var xixi = e.target.innerHTML;
                  e.target.innerHTML = '点击删除 '+xixi;
                  e.target.style.backgroundColor='yellow';
                  e.target.style.fontSize='20px';
      });
                tags[i].addEventListener('mouseout',function(e){
                  var xixi = e.target.innerHTML;
                  e.target.innerHTML = xixi.slice(5);
                  e.target.style.backgroundColor='';
                  e.target.style.fontSize='';
      });
        }

  })
  habitConfirm.addEventListener('click',function(){
    var recHabbit = sepertor(habitInput.value.trim());
          // habitInput.value = '';
          for (var i = 0; i < recHabbit.length; i++) {
            if(recHabbit[i]){
                                      for (var j = 0; j < habbit.length; j++) {
                if ((habbit[j] ^ recHabbit[i]) ==0) {habbit.splice(j,1)}
              }
              habbit.push(recHabbit[i])

            }
          }
          // var c = habbit.concat(recHabbit);
      //       for (var i = 0; i < habbit.length; i++) {
      //         if ((habbit[i] ^ recive) ==0) {habbit.splice(i,1)}
      // }
          // habbit = c;

           render(habbit,habitInput,habitList);
  })

  function sepertor(str) {
    var arr = str.split(/,|，|、|\s|\n|\r|\t/gm);
    return arr;
  }

  // function addBtnHandle(e) {
  //   if (e.target.nodeName == 'BUTTON') {
  //     var func = e.target.value; //获得所点击按钮的属性
  //     var recive = sepertor(typein.value.trim());
  //     if (e.target.value === 'unshift' || e.target.value === 'push') {
  //       //避免接受不需要的非数字
  //       for (var i = 0; i < recive.length; i++) {
  //         if (recive[i]) {
  //           data[func](recive[i]);
  //         }
  //         // else {
  //         //   alert("请输入一个值！")
  //         // }
  //         //console.log(data);
  //       }
  //       //通过【】方法接收按钮属性

  //     } else {
  //       if (list.innerHTML == '') {
  //         alert('list中没有值！');
  //       }
  //       data[func]();
  //     }
  //     render(data);
  //   }
  // }

  // contral.addEventListener('click', addBtnHandle, false);
  // search.addEventListener('click',valid,false);
  // function valid() {
  //   validtext = new RegExp(searchtext.value.trim().toLowerCase());//大小写匹配
  //   for (var i = 0; i < data.length; i++) {
  //     list.children[i].style.background = '';
  //     if (data[i].toLowerCase().match(validtext)) {
  //       list.children[i].style.background = 'red';
  //       //console.log(list.children[i]);
  //     }
  //   }
  // }

}
