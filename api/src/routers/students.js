const router = require('express-promise-router')();
const studentController = require('../controllers/students')

router.post('/student', studentController.createStudent)
router.get('/students', studentController.listAllStudents)
router.get('/student/:id', studentController.findStudentById)
router.patch('/student/:id', studentController.updateStudentById)
router.delete('/student/:id', studentController.deleteStudentById)

module.exports = router;
