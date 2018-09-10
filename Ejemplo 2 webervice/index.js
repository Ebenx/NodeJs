const express = require('express');
const app = express();
const request = require('request');
const async = require('async');

var bodyParser = require('body-parser');

// El middleware 
var jwt = require('jsonwebtoken')
 
//app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

//localhost:8010/upcoming
app.get('/upcoming', (request, response) => {
    response.json({'itworks': 'yes'});
})

app.post('/login', (req, res) => {
  var username = req.body.username
  var password = req.body.password
 
  
 
  var tokenData = {
    username: username
    // ANY DATA
  }
	//var token = jwt.sign(tokenData, 'Secret Password',)
/*
  var token = jwt.sign(tokenData, 'Secret Password',)
 
  res.send({	
    token
  })*/
  //.json()
  res.send("username: "+ tokenData.username + " password: " + password)
})

var nodemailer = require('nodemailer'); // email sender function exports.sendEmail = function(req, res){

/*
	exports.sendEmail = function(req, res){
		// Definimos el transporter
	    var transporter = nodemailer.createTransport({
	        service: 'Gmail',
	        auth: {
	            user: 'aguacatecremoso@gmail.com',
	            pass: 'cateagua987'
	        }
	    });

	    var mailOptions = {
	       from: 'aguacatecremoso <aguacatecremoso@gmail.com>',
	       to: 'aguacatecremoso@gmail.com',
	       subject: 'Prueba',
	       text: 'Contenido del email'
		};

		transporter.sendMail(mailOptions, function(error, info){
		    if (error){
		        console.log(error);
		        res.send(500, err.message);
		    } else {
		        console.log("Email sent");
		        res.status(200).jsonp(req.body);
		    }
		});
	};*/
app.post('/casavacia', (req, res) =>{
	
})

app.post('/enviar', (req, res) => {
	var asunto = req.body.asunto
	var contenido = req.body.contenido
  	
	var transporter = nodemailer.createTransport({
	        service: 'Gmail',
	        auth: {
	            user: 'aguacatecremoso@gmail.com',
	            pass: 'cateagua987'
	        }
	    });

	    var mailOptions = {
	       from: 'aguacatecremoso <aguacatecremoso@gmail.com>',
	       to: 'ebenja42 <ebenja42@gmail.com>',
	       subject: asunto,
	       text: contenido
		};

		transporter.sendMail(mailOptions, function(error, info){
		    if (error){
		        console.log(error);
		        //res.send(500, err.message);
		        res.json({"messageError" : "No enviado"})
		    } else {
		        console.log("Email sent");
		        //res.status(200).jsonp(req.body);
		        //res.send("el mensaje; contenido" + contenido +" fue enviado")
		        res.json({"messageError": "exito"})
		    }
		});
})

app.listen('8010', ()=> {
	console.log('listening on port 8010');
})
