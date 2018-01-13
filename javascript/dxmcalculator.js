//function to round numbers
Number.prototype.round = function(places) {
  return +(Math.round(this + 'e+' + places) + 'e-' + places);
};

window.onload = function () {
  var myArray = [
    { value: 88.5, name: 'Robitussin (oz)' },
    { value: 3, name: 'Robitussin (ml)' },
    { value: 1,  name: 'Pure (mg)' },
    { value: 15, name: 'Robitussin Gelcaps (gelcaps)' },
    { value: 30, name: '30mg Gelcaps (30 mg gelcaps)' },
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
  document.tform.p1l.value = (w * 1.5).round(2) + ' ' + unit;
  document.tform.p1h.value = (w * 2.5).round(2) + ' ' + unit;
  document.tform.p2l.value = (w * 2.5).round(2) + ' ' + unit;
  document.tform.p2h.value = (w * 7.5).round(2) + ' ' + unit;
  document.tform.p3l.value = (w * 7.5).round(2) + ' ' + unit;
  document.tform.p3h.value = (w * 15).round(2) + ' ' + unit;
  document.tform.p4l.value = (w * 15).round(2) + ' ' + unit;
  document.tform.p4h.value = (w * 20).round(2) + ' ' + unit;
}
