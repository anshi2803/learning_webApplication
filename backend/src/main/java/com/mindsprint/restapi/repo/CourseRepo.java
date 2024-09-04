package com.mindsprint.restapi.repo;

import com.mindsprint.restapi.models.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CourseRepo extends JpaRepository<Course, Long> {
    public List<Course> findByTitle(String title);
}
