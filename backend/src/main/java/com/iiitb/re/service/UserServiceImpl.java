package com.iiitb.re.service;

import com.iiitb.re.dao.UserDAO;
import com.iiitb.re.entity.Orders;
import com.iiitb.re.entity.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserServiceImpl implements UserService {

    @Autowired
    UserDAO userDao;

    @Override
    public boolean isAuthenticated(Users user) {
        return true;
    }

    @Override
    public Users getUserById(int id) {
        if (!userDao.findById(id).isPresent())
            return null;
        return userDao.findById(id).get();
    }

    @Override
    public List<Users> getAllUsers() {
        return userDao.findAll();
    }

    @Override
    public List<Orders> getAllOrdersById(int id) {
        return getUserById(id).getOrdersList();
    }

    @Override
    public Users loadUserByUserName(String username) {
        return userDao.findByUsername(username);
    }

    @Override
    public int addUser(Users user) {
        userDao.save(user);
        return user.getId();
    }
}
