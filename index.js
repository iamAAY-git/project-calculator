let currentExpr='';

function operand(value){
    currentExpr+=value;
    document.getElementById('display').value=currentExpr;
}
function operator(opr){
    currentExpr+=' '+opr+' ';
    document.getElementById('display').value=currentExpr;
}
function clearDisplay(){
    currentExpr='';
    document.getElementById('display').value=currentExpr;
}
function calculate(){
    try{
let result=eval(currentExpr);
document.getElementById('display').value=result;
    }
    catch(error){
        document.getElementById('display').value="Error";  
    }
   
}