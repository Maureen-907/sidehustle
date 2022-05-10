const express = require("express");
const cors = require("cors");


const app = express();
// const mySql = require("mysql");

// const port = 4000;

// app.get('/', (req, res) => {
//     res.send('Hello World!!')
// });

// express middleware functionality

// app.use((req,res, next) =>{
//     console.log('Time:', Date.now())
//     next()
// });
// app.get('/user/:id', (req,res,next) => {
//     console.log('Request Type:', req.method)
//     next()
// }, (req, res) => {
//      res.send(req.params.id);
// })


// Routing and HTTP verbs

// app.get('/', (req, res) => {
//     res.send("GET request to the home page!");
// });

// app.post('/', (req, res) => {
//     res.send('POST request to the home page!');
// });

// app.put('/', (req, res) => {
//     res.send('PUT request to the home page!');
// });

// app.delete('/', (req, res) => {
//     res.send('DELETE request to the home page!');
// });

// Connecting to an sql database

    // app.get('/', (req, res, neext) => {
    //     const connection = mySql.createConnection({
    //         host: 'localhost(for remote databse url or the localhost name)',
    //         user: 'your username',
    //         password: 'your password',
    //         database: 'the database name'
    //     })
    //     connection.connect()

    //     connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    //         if(err) throw err 

    //         console.log('The solution is:', rows[0].soution)
    //     })
    //     connection.end()

    //     neext()
    
    // }, (req,res) => {
    //     res.send('I am connted to the database');
    // })

//Routing page
app.use(cors());

//parsee request of content-type - application/json+-
app.use(express.json());

//parse requests of content-type - application/x-www-form-urlendcoded
app.use(express.urlencoded({ extended: true}));

//simple route
app.get("/", (req, res) => {
    res.json({
        message: 
        "Welcomem to sideHustle Node Rest API with express."
    });
});

require("./src/routes/user.routes")(app);


//set port, listern for requets
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}.`)
});