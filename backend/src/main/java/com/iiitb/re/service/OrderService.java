package com.iiitb.re.service;

import com.iiitb.re.entity.Orders;

public interface OrderService {
    public Orders getOrderById(int id);

    public int addNewOrder(Orders order);
}
