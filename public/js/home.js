const greeting = document.querySelector('#greeting');

window.onload = () => {
    if(!sessionStorage.name){
        location.href = '/login';
    } else{
        greeting.innerHTML = `Welcome To The SECRET Dojo 🤫 ${sessionStorage.name}!  Lets Learn About FOREX quietly!`;
    }
}

const logOut = document.querySelector('.logout');

logOut.onclick = () => {
    sessionStorage.clear();
    location.reload();
}