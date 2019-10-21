function fibonacci(tn1){
    var i = 0, j = 1, n = 0
    while(n > tn1){
        document.querySelector('div#res').innerHTML = ("<br/ >"+i)
        var t = i; i = j ; j+= t; n++ 
    }
}
    