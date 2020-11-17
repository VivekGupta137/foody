package com.iiitb.re.foody.rest;

import com.iiitb.re.foody.dao.UserDAO;
import com.iiitb.re.foody.dto.AuthDTO;
import com.iiitb.re.foody.dto.UserID;
import com.iiitb.re.foody.entity.Users;
import com.iiitb.re.foody.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    UserService userService;

    @GetMapping("users")
    public List<Users> getAllUsers(){
        return userService.getAllUsers();
    }

    @PostMapping("login")
    public Map<String,String> login(@RequestBody Users user){
        Map<String, String> map = new HashMap<>();
        Users theUser = userService.loadUserByUserName(user.getUsername());
        if(theUser != null && theUser.getPassword().equals(user.getPassword())) {
            map.put("isAuthenticated", "true");
            map.put("userid", Integer.toString(theUser.getId()));
        }
        else map.put("isAuthenticated", "false");
        return map;
    }
}
