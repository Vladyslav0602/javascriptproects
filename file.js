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

let a1 = prompt("Введите обязательную статью расходов в этом месяце",""),
    a2 = +prompt("Во сколько обойдется?",""),
    a3 = prompt("Введите обязательную статью расходов в этом месяце",""),
    a4 = +prompt("Во сколько обойдется?","");

    appData.expenses.a1 = a2;
    appData.expenses.a3 = a4;

alert("Ваш бюджет на день:" + appData.budget/30);