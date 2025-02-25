class Node{
    constructor(valor){
        this.valor = valor;
        this.ref = null;
    }
}

class LinkedList{
    constructor(head){
        this.head = head;
    }
    insert(node){

    };
    delete(node){
        if(this.head == null){
            
        }
    };
    search(){

    };
    tamanhoLista(){

    };
}

var no1 = new Node(1);
var no2 = new Node(2);
var no3 = new Node(3);
var no4 = new Node(4);
no1.ref = no2;
no2.ref = no3;
no3.ref = no4;
var lista1 = new LinkedList(no1);
//lista1.insert(no2);
//lista1.insert(no3);
//no1.ref = no2;
console.log(lista1);