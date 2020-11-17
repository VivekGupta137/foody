package com.iiitb.re.foody.service;

import com.iiitb.re.foody.dao.IngredientDAO;
import com.iiitb.re.foody.dao.OrderDAO;
import com.iiitb.re.foody.entity.Ingredients;
import com.iiitb.re.foody.entity.Orders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class OrderServiceImpl implements OrderService {
    @Autowired
    OrderDAO orderDao;
    @Autowired
    IngredientDAO ingredientDao;

    @Override
    public Orders getOrderById(int id) {
        if(!orderDao.findById(id).isPresent())
            return null;
        return orderDao.findById(id).get();
    }

    @Override
    public int addNewOrder(Orders order) {
        orderDao.save(order);
        for(Ingredients ingredient: order.getIngredientsList()){
            ingredient.setOrder(order);
            ingredientDao.save(ingredient);
        }
        return order.getId();
    }
}
