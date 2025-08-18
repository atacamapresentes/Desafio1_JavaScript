//function FuncaoCliqueFora(){
   // var entradaCelsius = document.getElementById('valorCelsius');
   // var entradaCelsiusString = entradaCelsius.value;
    //console.log(entradaCelsiusString);
    //var entradaCelsiusNumero = Number(entradaCelsiusString);
    //console.log(entradaCelsiusNumero);
//}

function ConversaoCelsiusParaFarenheit() {
    var entradaCelsius = document.getElementById('valorCelsius');
    var entradaCelsiusNumero = parseFloat(entradaCelsius.value);

    if (entradaCelsiusNumero != 0) {
        let FuncaoFarenheit = ( entradaCelsiusNumero * ( 9 / 5 ) ) + 32;
        let FuncaoFarenheitNumber = Number(FuncaoFarenheit);
        let resultadoF = document.getElementById('resultadoFarenheit');
        resultadoF.innerHTML = FuncaoFarenheitNumber + "°F";
    }
}

    function ConversaoFarenheitParaCelsius() {
    var entradaFarenheit = document.getElementById('valorFarenheit');
    var entradaFarenheitNumero = parseFloat(entradaFarenheit.value);

    if (entradaFarenheitNumero != 0) {
        let FuncaoCelsius = ( entradaFarenheitNumero - 32 ) * ( 5 / 9 );
        let FuncaoCelsiusNumber = parseFloat(FuncaoCelsius.toFixed(2));
        let resultadoC = document.getElementById('resultadoCelsius');
        resultadoC.innerHTML = FuncaoCelsiusNumber + "°C";
    }
}