// add event handler in log in button
document.getElementById('btn-diposite').addEventListener('click',function(){
    // get the deposite amount
    const amountField =document.getElementById('deposite-amount');
    const amount = amountField.value;
    if( amount !== "number"){
            alert('Emter amount')
    }
    console.log(amount);
    
    // update diposite amount
   
    



})