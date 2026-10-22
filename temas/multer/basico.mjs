import express from 'express'
import multer from 'multer'
import path from 'path'


const subirArchivo = multer({
    dest: path.resolve('./archivos')
}).single('archivo')

const app = express()
app.listen(3000)

app.use(express.static(path.resolve('./publico')))
app.post('/subir', (req, res) => {
    subirArchivo(req, res,(error)=>{
        if(error){
            res.status(500).send('Error al subir el archivo')
        }
        console.log(req.body, req.file)
        res.send('Archivo subido correctamente')
    })
})

