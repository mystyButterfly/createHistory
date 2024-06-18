const localStorageItemOjektyvno = localStorage.getItem("historyListObjectivno");

let historyListObjectivno = {
  objectyvnoMain: false,
  nabraki: "Набряки: відсутні. ",
  skargyKolinDefig: false,
  skargyKolinPain: false,
  skargyKolinClick: false,
  showEkg: false,
  generalLevel: "Загальний стан: Середня важкість",
};

if (localStorageItemOjektyvno) {
  readFromLocalStorage();
} else {
  localStorage.setItem(
    "historyListObjectivno",
    JSON.stringify(historyListObjectivno)
  );
}

function readFromLocalStorage() {
  let historyListObjectivnoObject = JSON.parse(localStorageItemOjektyvno);
  historyListObjectivno = historyListObjectivnoObject;
  generatePreviousTextObjectyvno();
}

function generatePreviousTextObjectyvno() {
  document.getElementById("prevTextObjectyvno").innerText = `${
    historyListObjectivno.objectyvnoMain
      ? `Дані об’єктивного обстеження:` +
        `${historyListObjectivno.generalLevel}` +
        ` Шкірні покриви: чисті; Підшкірні лімфатичні вузли: не пальпуються; Щитоподібна залоза: не збільшена; ` +
        `${historyListObjectivno.nabraki}` +
        `Серцево-судинна система: тони аритмічні, приглушені,  АТ 130/70 мм/рт/ст.` +
        ` ЧСС ${
          createNumber(1, 10) + 60
        } уд/хв;  Дихальна система:  Аускультація: дихання жорстке, хрипи відсутні; Перкуторний звук - ясний легеневий, дещо притуплений в нижніх частках обох легень;` +
        `ЧД ${createNumber(1, 4) + 15} вд/хв; ` +
        ` Сатурація ${createNumber(2, 5) + 93}%;` +
        `Травна система: язик вологий, чистий; живіт при пальпації м'який не болючий. Печінка на рівні реб. дуги; при пальпації не болюча, селезінка не пальпується; С-м. Пастернацького: негативний з обох сторін; Кістково-суглобова система: набряки немає; ` +
        `${
          historyListObjectivno.skargyKolinDefig ||
          historyListObjectivno.skargyKolinPain ||
          historyListObjectivno.skargyKolinClick
            ? "Колінні суглоби: "
            : ""
        } ${historyListObjectivno.skargyKolinDefig ? "дефігурація;" : ""} ${
          historyListObjectivno.skargyKolinPain ? "біль;" : ""
        } ${
          historyListObjectivno.skargyKolinClick ? "хруст;" : ""
        }  Об'єм рухів: відповідно до віку;`
      : ""
  }`;
  historyListObjectivno.showEkg
    ? (document.getElementById(
        "prevTextEKG"
      ).innerText = `ЕКГ: Ритм синусовий, правильний, лівограма. ЧСС ${
        createNumber(1, 10) + 60
      } уд/хв;
`)
    : (document.getElementById("prevTextEKG").innerText = "");

  document.getElementById("prevTextDiagnoz").innerText = `${
    historyList.diagnoz  ? "Попередній діагноз: " + historyList.diagnoz : "_____"
  }`;

  localStorage.setItem(
    "historyListObjectivno",
    JSON.stringify(historyListObjectivno)
  );
}

function createNumber(min, max) {
  myNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return myNumber;
}

document.getElementById("addObjectyvno").addEventListener("click", () => {
  historyListObjectivno.objectyvnoMain = true;
  generatePreviousTextObjectyvno();
});
document.getElementById("remoteObjectyvno").addEventListener("click", () => {
  historyListObjectivno.objectyvnoMain = false;
  generatePreviousTextObjectyvno();
});

function handleNabraki() {
  let checkedRadio = document.querySelector('input[name="nabraki"]:checked');
  if (checkedRadio) {
    let selectedValue = checkedRadio.value;
    historyListObjectivno.nabraki = selectedValue;
    historyListObjectivno.objectyvnoMain = true;
    generatePreviousTextObjectyvno();
  }
}

function addRemObjectyvno(kriterij, trueOrFalse) {
  switch (kriterij) {
    case "skargyKolinDefig":
      historyListObjectivno.skargyKolinDefig = trueOrFalse;
      break;
    case "skargyKolinPain":
      historyListObjectivno.skargyKolinPain = trueOrFalse;
      break;
    case "skargyKolinClick":
      historyListObjectivno.skargyKolinClick = trueOrFalse;
      break;
    case "showEkg":
      historyListObjectivno.showEkg = trueOrFalse;
      break;
    default:
      console.log(`Error.${kriterij}`);
  }
  historyListObjectivno.objectyvnoMain = true;
  generatePreviousTextObjectyvno();
}

function handleLevel() {
  let checkedRadio = document.querySelector('input[name="level"]:checked');
  if (checkedRadio) {
    let selectedValue = checkedRadio.value;
    switch (selectedValue) {
      case "good":
        historyListObjectivno.generalLevel = "Загальний стан: Задовільний";
        historyListObjectivno.objectyvnoMain = true;
        generatePreviousTextObjectyvno();
        break;
      case "easy":
        historyListObjectivno.generalLevel = "Загальний стан: Легкий перебіг";
        historyListObjectivno.objectyvnoMain = true;
        generatePreviousTextObjectyvno();
        break;
      case "middle":
        historyListObjectivno.generalLevel = "Загальний стан: Середня важкість";
        historyListObjectivno.objectyvnoMain = true;
        generatePreviousTextObjectyvno();
        break;
      case "hard":
        historyListObjectivno.generalLevel = "Загальний стан: Важкий";
        historyListObjectivno.objectyvnoMain = true;
        generatePreviousTextObjectyvno();
        break;
      case "clear":
        historyListObjectivno.generalLevel = "";
        historyListObjectivno.objectyvnoMain = true;
        generatePreviousTextObjectyvno();
        break;
      default:
        historyListObjectivno.generalLevel = "Загальний стан: Середня важкість";
    }
  }
generatePreviousTextObjectyvno();
}
