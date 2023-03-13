// add event handler in log in button
document.getElementById('btn-diposite').addEventListener('click',function (){
    // get the deposite amount
    const amountField =document.getElementById('deposite-amount');
    const amount = amountField.value;
    const newdeposite = parseFloat(amount);
    
    // current diposite amount

    const depositeTotalElement = document.getElementById('deposite-total')
    const previousTotal = depositeTotalElement.innerText;
    const previousTotalString = parseFloat(previousTotal);
    const currentTotal = previousTotalString + newdeposite;
    depositeTotalElement.innerText =(currentTotal);

    // Add balance

    const balanceTotalElement =document.getElementById('balance-total')
     const previousBalanceString = balanceTotalElement.innerText;
     const previousTotalBalance = parseFloat(previousBalanceString);
     const totalBalance = previousTotalBalance + newdeposite;
     balanceTotalElement.innerText = totalBalance;
      
     //    clear deposite field

        amountField.value = '';      

})


document.getElementById('btn-withdraw').addEventListener('click',function(){
    
    // Calculate total withdraw balance 

    const withdrawamount = document.getElementById('withdraw-amount')
    const userInputValue = withdrawamount.value;
    const userWithdrawAmount = parseFloat(userInputValue);
    
    
    // get initial withdraw Blanace
    const withdraw = document.getElementById('Withdraw-total');
    const withdrawInnerText = withdraw.innerText;
    const withdrawStringToInt = parseFloat(withdrawInnerText);
     const totalwithdraw = userWithdrawAmount + withdrawStringToInt;
     withdraw.innerText = totalwithdraw;

     const balanceTotalElement =document.getElementById('balance-total')
     const previousBalanceString = balanceTotalElement.innerText;
     const previousTotalBalance = parseFloat(previousBalanceString);
     const totalBalance = previousTotalBalance - totalwithdraw;
     balanceTotalElement.innerText = totalBalance;
        

     withdrawamount.value = '';
})