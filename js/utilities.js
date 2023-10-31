const userList = document.querySelector('#userList');
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