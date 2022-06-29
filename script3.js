"use strict";

const shoppingMallData = {
    shops: [
        {
            width: 9,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let square = 0;
    let volume = 0;

    data.shops.forEach(shop => {
        square += shop.width * shop.length;
    });

    volume = data.height * square;
    console.log('volume = ', volume, ', free money = ', data.budget - (volume * data.moneyPer1m3));

    if (data.budget - (volume * data.moneyPer1m3) >= 0){
        return 'Бюджета достаточно';
    } else {return 'Бюджета не достаточно'}

}
console.log(isBudgetEnough(shoppingMallData));