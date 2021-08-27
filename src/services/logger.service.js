const getDate = () => {
    const date = new Date();
    const stringDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    return stringDate;
}

export const logger = {
    info: (message) => {        
        message = `${getDate()}: INFO:  ${message}`;
        console.log('\x1b[37m%s\x1b[0m', message);  // white
    },
    debug: (message) => {        
        message = `${getDate()}: DEBUG:  ${message}`;
        console.log('\x1b[32m%s\x1b[0m', message);  // yellow
    },
    warn: (message) => {        
        message = `${getDate()}: WARN:  ${message}`;
        console.log('\x1b[33m%s\x1b[0m', message);  // green
    },
    error:(message) => {        
        message = `${getDate()}: ERROR:  ${message}`;
        console.log('\x1b[41m%s\x1b[0m', message);  // red
    }
};

