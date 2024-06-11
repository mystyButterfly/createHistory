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

	
Лікар _____ 

`+`
`}else{document.getElementById("prevTextPlanLikyvanny").innerText =""}

localStorage.setItem("historyListObstezenny", JSON.stringify(historyListObstezenny));
}

function addRemObstezenny(kriterij, trueOrFalse) {
  switch (kriterij) {
    case "zak":
      historyListObstezenny.zak = trueOrFalse;
      break;
      case "zas":
      historyListObstezenny.zas = trueOrFalse;
      break;
      case "bx":
      historyListObstezenny.bx = trueOrFalse;
      break;
      case "kalYH":
      historyListObstezenny.kalYH = trueOrFalse;
      break;
      case "krowCukor":
      historyListObstezenny.krowCukor = trueOrFalse;
      break;
      case "ekg":
      historyListObstezenny.ekg = trueOrFalse;
      break;
      case "exoKG":
      historyListObstezenny.exoKG = trueOrFalse;
      break;
      case "troponini":
      historyListObstezenny.troponini = trueOrFalse;
      break;
      case "rengenHrydnoj":
      historyListObstezenny.rengenHrydnoj = trueOrFalse;
      break;
      case "YZDzivota":
      historyListObstezenny.YZDzivota = trueOrFalse;
      break;
      case "konsyltaciaKardio":
      historyListObstezenny.konsyltaciaKardio = trueOrFalse;
      break;
      case "konsyltaciaSurgery":
      historyListObstezenny.konsyltaciaSurgery = trueOrFalse;
      break;
      case "konsyltaciaEndokr":
      historyListObstezenny.konsyltaciaEndokr = trueOrFalse;
      break;
      case "likyvanna":
      historyListObstezenny.likyvanna = trueOrFalse;
      break;
    default:
      console.log(`Error.${kriterij}`);
  }
  historyListObjectivno.Label = true;
  generatePrevTObstezenny()
}