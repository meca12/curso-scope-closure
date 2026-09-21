//conceptos de  variables 

var a; //se declara pero no se asigna un  valor 
var b = "b"// se  declara  y se asigna 
b = "bb" // reasignando  un valor  y redeclarando
a = "aaa"// redeclarando 

//global scope 
var fruit = "Apple"; 
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();
//al momento dee evitar un declaración de  un variable global es evitar el var 

function countries() {
    country = "colombia";//evitar las varibles  globales  
    console.log(country);
}

countries(); 
console.log(countries);

// ejercisio de chat gpt

const figther = "global"; 
function training() {
    const exercise = "Jab"; 
    console.log(figther); 
    console.log(exercise);
}

training(); 

///  segundo ejercicio 
const level = "global"; 
function gym() {
    const level = "gym"; 
    function ring() {
        console.log(level);
    }
    ring();
}
gym();
// aqui manda  llamar  al local scope ya que al momento de hacer el recorrido el mas cercano es precisamente el  local scope
//de lo contrario si  hubieramos llamado a los dos levels primero hubiera  echo su primer  recorrido mandando llamar el global  y despues el local 