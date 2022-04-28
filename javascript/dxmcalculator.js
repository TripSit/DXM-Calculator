//function to round numbers
Number.prototype.round = function (places) {
  return +(Math.round(this + 'e+' + places) + 'e-' + places);
};

window.onload =  () => {
  let dxmProducts = [
    // Value is dxm hBr per 1 mL
    { value: 10, name: 'RoboCough (ml)', type: 'HBr' },
    { value: 88.5, name: 'Robitussin DX (oz)', type: 'HBr' },
    { value: 3, name: 'Robitussin DX (ml)', type: 'HBr' },
    { value: 15, name: 'Robitussin Gelcaps (15 mg caps)', type: 'HBr' },
    { value: 1, name: 'Pure (mg)', type: 'Pure' },
    { value: 30, name: '30mg Gelcaps (30 mg caps)', type: 'HBr' },
    { value: 40.9322, name: 'RoboTablets (30 mg tablets)', type: 'Pure' }
  ];

  // Populate automode's select options
  let autoModeOpions = document.getElementById('autoSubstance').options;

  dxmProducts.map((product, i) => {
    autoModeOpions[i] = new Option(dxmProducts[i].name, dxmProducts[i].value);
  });

  changeMode();
};

// Calculate each plat min/max value
const addInfo = (weight, unit) => {
  let rows = ["p1l","p1h","p2l","p2h","p3l","p3h","p4l","p4h"];
  let factor = [1.5, 2.5, 2.5, 7.5, 7.5, 15, 15, 20];
  rows.map((element,i) => {
    let row = document.getElementById(element);
    row.innerHTML = ((weight * factor[i]).round(2) + ' '  + unit);
  });
};


const auto = () => {
  let autoSubstance = document.getElementById('autoSubstance');
  let autoValue = autoSubstance.value;
  let selectedText = autoSubstance[autoSubstance.selectedIndex].text;
  let unit = selectedText.match(/\(.*?\)/);
  let autoWeightUnit = document.getElementById("autoWeightUnit").value;
  let weightAutoInput = document.getElementById("weightAutoInput").value;

  let calculate = autoWeightUnit * weightAutoInput / autoValue;
  if (isNaN(calculate)) {
    return;
  }

  addInfo(calculate, unit);
};

const manual = () => {
  let per5 = document.getElementById('per5').value;
  let manualValue = document.getElementById('manualMode').value;
  let manualWeightUnit = document.getElementById("manualWeightUnit").value;
  let weightManualInput = document.getElementById("weightManualInput").value;

  let calculate = manualWeightUnit * weightManualInput / (manualValue / per5);
  if (isNaN(calculate)) {
    return;
  }

  addInfo(calculate, 'ml');
};

const changeMode =  () => {
  let modeSwitch = document.getElementById("modeSwitch");
  let manualMode = document.getElementById("manualInput");
  let autoMode = document.getElementById("autoInput");

  if (modeSwitch.checked) {
    autoMode.classList.add("modeHidden");
    manualMode.classList.remove("modeHidden");
    manual();
  } else {
    autoMode.classList.remove("modeHidden");
    manualMode.classList.add("modeHidden");
    auto();
  }
};
