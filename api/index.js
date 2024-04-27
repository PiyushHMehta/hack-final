const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcryptjs')
const User = require('./models/User')
require('dotenv').config()

const app = express()
mongoose.connect(process.env.MONGO_URL)
const jwtSecret = process.env.JWT_SECRET

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())
const bcryptSalt = bcrypt.genSaltSync(10)


app.get('/test', (req, res) => {
    res.json('test ok')
})

app.post('/register', async (req, res) => {
    const { name, email, password, interests } = req.body;
    console.log(req.body)
    try {
        const hashedPassword = bcrypt.hashSync(password, bcryptSalt);
        const userDoc = await User.create({
            name, email, password: hashedPassword, interests
        });
        res.status(201).json(userDoc);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Failed to create new user.', details: error });
    }
});


app.post('/login', async (req, res) => {
    const { email, password } = req.body
    const userDoc = await User.findOne({ email })
    if (userDoc) {
        const passOk = bcrypt.compareSync(password, userDoc.password)
        if (passOk) {
            jwt.sign({ id: userDoc._id, email: userDoc.email }, jwtSecret, {}, (err, token) => {
                if (err) throw err
                res.cookie('token', token).json(userDoc)
            })
        }
    }
})

app.get('/profile', async (req, res) => {
    const { token } = req.cookies;
    if (token) {
        try {
            const userData = jwt.verify(token, jwtSecret);
            const { id } = userData;
            const user = await User.findById(id);
            if (user) {
                const { name, email, _id } = user;
                res.json({ name, email, _id });
            } else {
                // Handle case where user is not found
                res.status(404).json({ error: 'User not found' });
            }
        } catch (err) {
            // Handle JWT verification errors
            console.error('JWT verification error:', err);
            res.status(401).json({ error: 'Unauthorized' });
        }
    } else {
        // Handle case where token is missing
        res.status(401).json({ error: 'Unauthorized' });
    }
});


app.post('/logout', (req, res) => {
    res.cookie('token', '').json(true)
})

app.listen(3000)