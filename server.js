const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// اتصال به MongoDB
mongoose.connect('mongodb://localhost:27017/usersDB', { useNewUrlParser: true, useUnifiedTopology: true });

// ایجاد اسکیمای کاربر
const userSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    username: String,
    password: String,
    email: String
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.urlencoded({ extended: true }));

// سرو کردن فایل‌های استاتیک
app.use(express.static('public'));

// روت برای ثبت نام
app.post('/register', (req, res) => {
    const newUser = new User({
        name: req.body.name,
        lastname: req.body.lastname,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });

    newUser.save((err) => {
        if (err) {
            res.send(err);
        } else {
            res.send('ثبت نام با موفقیت انجام شد!');
        }
    });
});

// روت برای دریافت اطلاعات کاربران
app.get('/accounts', (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            res.send(err);
        } else {
            res.json(users);
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
