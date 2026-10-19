function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);  
    

}
moneyBox(5); 
moneyBox(5);

function moneyBox2(){
    let saveCoins = 0; 
    function coinsBank(coins, name){
        saveCoins += coins
        console.log(`usuario ${name}: MoneyBox $${saveCoins}`)
        }

    return coinsBank;
}

const myMoneyBox = moneyBox2(); 

myMoneyBox(5, "martha");
myMoneyBox(5, "martha");
myMoneyBox(15,"martha"); 


const MoneyBoxAnna = moneyBox2(); 

MoneyBoxAnna(100, "anna"); 
MoneyBoxAnna(20, "anna"); 
MoneyBoxAnna(90, "anna");
MoneyBoxAnna(39, "anna"); 
