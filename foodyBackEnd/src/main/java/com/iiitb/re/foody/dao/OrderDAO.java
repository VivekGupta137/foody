package com.iiitb.re.foody.dao;

import com.iiitb.re.foody.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderDAO extends JpaRepository<Orders, Integer> {

}
