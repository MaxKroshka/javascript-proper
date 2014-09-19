/**
 * Created by BigHeart on 9/10/14.
 */
$(document).ready(function(){
var keys = document.querySelectorAll('.button');


for(var i=0;i<keys.length;i++){
    keys[i].onclick = function(e) {
        var input = document.querySelector('#screen');
        var inputVal = input.val();
        var btnVal = this.val();

        if(btnVal == 'C') input.val('');
        if(btnVal == '=') {
            var equation = input.val();
            if(equation) input.val(equation);
        }
        else input.val(input(val)+btnVal);


        }
    }
});