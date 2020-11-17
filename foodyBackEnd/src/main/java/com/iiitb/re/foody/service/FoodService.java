package com.iiitb.re.foody.service;

import com.iiitb.re.foody.entity.Recipes;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface FoodService {
    public List<Recipes> getAllRecipes();
    public Recipes getRecipeById(int id);
    public void deleteFoodById(int id);
    public int addFood(Recipes theFood);
}
