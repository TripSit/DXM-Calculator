//function to round numbers
Number.prototype.round = function(places) {
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
};

function fix() {
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

  $('#p1l').text((w * 1.5).round(2) + ' ' + unit);
  $('#p1h').text((w * 2.5).round(2) + ' ' + unit);
  $('#p2l').text((w * 2.5).round(2) + ' ' + unit);
  $('#p2h').text((w * 7.5).round(2) + ' ' + unit);
  $('#p3l').text((w * 7.5).round(2) + ' ' + unit);
  $('#p3h').text((w * 15).round(2) + ' ' + unit);
  $('#p4l').text((w * 15).round(2) + ' ' + unit);
  $('#p4h').text((w * 20).round(2) + ' ' + unit);
}
