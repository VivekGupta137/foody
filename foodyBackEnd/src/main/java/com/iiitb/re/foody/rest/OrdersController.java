package com.iiitb.re.foody.rest;

import com.iiitb.re.foody.entity.Orders;
import com.iiitb.re.foody.service.OrderService;
import com.iiitb.re.foody.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/orders")
public class OrdersController {
    @Autowired
    UserService userService;
    @Autowired
    OrderService orderService;

    @GetMapping("") // userid
    public List<Orders> getAllOrders(@RequestHeader Map<String, String> map){
        Integer userId = Integer.parseInt(map.get("userid"));
        return userService.getUserById(userId).getOrdersList();
    }

    @GetMapping("{id}")
    public Orders getOrderById(@PathVariable int id){
        return orderService.getOrderById(id);
    }

    @PostMapping("")
    public int addNewOrder(@RequestHeader Map<String, String> map,@RequestBody Orders order) {
        Integer userId = Integer.parseInt(map.get("userid"));
        order.setUser(userService.getUserById(userId));
        return orderService.addNewOrder(order);
    }
}
