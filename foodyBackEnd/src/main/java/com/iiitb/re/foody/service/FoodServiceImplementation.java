package com.iiitb.re.foody.service;

import com.iiitb.re.foody.dao.FoodDAO;
import com.iiitb.re.foody.dao.IngredientDAO;
import com.iiitb.re.foody.entity.Ingredients;
import com.iiitb.re.foody.entity.Recipes;
import com.iiitb.re.foody.rest.DummyData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import java.util.Arrays;
import java.util.List;

@Repository
public class FoodServiceImplementation implements  FoodService{

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
        if(!foodDao.findById(id).isPresent())
            return null;
        return foodDao.findById(id).get();
    }

    @Override
    public void deleteFoodById(int id) {
        if(!foodDao.findById(id).isPresent())
            return;
        Recipes theFood = foodDao.findById(id).get();
        // delete all the associated ingredients
        for(Ingredients ingredient: theFood.getIngredientsList()){
            ingredientDao.delete(ingredient);
        }
        foodDao.delete(theFood);
    }

    @Override
    public int addFood(Recipes theFood) {
        foodDao.save(theFood);
        for(Ingredients ingredient: theFood.getIngredientsList()){
            ingredient.setRecipe(theFood);
            ingredientDao.save(ingredient);
        }
        return theFood.getId();
    }

}
