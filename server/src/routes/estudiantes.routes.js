const {Router} = require('express')
const router = Router()

const estudiantesCtrl = require('../controllers/estudiantes.controller.js')


router.get('/', estudiantesCtrl.getEstudiantes)
router.post('/', estudiantesCtrl.createEstudiante)
router.get('/:id', estudiantesCtrl.getEstudiante)
router.put('/:id', estudiantesCtrl.editEstudiante)
router.delete('/:id', estudiantesCtrl.deleteEstudiante)


module.exports = router