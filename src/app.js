// const { envs } = require('./config/env');
// const { startServer } = require('./server/server');
import { envs } from './config/env.js';
import { startServer } from './server/server.js';

const main = () => {
    startServer({
        port: envs.PORT,
        public: envs.PUBLIC_PATH
    })
}

//Funcion agnostica autoconvocada
( async () => {
    main()
})()