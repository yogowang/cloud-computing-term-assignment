package com.backend.demo.controllers;

import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.io.File;
import java.util.HashMap;
import java.util.Map;
@RestController
public class login {
    @PostMapping("/login")
    public Map<String, Object> calculate(@RequestBody Map<String,Object> jsonData)  {
        Map<String,Object> ans = new HashMap<>();
        if(jsonData.get("file")==null){
            ans.put("file",null);
            ans.put("error","Invalid JSON input.");
            return ans;
        }
        String fileName=jsonData.get("file").toString();
        String item=jsonData.get("product").toString();
        File file=new File("/tmp/data/"+fileName);
        if(!file.exists()){
            ans.put("file",fileName);
            ans.put("error","File not found.");
            return ans;
        }
        //source:https://www.baeldung.com/rest-template
        /*
         * In the original code at 5.1, it uses a httpEntity to wrap the foo object to send to another
         * controller. In my code I substituted  the foo with the map data type to pass this to another
         * container.
         * */
        RestTemplate restTemplate = new RestTemplate();
        HttpEntity<Map<String, Object>> request = new HttpEntity<>(jsonData);
        ans = restTemplate.postForObject("http://container2:7000/process", request, Map.class);
        return ans;
    }
}
