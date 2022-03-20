const estudianteCtrl = {}

const Estudiante = require('../models/Estudiante')

estudianteCtrl.getEstudiantes = async (req, res) => {
    const estudiantes = await Estudiante.find()

    res.json(estudiantes)
}

estudianteCtrl.createEstudiante = async (req, res) => {
    const newEstudiante = new Estudiante(req.body)
    await newEstudiante.save()

    res.send({message: 'Estudiante Creado}'})
}

estudianteCtrl.getEstudiante = async (req, res) => {

    console.log(req.params)
    const estudiante = await Estudiante.findOne({_id: req.params.id})
   
    res.send(estudiante)

}

estudianteCtrl.editEstudiante = async (req, res) => {

    await Estudiante.findByIdAndUpdate(req.params.id, req.body)

    res.json({status: 'Estudiante Actualizado'})
}

estudianteCtrl.deleteEstudiante = async (req, res) => {

    await Estudiante.findByIdAndDelete(req.params.id)
    res.json({status: 'Estudiante eliminado'})
}

module.exports = estudianteCtrl;