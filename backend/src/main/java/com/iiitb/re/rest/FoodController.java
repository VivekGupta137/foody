package com.iiitb.re.rest;

import com.iiitb.re.entity.Recipes;
import com.iiitb.re.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/foods")
public class FoodController {
    @Autowired
    FoodService foodService;

    @GetMapping()
    public List<Recipes> getAllFoods() {
        return foodService.getAllRecipes();
    }

    @GetMapping("{id}")
    public Recipes getRecipeById(@PathVariable int id) {
        return foodService.getRecipeById(id);
    }

    @PostMapping()
    public int addRecipe(@RequestBody Recipes recipe) {
        return foodService.addFood(recipe);
    }

    @DeleteMapping("{id}")
    public void deleteRecipeById(@PathVariable int id) {
        foodService.deleteFoodById(id);
    }
}
