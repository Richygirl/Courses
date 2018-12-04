let money = prompt('Cколько у вас с собой есть денег?');
let apples = prompt('Cколько вы купили яблок?');
let bread = prompt('Cколько вы купили батонов хлеба?');
let totApps = prompt('Cколько стоит одно яблоко?')*apples;
let totBr = prompt('Cколько стоит один батон хлеба?')*bread;
let selly = totApps + totBr;
let itog = money > selly;
document.body.innerHTML = itog;