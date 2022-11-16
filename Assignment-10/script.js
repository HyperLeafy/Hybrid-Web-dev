
//Defining factorial function
function focusevent() {
    document.getElementById("input").style.background = "aqua";
    document.getElementById("input1").style.background = "aqua";
    }
    function Alert() {
    alert("welcome to javascript");
    }
    function Factorial() {
    a = document.getElementById("input").value;
    b = document.getElementById("input1").value;
    fact = 1;
    for (i = 1; i <= a; i++) {
    fact = fact * i;
    }
    document.writeln("The Factorial of" + " " + a + "is" + fact);
    document.write("<br>");
    fact1 = 1;
    for (j = 1; j <= b; j++) {
    fact1 = fact1 * j;
    }
    document.writeln("The Factorial of" + " " + b + "is" + fact1);
    
    }
