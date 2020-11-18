package com.iiitb.re.service;

import com.iiitb.re.dao.FoodDAO;
import com.iiitb.re.dao.IngredientDAO;
import com.iiitb.re.entity.Ingredients;
import com.iiitb.re.entity.Recipes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class FoodServiceImplementation implements FoodService {

    @Autowired
    FoodDAO foodDao;
    @Autowired
    IngredientDAO ingredientDao;


    @Override
    public List<Recipes> getAllRecipes() {
        return foodDao.findAll();
    }

    @Override
    public Recipes getRecipeById(int id) {
        if (!foodDao.findById(id).isPresent())
            return null;
        return foodDao.findById(id).get();
    }

    @Override
    public void deleteFoodById(int id) {
        if (!foodDao.findById(id).isPresent())
            return;
        Recipes theFood = foodDao.findById(id).get();
        // delete all the associated ingredients
        for (Ingredients ingredient : theFood.getIngredientsList()) {
            ingredientDao.delete(ingredient);
        }
        foodDao.delete(theFood);
    }

    @Override
    public int addFood(Recipes theFood) {
        foodDao.save(theFood);
        for (Ingredients ingredient : theFood.getIngredientsList()) {
            ingredient.setRecipe(theFood);
            ingredientDao.save(ingredient);
        }
        return theFood.getId();
    }

}
