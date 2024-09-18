// tipos
"undefined"
"object"
"boolean"
"number"
"bigint"
"string"
"symbol"
"function"
// typeof pra descobrir o tipo
let  year  =  1990;
console.log(typeof  year);  //  ->  number
console.log(typeof  1991);  //  ->  number
let  name  =  "Alice";
console.log(typeof  name);  //  ->  string
console.log(typeof  "Bob");  //  ->  string
let  typeOfYear  =  typeof  year;
console.log(typeOfYear);  //  ->  number
console.log(typeof  typeOfYear);  //  ->  string

// tentativa de criar uma nova string combinando duas strings de entrada
let  path  =  "C:\\"  +  "Windows";
console.log(path);  //  ->  C:\Windows
let  test  =  "100"  +  "10";
console.log(test);  //  ->  10010
console.log(typeof  test);  //  ->  string

// introduzido no JavaScript em 2015 é a interpolação de strings
let  country  =  "Malawi";
let  continent  =  "Africa";
let  sentence  =  `  ${country}  is  located  in  ${continent}.`;
console.log(sentence);  //  ->  Malawi  is  located  in  Africa.

// pegar letra por posição
//charAt(index): retorna-se o caractere na posição "index" na string (os índices começam em 0);
let  river  =  "Mekong";
let  character  =  river.charAt(2);
console.log(character);  //  ->  k

// length: propriedade, retorna o número de caracteres em uma string; str.lenght
// slice(beginIndex, [opcional] endIndex):, retorna uma nova cadeia de caracteres criada a partir dos caracteres entre beginIndex (incluído) e endIndex (excluído); slice(0,5)
// split(separator, [optional] limit):, divide a string em substrings sempre que um separador é encontrado nessa string e retorna uma matriz dessas substrings

let  str  =  "java  script  language";
console.log(str.length);  //  ->  20
console.log('test'.length);  //  ->  4

console.log(str.charAt(0));  //  ->  'j'
console.log('abc'.charAt(1));  //  ->  'b'

console.log(str.slice(0,  4));  //  ->  'java'
console.log('test'.slice(1,  3));  //  ->  'es'

console.log(str.split('  '));  //  ->  ['java',  'script',  'language']
console.log('192.168.1.1'.split('.'));    //  ->  ['192',  '168',  '1',  '1']

// valor nulo é 1 valor de nada que retorna objeto, undefindio é indefinido
let  someResource;
console.log(someResource);  //  ->  undefined
console.log(typeof  someResource);  //  ->  undefined
someResource  =  null;
console.log(someResource);  //  ->  null
console.log(typeof  someResource);  //  ->  object

/*
A maioria dessas funções pode ser chamada sem nenhum argumento. Em tal situação:

a função String irá, por padrão, criar e retornar uma string vazia – primitiva "";
a função Number criará, por padrão, e retornará o valor 0;
a função booleana criará, por padrão, e retornará o valor de false.
A função BigInt, ao contrário de outras funções de construtor, requer que você passe algum valor inicial para ela. Pode ser um número inteiro que será convertido em um BigInt
*/
const  str2  =  String();
const  num  =  Number();
const  bool  =  Boolean();
console.log(str2);  //  ->
console.log(num);  //  ->  0
console.log(bool);  //  ->  false
const  big1  =  BigInt(42);
console.log(big1);  //  ->  42n
// const  big2  =  BigInt();      //  ->  Uncaught  TypeError:  Cannot  convert  undefined  to  a  BigInt

// conversão
const  num2  =  42;
const  strFromNum1  =  String(num2);
const  strFromNum2  =  String(8);
const  strFromBool  =  String(true);
const  numFromStr  =  Number("312");
const  boolFromNumber  =  Boolean(0);
 //string
let  str3  =  "text";
let  strStr  =  String(str3);
console.log(`${typeof  str3}  :  ${str3}`);  //  ->  string  :  text
console.log(`${typeof  strStr}  :  ${strStr}`);  //  ->  string  :  text

let  nr  =  42;
let  strNr  =  String(nr);
console.log(`${typeof  nr}  :  ${nr}`);  //  ->  number  :  42
console.log(`${typeof  strNr}  :  ${strNr}`);  //  ->  string  :  42

let  bl  =  true;
let  strBl  =  String(bl);
console.log(`${typeof  bl}  :  ${bl}`);  //  ->  boolean  :  true
console.log(`${typeof  strBl}  :  ${strBl}`);  //  ->  string  :  true

let  bnr  =  123n;
let  strBnr  =  String(bnr);
console.log(`${typeof  bnr}  :  ${bnr}`);  //  ->  bigint  :  123
console.log(`${typeof  strBnr}  :  ${strBnr}`);  //  ->  string  :  123

let  un  =  undefined;
let  strUn  =  String(un);
console.log(`${typeof  un}  :  ${un}`);  //  ->  undefined  :  undefined
console.log(`${typeof  strUn}  :  ${strUn}`);  //  ->  string  :  undefined

let  n  =  null;
let  strN  =  String(n);
console.log(`${typeof  n}  :  ${n}`);  //  ->  object  :  null
console.log(`${typeof  strN}  :  ${strN}`);  //  ->  string  :  null

// number
console.log(Number(42));  //  ->  42

console.log(Number("11"));  //  ->  11
console.log(Number("0x11"));  //  ->  17
console.log(Number("0o11"));  //  ->  9
console.log(Number("0b11"));  //  ->  3
console.log(Number("12e3"));  //    ->  12000
console.log(Number("Infinity"));//  ->  Infinity
console.log(Number("text"));  //  ->  NaN

console.log(Number(14n));  //  ->  14
console.log(Number(123456789123456789123n));  //  -  >    123456789123
456800000

console.log(Number(true));  //  ->  1
console.log(Number(false));  //  ->  0

console.log(Number(undefined));  //    ->  NaN

console.log(Number(null));//  ->  0

//boleano
console.log(Boolean(true));  //  ->  true

console.log(Boolean(42));  //  ->  true
console.log(Boolean(0));  //  ->  false
console.log(Boolean(NaN));  //  ->  false

console.log(Boolean("text"));  //  ->  true
console.log(Boolean(""));  //  ->  false

console.log(Boolean(undefined));  //  ->  false

console.log(Boolean(null));  //  ->  false

//BigInt
console.log(BigInt(11));  //  ->  11n
console.log(BigInt(0x11));  //  ->  17n
console.log(BigInt(11e2));  //  ->  1100n

console.log(BigInt(true));  //  ->  1n

console.log(BigInt("11"));  //  ->  11n
console.log(BigInt("0x11"));  //  ->  17n

console.log(BigInt(null));  //  ->  Uncaught  TypeError:  Cannot  convert  null  to  a  BigInt

console.log(BigInt(undefined));  //  ->  Uncaught  TypeError:  Cannot  convert  undefined  to  a  BigInt

console.log(BigInt(NaN));  //  ->  Uncaught  RangeError:  The  number  NaN  cannot  be  converted  to  a  BigInt  because  it  is  not  an  integer

//implicita
const  str1  =  42  +  "1";
console.log(str1);                //  ->  421
console.log(typeof  str1);  //  ->  string
const  str2  =  42  -  "1";
console.log(str2);                //  ->  41
console.log(typeof  str2);  //  ->  number
