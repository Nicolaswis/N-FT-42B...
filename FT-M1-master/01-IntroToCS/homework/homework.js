'use strict';

function BinarioADecimal(num)  {
   if (!/^[01]+$/.test(num)) {
      throw new Error("La entrada no es un número binario válido.");
    }
  
   
    let decimal = 0;
    const length = num.length;
  
    for (let i = 0; i < length; i++) {
      const bit = parseInt(num[length - 1 - i]); 
      decimal += bit * Math.pow(2, i);
    }
  
    return decimal;
  
  };



function DecimalABinario(num) {
   if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
      throw new Error("La entrada no es un número decimal válido o es negativa.");
    }
  
    if (num === 0) {
      return "0"; 
    } else {
      let binario = "";
      while (num > 0) {
        binario = (num % 2) + binario; 
        num = Math.floor(num / 2);    
      }
      return binario;
    }
  };

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
