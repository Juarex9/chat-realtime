const socket = io();
let user;

const userName = document.querySelector("#userName");
const messages = document.querySelector("#messages");
const messageInput = document.querySelector("#messageInput");
const sendMsgButton = document.querySelector("#sendMessagesButton");

Swal.fire({
  title: "Ingresa tu nombre:",
  input: "text",
  inputValidator: (value) => {
    if (!value) return "Error. Nombre obligatorio!";
  },
}).then((result) => {
  user = result.value;
  userName.innerText = user;
});

sendMsgButton.addEventListener("click", () => {
  if (messageInput.value.trim().length > 0) {
    socket.emit("message", {
      user,
      message: messageInput.value,
    });
    messageInput.value = "";
  }
});

socket.on("messages-logs", (data) => {
  messages.innerHTML = "";
  data.forEach((msg) => {
    const p = document.createElement("p");
    p.innerText = `${msg.user} dice: ${msg.message}`;
    messages.appendChild(p);
  });
});
