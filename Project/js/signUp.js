console.log('tet');

document.getElementById('signUpForm').addEventListener('submit', (event) => {

    event.preventDefault();

    // Create Variable

    let usernameField = document.getElementById('username')

    let emailField = document.getElementById('email')

    let passwordField = document.getElementById('password')

    let confirmPasswordField = document.getElementById('confirmPassword')

    let paymentField = document.getElementById('paymentPlan')



    //Sync Variable

    let username = usernameField.value
    let email = emailField.value
    let password = passwordField.value
    let confirmPassword = confirmPasswordField.value
    let paymentPlan = paymentField.value

    //Validations
    if (username.length < 5) {
        alert('Username must be at least 5 char long')
        
        return
    }

    if (email.indexOf('@') === 1 || email.indexOf('.') === 1) {
        alert('Email is missing @ or .')
        return
    }

    if (password.length <= 4) {
        alert('Password Too Short')
        return
    }

    if (confirmPassword !== password) {
        alert('password must sync')
        return
    }

    if (paymentPlan ==  '') {
        alert('Please Select Payment Plan')
        return
    }


    alert('Data Accepted Please Proceed To Payment')
  
    const paymentMessage = document.getElementsByClassName('price')
    if (paymentPlan == 'low') {
        paymentMessage.innerHTML = '45.000'
    } else if (paymentPlan == 'mid') {
        paymentMessage.innerHTML = '60.000'
    } else {
        paymentMessage.innerHTML = '100.000'
    } {
        
    }
    
})



