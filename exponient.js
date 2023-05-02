function go_1() {
  const a = document.getElementById("inp-1").value;

  const b = document.getElementById("inp-2").value;
  const m = a + b;

  const c = a ** b;

  document.getElementById("div3").innerHTML = c.toLocaleString("en-us");
  document.getElementById("go").style.opacity = 0;
  document.getElementById("output").style.display = "block";
  document.getElementById("inp-1").value = "";
  document.getElementById("inp-2").value = "";
  if (m == "") {
     document.getElementById("error-message").style.display = "block";
    document.getElementById("error-message").style.animation = "mymove 0.8s linear";
    setTimeout(function () {
      document.getElementById("error-message").style.display = "none";
    }, 2000)
    document.getElementById("go").innerHTML = "empty field";
    document.getElementById("go").style.opacity = 1;
    document.getElementById("go").style.backgroundColor = "red";
    document.getElementById("go").style.color = "white";
    document.getElementById("go").style.backgroundColor = "red";
    document.getElementById("output").style.display = "none";
  }
}

function back() {
  document.getElementById("output").style.display = "none";
  document.getElementById("go").style.opacity = 1;
}
function change1() {
  document.getElementById("go").style.backgroundColor = "chartreuse";
  document.getElementById("go").style.color = "blue";
  document.getElementById("go").innerHTML = "GO";
  document.getElementById("go").style.opacity = 1;
}

function restrictAlphabet(e) {
  var x = e.which || e.keycode;
  if ((x >= 48 && x <= 57))   
       return true
  else
       return false
    
 }

function change10() {
  document.getElementById("go").style.opacity = 0;
  
 }
