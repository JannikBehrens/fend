const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

// declare API credentials
//const apiKey = process.env.API_KEY;
const apiKey = "9f7225fb95e956c7abd63fb730ab2d7a";
const url = "https://api.meaningcloud.com/sentiment-2.1?key=";


const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/all', (request, response) => {
    //response.send('Hello World')
    response.send(projectData)
    
});

// fetch url
app.post('/add', function(request, response){
    projectData = request.body;
    console.log(projectData);
    response.send({message: 'received'})
})