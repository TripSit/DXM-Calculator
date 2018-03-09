//function to round numbers
Number.prototype.round = function (places) {
  return +(Math.round(this + 'e+' + places) + 'e-' + places);
};

window.onload = function () {
  var myArray = [
    { value: 88.5, name: 'Robitussin DX (oz)', type: 'HBr' },
    { value: 3, name: 'Robitussin DX (ml)', type: 'HBr' },
    { value: 1,  name: 'Pure (mg)', type: 'Pure' },
    { value: 15, name: 'Robitussin Gelcaps (15 mg caps)', type: 'HBr' },
    { value: 30, name: '30mg Gelcaps (30 mg caps)', type: 'HBr' },
  ];

  var select = document.getElementById('substancetype');
  for (i = 0; i < myArray.length; i++) {
    select.options[select.options.length] = new Option(myArray[i].name, myArray[i].value);
  }

  changeMode();
};

function addInfo(weight, unit) {
  $('#p1l').text((weight * 1.5).round(2) + ' ' + unit);
  $('#p1h').text((weight * 2.5).round(2) + ' ' + unit);
  $('#p2l').text((weight * 2.5).round(2) + ' ' + unit);
  $('#p2h').text((weight * 7.5).round(2) + ' ' + unit);
  $('#p3l').text((weight * 7.5).round(2) + ' ' + unit);
  $('#p3h').text((weight * 15).round(2) + ' ' + unit);
  $('#p4l').text((weight * 15).round(2) + ' ' + unit);
  $('#p4h').text((weight * 20).round(2) + ' ' + unit);
}

var fix = function () {
  var t = document.getElementById('substancetype');
  var selectedText = t.options[t.selectedIndex].text;
  var unit = selectedText.match(/\(.*?\)/);
  var w;
  w = parseFloat(document.tform.wunit.options[
      document.tform.wunit.selectedIndex].value) *
    parseFloat(document.tform.weight.value) /
    parseFloat(document.tform.substance.options[
      document.tform.substance.selectedIndex].value);
  if (isNaN(w)) {
    return;
  }

  addInfo(w, unit);
};

var manual = function () {
  var w;
  var per5 = document.getElementById('per5');
  var per5Value = per5.options[per5.selectedIndex].value;
  w = parseFloat(document.tform.wunitManual.options[
      document.tform.wunitManual.selectedIndex].value) *
    parseFloat(document.tform.weightManual.value) /
    (document.getElementById('manualMode').value *
    per5Value);
  if (isNaN(w)) {
    return;
  }

  addInfo(w, 'ml');
};

var changeMode = function (slow) {
  if ($('#modeSwitch').prop('checked')) {
    $('#manualInput').show(slow);
    $('#autoInput').hide(slow);
  }else {
    $('#autoInput').show(slow);
    $('#manualInput').hide(slow);
  }

};
