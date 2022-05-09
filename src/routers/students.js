const router = require('express-promise-router')();
const studentController = require('../controllers/students')

router.get('/', (req, res) => {
    res.status(200).send({
        message: "Dockerzão tá OOON!",
    });
});

router.get('/students', studentController.listAllStudents)
router.get('/student/:id', studentController.findStudentById)
router.post('/student', studentController.createStudent)
router.patch('/student/:id', studentController.updateStudentById)
router.delete('/student/:id', studentController.deleteStudentById)

module.exports = router;
