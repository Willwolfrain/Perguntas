function verificado(){
    var Stry = document.querySelector('input#tn1')
    var result = " "
    if(Stry!= null){
        return false;
    }else{
        if(stry = ([{}])){
        result =`${Stry} Balanceado!`
                }else {
        result =`${Stry} Desbalanceado!`
        }
        document.querySelector('div#res').innerHTML = result
    }
          
    }