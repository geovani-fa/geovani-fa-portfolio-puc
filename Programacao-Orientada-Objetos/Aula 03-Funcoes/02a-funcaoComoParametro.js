//Função como argumento
function decision(question, doOk, doCancel){
    if(question == "Ok") doOk() //A funcao doOK() está recebendo um valor que será a funcao passada como parametro
    else doCancel();
}
function showOk(){
    console.log("You agreed.");
}
function showCancel(){
    console.log("You canceled the execution");
}

decision("Ok", showOk, showCancel);
decision("Cancel", showOk, showCancel);