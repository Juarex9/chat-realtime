import express from "express";
import { engine } from "express-handlebars";
import { join, __dirname } from "./utils/index.js";
import viewRoutes from "./routes/view.route.js";
import { Server } from "socket.io";

const app = express();
app.set("PORT", 4000);

const server = app.listen(app.get("PORT"), () => {
    console.log(`Server on port http://localhost:${app.get("PORT")}`);
});

const io = new Server(server);

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", join(__dirname, "../views"));

//midlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(join(__dirname, "../public")));

//routes
app.use("/", viewRoutes);

let messages = [];
io.on("connection", (socket) => {
    console.log("Nueva conexion encontrada: ", socket.id);
    socket.on("message", (data) => {
        messages.push({
            id: socket.id,
            ...data,
        });
        io.emit("messages-logs", messages)
    });
});