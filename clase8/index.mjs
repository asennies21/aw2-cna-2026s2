import express from 'express'

const PUERTO = 3000

const app = express()

// ---- Configurar las rutas
app.get('/', (req, res)=>{
    // res.end('Hola express')
     res.send('<h1>Hola con send</h1>')
    //res.send({mensaje: 'Hola'})
})












app.listen(PUERTO, ()=>{
    console.log(`Servidor express corriendo en el puerto ${PUERTO}`)
})
