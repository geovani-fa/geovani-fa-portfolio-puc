class ValidationError extends Error {
    constructor(message){
        super(message);
        this.name = "ValdationError";
    }
}

function vaiDarErro(){
    throw new ValidationError("Dados Inválidos!");
}

try{
    vaiDarErro()
}catch (e) {
    console.error(`${e.name}: ${e.message}`);
}