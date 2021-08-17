export default {
    prod: {        
        databaseHost: process.env.PGHOST,
        databaseUser: process.env.PGUSER,
        databasePassword: process.env.PGPASSWORD,
        databasePort: process.env.PGPORT,
        databaseName: process.env.PGDATABASE,
        serverPort: 8000
    },
    local: {
        databaseHost: process.env.PGHOST,
        databaseUser: process.env.PGUSER,
        databasePassword: process.env.PGPASSWORD,
        databasePort: process.env.PGPORT,
        databaseName: process.env.PGDATABASE,
        serverPort: 8000
    }
}
