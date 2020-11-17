package com.iiitb.re.foody.service;

import com.iiitb.re.foody.entity.Orders;

public interface OrderService {
    public Orders getOrderById(int id);
    public int addNewOrder(Orders order);
}
