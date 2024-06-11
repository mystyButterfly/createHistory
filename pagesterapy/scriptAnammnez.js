const localStorageItemAnamnez = localStorage.getItem("historyListAnamnez");
let anamnezForEpicris

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
  historyListAnamnez.anmnezLabel
    ? (document.getElementById("previousTextStartAnamnezLabel").innerText =
        "Анамнез хвороби:")
    : "";
  switch (historyListAnamnez.start) {
    case "long":
      document.getElementById("previousTextStart").innerHTML =
        "Вважає себе хворим протягом тривалого часу, зі слів пацієнта після ___";
        anamnezForEpicris= "Вважає себе хворим протягом тривалого часу, зі слів пацієнта після ___";
      break;
    case "short":
      document.getElementById("previousTextStart").innerHTML =
        "Вважає себе хворим з недавнього часу, зі слів пацієнта після ___";
        anamnezForEpicris= "Вважає себе хворим з недавнього часу, зі слів пацієнта після ___";
      break;
    default:
      document.getElementById("previousTextStart").innerHTML = null;
  }

  document.getElementById("prevTextAnamnez").innerText = `${
    historyListAnamnez.alkohol
      ? "В анамнезі тривале зловживання алкоголем."
      : ""
  } ${historyListAnamnez.narko ? "В анамнезі тривале тютюнопаління" : ""}
  ${
    historyListAnamnez.pereneseni
      ? "Анамнез життя. Перенесені хвороби в дитинстві: _______"
      : ""
  }
  ${
    historyListAnamnez.pereneseniMan
      ? "Відомості про наявні та перенесені захворювання/маніпуляції:____"
      : ""
  }
  ${
    historyListAnamnez.alergiaSpadk
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
    default:
      console.log(`Error.${kriterij}`);
  }
  historyListAnamnez.anmnezLabel = true;
  generatePreviousTextAnamnez();
}
