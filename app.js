const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

let urlencoded = bodyParser.urlencoded({extended: false});

app.use(bodyParser.json());
app.use(urlencoded);
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html')); 
});

app.post('/formData',  [
    check('name')
    .not().isEmpty(),
    check('email')
    .not.isEmpty(),
    check('message')
    .not.isEmpty()
], (req, res) => {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
        return response.status(422).json({
            errors: errors.array()
        });
    }

    response.status(202).json({
        success: 'Submit Confirmed'
    })
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})