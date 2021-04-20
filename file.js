   let money,time;
   
   function start(){
     money = +prompt("Ваш бюджет за месяц?",'');
     time = prompt("Введите дату в формате YYYY-MM-DD",'');

        while(isNaN(money) || money =="" || money ==null){
           money = +prompt("Ваш бюджет за месяц?",'');
        }
    }
    start(); 
    
    
    let appData = {
        budget: money,
        expenses: {},
        optionalExpenses: {},
        income: [],
        timeData: time,
        savings: true,
        chooseExpenses: function(){
            for(let i=0;i<2;i++){
                let a = prompt("Введите обязательную статью расходов в этом месяце",""),
                    b = +prompt("Во сколько обойдется?","");
        
                if((typeof (a))==='string' && (typeof (a))!=null && a!='' &&
                (typeof(b))!=null && b!= '' && a.length <50 ){
                    console.log("done");
                    appData.expenses[a] = b;
                }else{
                        alert("Данные введены неверно.Попробуйте еще раз!");
                        i = i-1;
               
                }
            }

        },
        detectDayBudget: function(){
            appData.moneyPerDay = (appData.budget/30).toFixed();
            alert("Ваш бюджет на день:" + appData.moneyPerDay );
        },
        detectLevel: function(){
            if(appData.moneyPerDay<300){
                console.log("малый уровень достатка");
            }else if (appData.moneyPerDay>300 && appData.moneyPerDay<600){
                console.log("Средний уровень достатка");
            }else if(appData.moneyPerDay>1000) {
                console.log("высокий уровень дохода");
            }else {
                console.log("Введены екверные данные!");
            }
        },
        checkSavings: function(){
            if(appData.savings == true){
                let save = +prompt("сколько накоплений?", ""),
                    percent = +prompt("Под какой процент?","");
     
             
                    appData.monthIncome = save/100/12*percent;
                    alert("Доход в месяц с вашего депозита: "+appData.monthIncome);
            }
        },
        chooseOptExpenses: function(){
            for(let i=1;i<=3;i++){
                let questionOptExpenses =prompt("Статья необящательных расходов? ","");
                appData.optionalExpenses[i] = questionOptExpenses;
                console.log(appData.optionalExpenses);
     
            }
        },
        chooseIncome: function(){
          let items = prompt("Что принесет дополнительный доход?(Перечислите через запятую)","");
            if((typeof(items))!=String || (typeof(items))==null && items==" " ){
                  console.log("Вы ввели некоректные данные,или не ввели их вовсе.");
            }else{
                   appData.income = items.split(", ");
                   appData.income.push(prompt("Модет что то еще?",""));
                   appData.income.sort(); }
            }
        }

        appData.income.forEach(function(itemmassiv,i){
            alert("Способы доп. зароботка: " + (i+1) + " - " + itemmassive )
        });

        for(let key in appData){
            console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
        }

    
            
           
        
  

    
    
