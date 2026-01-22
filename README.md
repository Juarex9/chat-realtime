# Chat en tiempo real

Aplicación de chat en tiempo real construida con Express, Handlebars y Socket.IO. Permite iniciar una sesión indicando un nombre de usuario y enviar mensajes que se propagan instantáneamente a todos los clientes conectados. Los mensajes se almacenan en memoria durante la ejecución del servidor.

## Funcionalidades

- Conexiones en tiempo real con Socket.IO.
- Vista renderizada con Handlebars.
- Captura del nombre de usuario con SweetAlert2.
- Envío y visualización de mensajes en tiempo real.

## Tecnologías

- Node.js
- Express
- Socket.IO
- Express Handlebars
- SweetAlert2 (CDN)

## Requisitos

- Node.js 18+ (recomendado)
- npm

## Instalación

```bash
npm install
```

## Uso

Iniciar el servidor:

```bash
npm start
```

Modo desarrollo con recarga automática:

```bash
npm run dev
```

La aplicación quedará disponible en: `http://localhost:4000`.

## Demo

Puedes ver una demo desplegada en Render: https://backend1-coderhouse.onrender.com/

## Estructura del proyecto

```text
.
├── public
│   ├── css
│   │   └── style.css
│   └── js
│       └── main.js
├── src
│   ├── routes
│   │   └── view.route.js
│   ├── utils
│   │   └── index.js
│   └── server.js
└── views
    ├── layouts
    │   └── main.handlebars
    └── home.handlebars
```

## Notas

- Los mensajes se mantienen en memoria (no hay base de datos).
- Si reinicias el servidor, el historial se pierde.
