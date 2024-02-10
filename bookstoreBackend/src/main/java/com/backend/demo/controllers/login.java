package com.backend.demo.controllers;

import com.backend.demo.entity.User;
import com.backend.demo.repo.UserProcess;
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
import java.util.Optional;

@RestController
public class login {
    private final UserProcess userProcess;

    public login(UserProcess userProcess) {
        this.userProcess = userProcess;
    }

    @PostMapping("/login")
    @CrossOrigin(origins = "*")
    public String checkLoginInfo(@RequestBody User user)  {
        String userName=user.getUserName();
        String password= user.getPassword();
        Optional<User> users=userProcess.findUserByUserName(userName);
        if(users.isEmpty()){
            return "error";
        }
        if(!Objects.equals(users.get().getPassword(), password)){
            return "error";
        }
        return userName;
    }
}
