import helmet from 'helmet';
import cors from 'cors';
import { env } from '../environments/index.js';

export const configHelmet = (app) => {
    app.use(helmet());
}

export const configCors = (app) => {
    const whitelist = env.corsOrigins;
    const corsOptions = {
        origin: function (origin, callback) {
            if (whitelist.indexOf(origin) !== -1) {
                callback(null, true)
            } else {
                callback(new Error('Not allowed by CORS'))
            }
        }
    }

    app.use(cors(corsOptions));
}