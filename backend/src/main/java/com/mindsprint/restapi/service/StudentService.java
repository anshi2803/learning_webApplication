package com.mindsprint.restapi.service;

import com.mindsprint.restapi.models.Course;
import com.mindsprint.restapi.models.Student;
import com.mindsprint.restapi.repo.CourseRepo;
import com.mindsprint.restapi.repo.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class StudentService {
    @Autowired
    private CourseRepo courseRepo;
    @Autowired
    private StudentRepo repo;
    public Student addStudent(Student student){
        return repo.save(student);
    }
    public List<Student> getAllStudents(){
        return repo.findAll();
    }

    public Student updateCourseById(Long cid, Long sid){
        Student student= repo.findById(sid).orElse(null);
        if(student!= null){
            Course course= courseRepo.findById(cid).orElse(null);
            Set<Course> set= student.getCourses();
            set.add(course);
            student.setCourses(set);
            return repo.save(student);
        }
        return null;
    }

    public Student getStudentById(Long id){
        return repo.findById(id).orElse(null);
    }

    public  boolean deleteStudentById(long id){
        if (getStudentById(id) != null) {
            repo.deleteById(id);
            return true;
        }
        return false;
    }

    public Student login(Student student){
        Student existing= repo.findByEmail(student.getEmail());
        if(existing !=null){
            if(existing.getPassword().equals(student.getPassword())) {
                System.out.println("Password Matched");
                return existing;
            }
        }
        return null;
    }

    public void makeAdmin(Long id){
        Student found = repo.findById(id).orElse(null);
        if(found!=null){
            found.setRole(true);
            repo.save(found);
        }
    }
}
