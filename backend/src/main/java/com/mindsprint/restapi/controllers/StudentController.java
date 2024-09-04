package com.mindsprint.restapi.controllers;

import com.mindsprint.restapi.models.Course;
import com.mindsprint.restapi.models.Product;
import com.mindsprint.restapi.models.Student;
import com.mindsprint.restapi.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService service;

    @PostMapping
    public ResponseEntity<Student> addStudent(@RequestBody Student student){
        return new ResponseEntity<>(service.addStudent(student), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Student>> getAllStudents(){
        return ResponseEntity.ok(service.getAllStudents());
    }

    @GetMapping("{id}")
    public ResponseEntity<Object> getById(@PathVariable long id){
        Student found=service.getStudentById(id);
        if(found!=null)
            return ResponseEntity.ok(found);
        return new ResponseEntity<>("Student not found", HttpStatus.NOT_FOUND);
    }

    @GetMapping("/add/{sid}/courses/{cid}")
    public ResponseEntity<Student> registerCourse(@PathVariable long sid, @PathVariable long cid){
        return new ResponseEntity<>(service.updateCourseById(cid,sid), HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Object> deleteById(@PathVariable int id){
        if(service.deleteStudentById(id))
            return ResponseEntity.ok("Student successfully deleted");
        return new ResponseEntity<>("Student not found", HttpStatus.NOT_FOUND);
    }

    @PostMapping("/login")
    public ResponseEntity<Student> login(@RequestBody Student student){
        Student student1=service.login(student);
        if(student1!=null)
            return ResponseEntity.ok(student1);
        else
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @GetMapping("/makeadmin/{id}")
    public ResponseEntity<String> makeAdmin(@PathVariable long id){
        service.makeAdmin(id);
        return new ResponseEntity<>("Role Updated", HttpStatus.OK);
    }

}
