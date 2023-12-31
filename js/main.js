import { listarUsuarios, chatItem } from './utilities.js';
let selectedUser = 0;

let chatsList = JSON.parse(localStorage.getItem('chatList'));

if (!chatsList) {
    const defaultChatList = [
        {
            userId: 1,
            conversacion: [
                {
                    fechaEnvio: "2023-10-27 09:30:00",
                    mensaje: "Hola, ¿cómo estás?",
                    remitente: "Juan Pérez",
                },
                {
                    fechaEnvio: "2023-10-27 09:35:00",
                    mensaje: "¡Hola! Estoy bien, ¿y tú?",
                    remitente: "Miguel Salinas",
                },
                {
                    fechaEnvio: "2023-10-27 09:40:00",
                    mensaje: "Yo también estoy bien, ¿qué has estado haciendo?",
                    remitente: "Juan Pérez",
                },
            ]
        },
        {
            userId: 2,
            conversacion: [
                {
                    fechaEnvio: "2023-10-27 10:15:00",
                    mensaje: "Hola María, ¿cómo te va?",
                    remitente: "Miguel Salinas",
                },
                {
                    fechaEnvio: "2023-10-27 10:20:00",
                    mensaje: "Hola Miguel, todo bien. ¿Qué has estado haciendo?",
                    remitente: "María García",
                },
                {
                    fechaEnvio: "2023-10-27 10:25:00",
                    mensaje: "Estuve trabajando en un proyecto, ¿y tú?",
                    remitente: "Miguel Salinas",
                },
            ]
        },
        {
            userId: 3,
            conversacion: [
                {
                    fechaEnvio: "2023-10-27 11:00:00",
                    mensaje: "Hola Ana, ¿cómo te ha ido?",
                    remitente: "Miguel Salinas",
                },
                {
                    fechaEnvio: "2023-10-27 11:05:00",
                    mensaje: "Hola Miguel, todo tranquilo por aquí. ¿Y tú?",
                    remitente: "Ana Martínez",
                },
                {
                    fechaEnvio: "2023-10-27 11:10:00",
                    mensaje: "Estoy ocupado con el trabajo, pero todo va bien.",
                    remitente: "Miguel Salinas",
                },
            ]
        },
        {
            userId: 4,
            conversacion: [
                {
                    fechaEnvio: "2023-10-27 12:30:00",
                    mensaje: "Hola Luis, ¿qué tal estás?",
                    remitente: "Miguel Salinas",
                },
                {
                    fechaEnvio: "2023-10-27 12:35:00",
                    mensaje: "¡Hola Miguel! Bien, gracias. ¿Has oído hablar de la nueva película?",
                    remitente: "Luis Sánchez",
                },
                {
                    fechaEnvio: "2023-10-27 12:40:00",
                    mensaje: "Sí, la vi anunciada. ¿Quieres verla juntos?",
                    remitente: "Miguel Salinas",
                },
            ]
        },
        {
            userId: 5,
            conversacion: [
                {
                    fechaEnvio: "2023-10-27 13:15:00",
                    mensaje: "Hola Laura, ¿cómo estás?",
                    remitente: "Miguel Salinas",
                },
                {
                    fechaEnvio: "2023-10-27 13:20:00",
                    mensaje: "¡Hola Miguel! Estoy bien, gracias. ¿Cómo va tu día?",
                    remitente: "Laura López",
                },
                {
                    fechaEnvio: "2023-10-27 13:25:00",
                    mensaje: "Mi día va bien, ocupado en el trabajo. ¿El tuyo?",
                    remitente: "Miguel Salinas",
                },
            ]
        },
        {
            userId: 6,
            conversacion: [
                {
                    fechaEnvio: "2023-10-27 14:00:00",
                    mensaje: "Hola David, ¿qué has estado haciendo?",
                    remitente: "Miguel Salinas",
                },
                {
                    fechaEnvio: "2023-10-27 14:05:00",
                    mensaje: "Hola Miguel, estuve trabajando en mi proyecto. ¿Tú?",
                    remitente: "David Gómez",
                },
                {
                    fechaEnvio: "2023-10-27 14:10:00",
                    mensaje: "Yo también ocupado con el trabajo. ¡Sigamos esforzándonos!",
                    remitente: "Miguel Salinas",
                },
            ]
        },
        {
            userId: 7,
            conversacion: [
                {
                    fechaEnvio: "2023-10-27 15:30:00",
                    mensaje: "Hola Elena, ¿cómo te ha ido hoy?",
                    remitente: "Miguel Salinas",
                },
                {
                    fechaEnvio: "2023-10-27 15:35:00",
                    mensaje: "Hola Miguel, hoy fue un día ocupado en la oficina. ¿El tuyo?",
                    remitente: "Elena Torres",
                },
                {
                    fechaEnvio: "2023-10-27 15:40:00",
                    mensaje: "Lo mismo por aquí, mucho trabajo. ¡Ánimo!",
                    remitente: "Miguel Salinas",
                },
            ]
        },
        {
            userId: 8,
            conversacion: [
                {
                    fechaEnvio: "2023-10-27 16:15:00",
                    mensaje: "Hola Sofía, ¿cómo te va?",
                    remitente: "Miguel Salinas",
                },
                {
                    fechaEnvio: "2023-10-27 16:20:00",
                    mensaje: "¡Hola Miguel! Estoy bien, gracias. ¿Y tú?",
                    remitente: "Sofía Ramírez",
                },
                {
                    fechaEnvio: "2023-10-27 16:25:00",
                    mensaje: "Todo va bien, gracias. ¿Qué planes tienes para el fin de semana?",
                    remitente: "Miguel Salinas",
                },
            ]
        },
        {
            userId: 9,
            conversacion: [
                {
                    fechaEnvio: "2023-10-27 17:00:00",
                    mensaje: "Hola Pablo, ¿qué tal estás?",
                    remitente: "Miguel Salinas",
                },
                {
                    fechaEnvio: "2023-10-27 17:05:00",
                    mensaje: "¡Hola Miguel! Estoy bien, gracias. ¿Cómo va todo contigo?",
                    remitente: "Pablo Martín",
                },
                {
                    fechaEnvio: "2023-10-27 17:10:00",
                    mensaje: "Todo en orden, ocupado con el trabajo. ¿Y tú?",
                    remitente: "Miguel Salinas",
                },
            ]
        },
        {
            userId: 10,
            conversacion: [
                {
                    fechaEnvio: "2023-10-27 18:30:00",
                    mensaje: "Hola Carmen, ¿cómo ha sido tu día?",
                    remitente: "Miguel Salinas",
                },
                {
                    fechaEnvio: "2023-10-27 18:35:00",
                    mensaje: "Hola Miguel, bien, gracias. ¿El tuyo?",
                    remitente: "Carmen Rodríguez",
                },
                {
                    fechaEnvio: "2023-10-27 18:40:00",
                    mensaje: "Ocupado, pero bien. ¿Tienes planes para el fin de semana?",
                    remitente: "Miguel Salinas",
                },
            ]
        },
        {
            userId: 11,
            conversacion: [
                {
                    fechaEnvio: "2023-10-27 19:15:00",
                    mensaje: "Hola Diego, ¿cómo estás?",
                    remitente: "Miguel Salinas",
                },
                {
                    fechaEnvio: "2023-10-27 19:20:00",
                    mensaje: "¡Hola Miguel! Todo bien por aquí. ¿Qué novedades hay?",
                    remitente: "Diego Sánchez",
                },
                {
                    fechaEnvio: "2023-10-27 19:25:00",
                    mensaje: "Nada nuevo, solo trabajo y rutina. ¿Tú?",
                    remitente: "Miguel Salinas",
                },
            ]
        },
        {
            userId: 12,
            conversacion: [
                {
                    fechaEnvio: "2023-10-27 20:00:00",
                    mensaje: "Hola Isabel, ¿cómo te ha ido hoy?",
                    remitente: "Miguel Salinas",
                },
                {
                    fechaEnvio: "2023-10-27 20:05:00",
                    mensaje: "Hola Miguel, día ocupado, pero todo bien. ¿El tuyo?",
                    remitente: "Isabel López",
                },
                {
                    fechaEnvio: "2023-10-27 20:10:00",
                    mensaje: "Lo mismo por aquí, mucho trabajo. ¡Ánimo!",
                    remitente: "Miguel Salinas",
                },
            ]
        },]
    localStorage.setItem('chatList', JSON.stringify(defaultChatList));
    chatsList = JSON.parse(localStorage.getItem('chatList'));

}

chatsList.forEach(chats => {

    for (let i = 0; i < chats.conversacion.length; i++) {

        if (chats.conversacion[i].remitente !== "Miguel Salinas") {

            listarUsuarios(chats.conversacion[i].remitente, chats.userId)

            break;
        }
    }
});

const userList = document.querySelector('#userList');
const hiddenInput = document.querySelector('#cajaMensaje');
userList.addEventListener('click', (e) => {
    e.stopPropagation();
    if(selectedUser !== 0){
        
    }

    let tagName = e.target.tagName;

    if (tagName.toLowerCase() !== 'ul') {

        let element = e.target.closest('li');

        document.querySelector('#messsagesContainer').innerHTML = "";
        selectedUser = parseInt(element.id)
        selectChat(selectedUser);
    }
});

function selectChat(id) {
    const filteredChat = chatsList.filter(chat => chat.userId === id)

    filteredChat[0].conversacion.map(mensaje => {
        let miguelSalinaId = 78;

        let userId = id;
        let reverse;
        let you = mensaje.remitente;

        if (mensaje.remitente === "Miguel Salinas") {
            userId = miguelSalinaId
            reverse = 'generalBoxR';
            you = 'Tú';
        }

        chatItem(you, mensaje.fechaEnvio, mensaje.mensaje, userId, reverse);

    })

}


const inputMessage = document.querySelector('#inputMessage');
const sendButton = document.querySelector('#sendButton');


function crearMensaje(fechaActual, newMensaje, usuario = 'Miguel Salinas') {
    if (selectedUser > 0 && inputMessage.value !== '') {

        let newMessage = {
            fechaEnvio: fechaActual,
            mensaje: newMensaje,
            remitente: usuario,
        }

        const index = chatsList.findIndex(chat =>
            chat.userId == selectedUser
        );

        chatsList[index].conversacion.push(newMessage);
        localStorage.setItem('chatList', JSON.stringify(chatsList));
        document.querySelector('#messsagesContainer').innerHTML = "";
        inputMessage.value = "";
        selectChat(selectedUser);
    }

}

inputMessage.addEventListener('keypress', (e) => {
    if (e.code === 'Enter') {
        let fechaActualFormateada = fechaActual();
        let newMessage = inputMessage.value;

        crearMensaje(fechaActualFormateada, newMessage);
    }
})

sendButton.addEventListener('click', () => {
    let fechaActualFormateada = fechaActual();
    let newMessage = inputMessage.value;

    crearMensaje(fechaActualFormateada, newMessage);
})

function fechaActual() {
    let fecha = new Date();
    let year = fecha.getFullYear();
    let day = fecha.getDate();
    let month = fecha.getMonth() + 1;
    let hora = fecha.getHours();
    let min = fecha.getMinutes();
    let second = fecha.getSeconds();

    if (second < 10) second = '0' + second;

    if (min < 10) min = '0' + min;

    let fechaActualFormateada = `${year}-${month}-${day} ${hora}:${min}:${second}`;

    return fechaActualFormateada;
}



