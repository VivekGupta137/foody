package com.iiitb.re.foody.dao;


import com.iiitb.re.foody.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDAO extends JpaRepository<Users, Integer> {
    Users findByUsername(String username);
}
