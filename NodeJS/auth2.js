const express = require('express');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

// To support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// To parse cookies from the HTTP Request
app.use(cookieParser());

// Enables handlebars to use shorter .hbs extension
app.engine('hbs', exphbs({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

// add middleware
app.use((req, res, next) => {
    // Get auth token from the cookies
    const authToken = req.cookies['AuthToken'];

    // Inject the user to the request
    req.user = authTokens[authToken];

    next();
});
// Our requests hadlers will be implemented here...

app.get('/', function (req, res) {
    res.render('home');
});
app.get('/register', (req, res) => {
    res.render('register');
});
// Hash password
const crypto = require('crypto');

const getHashedPassword = (password) => {
    const sha256 = crypto.createHash('sha256');
    const hash = sha256.update(password).digest('base64');
    return hash;
}

const users = [
    // This user is added to the array to avoid creating a new user on each restart
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@email.com',
        // This is the SHA256 hash for value of `password`
        password: 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg='
    }
];
app.post('/register', (req, res) => {
    const { email, firstName, lastName, password, confirmPassword } = req.body;

    // Check if the password and confirm password fields match
    if (password === confirmPassword) {

        // Check if user with the same email is also registered
        if (users.find(user => user.email === email)) {

            res.render('register', {
                message: 'User already registered.',
                messageClass: 'alert-danger'
            });

            return;
        }

        const hashedPassword = getHashedPassword(password);

        // Store user into the database if you are using one
        users.push({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });
        console.log( "Pushed to list login:" + email);

        res.render('login', {
            message: 'Registration Complete. Please login to continue.',
            messageClass: 'alert-success'
        });
    } else {
        res.render('register', {
            message: 'Password does not match.',
            messageClass: 'alert-danger'
        });
    }
});
app.get('/login', (req, res) => {
    res.render('login');
});
const generateAuthToken = () => {
    return crypto.randomBytes(30).toString('hex');
}
// This will hold the users and authToken related to users
const authTokens = {};

app.post('/login', (req, res) => {
    console.log("LOGIN: Inside login ");
    const { email, password } = req.body;
    const hashedPassword = getHashedPassword(password);

    const user = users.find(u => {
        return u.email === email && hashedPassword === u.password
    });

    if (user) {
        const authToken = generateAuthToken();

        // Store authentication token
        authTokens[authToken] = user;

        // Setting the auth token in cookies
        res.cookie('AuthToken', authToken);

        // Redirect user to the protected page
        console.log("LOGIN: redirected");
        console.log("FL1:Users:%o", users );
        req.user = { "done": "Yes"};
        res.redirect('/protected');
    } else {
        console.log("LOGIN: back to login ");
        console.log("Users:%o", users );
        res.render('login', {
            message: 'Invalid username or password',
            messageClass: 'alert-danger'
        });
    }
});

app.get('/protected', (req, res) => {
    if (req.user) {
        res.render('protected');
    } else {
        res.render('login', {
            message: 'Please login to continue',
            messageClass: 'alert-danger'
        });
    }
});
//app.get('/protected', (req, res) => {
    //let vRedir =  req.session.valid;
    //if (vRedir ) {
        //console.log("GETPROTECTED: Render protected"); 
        //res.render('protected');
    //} else {
        //console.log("GETPROTECTED2: Render login again");
        //console.log("Req OBJ:%o", res.session );
        //res.render('login', {
            //message: 'Please login to continue',
            //messageClass: 'alert-danger'
        //}
        //);
    //}
//});
//const requireAuth = (req, res, next) => {
    //if (req.user) {
        //console.log("GETPROTECTED: Render protected");
        //next();
    //} else {
        //console.log("GETPROTECTED2: Render login protected");
        //res.render('login', {
            //message: 'Please login to continue',
            //messageClass: 'alert-danger'
        //});
    //}
//};
//
//app.get('/protected', requireAuth, (req, res) => {
    //res.render('protected');
//});

app.listen(3000);