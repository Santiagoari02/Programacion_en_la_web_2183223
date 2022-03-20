const { type } = require('express/lib/response')
const {Schema, model} = require('mongoose')

const estudianteSchema = new Schema({
    name: {type: String, required: true},
    semester: {type: Number, required: true},
    career: {type: String, required: true},
},{
    timestamps: true, 
    versionKey: false
})

module.exports = model('Estudiante', estudianteSchema);
