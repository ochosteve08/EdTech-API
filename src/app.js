// Impprt external packages
const { error } = require('@Enseedling/enseedling-lib-handler');
const express = require('express');

// const socketIO = require('socket.io');
const http = require('http');
const cors = require('cors');

// Import internal modules;
const {
  connectToMongoDb,
  configureSocket,
  environmentVariables,
} = require('./config');

const apiRoutes = require('./routes');

const app = express();
const server = http.createServer(app);

// Configure Socket.IO
configureSocket(server);

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'working fine' });
});

// const { setIoGetter } = require('./controllers/message');
// setIoGetter(io)

// Connect to db;

// use routes
app.use(apiRoutes);

// global error handler
app.use(error.handler);

server.listen(environmentVariables.APP_PORT || 8000, (err) => {
  if (err) {
    console.error(err);
  }
  connectToMongoDb()
    .then(() => {
      console.info('connected to mongodb atlas');
      console.info(
        `Server running on ${environmentVariables.APP_HOST}:${environmentVariables.APP_PORT}`,
      );
    })
    .catch((_error) => {
      console.log(_error);
    });
});
