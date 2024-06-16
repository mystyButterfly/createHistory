function getAllDates() {
  const startDate = new Date(document.getElementById("startDate").value);
  const endDate = new Date(document.getElementById("endDate").value);

  let datesList = [];
  let secondDatesList = [];
  let finalResult = [];
  let currentDate = new Date(startDate);
  let withZavVidWekkend = false;
  let etapnyjEpicris = false;

  while (currentDate <= endDate) {
    datesList.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  secondDatesList.push(datesList[0]); // Add the first element
  secondDatesList.push(datesList[1]); // Add the second element

  for (let i = 2; i < datesList.length - 1; i++) {
    if (
      datesList[i].getDay() === 0 ||
      datesList[i].getDay() === 6 ||
      datesList[i].getDay() === 1
    ) {
      // Check if it's a Saturday or Sunday and Monday
      secondDatesList.push(datesList[i]); // Add Saturday and Sunday and Monday
    } else {
      if (i === 10 || i === 20 || i === 30) {
        secondDatesList.push(datesList[i]); // add every 10-th
      } else {
        if (datesList[i] && i % 2 !== 0) {
          secondDatesList.push(datesList[i]);
        }
      }
    }
  }

  secondDatesList.push(datesList[datesList.length - 1]); // Add the last element

  // mark day
  secondDatesList.forEach((date) => {
    let withZavVid = true;

    if (date.getDay() === 0 || date.getDay() === 6) {
      withZavVid = false;
      finalResult.push(
        `${date.toLocaleDateString()} Огляд чергового лікаря. Лікування згідно з листком призначень.`
      );
      if (
        date.getTime() < secondDatesList[5].getTime() &&
        (datesList[0].getDay() === 5 || datesList[0].getDay() === 6)
      ) {
        withZavVidWekkend = true;
      }
      if (
        date === datesList[10] ||
        date === datesList[20] ||
        date === datesList[30]
      ) {
        etapnyjEpicris = true;
      }
    } else {
      if (withZavVid && date === datesList[1]) {
        withZavVidWekkend = false; //2-nd day
        finalResult.push(
          `${date.toLocaleDateString()}` +
          ` Спільний огляд із завідувачем відділення.` +
          writeSkargyToFiz() +
          `${historyListObjectivno.objectyvnoMain
            ? `
Лікування згідно з листком призначень.

`
            : ""
          }`
        );
      }

      if (
        etapnyjEpicris ||
        date === datesList[10] ||
        date === datesList[20] ||
        date === datesList[30]
      ) {
        //10-th day
        finalResult.push(
          `${date.toLocaleDateString()}` +
          ` Етапний епікриз.` +
          writeSkargyToFiz() +
          `${historyListObjectivno.objectyvnoMain
            ? `
Пацієнт продовжує лікуватись з ${date === datesList[10]
              ? datesList[11].toLocaleDateString()
              : ""
            }${date === datesList[20]
              ? datesList[21].toLocaleDateString()
              : ""
            }${date === datesList[30]
              ? datesList[31].toLocaleDateString()
              : ""
            }
Лікування згідно з листком призначень.

`
            : ""
          }`
        );
        etapnyjEpicris = false;
      } else {
        withZavVid = true;

        finalResult.push(
          `${date.toLocaleDateString()}` +
          `${withZavVidWekkend
            ? "Спільний огляд із завідувачем відділення.<div></div>"
            : ""
          }` +
          writeSkargyToFiz() +
          `${historyListObjectivno.objectyvnoMain
            ? `
Лікування згідно з листком призначень.

`
            : ""
          }`
        );
        withZavVidWekkend = false;
      }
    }
    withZavVid = true;
  });
  quill.root.innerHTML =
    finalResult.join(`<div></div>`) +
    "<div></div>" +
    "Пацієнт виписується додому з рекомендаціями сімейному лікарю.";
}

function writeSkargyToFiz() {
  let writeSkargyToFizText =
    `${historyList.skargy.skargyLabel ? " Скарги:" : ""} ${historyList.skargy.hardbeet ? "прискорене серцебиття," : ""
    } ${historyList.skargy.zagrydinoj ? "дискомфорт у грудній клітці," : ""} ${historyList.skargy.weeknes ? "слабкість," : ""
    } ${historyList.skargy.zapamoroch ? "запаморочення," : ""} ${historyList.skargy.defpuls ? "дефіцит пульсу," : ""
    } ${historyList.skargy.viraslab ? "виражена загальна слабкість," : ""}${historyList.skargy.vtomluvanist ? "втомлюваність," : ""
    } ${historyList.skargy.zadiskaNyha
      ? "задишка під час фізичного навантаження NYHA _"
      : ""
    }.` +
    `${historyListObjectivno.objectyvnoMain
      ? `
        
        Дані об’єктивного обстеження:` +
      `	
${historyListObjectivno.generalLevel}` +
      ` Шкірні покриви: чисті; Підшкірні лімфатичні вузли: не пальпуються; Щитоподібна залоза: не збільшена; ` +
      `${historyListObjectivno.nabraki}` +
      `Серцево-судинна система: тони аритмічні, приглушені,  АТ 130/70 мм/рт/ст.` +
      ` ЧСС ${createNumber(1, 10) + 60
      } уд/хв;  Дихальна система:  Аускультація: дихання жорстке, хрипи відсутні; Перкуторний звук - ясний легеневий, дещо притуплений в нижніх частках обох легень;` +
      `ЧД ${createNumber(1, 4) + 15} вд/хв; ` +
      ` Сатурація ${createNumber(2, 5) + 93}%;` +
      `Травна система: язик вологий, чистий; живіт при пальпації м'який не болючий. Печінка на рівні реб. дуги; при пальпації не болюча, селезінка не пальпується. Кістково-суглобова система: набряки немає; ` +
      `${historyListObjectivno.skargyKolinDefig ||
        historyListObjectivno.skargyKolinPain ||
        historyListObjectivno.skargyKolinClick
        ? "Колінні суглоби: "
        : ""
      } ${historyListObjectivno.skargyKolinDefig ? "дефігурація;" : ""} ${historyListObjectivno.skargyKolinPain ? "біль;" : ""
      } ${historyListObjectivno.skargyKolinClick ? "хруст;" : ""
      }  Об'єм рухів: відповідно до віку. С-м. Пастернацького: негативний з обох сторін; Фіз. відправлення в нормі.`
      : ""
    }`;

  return writeSkargyToFizText;
}
