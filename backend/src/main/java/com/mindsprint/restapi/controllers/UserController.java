package com.mindsprint.restapi.controllers;

import com.mindsprint.restapi.models.User;
import com.mindsprint.restapi.repo.UserRepo;
import com.mindsprint.restapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserController {
    @Autowired
    UserService service;

    @PostMapping
    public ResponseEntity<User> addUser(@RequestBody User user){
        return new ResponseEntity<>(service.addUser(user), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<User>> getAll(@RequestBody User user){
        return ResponseEntity.ok(service.getAll());
    }

    @GetMapping("{id}")
    public ResponseEntity<Object> getUserById(@PathVariable int id){
        User found=service.getUserById(id);
        if(found!=null)
            return ResponseEntity.ok(found);
        return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Object> deleteById(@PathVariable int id){
        if(service.deleteUserById(id))
            return ResponseEntity.ok("User successfully deleted");
        return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
    }

    @PutMapping("{id}")
    public ResponseEntity<Object> UpdateById(@RequestBody User user, @PathVariable int id){
        User found=service.updateUserById(user,id);
        if(found!=null)
            return ResponseEntity.ok(found);
        return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
    }

}
