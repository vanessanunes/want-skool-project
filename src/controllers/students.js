const db = require('../config/database');

exports.createStudent = async (req, res) => {
    const { name, cpf, birthdate, payment_method } = req.body;
    let formated_cpf = cpf.replace(/\.|-*/g, '')
    try{
        const { rows } = await db.query(
            'INSERT INTO student (name, cpf, birthdate, payment_method) VALUES ($1, $2, $3, $4) RETURNING student_id',
            [name, formated_cpf, birthdate, payment_method],
        );
        res.status(201).send({
            id: rows[0]
        });
        
    } catch(error){
        res.status(500).send({
            erro: error
        });
    }  
};

exports.listAllStudents = async (req, res) => {
    console.log('estamos em listar estudantes..')
    try{
        const response = await db.query('SELECT * FROM student ORDER BY student_id ASC');
        console.log(response)
        res.status(200).send(response.rows);
    } catch(error){
        console.log(error);
        res.status(500).send({
            erro: error
        });
    }  
};

exports.findStudentById = async (req, res) => {
    try{
        const studentId = parseInt(req.params.id);
        const response = await db.query('SELECT * FROM student WHERE student_id = $1', [studentId]);
        res.status(200).send(response.rows);
        
    } catch(error){
        console.log(error)
        res.status(500).send({
            erro: error
        });
    }  
};

exports.updateStudentById = async (req, res) => {
    try{
        const studentId = parseInt(req.params.id);
        const { name, cpf, birthdate, payment_method } = req.body;
        const response = await db.query('UPDATE student SET name = $1, cpf = $2, birthdate = $3, payment_method = $4 WHERE student_id = $5',
        [name, cpf, birthdate, payment_method, studentId]);
        console.log(response);
        res.status(200).send(response.rows);
        
    } catch(error){
        console.log(error);
        res.status(500).send({
            erro: error
        });
    }  
};


exports.deleteStudentById = async (req, res) => {
    try{
        const studentId = parseInt(req.params.id);
        const response = await db.query('DELETE from student WHERE student_id = $1 RETURNING student_id', [studentId]);
        res.status(200).send(response.rows);
        
    } catch(error){
        res.status(500).send({
            erro: error
        });
    }  
};