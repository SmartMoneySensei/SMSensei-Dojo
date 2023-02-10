const greeting = document.querySelector('#greeting');

window.onload = () => {
    if(!sessionStorage.name){
        location.href = '/login';
    } else{
        greeting.innerHTML = `Welcome To The Dojo ${sessionStorage.name}!  Lets Learn About FOREX!`;
    }
}

const logOut = document.querySelector('.logout');

logOut.onclick = () => {
    sessionStorage.clear();
    location.reload();
}