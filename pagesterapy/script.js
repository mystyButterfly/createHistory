const localStorageItem = localStorage.getItem("historyList");

let historyList = {
  name: null,
  date: null,
  cartNomer: null,
  telephon: null,
  diagnoz: "",
  skargy: {
    skargyLabel: false,
    hardbeet: false,
    zagrydinoj: false,
    weeknes: false,
    zapamoroch: false,
    defpuls: false,
    viraslab: false,
    vtomluvanist: false,
    zadiskaNyha: false,
    otherSkargy: ""
  },
};
if (localStorageItem) {
  readFromLocalStorage();
} else {
  localStorage.setItem("historyList", JSON.stringify(historyList));
}

function readFromLocalStorage() {
  let historyListObject = JSON.parse(localStorageItem);
  historyList = historyListObject;
  generatePreviousText();
}

function changeHandler() {
  let x = document.getElementById("name");
  historyList.name = x.value;
  generatePreviousText();
}

function generatePreviousText() {
  if (historyList.name && historyList.name.length >= 3) {
    document.getElementById(
      "previousTextName"
    ).innerHTML = `<p>Огляд пацієнта: ${historyList.name}</p>`;
  } else {
    document.getElementById("previousTextName").innerHTML = "";
  }

  if (historyList.date) {
    document.getElementById(
      "previousTextDate"
    ).innerHTML = `<p>Дата огляду: ${historyList.date}</p>`;
  } else {
    document.getElementById("previousTextDate").innerHTML = null;
  }

  if (historyList.cartNomer) {
    document.getElementById("previousTextCart").innerHTML =
      `N карти пацієнта ${historyList.cartNomer} ` +
      `
    `;
  } else {
    document.getElementById("previousTextCart").innerHTML = null;
  }

  
  addSkargy();
  localStorage.setItem("historyList", JSON.stringify(historyList));
}

function changeHandlerDate() {
  let date = document.getElementById("date");
  let reformatedData = reformatDate(date.value);
  historyList.date = reformatedData;
  generatePreviousText();
}
function reformatDate(dateStr) {
  const dateParts = dateStr.split("-");
  return `${dateParts[2].padStart(2, "0")}.${dateParts[1].padStart(2, "0")}.${
    dateParts[0]
  }`;
}
document.getElementById("clearDate").addEventListener("click", () => {
  document.getElementById("date").value = null;
  historyList.date = null;
  document.getElementById("previousTextDate").innerHTML = null;
});

function changeHandlerCart() {
  var cart = document.getElementById("cart-nomer");
  historyList.cartNomer = cart.value;
  generatePreviousText();
}

function changeHandlerDiagnoz() {
  var cart = document.getElementById("diagnozInput");
  historyList.diagnoz = cart.value;
  localStorage.setItem("historyList", JSON.stringify(historyList)
  );
  generatePreviousTextObjectyvno();
}

function printOglyd (){
  var divElementContents = document.getElementById('previousText').innerHTML
  var windows = window.open('', '', 'height=500, width=500');
  windows.document.write('<html><head><title>Друк</title><style>body { white-space: pre-line; }</style></head>');
  windows.document.write('<body >');
  windows.document.write(divElementContents);
  windows.document.write('</body></html>');
  windows.document.close();
  windows.print();

}


// shablons
document.getElementById("clear-btn").addEventListener("click", () => {
  historyList = {
    name: null,
    date: null,
    cartNomer: null,
    telephon: null,
    diagnoz: "",
    skargy: {
      skargyLabel: false,
      hardbeet: false,
      zagrydinoj: false,
      weeknes: false,
      zapamoroch: false,
      defpuls: false,
      viraslab: false,
      vtomluvanist: false,
      zadiskaNyha: false,
      otherSkargy: ""
    },
  };
  historyListAnamnez = {
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
  historyListObjectivno = {
    objectyvnoMain: false,
    nabraki: "Набряки: відсутні. ",
    skargyKolinDefig: false,
    skargyKolinPain: false,
    skargyKolinClick: false,
    showEkg: false,
    generalLevel: "Загальний стан: Середня важкість",
  };
  historyListObstezenny = {
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
    konsyltaciaEndokr: false,
    konsyltaciaNevrolog: false,
    likyvanna: false,
  };
  generatePreviousText();
  generatePreviousTextAnamnez();
  generatePreviousTextObjectyvno();
  generatePrevTObstezenny();
  // localStorage.clear();
});
document.getElementById("all-in").addEventListener("click", () => {
  historyList = {
    name: "П.І.Б",
    date: new Date().toLocaleDateString(),
    cartNomer: "1",
    telephon: "-",
    diagnoz: "ІХС. Дилатаційна кардіотоксична кардіоміопатія. Миготлива аритмія, тахісистолічна форма. Розширення усіх відділів серця і висхідної аорти. Фіброзно дегенеративні зміни мітрального і аортального клапана з легкою недостатністю. Відносна недостатність тристулкового клапана. Значна легенева гіпертензія. Гіпертрофія ЛШ. Гіпертонічна хвороба ІІ ст, 2 ст, КВР 4 ст. СН ІІ Б, ІІІ ФК за NYHA.,із значно зниженою ФВ <20%.",
    skargy: {
      skargyLabel: true,
      hardbeet: true,
      zagrydinoj: true,
      weeknes: true,
      zapamoroch: true,
      defpuls: true,
      viraslab: true,
      vtomluvanist: true,
      zadiskaNyha: true,
      otherSkargy: ""
    },
  };
  historyListAnamnez = {
    anmnezLabel: true,
    start: "short",
    alkohol: true,
    narko: true,
    pereneseni: true,
    pereneseniMan: true,
    alergiaSpadk: true,
    labelSkZvichki: true,
    alkoSkZvichki: true,
    cigZvichki: true,
    pereneseniManipZahVil: false,
    pereneseniManipZahHep: false,
    pereneseniManipZahSNID: false,
    pereneseniManipZahVen: false,
    pereneseniManipZahInfarkt: false,
    pereneseniManipZahInsult: false,
    pereneseniManipZahCukor: false,
    pereneseniManipZahIXS: true
  };
  historyListObjectivno = {
    objectyvnoMain: true,
    nabraki: "Набряки: відсутні. ",
    skargyKolinDefig: true,
    skargyKolinPain: true,
    skargyKolinClick: true,
    showEkg: true,
    generalLevel: "Загальний стан: Середня важкість",
  };
  historyListObstezenny = {
    Label: true,
    zak: true,
    zas: true,
    bx: true,
    kalYH: true,
    krowCukor: true,
    ekg: true,
    exoKG: true,
    troponini: true,
    rengenHrydnoj: true,
    YZDzivota: true,
    YZDtir: false,
    konsyltaciaKardio: true,
    konsyltaciaSurgery: true,
    konsyltaciaEndokr:true,
    konsyltaciaNevrolog: true,
    likyvanna: true,
  };
  generatePreviousText();
  generatePreviousTextAnamnez();
  generatePreviousTextObjectyvno();
  generatePrevTObstezenny();
});

document.getElementById("copy-btn").addEventListener("click", () => {
  var copyText = document.getElementById("previousText");
  navigator.clipboard.writeText(copyText.textContent);

  alert("Текст скопійовано. Можете вставити його у текстовий редактор.");
});
function copyDayLog(){
  var copyText = document.getElementById("editor");
  navigator.clipboard.writeText(copyText.textContent);

  alert("Текст скопійовано. Можете вставити його у текстовий редактор.");
}

function addRemoveHandler(kriterij, trueOrFalse) {
  switch (kriterij) {
    case "hardbeet":
      historyList.skargy.hardbeet = trueOrFalse;
      break;
    case "zagrydinoj":
      historyList.skargy.zagrydinoj = trueOrFalse;
      break;
    case "weeknes":
      historyList.skargy.weeknes = trueOrFalse;
      break;
    case "zapamoroch":
      historyList.skargy.zapamoroch = trueOrFalse;
      break;
    case "defpuls":
      historyList.skargy.defpuls = trueOrFalse;
      break;
    case "viraslab":
      historyList.skargy.viraslab = trueOrFalse;
      break;
    case "vtomluvanist":
      historyList.skargy.vtomluvanist = trueOrFalse;
      break;
    case "zadiskaNyha":
      historyList.skargy.zadiskaNyha = trueOrFalse;
      break;
    default:
      console.log(`Error.${kriterij}`);
  }
  historyList.skargy.skargyLabel = true;
  addSkargy();
}

function changeHandlerOtherScargy() {
  var OSkargy = document.getElementById("otherScargy");
  historyList.skargy.otherSkargy = OSkargy.value;
  showSkargyLabel();
  addSkargy();
}

function showSkargyLabel() {
  historyList.skargy.skargyLabel = true;
}

function addSkargy() {
  document.getElementById("previousTextSkargy").innerText = `${
    historyList.skargy.skargyLabel ? "Скарги:" : ""
  } 
  ${historyList.skargy.hardbeet ? "прискорене серцебиття," : ""} ${
    historyList.skargy.zagrydinoj ? "дискомфорт у грудній клітці," : ""
  } ${historyList.skargy.weeknes ? "слабкість," : ""} ${
    historyList.skargy.zapamoroch ? "запаморочення," : ""
  } ${historyList.skargy.defpuls ? "дефіцит пульсу," : ""} ${
    historyList.skargy.viraslab ? "виражена загальна слабкість," : ""
  }${historyList.skargy.vtomluvanist ? "втомлюваність," : ""} ${
    historyList.skargy.zadiskaNyha
      ? "задишка під час фізичного навантаження NYHA _"
      : ""
  } ${historyList.skargy.otherSkargy}.`;
  localStorage.setItem("historyList", JSON.stringify(historyList));
}
