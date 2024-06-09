const localStorageItemObstezenny = localStorage.getItem("historyListObstezenny");

let historyListObstezenny ={
  Label: false,
  zak: false,
  zas: false,
  bx: false,
  kalYH: false,
  krowCukor: false,
  ekg: false,
  exoKG: false,
  troponini: false,
  rengenHrydnoj: false,
  YZDzivota: false,
  konsyltaciaKardio: false,
  konsyltaciaSurgery: false,
  konsyltaciaEndokr:false,
  likyvanna: false
}

if (localStorageItemObstezenny) {
  readFromLocalStorage();
} else {
  localStorage.setItem("historyListObstezenny", JSON.stringify(historyListObstezenny));
}
function readFromLocalStorage() {
  let historyListObstezennyObject = JSON.parse(localStorageItemObstezenny);
  historyListObstezenny = historyListObstezennyObject;
  generatePrevTObstezenny();
}

function generatePrevTObstezenny(){
  historyListObstezenny.Label=true
  document.getElementById("prevTextPlanObstez").innerText = `${historyListObstezenny.Label?"План обстеження: ":""} ${historyListObstezenny.zak?"Загальний аналіз крові;":""} ${historyListObstezenny.zas?"Загальний аналіз сечі;":""} ${historyListObstezenny.bx?"Біохімічний аналіз крові???;":""} ${historyListObstezenny.kalYH?"Ан. калу на я/г;":""} ${historyListObstezenny.krowCukor?"Кров на цукор;":""} ${historyListObstezenny.ekg?"ЕКГ,":""} ${historyListObstezenny.exoKG?"ЕхоКГ,":""} ${historyListObstezenny.troponini?"тропоніновий тест;":""} ${historyListObstezenny.rengenHrydnoj?"РГ (ОГК);":""} ${historyListObstezenny.YZDzivota?"УЗД ОЧП;":""} ${historyListObstezenny.konsyltaciaKardio?"Консультація кардіолога.":""} ${historyListObstezenny.konsyltaciaSurgery?"Консультація хірурга.":""}${historyListObstezenny.konsyltaciaEndokr?"Консультація ендокринолога.":""}`
  if(historyListObstezenny.likyvanna){document.getElementById("prevTextPlanLikyvanny").innerText =`
План лікування: режим палатний;
Лікування: дієта № 10	
ЛФК по режиму ІІ
Лікування згідно з листком призначень

	
Лікар _____`}else{document.getElementById("prevTextPlanLikyvanny").innerText =""}

localStorage.setItem("historyListObstezenny", JSON.stringify(historyListObstezenny));
}

document.getElementById("addPOzak").addEventListener("click", () => {
  historyListObstezenny.zak = true;
  generatePrevTObstezenny()
});
document.getElementById("removePOzak")
  .addEventListener("click", () => {
    historyListObstezenny.zak = false;
    generatePrevTObstezenny()
});

document.getElementById("addPOzas").addEventListener("click", () => {
  historyListObstezenny.zas = true;
  generatePrevTObstezenny()
});
document.getElementById("removePOzas")
  .addEventListener("click", () => {
    historyListObstezenny.zas = false;
    generatePrevTObstezenny()
});

document.getElementById("addPObx").addEventListener("click", () => {
  historyListObstezenny.bx = true;
  generatePrevTObstezenny()
});
document.getElementById("removePObx")
  .addEventListener("click", () => {
    historyListObstezenny.bx = false;
    generatePrevTObstezenny()
});

document.getElementById("addPOkalYH").addEventListener("click", () => {
  historyListObstezenny.kalYH = true;
  generatePrevTObstezenny()
});
document.getElementById("removePOkalYH")
  .addEventListener("click", () => {
    historyListObstezenny.kalYH = false;
    generatePrevTObstezenny()
});

document.getElementById("addPOkrowCukor").addEventListener("click", () => {
  historyListObstezenny.krowCukor = true;
  generatePrevTObstezenny()
});
document.getElementById("removePOkrowCukor")
  .addEventListener("click", () => {
    historyListObstezenny.krowCukor = false;
    generatePrevTObstezenny()
});

document.getElementById("addPOekg").addEventListener("click", () => {
  historyListObstezenny.ekg = true;
  generatePrevTObstezenny()
});
document.getElementById("removePOekg")
  .addEventListener("click", () => {
    historyListObstezenny.ekg = false;
    generatePrevTObstezenny()
});

document.getElementById("addPOexoKG").addEventListener("click", () => {
  historyListObstezenny.exoKG = true;
  generatePrevTObstezenny()
});
document.getElementById("removePOexoKG")
  .addEventListener("click", () => {
    historyListObstezenny.exoKG = false;
    generatePrevTObstezenny()
});

document.getElementById("addPOtroponini").addEventListener("click", () => {
  historyListObstezenny.troponini = true;
  generatePrevTObstezenny()
});
document.getElementById("removePOtroponini")
  .addEventListener("click", () => {
    historyListObstezenny.troponini = false;
    generatePrevTObstezenny()
});

document.getElementById("addPOrengenGrydnoj").addEventListener("click", () => {
  historyListObstezenny.rengenHrydnoj = true;
  generatePrevTObstezenny()
});
document.getElementById("removePOrengenGrydnoj")
  .addEventListener("click", () => {
    historyListObstezenny.rengenHrydnoj = false;
    generatePrevTObstezenny()
});

document.getElementById("addPOYZDzivota").addEventListener("click", () => {
  historyListObstezenny.YZDzivota = true;
  generatePrevTObstezenny()
});
document.getElementById("removePOYZDzivota")
  .addEventListener("click", () => {
    historyListObstezenny.YZDzivota = false;
    generatePrevTObstezenny()
});

// консультації
document.getElementById("addPOkonsyltaciaKardio").addEventListener("click", () => {
  historyListObstezenny.konsyltaciaKardio = true;
  generatePrevTObstezenny()
});
document.getElementById("removePOkonsyltaciaKardio")
  .addEventListener("click", () => {
    historyListObstezenny.konsyltaciaKardio = false;
    generatePrevTObstezenny()
});

document.getElementById("addPOkonsyltaciaSurgery").addEventListener("click", () => {
  historyListObstezenny.konsyltaciaSurgery = true;
  generatePrevTObstezenny()
});
document.getElementById("removePOkonsyltaciaSurgery")
  .addEventListener("click", () => {
    historyListObstezenny.konsyltaciaSurgery = false;
    generatePrevTObstezenny()
});

document.getElementById("addPOkonsyltaciaEndokr").addEventListener("click", () => {
  historyListObstezenny.konsyltaciaEndokr = true;
  generatePrevTObstezenny()
});
document.getElementById("removePOkonsyltaciaEndokr")
  .addEventListener("click", () => {
    historyListObstezenny.konsyltaciaEndokr = false;
    generatePrevTObstezenny()
});

document.getElementById("addPLikyvanna").addEventListener("click", () => {
  historyListObstezenny.likyvanna = true;
  generatePrevTObstezenny()
});
document.getElementById("removePLikyvanna")
  .addEventListener("click", () => {
    historyListObstezenny.likyvanna = false;
    generatePrevTObstezenny()
});
