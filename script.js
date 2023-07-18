// /* 1. Demander a l'utilisateur de remplir deux tableaux (tab1 et tab2) dont la taille est 5
// Creer tab3 a partir des elements du tab1 qui ne se trouvent pas dans tab2
// Creer tab4 a partir des elements du tab1 qui se trouvent dans tab2
//  2. Soit un tableau tab1=[5,3,87,1,-4,-99,0]
// Sans utiliser les methodes javascript :
// 1. Ecrire une fonction qui  reçoit en parametre tab1 et qui permet de le trier  
// 2. Ecrire une fonction qui reçoit en parametre tab1 et retourne la valeur max , min*/


// // 1)    premiere question

//     const tab1 = [];
//     const tab2 = [];
   
    

//     //Pour le tableaux 1
//      function tableau_1() {
//         for (let i = 1; i <= 5; i++) {
//             let nbr1 = parseFloat(prompt("Entrer pour le tableau un le nombre " + i));
//            console.log("Voici les elements du tableaux 1")
//             tab1.push(nbr1)
//         }
//         let para1 = document.getElementById("p1")
//         para1.innerHTML = tab1.join()
//      }
//     tableau_1()
        

//     //Pour le tableaux 2
//      function tableau_2(){
//         for (let n = 1; n <= 5; n++) {
//             let nbr2 = parseFloat(prompt("Entrer pour le tableau deux  le nombre " + n));
//             console.log("Voici les elements du tableaux 2")
//             tab2.push(nbr2)  
//         }
//         let para2 = document.getElementById("p2")
//         para2.innerHTML = tab2.join()
//      }

//      tableau_2()
        

//     //Pour le tableaux 3
//     let tab_3 = tab1.filter(function(ele){
//         return !tab2.includes(ele)
//     })

//         let para = document.getElementById("p3")
//         para.innerHTML = tab_3

//     //Pour le tableaux 4
//     let tab_4 = tab1.filter(function(elem){
//         return tab2.includes(elem)
//     })

//         let para4 = document.getElementById("p4")
//         para4.innerHTML = tab_4
    //  Deuxieme partie

let tab1 = [5, 3, 87, 1, -4, -99, 0];
let tableauTrie = trierTableau(tab1);
console.log(tableauTrie);
function trierTableau(tab) {
  let longueur = tab.length;
  let temp;

  for (let i = 0; i < longueur - 1; i++) {
    for (let j = i + 1; j < longueur; j++) {
      if (tab[j] < tab[i]) {
        temp = tab[i];
        tab[i] = tab[j];
        tab[j] = temp;
      }
    }
  }
  return tab;
}
function trouverMaxMin(tab1) {
    if (tab1.length === 0) {
      return "Le tableau est vide.";
    }
  
    let max = tab1[0];
    let min = tab1[0];
  
    for (let i = 1; i < tab1.length; i++) {
      if (tab1[i] > max) {
        max = tab1[i];
      }
  
      if (tab1[i] < min) {
        min = tab1[i];
      }
    }
  
    return {
      max: max,
      min: min
    };
}
const resultat = trouverMaxMin(tab1);
console.log(resultat.min);

let para1 = document.getElementById("p1")
para1.innerHTML = tableauTrie.join()


let para2 = document.getElementById("p2")
para2.innerHTML = resultat.max

let para3 = document.getElementById("p3")
para3.innerHTML = resultat.min


        