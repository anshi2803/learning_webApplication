package com.mindsprint.restapi.service;

import com.mindsprint.restapi.models.Category;
import com.mindsprint.restapi.repo.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepo repo;


    public Category addCategory(Category category) {
        return repo.save(category);
    }
    public List<Category> getAllCategories() {
        return repo.findAll();
    }
}
