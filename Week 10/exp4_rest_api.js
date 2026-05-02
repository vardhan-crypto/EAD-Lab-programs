// Experiment 4: REST API for Student Data Management
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let students = [
    { id: 1, name: "Vikranth Jakkoju", rollNumber: "160124737106", department: "IT", marks: 88 },
    { id: 2, name: "Raja", rollNumber: "160124737108", department: "IT", marks: 92 },
    { id: 3, name: "Manoj", rollNumber: "160124737109", department: "IT", marks: 85 }
];

let nextId = 4;

app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
    next();
});

app.get('/students', (req, res) => {
    console.log(' Fetching all students');
    res.json({
        success: true,
        count: students.length,
        students: students
    });
});

app.get('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);
    
    if (!student) {
        return res.status(404).json({ success: false, message: 'Student not found' });
    }
    
    res.json({ success: true, student });
});

app.post('/students', (req, res) => {
    const { name, rollNumber, department, marks } = req.body;
    
    if (!name || !rollNumber || !department || marks === undefined) {
        return res.status(400).json({ 
            success: false, 
            message: 'Please provide name, rollNumber, department, and marks' 
        });
    }
    
    const newStudent = {
        id: nextId++,
        name,
        rollNumber,
        department,
        marks
    };
    
    students.push(newStudent);
    console.log(` Added new student: ${name}`);
    
    res.status(201).json({
        success: true,
        message: 'Student added successfully',
        student: newStudent
    });
});

app.put('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, rollNumber, department, marks } = req.body;
    
    const studentIndex = students.findIndex(s => s.id === id);
    
    if (studentIndex === -1) {
        return res.status(404).json({ success: false, message: 'Student not found' });
    }
    
    students[studentIndex] = {
        ...students[studentIndex],
        name: name || students[studentIndex].name,
        rollNumber: rollNumber || students[studentIndex].rollNumber,
        department: department || students[studentIndex].department,
        marks: marks !== undefined ? marks : students[studentIndex].marks
    };
    
    console.log(` Updated student with id: ${id}`);
    
    res.json({
        success: true,
        message: 'Student updated successfully',
        student: students[studentIndex]
    });
});

app.delete('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const studentIndex = students.findIndex(s => s.id === id);
    
    if (studentIndex === -1) {
        return res.status(404).json({ success: false, message: 'Student not found' });
    }
    
    const deletedStudent = students[studentIndex];
    students = students.filter(s => s.id !== id);
    
    console.log(` Deleted student: ${deletedStudent.name}`);
    
    res.json({
        success: true,
        message: 'Student deleted successfully',
        deletedStudent: deletedStudent
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});