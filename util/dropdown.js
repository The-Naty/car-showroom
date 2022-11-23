var carObject = {
  Audi: ["A3", "A4", "A6", "Q3", "Q7", "Q8"],
  BMW: ["X1", "X2", "X3", "X4", "X5", "X6"],
  VolksWagen: ["Golf", "Jetta", "Passat", "Polo", "Tiguan", "Arteon"],
  Mercedes: ["A-Class", "C-Class", "G-Class", "S-Class", "GLC", "GLS"],
};
window.onload = function () {
  var manufacturerSel = document.getElementById("car-manufacturer");
  var modelSel = document.getElementById("car-model");
  for (var x in carObject) {
    manufacturerSel.options[manufacturerSel.options.length] = new Option(x, x);
  }
  manufacturerSel.onchange = function () {
    modelSel.length = 1;
    for (var y in carObject[this.value]) {
      let x = carObject[this.value][y];
      modelSel.options[modelSel.options.length] = new Option(x, x);
    }
  };
};
