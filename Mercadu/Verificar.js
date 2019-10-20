function primo(num){
    if(num!=1){
        for (var i = 2; i < num; i++)
        if(num% i==0) return false;
        return num !== 1;
    }

}
function verificar(){
    var num = document.querySelector('input#tn1').value
    var result = " "

    if(!isNaN(num)){
        if(primo(num)){
            result =`O numero ${num} é primo !`
        }else {
            result =`O numero ${num} Não primo !`
        }
        document.querySelector('div#res').innerHTML = result  
    }
    
}