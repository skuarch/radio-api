import fs from 'fs';
import { env } from '../environments/index.js';

let privateKey = '';
let certificate = '';
let ca = '';

if (env.name != 'local') {
    privateKey = fs.readFileSync('/etc/letsencrypt/live/generic-dev.online/privkey.pem', 'utf8');
    certificate = fs.readFileSync('/etc/letsencrypt/live/generic-dev.online/cert.pem', 'utf8');
    ca = fs.readFileSync('/etc/letsencrypt/live/generic-dev.online/chain.pem', 'utf8');
}

export const cert = {
    key: privateKey,
    cert: certificate,
    ca: ca
};
