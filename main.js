
values = [];

function myFun() {
  var inp =
  document.getElementById('input1');
  values.push(inp.value);
  inp.value = "";

  var pin =
  document.getElementById('input2');
  values.push(pin.value);
  pin.value = "";


    document.getElementById("values").innerHTML = values.join("<br>");

}
