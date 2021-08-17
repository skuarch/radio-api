import express from 'express';
import env from './config/environments/index.js';
import loadControllers from './config/loaders/controller.loader.js';
import cors from 'cors';
import helmet from 'helmet';
import loadDb from './config/loaders/db.loader.js';



const app = express();

const corsOptions = {
    origin: ['http://localhost:8000', 'https://escucharadio.com.mx', 'http://bulmaradio.com'],    
    optionsSuccessStatus: 200
  }

app.use(cors(corsOptions));
loadControllers(app);
loadDb();
 
app.use(helmet());

app.listen(env.port, () => {
    console.log(`Running server on port: ${env.serverPort}`)
});
