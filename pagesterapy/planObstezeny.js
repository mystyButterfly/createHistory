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
  YZDtir: false,
  konsyltaciaKardio: false,
  konsyltaciaSurgery: false,
  konsyltaciaEndokr:false,
  konsyltaciaNevrolog: false,
  likyvanna: false,
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
  document.getElementById("prevTextPlanObstez").innerText = `${historyListObstezenny.Label?"План обстеження: ":""} ${historyListObstezenny.zak?"Загальний аналіз крові;":""} ${historyListObstezenny.zas?"Загальний аналіз сечі;":""} ${historyListObstezenny.bx?"Біохімічний аналіз крові???;":""} ${historyListObstezenny.kalYH?"Ан. калу на я/г;":""} ${historyListObstezenny.krowCukor?"Кров на цукор;":""} ${historyListObstezenny.ekg?"ЕКГ,":""} ${historyListObstezenny.exoKG?"ЕхоКГ,":""} ${historyListObstezenny.troponini?"тропоніновий тест;":""} ${historyListObstezenny.rengenHrydnoj?"РГ (ОГК);":""} ${historyListObstezenny.YZDzivota?"УЗД ОЧП;":""}${historyListObstezenny.YZDtir?"УЗД щитоподібної залози;":""} ${historyListObstezenny.konsyltaciaKardio?"Консультація кардіолога.":""} ${historyListObstezenny.konsyltaciaSurgery?"Консультація xipypгa. ":""}${historyListObstezenny.konsyltaciaEndokr?"Консультація ендокринолога. ":""}${historyListObstezenny.konsyltaciaNevrolog?"Консультація невролога. ":""}`
  if(historyListObstezenny.likyvanna){document.getElementById("prevTextPlanLikyvanny1").innerText =`План лікування: режим палатний;`;
    document.getElementById("prevTextPlanLikyvanny2").innerText ="Лікування: дієта № 10";
    document.getElementById("prevTextPlanLikyvanny3").innerText ="ЛФК по режиму ІІ";
    document.getElementById("prevTextPlanLikyvanny4").innerText ="Лікування згідно з листком призначень"
    document.getElementById("prevTextPlanLikyvanny5").innerText ="Лікар _____ "
  } else {document.getElementById("prevTextPlanLikyvanny1","prevTextPlanLikyvanny2","prevTextPlanLikyvanny3","prevTextPlanLikyvanny4","prevTextPlanLikyvanny5").innerText =""}

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
    case "YZDtir":
    historyListObstezenny.YZDtir = trueOrFalse;
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
    case "konsyltaciaNevrolog":
    historyListObstezenny.konsyltaciaNevrolog = trueOrFalse;
    break;
    case "likyvanna":
      historyListObstezenny.likyvanna = trueOrFalse;
      break;
    case "fourObstez":
      historyListObstezenny.zak = trueOrFalse;
      historyListObstezenny.zas = trueOrFalse;
      historyListObstezenny.krowCukor = trueOrFalse;
      historyListObstezenny.ekg = trueOrFalse;
      historyListObstezenny.bx = trueOrFalse;
      break;
    default:
      console.log(`Error.${kriterij}`);
  }
  historyListObstezenny.Label = true;
  generatePrevTObstezenny();
}