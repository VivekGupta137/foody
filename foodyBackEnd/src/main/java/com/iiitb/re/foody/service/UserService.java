package com.iiitb.re.foody.service;

import com.iiitb.re.foody.entity.Orders;
import com.iiitb.re.foody.entity.Users;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    public boolean isAuthenticated(Users user);
    public Users getUserById(int id);
    public List<Users> getAllUsers();
    public List<Orders> getAllOrdersById(int id);
    public Users loadUserByUserName(String username);
    public int addUser(Users user);
}
