package com.iiitb.re.dao;


import com.iiitb.re.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDAO extends JpaRepository<Users, Integer> {
    Users findByUsername(String username);
}
