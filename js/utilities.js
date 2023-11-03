const userList = document.querySelector('#userList');
const chatList = document.querySelector('#messsagesContainer');

export function listarUsuarios(userName, userId) {
    const li = document.createElement('li');
    li.classList.add('userListItem');
    li.id = userId;

    const span = document.createElement('span');
    span.classList.add('imgConatiner')

    const img = document.createElement('img');
    img.src = `https://robohash.org/138.36.78.${userId}.png`;
    img.alt = 'user avatar';

    const h3 = document.createElement('h3');
    h3.classList.add('userName');
    h3.textContent = userName;

    span.appendChild(img);

    li.append(span, h3);

    userList.appendChild(li);

}

export function chatItem(nombre, fecha, mensaje, userId) {
    const li = document.createElement('li');
    li.classList.add('generalBox');

    const divImgConatiner = document.createElement('div');
    divImgConatiner.classList.add('imgBox')

    const img = document.createElement('img');
    img.src = `https://robohash.org/138.36.78.${userId}.png`
    img.alt = 'user avatar'

    const divMessageContainer = document.createElement('div');
    divMessageContainer.classList.add('messageBox');

    const divMessageHead = document.createElement('div');
    divMessageHead.classList.add('top');

    const h3 = document.createElement('h3');
    h3.textContent = nombre;

    const h4 = document.createElement('h4');
    h4.textContent = fecha;

    const divMessage = document.createElement('div');
    divMessage.classList.add('bot');
    const p = document.createElement('p');
    p.textContent = mensaje;

    divImgConatiner.appendChild(img);
    divMessage.appendChild(p);
    divMessageHead.append(h3, h4);
    divMessageContainer.append(divMessageHead, divMessage);

    li.append(divImgConatiner, divMessageContainer);
    
    chatList.appendChild(li);
}






// aclarar FormData
/* const crearAticulo = document.querySelector('#crearAticulo');
 
crearAticulo.addEventListener('submit', (e)=>{
    e.preventDefault();
    let data = new FormData(crearAticulo);
 
    for (const value of data.values()) {
        comprasItem(value)
    }
    crearAticulo.reset();
})

 function comprasItem(articulo) {
    const li = document.createElement('li');
    li.textContent = articulo;

    document.querySelector('#listaDeCompras').appendChild(li);
} */