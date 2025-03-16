package com.pdea.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pdea.entity.Student;
import com.pdea.repository.StudentRepository;

@Service
public class StudentService {

	@Autowired
	private StudentRepository repository;

	public Student addStudent(Student student) {
		
		return repository.save(student);
	}

	public List<Student> getAllStudents() {	
		return repository.findAll();
	}

	public Optional<Student> getStudentById(int id) {
		// TODO Auto-generated method stub
		return repository.findById(id);
	}

	// Delete student by ID
    public void deleteStudentById(int id) {
        repository.deleteById(id);
    }

    public Student updateStudentById(int id, Student updatedStudent) {
        return repository.findById(id)
                .map(student -> {
                    student.setName(updatedStudent.getName());
                    student.setEmail(updatedStudent.getEmail());
                    return repository.save(student); // Use the correct variable name
                })
                .orElseThrow(() -> new RuntimeException("Student with ID " + id + " not found"));
    }
	
	
}
