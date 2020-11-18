package com.iiitb.re.dao;

import com.iiitb.re.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderDAO extends JpaRepository<Orders, Integer> {

}
