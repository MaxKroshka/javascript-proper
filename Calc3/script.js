/**
 * Created by Max Kroshka.
 */

$(document).ready(function(){

    var keys = document.querySelectorAll('#calculator span');
    var operators = ['+','-','x', '÷'];
    var decimalState = false;
    var operatorState = false;

    for(var i=0;i<keys.length;i++) {
        keys[i].onclick = function (e) {
            var input = document.querySelector("#screen");
            var inputVal = input.innerHTML;
            var btnVal = this.innerHTML;
            var lastChar = inputVal[inputVal.length-1];
            if(operators.indexOf(lastChar) > -1){
                operatorState = true;
            }
            if (btnVal == 'C') {
                input.innerHTML = '';
                decimalState = false;
                operatorState = false;
            }
            else if (btnVal == '=') {
                var equal = inputVal;
                equal = equal.replace(/x/g, '*').replace(/÷/g, '/');

                if (lastChar == '.' || operators.indexOf(lastChar) > -1) equal = equal.replace(/.$/, '');
                if (equal) input.innerHTML = eval(equal);
                decimalState = false;
                operatorState = false;
            }
            else if (operators.indexOf(btnVal) > -1) {

                if (inputVal != '' && operators.indexOf(lastChar) == -1)
                    input.innerHTML += btnVal;

                else if (inputVal == '' && btnVal == '-')
                    input.innerHTML += btnVal;

                if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
                    input.innerHTML = inputVal.replace(/.$/, btnVal);
                }
                decimalState = false;
            }
            else if (btnVal == '.'){
                if(!decimalState){
                    input.innerHTML +=btnVal;
                    decimalState = true;
                }
            }
            else if (btnVal == '√'){
                if(inputVal.length > 0 && !(operatorState)){
                    input.innerHTML = Math.sqrt(inputVal);
                }
            }
            else if (btnVal == 'x!') {
                if (inputVal.length > 0 && !(operatorState) && inputVal % 1 === 0) {
                    function myFac (num) {
                        if(num == 0) return 1;
                        else return num*myFac(num-1);
                    }
                    input.innerHTML = myFac(inputVal);
                }
                else{input.innerHTML += ''}
            }
            else if (btnVal == '%') {
                if (inputVal.length > 0 && !(operatorState)) {
                    input.innerHTML = eval(inputVal+"/100");
                }
                inputVal = input.innerHTML;
                if(inputVal % 1 !== 0) {decimalState = true;}
            }
            else if (btnVal == '←'){
                if (inputVal.length > 0){
                    input.innerHTML = inputVal.replace(/.$/, '');
                }
                inputVal = input.innerHTML;
                if (inputVal == 0){
                    decimalState = false;
                    operatorState = false;
                }
            }
            else if (btnVal == '0'){
                if (inputVal.length == 0 || operators.indexOf(lastChar) > -1){
                    input.innerHTML +=btnVal+'.';
                    decimalState = true;
                }
                else{input.innerHTML +=btnVal;}
            }
            else {
                input.innerHTML += btnVal;
            }

        }
    }
});

