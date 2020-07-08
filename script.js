'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }

    time = prompt("Введите дату в формате YYYY-MM-DD");

}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true 
}

function changeExpenses() {
    for (let i = 0; i < 2; i++) {

        let cd = i+1; 
        
        let a = prompt('Введите '+cd+'-ю обязательную статью расходов в этом месяце', ''),
            b = +prompt('Во сколько обойдется?', '');
        
        if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null &&
            a != '' && b != '' && a.length < 50) {
        
            appData.expenses[a] = b;
        
        } else {
        
            i--;
        
        }
        
        }
}

changeExpenses();
// console.log(appData);

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ваш бюджет на один день " + appData.moneyPerDay + " руб.");
}

detectDayBudget();

function checkSavings () {
    if (appData.savings == true) {
        let save = +prompt("Сколько денежек вы накопили");

        if(save != '' && save != null && (typeof(save) != 'number')) {
            percent = +prompt("Под какой процент готовы их заложить?");
            appData.monthIncome = save/100/12*percent;
            alert("Если заложить сумму в "+ save +" рублей, под "+ percent +"% годовых, то ежемесячный доход составит "+ appData.monthIncome.toFixed());
        }

    }
}

checkSavings();


function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Маловато деньжищ");
    } else if (appData.moneyPerDay > 200 && appData.moneyPerDay < 2000){
        console.log("Средний класс!");
    } else if (appData.moneyPerDay > 2000){
        console.log("Да вы богач!");
    } else {
        console.log("Мы не смогли расчитать ваш уровень богатства");
    }
}

detectLevel();

function chooseOptExpenses() {

    for( let i = 1; i < 4; i++ ) {

        let q = prompt(i + " из 3 статья необязательных расходов?");
        appData.optionalExpenses[i]= q;
    }

}

chooseOptExpenses();