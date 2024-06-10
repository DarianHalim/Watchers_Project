document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();

        //Get login values
        let loginUsernameField = document.getElementById('Username');
        let loginPasswordField = document.getElementById('Password');

        let loginUsername = loginUsernameField.value;
        let loginPassword = loginPasswordField.value;

        //Get Stored User Info

        let signinUsername = localStorage.getItem('username');
        let signinPassword = localStorage.getItem('password');


        //Validation

        if (loginUsername === signinUsername && loginPassword === signinPassword) {

            alert('Login Success');
      
            window.location.href = 'profiles.html';
        } else {
            alert('Invalid');
        }
    });
});