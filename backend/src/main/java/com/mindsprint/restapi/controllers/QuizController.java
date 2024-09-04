package com.mindsprint.restapi.controllers;


import com.mindsprint.restapi.models.Grade;
import com.mindsprint.restapi.models.Quiz;
import com.mindsprint.restapi.models.Student;
import com.mindsprint.restapi.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class QuizController {

    @Autowired
    private QuizService service;

    @GetMapping("/quiz")
    public List<Quiz> getAllQuiz(){
        return service.getAllQuiz();
    }

    @GetMapping("/quiz/{id}")
    public Quiz getQuizById(@PathVariable Long id){
        return service.getQuizById(id);
    }

    @PostMapping("/quiz")
    public ResponseEntity<Quiz> createQuiz(@RequestBody Quiz quiz){
        Quiz createdQuiz = service.createQuiz(quiz);
        return ResponseEntity.status(201).body(createdQuiz);
    }

//    @PostMapping("/quiz/{id}/submit")
//    public ResponseEntity<Map<String, Object>> submitQuiz(@PathVariable Long id,
//                                                          @RequestBody Map<String, List<String>> answers){
//        Map<String, Object> result= service.gradeQuiz(id, answers.get("answers"));
//        return ResponseEntity.ok(result);
//    }

//    @GetMapping("/grades")
//    public Map<String, Object> getGrades(@PathVariable Long quizId, @RequestBody List<String> answers){
//        return service.gradeQuiz(quizId, answers);
//    }
}
