/*
 * @Author: laihaibo
 * @Date:   2016-05-11 20:59:15
 * @Last Modified by:   laihaibo
 * @Last Modified time: 2016-05-11 22:01:57
 */

window.onload = function() {
  var area = document.getElementById('select1');
  var school = document.getElementById('select2');
  var inSchoolRadio = document.getElementById('inSchoolRadio');
  var outschoolRadio = document.getElementById('outschoolRadio');
  var inSchool = document.getElementById('inSchool');
  var outSchool = document.getElementById('outSchool');
  var data = [
    ['bj', '北京大学', '清华大学', '北京航空航天大学'],
    ['sh', '上海大学', '上海交通大学', '复旦大学'],
    ['zj', '浙江大学', '浙江农林大学', '宁波大学'],
    ['sg', '南洋理工大学', '新加坡国立大学']
  ];

  function swichArea() {
    school.innerHTML = '';
    var choice = area.selectedIndex;
    //alert(data[choice]);
    for (var i = 1; i < data[choice].length; i++) {
      var newNode = document.createElement('option');
      newNode.innerHTML = data[choice][i];
      newNode.value = data[choice][i];
      school.appendChild(newNode);
    }
  };

  area.addEventListener('change', swichArea, false);
  inSchoolRadio.addEventListener('change', function() {
    inSchool.className = 'inSchool';
    outSchool.className = 'outSchool hide';
  });
  outschoolRadio.addEventListener('change', function() {
    inSchool.className = 'inSchool hide';
    outSchool.className = 'outSchool';
  });

}
