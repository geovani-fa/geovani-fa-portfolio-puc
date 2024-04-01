function funcaoSemRetorno(){
    console.log("Hello World!");
}
function funcaoComRetorno(){
    return "Hello World!";
}
let msg = funcaoSemRetorno()
console.log(msg)

msg = funcaoComRetorno()
console.log(msg)