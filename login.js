// add event handler in log in button
document.getElementById('btn-submit').addEventListener('click',function(){
    // get te eamil address
    const emailField =document.getElementById('user-email');
    const email = emailField.value;
    
    // get the user password
    const passwordField =document.getElementById('user-password');
    const password =passwordField.value;

    // verify email ad password

    if(email==='bdrajuislam246@gmail.com' && password === '2000221raju@'){
        window.location.href = 'bank.html'
    }
    else{
        alert('Email or Password Not Match')
    }



})