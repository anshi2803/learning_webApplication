package com.mindsprint.restapi.repo;

import com.mindsprint.restapi.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepo extends JpaRepository<Category, Integer> {
}
