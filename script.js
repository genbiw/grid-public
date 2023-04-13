const phone = document.querySelector('#main-nav-name');
const pass = document.querySelector('#main-nav-password');
const button = document.querySelector('.main-nav-button');

function checkName () {
    if ((phone.value == '111')&&(pass.value == '333')){
        document.location.assign("login.html");
        /* return false; */
    }else{
        console.log('error')
        /* return false; */
    };
}

button.onclick = checkName;