import express from 'express'
import multer from 'multer'
import path from 'path'


const subirArchivo = multer({
    storage: multer.diskStorage({
        destination: path.resolve('./archivos'),
        filename:(req, file, cb)=>{
            console.log(file)
            cb(null, file.filename + path.extname(file.originalname))
        }
    })
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

