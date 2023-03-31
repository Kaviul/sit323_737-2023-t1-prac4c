function add() {
    var num1 = parseInt(document.getElementById("firstNumber").value);
    var num2 = parseInt(document.getElementById("secondNumber").value);
    var sum = (num1 + num2);
   
    document.getElementById("answer").value = sum;
}
   
function sub() {
    var num1 = parseInt(document.getElementById("firstNumber").value);
    var num2 = parseInt(document.getElementById("secondNumber").value);
    var diff = (num1 - num2);
   
    document.getElementById("answer").value = diff;
}

function mult() {
    var num1 = parseInt(document.getElementById("firstNumber").value);
    var num2 = parseInt(document.getElementById("secondNumber").value);
    var mult = (num1*num2);
   
    document.getElementById("answer").value = mult;
}

function div() {
    var num1 = parseInt(document.getElementById("firstNumber").value);
    var num2 = parseInt(document.getElementById("secondNumber").value);
    var quo = (num1/num2);
   
    document.getElementById("answer").value = quo;
}

function avg() {
    var num1 = parseInt(document.getElementById("firstNumber").value);
    var num2 = parseInt(document.getElementById("secondNumber").value);
    var avg = (num1+num2)/2;
   
    document.getElementById("answer").value = avg;
}


function reset() {
    var num1 = parseInt(document.getElementById("firstNumber"). value = 0);
    var num2 = parseInt(document.getElementById("secondNumber").value = 0);
    var result = parseInt(document.getElementById("answer").value = 0)
}









