'use strict';

function BinarioADecimal(num) {
   var decimal = 0;
   var longitud = num.length;
   for (var i = longitud - 1; i >= 0; i--) {
      
      if (num.charAt(i) === '1') {
        decimal = decimal + Math.pow(2, longitud - 1 - i);
      }
    }
    
    return decimal;
}

function DecimalABinario(num) {
   if (num === 0) {
      return '0';
    }
    let binario = '';
    while (num > 0) {
      binario = (num % 2) + binario;
      num = Math.floor(num / 2);
    }
    return binario;

}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
