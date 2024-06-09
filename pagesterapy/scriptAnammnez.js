const localStorageItemAnamnez = localStorage.getItem("historyListAnamnez");

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
  cigZvichki: false
}

if (localStorageItemAnamnez) {
  readFromLocalStorage();
} else {
  localStorage.setItem("historyListAnamnez", JSON.stringify(historyListAnamnez));
}

function readFromLocalStorage() {
  let historyListAnamnezObject = JSON.parse(localStorageItemAnamnez);
  historyListAnamnez = historyListAnamnezObject;
  generatePreviousTextAnamnez();
}

function generatePreviousTextAnamnez(){
  historyListAnamnez.anmnezLabel?document.getElementById('previousTextStartAnamnezLabel').innerText = 'Анамнез хвороби:':"";
  switch (historyListAnamnez.start) {
    case "long":
      document.getElementById("previousTextStart").innerHTML =
        "Вважає себе хворим протягом тривалого часу, зі слів пацієнта після ___";
      break;
    case "short":
      document.getElementById("previousTextStart").innerHTML =
        "Вважає себе хворим з недавнього часу, зі слів пацієнта після ___";
      break;
    default:
      document.getElementById("previousTextStart").innerHTML = null;
  }

  document.getElementById('prevTextAnamnez').innerText = `${historyListAnamnez.alkohol?"В анамнезі тривале зловживання алкоголем.":""} ${historyListAnamnez.narko?"В анамнезі тривале тютюнопаління":""}
  ${historyListAnamnez.pereneseni?"Анамнез життя. Перенесені хвороби в дитинстві: _______":""}
  ${historyListAnamnez.pereneseniMan?"Відомості про наявні та перенесені захворювання/маніпуляції:____":""}
  ${historyListAnamnez.alergiaSpadk?"Алергії: немає; Спадковість: не обтяжена.":""} ${historyListAnamnez.alkoSkZvichki||historyListAnamnez.cigZvichki?"Шкідливі звички: ":""} ${historyListAnamnez.alkoSkZvichki?"вживання алкоголю, ":""}${historyListAnamnez.cigZvichki?"тютюнопаління":""}.`

  localStorage.setItem("historyListAnamnez", JSON.stringify(historyListAnamnez));

}

function showAnamnezLabel(){
  historyListAnamnez.anmnezLabel = true
}


function handleAnamnezStart() {
  let checkedRadio = document.querySelector('input[name="start"]:checked');
  if (checkedRadio) {
    historyListAnamnez.start = checkedRadio.value;
    showAnamnezLabel()
    generatePreviousTextAnamnez();
  }
}

document.getElementById("addAnamnezAlkohol").addEventListener("click", () => {
  historyListAnamnez.alkohol = true;
  showAnamnezLabel()
  generatePreviousTextAnamnez()
});

document
  .getElementById("remoteAnamnezAlkohol")
  .addEventListener("click", () => {
    historyListAnamnez.alkohol = false;
    generatePreviousTextAnamnez()
});

document.getElementById("addAnamnezNarko").addEventListener("click", () => {
  historyListAnamnez.narko = true;
  showAnamnezLabel()
  generatePreviousTextAnamnez()
});
document
  .getElementById("remoteAnamnezNarko")
  .addEventListener("click", () => {
    historyListAnamnez.narko = false;
    generatePreviousTextAnamnez()
});

document.getElementById("addAnamnezPereneseniDis").addEventListener("click", () => {
  historyListAnamnez.pereneseni = true;
  generatePreviousTextAnamnez()
});
document
  .getElementById("remoteAnamnezPereneseniDis")
  .addEventListener("click", () => {
    historyListAnamnez.pereneseni = false;
    generatePreviousTextAnamnez()
});

document.getElementById("addAnamnezPereneseniMan").addEventListener("click", () => {
  historyListAnamnez.pereneseni = true;
  generatePreviousTextAnamnez()
});
document
  .getElementById("remoteAnamnezPereneseniMan")
  .addEventListener("click", () => {
    historyListAnamnez.pereneseni = false;
    generatePreviousTextAnamnez()
});

document.getElementById("addAnamnezPereneseniMan").addEventListener("click", () => {
  historyListAnamnez.pereneseni = true;
  generatePreviousTextAnamnez()
});
document
  .getElementById("remoteAnamnezPereneseniMan")
  .addEventListener("click", () => {
    historyListAnamnez.pereneseni = false;
    generatePreviousTextAnamnez()
});

document.getElementById("addAnamnezAlergiaSpadk").addEventListener("click", () => {
  historyListAnamnez.alergiaSpadk = true;
  generatePreviousTextAnamnez()
});
document
  .getElementById("remoteAnamnezAlergiaSpadk")
  .addEventListener("click", () => {
    historyListAnamnez.alergiaSpadk = false;
    generatePreviousTextAnamnez()
});

document.getElementById("addAnamnezSkZvichkiAlko").addEventListener("click", () => {
  historyListAnamnez.alkoSkZvichki = true;
  generatePreviousTextAnamnez()
});
document
  .getElementById("remoteAnamnezSkZvichkiAlko")
  .addEventListener("click", () => {
    historyListAnamnez.alkoSkZvichki = false;
    generatePreviousTextAnamnez()
});

document.getElementById("addAnamnezSkZvichkiCig").addEventListener("click", () => {
  historyListAnamnez.cigZvichki = true;
  generatePreviousTextAnamnez()
});
document
  .getElementById("removeAnamnezSkZvichkiCig")
  .addEventListener("click", () => {
    historyListAnamnez.cigZvichki = false;
    generatePreviousTextAnamnez()
});