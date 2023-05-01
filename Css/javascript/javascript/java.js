
const test = document.querySelector("nav");
// console.log(test);
window.addEventListener("scroll",()=>{
    console.log(window.scrollY);
    if(window.scrollY>320){
        test.style.top=0;
    }else{
        test.style.top= "-80px";
    }
});
// ******étape 1 on va recuper la liste***
const liste= document.getElementById("liste");
console.log(liste);
// etape 2 creer un element
const element=document.createElement("li");
console.log(element);
// création de la calsse odg et ajout
element.classList.add("item");
const ajout=liste.appendChild(element)
console.log(ajout)
const buttom=document.querySelector("#submit");
const stocke=buttom.addEventListener("click",addEvent);
function addEvent() {
    const liste =document.getElementById("liste");
    const element=document.createElement("li");
    element.classList.add("item");
    element.innerText="nouveau element ajouter";
    const ajout=liste.appendChild(element);
}
console.log("je suis un debutant js")
let cheri = "NOMBRE";
console.log(cheri);
let age =24 ;
console.log("age,nom") ;
// let nom = "ouedraogo";
let points =10;
age= 50;
console.log(age);

const code_pin =1234;
console.log(code_pin);
let nom="ouedraogo";
console.log(nom);
let prenom= "ami";
console.log(prenom);
let filliere ="mgc";
console.log(filliere);
let nom_complet = "prenom+filliere";
console.log(nom_complet);
let lettre= filliere[2];
console.log(lettre);

let calcul = nom.length;
console.log(calcul);
console.log(filliere.toUpperCase ());
console.log(10+5);
console.log(10-5)
console.log(10%3);
let rayon = 10;
let pi =3.14;
let largeur= 8
let longeur =  10
let perimetre= rayon*pi;

let fruits = [ " mnagues", "choux","pommes"];
console.log(fruits)
console.log ( fruits[2]);
fruits[1] = "legumres" 
console.log( fruits);
let aray_aléatoire = [ "ami","ouedraogo","mangue", ["a","b",]];
console.log(aray_aléatoire);
 