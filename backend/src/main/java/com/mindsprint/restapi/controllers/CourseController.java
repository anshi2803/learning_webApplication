package com.mindsprint.restapi.controllers;

import com.mindsprint.restapi.models.Course;
import com.mindsprint.restapi.models.Student;
import com.mindsprint.restapi.models.User;
import com.mindsprint.restapi.service.CourseService;
import com.mindsprint.restapi.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
@CrossOrigin
public class CourseController {
    @Autowired
    private CourseService service;

    @PostMapping
    public ResponseEntity<Course> addCourse(@RequestBody Course course){
        return new ResponseEntity<>(service.addCourse(course), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Course>> getAllCourses(){
        return ResponseEntity.ok(service.getAllCourses());
    }
    @GetMapping("{id}")
    public ResponseEntity<Object> getById(@PathVariable long id){
        Course found=service.getCourseById(id);
        if(found!=null)
            return ResponseEntity.ok(found);
        return new ResponseEntity<>("Course not found", HttpStatus.NOT_FOUND);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<Object> deleteById(@PathVariable long id){
        if(service.deleteCourseById(id))
            return ResponseEntity.ok("Course successfully deleted");
        return new ResponseEntity<>("Course not found", HttpStatus.NOT_FOUND);
    }

    @PutMapping("{id}")
    public ResponseEntity<Object> UpdateById(@RequestBody Course course, @PathVariable long id){
        Course found=service.updateCourseById(course,id);
        if(found!=null)
            return ResponseEntity.ok(found);
        return new ResponseEntity<>("Course not found", HttpStatus.NOT_FOUND);
    }
}
