const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const app = express();
const port = 3000;

app.use(cors()); 


app.use(bodyParser.json());

app.use(express.urlencoded({
    extended: true
}))

const userData = {
    username: 'username',
    email: 'email',
    id: 1,
    first_name: 'firstName',
    last_name: 'lastName'
}

app.get('/', (req, res) => {
    res.send(userData);
})

app.post('/', (req, res) => {
    console.log('getting post request..')
    console.log(req.body);
    res.send(req.body);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})