//Função Anônima
function decision(question, doOk, doCancel){
    if(question == "Ok") doOk()
    else doCancel();
}
decision(
    "Ok",
    function () { console.log("You agreed.");},
    function () { console.log("You canceled the execution");}
);
decision(
    "Cancel",
    function () { console.log("You agreed.");},
    function () { console.log("You canceled the execution");}
);
