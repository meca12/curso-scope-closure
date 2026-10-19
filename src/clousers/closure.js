/*en js  podemos tener  una función dentro de otra  función 
las clousers pueden tener  acceso al  ambito lexico */

function greetins() {
    let username = "martha"; 
    function userNameDisplay() {
        return`Hello ${username}`;
    }
    return userNameDisplay;
}

const g = greetins(); 
console.log(g); // retornamos la  función display 
console.log(g());//  tiene el ambito lexico y recuerda  el  ambito 

