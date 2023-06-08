window.onload = function() {

  var buttonG = document.getElementById("G");



  buttonG.addEventListener("click", function() {
 for (var i = -6; i <= 6; i = i + 2) {
  var x = i;
  
  if (x < -4) {
    x = Math.abs(x) + Math.tan(x);
  }
  
  if (x === -4) {
    x = 23;
  }
  
  if (x > -4) {
    x = Math.cos(x) + x;
  }
  
 
   alert("Результати розрахунків при аргументі " + i + " = " + x);
}

  });

};
