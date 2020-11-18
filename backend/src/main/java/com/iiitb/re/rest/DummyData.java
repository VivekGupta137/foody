package com.iiitb.re.rest;

import com.iiitb.re.entity.Ingredients;
import com.iiitb.re.entity.Orders;
import com.iiitb.re.entity.Recipes;
import com.iiitb.re.entity.Users;
import com.iiitb.re.service.FoodService;
import com.iiitb.re.service.OrderService;
import com.iiitb.re.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

@RestController
@RequestMapping("/api/dummy")
public class DummyData {
    static Random rand;
    static int prefix;

    public DummyData() {
        rand = new Random();
    }

    @Autowired
    FoodService foodService;
    @Autowired
    UserService userService;
    @Autowired
    OrderService orderService;

    @GetMapping()
    public String addDummyAll() {
        dummyRecipes();
        dummyUsers();
        for (Users user : userService.getAllUsers()) {
            dummyOrders(user.getId());
        }
        return "success";
    }

    @GetMapping("recipes")
    public List<Recipes> dummyRecipes() {
        Recipes[] recipes = new Recipes[10];
        prefix = rand.nextInt(26);
        for (int i = 0; i < recipes.length; i++) {
            recipes[i] = new Recipes();
            recipes[i].setName(prefix + ":recipe_" + i);
            recipes[i].setDescription(prefix + ":recipe_" + 1 + " description");
            recipes[i].setImagepath("https://image.similarpng.com/very-thumbnail/2020/06/Logo-google-marketing-platform-icon-vector-PNG.png");

            Ingredients[] ingredients = getIngredients();
            for (Ingredients ingredient : ingredients) {
                ingredient.setRecipe(recipes[i]);
            }

            recipes[i].setIngredientsList(new ArrayList<>());
            recipes[i].getIngredientsList().addAll(Arrays.asList(ingredients));

            foodService.addFood(recipes[i]);
        }
        return Arrays.asList(recipes);
    }

    public Ingredients[] getIngredients() {
        int num_of_ingredients = rand.nextInt(10);
        Ingredients[] ingredients = new Ingredients[num_of_ingredients];
        for (int j = 0; j < num_of_ingredients; j++) {
            ingredients[j] = new Ingredients();
            ingredients[j].setName("ingredient:" + j);
            ingredients[j].setAmount(rand.nextInt(20));
        }
        return ingredients;
    }

    @GetMapping("users")
    public List<Users> dummyUsers() {
        Users[] users = new Users[5];
        for (int i = 0; i < users.length; i++) {
            users[i] = new Users();
            users[i].setUsername(prefix + ":user_" + i);
            users[i].setPassword(prefix + ":password_" + i);
            users[i].setRole("ROLE_USER");
            users[i].setOrdersList(new ArrayList<>());


            userService.addUser(users[i]);
        }
        return Arrays.asList(users);
    }

    @GetMapping("orders/{id}")
    public List<Orders> dummyOrders(@PathVariable int id) {
        Users user = userService.getUserById(id);
        if (user == null) return null;
        Orders[] orders = new Orders[5];
        for (int i = 0; i < orders.length; i++) {
            orders[i] = new Orders();
            orders[i].setDate(LocalDate.now());
            orders[i].setIngredientsList(new ArrayList<>());
            Ingredients[] ingredients = getIngredients();
            for (Ingredients ingredient : ingredients) {
                ingredient.setOrder(orders[i]);
            }
            orders[i].getIngredientsList().addAll(Arrays.asList(ingredients));
            orders[i].setUser(user);
            orderService.addNewOrder(orders[i]);
        }
        return Arrays.asList(orders);
    }

}
