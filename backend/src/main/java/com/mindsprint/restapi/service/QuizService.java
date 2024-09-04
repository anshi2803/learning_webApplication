package com.mindsprint.restapi.service;

import com.mindsprint.restapi.models.Quiz;
import com.mindsprint.restapi.repo.GradeRepo;
import com.mindsprint.restapi.repo.QuizRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class QuizService {

    @Autowired
    private QuizRepo quizRepo;

    @Autowired
    private GradeRepo gradeRepo;

    public List<Quiz> getAllQuiz(){
        return quizRepo.findAll();
    }
    public Quiz getQuizById(Long id){
        return quizRepo.findById(id).orElse(null);
    }
    public Quiz createQuiz(Quiz quiz){
        return quizRepo.save(quiz);
    }


//    public Map<String, Object> gradeQuiz(Long quizId, List<String> answers){
//        Quiz quiz= getQuizById(quizId);
//        return
//    }
}
