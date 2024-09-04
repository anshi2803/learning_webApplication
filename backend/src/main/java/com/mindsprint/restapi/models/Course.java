package com.mindsprint.restapi.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Data
@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    @Column(columnDefinition = "TEXT")
    private String description;
    @Column(columnDefinition = "TEXT")
    private String imgUrl;
    private double price;
    private String instructor;
    private double duration;

    @ManyToMany(mappedBy = "courses")
    @JsonIgnore
    private Set<Student> students= new HashSet<>();
}
