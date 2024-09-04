package com.mindsprint.restapi.repo;

import com.mindsprint.restapi.models.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizRepo extends JpaRepository<Quiz, Long> {
}
