export const environments = {
    prod: {  
        name: 'prod',
        databaseHost: process.env.PGHOST,        
        databaseUser: process.env.PGUSER,
        databasePassword: process.env.PGPASSWORD,
        databasePort: process.env.PGPORT,
        databaseName: process.env.PGDATABASE,
        httpServerPort: 80,
        httpsServerPort: 443,
        forceSyncDb: false,
        corsOrigins: [         
            'https://escucharadio.com.mx',
            'http://escucharadio.com.mx',
            'https://bulmaradio.com',
            'http://bulmaradio.com/'
        ]
    },
    local: {
        name: 'local',
        databaseHost: process.env.PGHOST,        
        databaseUser: process.env.PGUSER,
        databasePassword: process.env.PGPASSWORD,
        databasePort: process.env.PGPORT,
        databaseName: process.env.PGDATABASE,
        httpServerPort: 8000,
        httpsServerPort: 4430,
        forceSyncDb: false,
        corsOrigins: [
            'http://localhost:8000',
            'http://localhost:3000',
            'https://escucharadio.com.mx',
            'http://escucharadio.com.mx',
            'https://bulmaradio.com',
            'http://bulmaradio.com'
        ]
    }
}
