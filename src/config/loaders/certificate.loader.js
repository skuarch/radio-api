import fs from 'fs';

const privateKey = fs.readFileSync('/etc/letsencrypt/live/generic-dev.online/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/generic-dev.online/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/generic-dev.online/chain.pem', 'utf8');

export const cert = {
    key: privateKey,
    cert: certificate,
    ca: ca
};