console.log('tet');

document.getElementById('signUpForm').addEventListener('submit', (event) => {

    event.preventDefault();

    // Create Variable

    let usernameField = document.getElementById('username')

    let emailField = document.getElementById('email')

    let passwordField = document.getElementById('password')

    let confirmPasswordField = document.getElementById('confirmPassword')

    let paymentField = document.getElementById('paymentPlan')

    let durationField = document.getElementById('durationPlan')



    //Sync Variable

    let username = usernameField.value
    let email = emailField.value
    let password = passwordField.value
    let confirmPassword = confirmPasswordField.value
    let paymentPlan = paymentField.value
    let durationPlan = durationField.value


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

    if (paymentPlan == '') {
        alert('Please Select Payment Plan')
        return
    }

    if (durationPlan == '') {
        alert('Please Select Duration Plan')
        return
    }

    if (durationPlan != '') {

        const paymentMessages = document.getElementsByClassName('price');

        for (let i = 0; i < paymentMessages.length; i++) {
            if (paymentPlan === 'low' && durationPlan === 'monthly') {
                paymentMessages[i].innerHTML = 'Rp 35.000';
            } else if (paymentPlan === 'mid' && durationPlan === 'monthly') {
                paymentMessages[i].innerHTML = 'Rp 60.000';
            } else if (paymentPlan === 'premium' && durationPlan === 'monthly') {
                paymentMessages[i].innerHTML = 'Rp 105.000';
            } else if (paymentPlan === 'low' && durationPlan === 'yearly') {
                paymentMessages[i].innerHTML = 'Rp 252.000';
            } else if (paymentPlan === 'mid' && durationPlan === 'yearly') {
                paymentMessages[i].innerHTML = 'Rp 432.000';
            } else if (paymentPlan === 'premium' && durationPlan === 'yearly') {
                paymentMessages[i].innerHTML = 'Rp 756.000';
            }
        }

    }


    alert('Data Accepted Please Proceed To Payment')




    

    // Creation QR
    let img = document.createElement('img');
    img.src = '../assets/QRPA.jpg'; // Make sure imgQR points to the correct image URL
    img.alt = 'QR Code';

    //Styling
    img.style.width = '20rem'
    img.style.height = '20rem'

    // Get the element a
    let paymentQRHeading = document.querySelector('.signUpContainer .inputBox h3');

    // Inserting the image 
    paymentQRHeading.parentNode.insertBefore(img, paymentQRHeading.nextSibling);

    //Remove De QR
    let oldQR = img;
    if (img != null) {
        oldQR.remove();
    }


    //Save local storage

    localStorage.setItem('username',username);
    localStorage.setItem('password',password);
    localStorage.setItem("payment", paymentPlan);
    localStorage.setItem("duration",durationPlan);
});






