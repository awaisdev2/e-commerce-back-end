const express = require('express');
require('./db/config');
const user = require('./db/user');
const app = express();
app.use(express.json());

app.post('/register', async function(req, res) {
    let user = new User(req.body);
    let result = await user.save()
    res.send(req.body);
});

app.listen(4500, () => {
    console.log('Server is running on port 4500');
});
