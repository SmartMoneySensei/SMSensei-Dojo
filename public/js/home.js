const greeting = document.querySelector('#greeting');

window.onload = () => {
    if(!sessionStorage.name){
        location.href = '/login';
    } else{
        console.log(sessionStorage)
        greeting.innerHTML = `Hello ${sessionStorage.name} 😇 Welcome to the secret Dojo where you will learn about FOREX quietly!🤫`;
    }
}

const logOut = document.querySelector('.logout');

logOut.onclick = () => {
    sessionStorage.clear();
    location.reload();
}