const students = require('../models/studentModel');


// GET
const getStudents = (req, res) => {
    res.json(students);
};


// POST
const addStudent = (req, res) => {

    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age,
        course: req.body.course
    };

    students.push(newStudent);

    res.json({
        message: "Student added successfully",
        student: newStudent
    });
};


// PUT
const updateStudent = (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = req.body.name || student.name;
    student.age = req.body.age || student.age;
    student.course = req.body.course || student.course;

    res.json({
        message: "Student updated successfully",
        student
    });
};


// DELETE
const deleteStudent = (req, res) => {

    const id = parseInt(req.params.id);

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students.splice(index, 1);

    res.json({
        message: "Student deleted successfully"
    });
};


module.exports = {
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent
};