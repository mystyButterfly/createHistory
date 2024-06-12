function getAllDates() {
  const startDate = new Date(document.getElementById("startDate").value);
  const endDate = new Date(document.getElementById("endDate").value);

  const datesList = [];
  const secondDatesList = [];
  const finalResult = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    datesList.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const filteredDates = datesList.filter(
    (date) => date.getDay() !== 2 && date.getDay() !== 4
  ); // remove 2 and 4
  secondDatesList.push(filteredDates);

  // mark day
  secondDatesList[0].forEach((date) => {
    if (date.getDay() === 0 || date.getDay() === 6) {
      finalResult.push(
        `${date.toLocaleDateString()} Огляд чергового лікаря. Лікування згідно з листком призначень.`
      );
    } else {
      finalResult.push(
        `${date.toLocaleDateString()}`+`${historyList.skargy.skargyLabel?" Скарги:":""} ${historyList.skargy.hardbeet ?"прискорене серцебиття," : ""} ${historyList.skargy.zagrydinoj ? "дискомфорт у грудній клітці," : ""} ${historyList.skargy.weeknes ? "слабкість," : ""} ${historyList.skargy.zapamoroch ?"запаморочення," : ""} ${historyList.skargy.defpuls ? "дефіцит пульсу," : ""} ${historyList.skargy.viraslab ? "виражена загальна слабкість," : ""}${ historyList.skargy.vtomluvanist ? "втомлюваність," : ""} ${historyList.skargy.zadiskaNyha? "задишка під час фізичного навантаження NYHA _": ""}.`+`${historyListObjectivno.objectyvnoMain?(`
<br/>Дані об’єктивного обстеження:`+`	
${historyListObjectivno.generalLevel}`+` Шкірні покриви: чисті; Підшкірні лімфатичні вузли: не пальпуються; Щитоподібна залоза: не збільшена; `+`${historyListObjectivno.nabraki}`+`Серцево-судинна система: тони аритмічні, приглушені,  АТ 130/70 мм/рт/ст.`+` ЧСС ${createNumber(1, 10)+60} уд/хв;  Дихальна система:  Аускультація: дихання жорстке, хрипи відсутні; Перкуторний звук - ясний легеневий, дещо притуплений в нижніх частках обох легень;`+`ЧД ${createNumber(1, 4)+15} вд/хв; `+` Сатурація ${createNumber(2, 5)+93}%;`+`Травна система: язик вологий, чистий; живіт при пальпації м'який не болючий. Печінка на рівні реб. дуги; при пальпації не болюча, селезінка не пальпується; С-м. Пастернацького: негативний з обох сторін; Кістково-суглобова система: набряки немає; `+`${historyListObjectivno.skargyKolinDefig||historyListObjectivno.skargyKolinPain||historyListObjectivno.skargyKolinClick?"Колінні суглоби: ":""} ${historyListObjectivno.skargyKolinDefig?"дефігурація;":""} ${historyListObjectivno.skargyKolinPain?"біль;":""} ${historyListObjectivno.skargyKolinClick?"хруст;":""}  Об'єм рухів: відповідно до віку.

`):""}`
      );
    }
  });
  document.getElementById("filteredResult").innerHTML =
    finalResult.join(`<div></div><br/>`)+'<div></div><br/>'+"Пацієнт виписується додому з рекомендаціями сімейному лікарю.";
}