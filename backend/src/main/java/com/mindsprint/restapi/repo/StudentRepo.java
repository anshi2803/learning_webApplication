package com.mindsprint.restapi.repo;

import com.mindsprint.restapi.models.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepo extends JpaRepository<Student, Long> {
    public Student findByEmail(String email);
}
