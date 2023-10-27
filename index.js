
 function handleValue(v) {
      document.querySelector('.input-box').value+=v;   
}

function clearData() {
    document.querySelector('.input-box').value="";
}
function handleSubmit() {
   const result = document.querySelector('.input-box').value;
   if(result===null || result=== undefined || result===""){
    document.querySelector('.input-box').value="";
   }else{
       const resultvalue = eval(result);
       document.querySelector('.input-box').value=resultvalue;
       const operands = result.split('%'); 
    
       if (operands.length === 2) {
           const firstOperand = parseFloat(operands[0]);
           const secondOperand = parseFloat(operands[1]);
           console.log(firstOperand,secondOperand);
           
           if (!isNaN(firstOperand) && !isNaN(secondOperand)) {
               const resultPercentage = ( secondOperand * firstOperand) / 100;
               document.querySelector('.input-box').value = resultPercentage.toFixed(2);
           }
       }
   }
}
function clearonebyone() {
    const inputBox = document.querySelector('.input-box');
    const valuedata = inputBox.value;
    const backspacedata = valuedata.slice(0, -1);
    inputBox.value = backspacedata;
}
