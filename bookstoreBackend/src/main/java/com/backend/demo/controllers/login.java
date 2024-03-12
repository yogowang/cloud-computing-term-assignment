package com.backend.demo.controllers;

import com.backend.demo.entity.LoginInfo;
import com.backend.demo.entity.User;
import com.backend.demo.repo.UserProcess;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
    public String checkLoginInfo(@RequestBody LoginInfo loginInfo)  {
        String userName=loginInfo.getUserName();
        String password= loginInfo.getPassword();
        Optional<User> user=userProcess.findUserByUserName(userName);
        if(user.isEmpty()){
            return "error";
        }
        if(!Objects.equals(user.get().getPassword(), password)){
            return "error";
        }
        return userName;
    }
    @PostMapping("/register")
    @CrossOrigin(origins = "*")
    public String register(@RequestBody User user){
        try {
            userProcess.save(user);
            return user.getUserName();
        }catch (Exception e){
            e.printStackTrace();
            return "error";
        }

    }
}
