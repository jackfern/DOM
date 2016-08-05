var tip = 0;
var amount = 0;

function tipCalc () {
  console.log(tip);
  tip = (document.getElementById("money").value  * .2);
  console.log(tip);
  return tip;
}

function returnTipCalc () {
document.getElementById("lettuce").innerHTML = "20% tip would be " + tipCalc();
}
