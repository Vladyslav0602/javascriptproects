    let money = +prompt("Ваш бюджет за месяц?",''),
        time = prompt("Введите дату в формате YYYY-MM-DD",'');

    let appData = {
        budget: money,
        expenses: {},
        optionalExpenses: {},
        income: [],
        timeData: time,
        savings: false
    };

    for(let i=0;i<2;i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце",""),
            b = +prompt("Во сколько обойдется?","");

        if((typeof (a))==='string' && (typeof (a))!=null && a!='' &&
        (typeof(b))!=null && b!= '' && a.length <50 ){
            console.log("done");
            appData.expenses[a] = b;
        }else{
                alert("Данные введены неверно.Попробуйте еще раз!");
        let a = prompt("Введите обязательную статью расходов в этом месяце",""),
            b = +prompt("Во сколько обойдется?","");
        }
    }; 
    appData.moneyPerDay = appData.budget/30;

   alert("Ваш бюджет на день:" + appData.moneyPerDay );

   if(appData.moneyPerDay<300){
       console.log("малый уровень достатка");
   }else if (appData.moneyPerDay>300 && appData.moneyPerDay<600){
       console.log("Средний уровень достатка");
   }else if(appData.moneyPerDay>1000) {
       console.log("высокий уровень дохода");
   }else {
       console.log("Введены екверные данные!");
   };