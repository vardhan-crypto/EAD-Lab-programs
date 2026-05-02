const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    next();
});

app.get('/home', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Home - Express App</title>
            <style>
                body { font-family: Arial; text-align: center; padding: 50px; background: #f0f0f0; }
                .card { background: white; padding: 30px; border-radius: 10px; max-width: 500px; margin: auto; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
                h1 { color: #333; }
                .btn { background: blue; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 20px; }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>Express.js Home Page</h1>
                <p>Welcome! I'm Vikranth Jakkoju (160124737106)</p>
                <p>This page is served using Express.js</p>
                <a href="/login" class="btn">Go to Login</a>
            </div>
        </body>
        </html>
    `);
});

app.get('/login', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Login Page</title>
            <style>
                body { font-family: Arial; text-align: center; padding: 50px; background: #f0f0f0; }
                .card { background: white; padding: 30px; border-radius: 10px; max-width: 400px; margin: auto; }
                input { padding: 10px; margin: 10px; width: 80%; }
                button { padding: 10px 20px; background: green; color: white; border: none; border-radius: 5px; cursor: pointer; }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>Login Page</h1>
                <form action="/login" method="POST">
                    <input type="text" placeholder="Username" name="username" required><br>
                    <input type="password" placeholder="Password" name="password" required><br>
                    <button type="submit">Login</button>
                </form>
                <p style="margin-top:20px"><a href="/home">Back to Home</a></p>
            </div>
        </body>
        </html>
    `);
});

app.use(express.urlencoded({ extended: true }));
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(`Login attempt: ${username}`);
    res.send(`
        <h1>Welcome ${username}!</h1>
        <p>Login successful (demo mode)</p>
        <a href="/home">Go to Home</a>
    `);
});

app.listen(PORT, () => {
    console.log(`- Home: http://localhost:${PORT}/home`);
    console.log(`- Login: http://localhost:${PORT}/login`);
});