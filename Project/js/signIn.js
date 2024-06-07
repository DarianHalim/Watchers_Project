document.addEventListener('DOMContentLoaded',() =>{

document.querySelector('form').addEventListener('submit',(e) =>{
    e.preventDefault();

//Get login values
let  loginUsernameField =document.getElementById('Username');
let  loginPasswordField =document.getElementById('Password');

let loginUsername = loginUsernameField.value;
let loginPassword = loginPasswordField.value;

//Get Stored User Info

let signinUsername = localStorage.getItem('username');
let signinPassword = localStorage.getItem('password');

 // Validate login credentials
 if (loginUsername === signinUsername && loginPassword === signinPassword) {
    alert('Login successful');
    // Proceed with login (e.g., redirect to profiles.html)
    window.location.href = 'profiles.html'; // Example redirection
} else {
    alert('Invalid username or password');
}
});
});