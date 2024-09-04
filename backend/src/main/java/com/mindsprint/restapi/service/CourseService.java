package com.mindsprint.restapi.service;

import com.mindsprint.restapi.models.Course;
import com.mindsprint.restapi.models.User;
import com.mindsprint.restapi.repo.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {
    @Autowired
    private CourseRepo repo;

    public Course addCourse(Course course){
        return repo.save(course);
    }
    public List<Course> getAllCourses(){
        return repo.findAll();
    }
    public Course getCourseById(long id){
        return  repo.findById(id).orElse(null);
    }
    public  boolean deleteCourseById(long id){
        if (getCourseById(id) != null) {
            repo.deleteById(id);
            return true;
        }
        return false;
    }
    public Course updateCourseById(Course course, long id){
        Course oldCourse= getCourseById(id);
        if(oldCourse!=null){
            oldCourse.setTitle(course.getTitle());
            oldCourse.setDescription(course.getDescription());
            oldCourse.setPrice(course.getPrice());
            oldCourse.setDuration(course.getDuration());
            oldCourse.setInstructor(course.getInstructor());
            oldCourse.setImgUrl(course.getImgUrl());
            return repo.save(oldCourse);
        }
        return null;
    }
}
