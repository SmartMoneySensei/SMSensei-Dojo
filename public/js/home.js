const greeting = document.querySelector('#greeting');

window.onload = () => {
    if(!sessionStorage.name){
        location.href = '/login';
    } else{
        greeting.innerHTML = `Hello ${sessionStorage.name} 😇 Welcome to the secret Dojo where you will learn about FOREX quietly!🤫`;
    }
}

const logOut = document.querySelector('.logout');

logOut.onclick = () => {
    sessionStorage.clear();
    location.reload();
}