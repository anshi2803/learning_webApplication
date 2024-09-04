package com.mindsprint.restapi.repo;

import com.mindsprint.restapi.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepo extends JpaRepository<Product,Integer> {
}
