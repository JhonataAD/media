function conversao () {
    //variaveis
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var n3 = document.getElementById("n3").value;
    var n4 = document.getElementById("n4").value;
    //Arredondamento
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    n3 = parseFloat(n3);
    n4 = parseFloat(n4);
    //cálculo
    result = (n1 + n2 + n3 + n4)/4;
    
    document.getElementById("result").innerHTML= "Sua média é: " + result.toFixed(1);
    }
    