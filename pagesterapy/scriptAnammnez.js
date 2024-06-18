const localStorageItemAnamnez = localStorage.getItem("historyListAnamnez");
let anamnezForEpicris;

let historyListAnamnez = {
  anmnezLabel: false,
  start: false,
  alkohol: false,
  narko: false,
  pereneseni: false,
  pereneseniMan: false,
  alergiaSpadk: false,
  labelSkZvichki: false,
  alkoSkZvichki: false,
  cigZvichki: false,
  pereneseniManipZahVil: false,
  pereneseniManipZahHep: false,
  pereneseniManipZahSNID: false,
  pereneseniManipZahVen: false,
  pereneseniManipZahInfarkt: false,
  pereneseniManipZahInsult: false,
  pereneseniManipZahCukor: false,
  pereneseniManipZahIXS: false
};

if (localStorageItemAnamnez) {
  readFromLocalStorage();
} else {
  localStorage.setItem(
    "historyListAnamnez",
    JSON.stringify(historyListAnamnez)
  );
}

function readFromLocalStorage() {
  let historyListAnamnezObject = JSON.parse(localStorageItemAnamnez);
  historyListAnamnez = historyListAnamnezObject;
  generatePreviousTextAnamnez();
}

function generatePreviousTextAnamnez() {
  
  switch (historyListAnamnez.start) {
    case "long":
      anamnezForEpicris =
        "Вважає себе хворим протягом тривалого часу, зі слів пацієнта після ___";
      break;
    case "short":
      anamnezForEpicris =
        "Вважає себе хворим з недавнього часу, зі слів пацієнта після ___";
      break;
    case "help":
      anamnezForEpicris =
        "Доставлено бригадою швидкої допомоги.";
      break;
    default:
      anamnezForEpicris = "";
  }

  if(historyListAnamnez.anmnezLabel){document.getElementById("previousTextStartAnamnezLabel").innerText =
        `Анамнез хвороби: ${anamnezForEpicris} ${historyListAnamnez.alkohol
      ?"В анамнезі тривале зловживання алкоголем."
      : ""} ${historyListAnamnez.narko ? "В анамнезі тривале тютюнопаління" : ""}`
  }

  document.getElementById("prevTextAnamnez").innerText =`${historyListAnamnez.anmnezLabel?"Анамнез життя.":""} ${perManAndZah()}${historyListAnamnez.alergiaSpadk
      ? "Алергії: немає; Спадковість: не обтяжена."
      : ""
  } ${
    historyListAnamnez.alkoSkZvichki || historyListAnamnez.cigZvichki
      ? "Шкідливі звички: "
      : ""
  } ${historyListAnamnez.alkoSkZvichki ? "вживання алкоголю, " : ""}${
    historyListAnamnez.cigZvichki ? "тютюнопаління" : ""
  }.`;

  localStorage.setItem(
    "historyListAnamnez",
    JSON.stringify(historyListAnamnez)
  );
}

function perManAndZah(){
  var perManAndZahText = `${historyListAnamnez.pereneseni
    ? "Перенесені хвороби в дитинстві: простудні захворювання. "
    : ""}${historyListAnamnez.pereneseniMan
    ? "Відомості про наявні та перенесені захворювання/маніпуляції: "
    : "" } ${historyListAnamnez.pereneseniManipZahVil? 'ВІЛ, ':''}${historyListAnamnez.pereneseniManipZahSNID? 'СНІД, ':''} ${historyListAnamnez.pereneseniManipZahHep? 'гепатит, ':''} ${historyListAnamnez.pereneseniManipZahVen? 'венеричні захіорювання, ':''} ${historyListAnamnez.pereneseniManipZahInfarkt? 'інфаркт, ':''} ${historyListAnamnez.pereneseniManipZahInsult? 'інсульт, ':''} ${historyListAnamnez.pereneseniManipZahCukor? 'цукровий діабет, ':''}${historyListAnamnez.pereneseniManipZahIXS? 'ІХС, ':''}`
    return perManAndZahText
}

function showAnamnezLabel() {
  historyListAnamnez.anmnezLabel = true;
}

function handleAnamnezStart() {
  let checkedRadio = document.querySelector('input[name="start"]:checked');
  if (checkedRadio) {
    historyListAnamnez.start = checkedRadio.value;
    showAnamnezLabel();
    generatePreviousTextAnamnez();
  }
}
function addRemAnamnez(kriterij, trueOrFalse) {
  switch (kriterij) {
    case "alko":
      historyListAnamnez.alkohol = trueOrFalse;
      break;
    case "narko":
      historyListAnamnez.narko = trueOrFalse;
      break;
    case "pereneseni":
      historyListAnamnez.pereneseni = trueOrFalse;
      break;
    case "pereneseniMan":
      historyListAnamnez.pereneseniMan = trueOrFalse;
      break;
    case "alergiaSpadk":
      historyListAnamnez.alergiaSpadk = trueOrFalse;
      break;
    case "alkoSkZvichki":
      historyListAnamnez.alkoSkZvichki = trueOrFalse;
      break;
    case "cigZvichki":
      historyListAnamnez.cigZvichki = trueOrFalse;
      break;
    case "pereneseniManipZahVil":
      historyListAnamnez.pereneseniManipZahVil = trueOrFalse;
      historyListAnamnez.pereneseniMan = true;
      break;
    case "pereneseniManipZahHep":
      historyListAnamnez.pereneseniManipZahHep = trueOrFalse;
      historyListAnamnez.pereneseniMan = true;
      break;
    case "pereneseniManipZahSNID":
      historyListAnamnez.pereneseniManipZahSNID = trueOrFalse;
      historyListAnamnez.pereneseniMan = true;
      break;
    case "pereneseniManipZahVen":
      historyListAnamnez.pereneseniManipZahVen = trueOrFalse;
      historyListAnamnez.pereneseniMan = true;
      break;
    case "pereneseniManipZahInfarkt":
      historyListAnamnez.pereneseniManipZahInfarkt = trueOrFalse;
      historyListAnamnez.pereneseniMan = true;
      break;
    case "pereneseniManipZahInsult":
      historyListAnamnez.pereneseniManipZahInsult = trueOrFalse;
      historyListAnamnez.pereneseniMan = true;
      break;
    case "pereneseniManipZahCukor":
      historyListAnamnez.pereneseniManipZahCukor = trueOrFalse;
      historyListAnamnez.pereneseniMan = true;
      break;
    case "pereneseniManipZahIXS":
      historyListAnamnez.pereneseniManipZahIXS = trueOrFalse;
      historyListAnamnez.pereneseniMan = true;
      break;
    default:
      console.log(`Error.${kriterij}`);
  }
  historyListAnamnez.anmnezLabel = true;
  generatePreviousTextAnamnez();
}
