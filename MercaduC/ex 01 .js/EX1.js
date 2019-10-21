function greet(person){
    if(person = {name:'amy'}){ // == ele iguala o name:'amy'
        return 'hey amy' // person recebendo name retorna 'hey amy'
    }else {
        return 'hey arnold'// fazendo o se vim para false
    }
}
greet({name:'amy'}) // e retornando 'hey arnold'