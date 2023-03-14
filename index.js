const express = require('express')
require('./src/mongoose/mongoose')
const path = require('path')
const cors = require('cors')
const cluster = require('cluster')
const numCPUs = require('os').cpus().length
const process = require('process')
//require('./src/mail/testemail')

const app = express()


//**************** CORS *****************//
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});
// *************************************// 
//D:/mongodb/bin/mongod.exe --dbpath=D:/mongodb/data
const requestRouter = require('./src/routers/requests')

app.use(express.json())
app.use(requestRouter)

const port = process.env.PORT || 3000

process.on('uncaughtException', (error, origin) => {
    console.log('----- Uncaught exception -----')
    console.log(error)
    console.log('----- Exception origin -----')
    console.log(origin)
})

process.on('unhandledRejection', (reason, promise) => {
    console.log('----- Unhandled Rejection at -----')
    console.log(promise)
    console.log('----- Reason -----')
    console.log(reason)
    console.log("App is Still Running")
})

// app.set('view engine', 'hbs')
const p = path.join(__dirname, './public')
app.use(express.static(p))

app.get('/', (req, res) => {
    try {
        res.status(200).send("ok")
    } catch (e) {
        res.status(200).send(e.message)
    }
})


if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`);
    // Fork workers.
    console.log(numCPUs)
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    console.log(`Worker ${process.pid} started`);
    app.listen(port, () => {
        console.log('Server is up on port ' + port)
    })
}