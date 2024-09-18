// var é mutavel e pode ser declarada dnv
var campo = 10
var campo = 15
console.log(campo)

// let é mutavel mas não pode ser declarada dnv
let campo2 = 20
// let campo2 = 60
// console.log(campo2) -> SyntaxError: Identifier 'campo2' has already been declared

let  steps  =  100;
console.log(steps);  //  ->  100
steps  =  120;  //  ->  120
console.log(steps);
steps  =  steps  +  200;
console.log(steps);  //  ->  320

// const não ´emutavel e não pode se declarada dnv
const campo3 = 100
// const campo3 = 800
// console.log(campo3) --> SyntaxError: Identifier 'campo3' has already been declared

// variaveis declaradas dentro de escopo, tem seu valor só dentro dele
let  height  =  180;
{
         let  weight  =  70;
         console.log(height);  //  ->  180
         console.log(weight);  //  ->  70
}
console.log(height);  //  ->  180
// console.log(weight);  //  ->  Uncaught  ReferenceError:  weight  is  not  defined

let  height2  =  200;
{
         let  weight2  =  100;
         {
                 let  info  =  "tall";
                 console.log(height2);  //  ->  200
                 console.log(weight2);  //  ->  100
                 console.log(info);  //  ->  tall
         }
         console.log(height2);  //  ->  200
         console.log(weight2);  //  ->  100
         // console.log(info);  //  ->  Uncaught  ReferenceError:  info  is  not  defined
   }

// exemplo de função, declaração feita com abre e fecha () e passa {} como escopo, variavel local dentro da função não da pra pegar diretamente
var  globalGreeting  =  "Good ";
function testFunction()  {
        var  localGreeting  =  "Morning ";
        console.log("function:");
        console.log(globalGreeting);
        console.log(localGreeting);
}
testFunction();
console.log("main program:");
console.log(globalGreeting);
// console.log(localGreeting);  //  ->  Uncaught  ReferenceError:  localGreeting  is  not  defined

// Sombreamente, dentro de 1 escopo to alterando a variavel tendo declarada somente ela em global
let  counter  =  100;
console.log(counter);  //  ->  100
{
       counter  =  200;
       console.log(counter);  //  ->  200
}
console.log(counter);  //  ->  200
// diferente:
let  counter2  =  100;
console.log(counter2);  //  ->  100
{
     let  counter2  =  200;
     console.log(counter2);  //  ->  200
}
console.log(counter2);  //  ->  100


