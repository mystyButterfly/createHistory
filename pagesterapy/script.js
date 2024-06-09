const localStorageItem = localStorage.getItem("historyList");


let historyList = {
  name: null,
  date: null,
  cartNomer: null,
  telephon: null,
  generalLevel: null,
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
    document.getElementById(
      "previousTextCart"
    ).innerHTML = `N карти пацієнта ${historyList.cartNomer} `+`
    `;
  } else {
    document.getElementById("previousTextCart").innerHTML = null;
  }


  switch (historyList.generalLevel) {
    case "good":
      hardlevel =
        "Загальний стан: Задовільний";
        historyListObjectivno.objectyvnoMain =true
        generatePreviousTextObjectyvno()
      break;
    case "easy":
      hardlevel =
        "Загальний стан: Легкий перебіг";
        historyListObjectivno.objectyvnoMain =true
        generatePreviousTextObjectyvno()
      break;
    case "middle":
      hardlevel =
        "Загальний стан: Середня важкість";
        historyListObjectivno.objectyvnoMain =true
        generatePreviousTextObjectyvno()
      break;
    case "hard":
      hardlevel =
        "Загальний стан: Важкий";
        historyListObjectivno.objectyvnoMain =true
        generatePreviousTextObjectyvno()
      break;
    case "clear":
      hardlevel = "";
      historyListObjectivno.objectyvnoMain =true
        generatePreviousTextObjectyvno()
      break;
    default:
      hardlevel = "";
  }
  addSkargy()
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

function changeHandlerTelephone() {
  var tel = document.getElementById("telephon");
  historyList.telephon = tel.value;
  generatePreviousText();
}

function handleLevel() {
  let checkedRadio = document.querySelector('input[name="level"]:checked');
  if (checkedRadio) {
    let selectedValue = checkedRadio.value;
    historyList.generalLevel = selectedValue;
    generatePreviousText();
  }
}

document.getElementById("clear-btn").addEventListener("click", () => {
  historyList = {
    name: null,
    date: null,
    cartNomer: null,
    telephon: null,
    generalLevel: null,
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
    cigZvichki: false
  }
  historyListObjectivno = {
    objectyvnoMain: false,
    nabraki: "Набряки: відсутні. ",
    skargyKolinDefig: false,
    skargyKolinPain: false,
    skargyKolinClick: false,
    showEkg: false,
    hardlevel: "Загальний стан: Середня важкість"
  }
  historyListObstezenny ={
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
  generatePreviousText();
  generatePreviousTextAnamnez();
  generatePreviousTextObjectyvno();
  generatePrevTObstezenny();
});
document.getElementById("all-in").addEventListener("click", () => {
  historyList = {
    name: "П.І.Б",
    date: new Date().toLocaleDateString(),
    cartNomer: "1",
    telephon: "-",
    generalLevel: null,
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
    cigZvichki: true
  }
  historyListObjectivno = {
    objectyvnoMain: true,
    nabraki: "Набряки: відсутні. ",
    skargyKolinDefig: true,
    skargyKolinPain: true,
    skargyKolinClick: true,
    showEkg: true,
    hardlevel: "Загальний стан: Середня важкість"
  }
  historyListObstezenny ={
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
    konsyltaciaKardio: true,
    konsyltaciaSurgery: true,
    konsyltaciaEndokr:true,
    likyvanna: true
  }
  generatePreviousText();
  generatePreviousTextAnamnez();
  generatePreviousTextObjectyvno();
  generatePrevTObstezenny();
});

document.getElementById('copy-btn').addEventListener('click',()=>{
  var copyText = document.getElementById("previousText");
  navigator.clipboard.writeText(copyText.textContent);

  alert("Текст скопійовано. Можете вставити його у текстовий редактор.");
})







document.getElementById("addSkargyHardbeet").addEventListener("click", () => {
  historyList.skargy.hardbeet = true;
  showSkargyLabel()
  addSkargy();
});

document
  .getElementById("removeSkargyHardbeet")
  .addEventListener("click", () => {
    historyList.skargy.hardbeet = false;
    addSkargy();
});

document.getElementById("addSkargyZagrydinoj").addEventListener("click", () => {
  historyList.skargy.zagrydinoj = true;
  showSkargyLabel()
  addSkargy();
});
document
  .getElementById("removeSkargyZagrydinoj")
  .addEventListener("click", () => {
    historyList.skargy.zagrydinoj = false;
    addSkargy();
  });

document.getElementById("addSkargyWeeknes").addEventListener("click", () => {
  historyList.skargy.weeknes = true;
  showSkargyLabel()
  addSkargy();
});
document.getElementById("removeSkargyWeeknes").addEventListener("click", () => {
  historyList.skargy.weeknes = false;
  addSkargy();
});

document.getElementById("addSkargyZap").addEventListener("click", () => {
  historyList.skargy.zapamoroch = true;
  showSkargyLabel()
  addSkargy();
});
document.getElementById("removeSkargyZap").addEventListener("click", () => {
  historyList.skargy.zapamoroch = false;
  addSkargy();
});

document.getElementById("addSkargyDef").addEventListener("click", () => {
  historyList.skargy.defpuls = true;
  showSkargyLabel()
  addSkargy();
});
document.getElementById("removeSkargyDef").addEventListener("click", () => {
  historyList.skargy.defpuls = false;
  addSkargy();
});

document.getElementById("addSkargyZahSlabkist").addEventListener("click", () => {
  historyList.skargy.viraslab = true;
  showSkargyLabel()
  addSkargy();
});
document.getElementById("removeSkargyZahSlabkist").addEventListener("click", () => {
  historyList.skargy.viraslab = false;
  addSkargy();
});

document.getElementById("addSkargyVtoma").addEventListener("click", () => {
  historyList.skargy.vtomluvanist = true;
  showSkargyLabel()
  addSkargy();
});
document.getElementById("removeSkargyVtoma").addEventListener("click", () => {
  historyList.skargy.vtomluvanist = false;
  addSkargy();
});

document.getElementById("addSkargyZadisNiha").addEventListener("click", () => {
  historyList.skargy.zadiskaNyha = true;
  showSkargyLabel()
  addSkargy();
});
document.getElementById("removeSkargyZadisNiha").addEventListener("click", () => {
  historyList.skargy.zadiskaNyha = false;
  addSkargy();
});

function showSkargyLabel(){
  historyList.skargy.skargyLabel=true
}

function addSkargy() {
  document.getElementById("previousTextSkargy").innerText = `${historyList.skargy.skargyLabel?"Скарги:":""} 
  ${historyList.skargy.hardbeet ? "прискорене серцебиття," : ""} ${historyList.skargy.zagrydinoj ? "дискомфорт у грудній клітці," : ""} ${historyList.skargy.weeknes ? "слабкість," : ""} ${historyList.skargy.zapamoroch ?"запаморочення," : ""} ${historyList.skargy.defpuls ? "дефіцит пульсу," : ""} ${historyList.skargy.viraslab ? "виражена загальна слабкість," : ""}${ historyList.skargy.vtomluvanist ? "втомлюваність," : ""} ${historyList.skargy.zadiskaNyha? "задишка під час фізичного навантаження NYHA _": ""}.`;
  localStorage.setItem("historyList", JSON.stringify(historyList));
}
