package com.pdea.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pdea.entity.Student;
import com.pdea.services.StudentService;

@RestController
//@CrossOrigin(origins = "http://localhost:5173")
@CrossOrigin(origins = "http://javadev1.s3-website.us-east-2.amazonaws.com/")
@RequestMapping("/students")
public class StudentController {

	@Autowired 
	private StudentService service;
	
	
	@GetMapping
	public List<Student>getAll(){
		return service.getAllStudents();
	}
	 @GetMapping("/{id}")
	    public ResponseEntity<Student> getStudentById(@PathVariable int id) {
	        Optional<Student> student = service.getStudentById(id);
	        return student.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
	    }
	
	@PostMapping
	public Student addStudent(@RequestBody Student student){
		return service.addStudent(student);
	}
	@DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStudentById(@PathVariable int id) {
        Optional<Student> student = service.getStudentById(id);
        if (student.isPresent()) {
            service.deleteStudentById(id);
            return ResponseEntity.noContent().build(); // 204 No Content
        } else {
            return ResponseEntity.notFound().build(); // 404 Not Found
        }
    }
	@PutMapping("/{id}")
    public ResponseEntity<Student> updateStudentById(@PathVariable int id, @RequestBody Student updatedStudent) {
        try {
            Student student = service.updateStudentById(id, updatedStudent);
            return ResponseEntity.ok(student); // 200 OK
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build(); // 404 Not Found
        }
    }
}
