var session = require('express-session');
var bodyParser = require('body-parser')
var express = require('express');
var path = require('path');
var app = express();
var router = express.Router();


app.use(express.static(path.join(__dirname, '../static')));

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var db = require('./db');
var validate = require('./formVal')

app.get('/', function(req, res) {
     res.sendFile('index.html', { root: '../..' })
})

app.get('/login', function(req, res){
    res.sendFile('login.html', { root: '../..' })
});

app.post('/login', function(req, res){
    const username = req.body.email
    const password = req.body.password
    if (username && password) {
		db.query('SELECT * FROM usuarios WHERE email = ? AND password = ?', [username, password], function(err, results) {            
            if(err){
                console.log(err);             
            }

			if (results.length > 0) {
				req.session.loggedin = true;
				req.session.username = username;
				res.redirect('/profile');
			} else {
				res.send('Nombre de usuario o contraseña incorrecto <a href="/login">Ir a login </a>');
			}			
			res.end();
		});
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}

});


app.get('/register', function(req, res){
    res.sendFile('registro.html', { root: '../../' })
});

app.get('/pythonCourse', function(req, res){
    res.sendFile('pythonCourse.html', { root: '../../' })
});

app.get('/javascriptCourse', function(req, res){
    res.sendFile('javascriptCourse.html', { root: '../../' })
});

app.get('/inglesCourse', function(req, res){
    res.sendFile('inglesCourse.html', { root: '../../' })
});

app.get('/marketingCourse', function(req, res){
    res.sendFile('marketingCourse.html', { root: '../../' })
});

app.get('/couchCourse', function(req, res){
    res.sendFile('couchCourse.html', { root: '../../' })
});

app.get('/escuelaIngenieria', function(req, res){
    res.sendFile('escuelaIngenieria.html', { root: '../../' })
});

app.get('/escuelaIngles', function(req, res){
    res.sendFile('escuelaIngles.html', { root: '../../' })
});

app.get('/escuelaMarketing', function(req, res){
    res.sendFile('escuelaMarketing.html', { root: '../../' })
});

app.get('/escuelaCouching', function(req, res){
    res.sendFile('escuelaCouching.html', { root: '../../' })
});

app.post('/register', function(req, res){
    const name = req.body.name
    const username = req.body.email
    const password = req.body.password
    let validation = validate(name, username, password)
    
    if(validation){ 
        let sql = `INSERT INTO usuarios(nombre_completo, email, password) values('${name}', '${username}', '${password}')`;
        db.query(sql, function(err, contents){
            if(err) {
                console.log(err)
            }
            res.sendFile('login.html', { root: '../../' });
        });        
    } else {
        res.sendFile('registro.html', { root: '.' })
    }

});


app.get("/profile", function(req, response){
    if (req.session.loggedin) {
		response.sendFile('profile.html', { root: '../../' });
	} else {
		response.send('Please login to view this page!');
        response.end();
	}
	

});
app.listen('8080', function(err){
    // if(err) throw err;
    console.log("Server Started at port No. 8080");
})