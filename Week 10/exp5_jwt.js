const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    next();
});

app.get('/login', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html>
<body>
    <form action="/login" method="post">
        <label for="name">Name</label>
        <input type="text" id="name" name="name">
        <br><br>
        <label for="password">Password</label>
        <input type="password" id="password" name="password">
        <button type="submit">Submit</button>
    </form>
</body>
</html>
    `)
});

app.use(express.urlencoded({ extended: true }));
app.post('/login', (req, res) => {
    var x = req.body;
    console.log(x);
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/login`);
})