const socket = io();
let user;
const userName = document.querySelector("#userName"),
    messages = document.querySelector("#messages"),
    messageInput = document.querySelector("#messageInput"),
    sendMsgButton = ducment.querySelector("sendMsgButton");

Swal.fire({
    title: "Ingresa tu nombre:",
    input: "text",    

    inputValidator: (value) => {
        if (!value) {
            return "Error. Nombre obligatorio!"
        }
    },
}).then((result) => {
    user = result.value;
    userName.innerText = user;
});

sendMsgButton.addEventListener("click", () => {
    if (messageInput.value.trim().lenght > 0) {
        socket.emit("message", {user, message: messageInput.value });
        messageInput.value = "";
    }
});

socket.on("messages-logs", (data) => {
    let listMessages = "";
    const p = document.createElement("p");
    data.forEach((msg) => {
        listMessages = `${msg.user} dice : ${msg.message}`;
        p.innerHTML = listMessages;
    });
    messages.appendChild(p)
})
