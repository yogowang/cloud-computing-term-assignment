package com.backend.demo.controllers;

import com.backend.demo.entity.User;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.io.File;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@RestController
public class login {
    @PostMapping("/login")
    @CrossOrigin(origins = "*")
    public String checkLoginInfo(@RequestBody User user)  {
        String userName=user.getUserName();
        if(!Objects.equals(userName, "abc")){
            return "error";
        }
        return userName;
    }
}
