const express = require('express');
const path = require ('path');

const app = express ();

app.get ('/', (req,res) => {
    res.send ('HOLA LOCOS');
}
);

app.get ('/home', (req,res)=>{
   // res.send ('Hola mundos');
   res.sendFile ((__dirname + '/views/home.html'));
});

app.get ('/ofertas', (req,res)=>{
    // res.send ('Hola mundos');
    res.sendFile ((__dirname + '/views/ofertas.html'));
});

app.get ('/tiendas_oficiales', (req,res)=>{
    // res.send ('Hola mundos');
    res.sendFile ((__dirname + '/views/tiendas_oficiales.html'));
});
 
app.get ('/vender', (req,res)=>{
     // res.send ('Hola mundos');
     res.sendFile ((__dirname + '/views/vender.html'));
});

app.get ('/ayuda', (req,res)=>{
    // res.send ('Hola mundos');
    res.sendFile ((__dirname + '/views/ayuda.html'));
});

app.get ('/registro', (req,res)=>{
    // res.send ('Hola mundos');
    res.sendFile ((__dirname + '/views/registro.html'));
});
 
app.get ('/ingresa', (req,res)=>{
     // res.send ('Hola mundos');
     res.sendFile ((__dirname + '/views/ingresa.html'));
});

app.get ('/mis_compras', (req,res)=>{
    // res.send ('Hola mundos');
    res.sendFile ((__dirname + '/views/mis_compras.html'));
});

app.use (express.static (path.join(__dirname, './public')));

app.listen (3003, () => {
    console.log ('Servidor corriendo');
    }
);
