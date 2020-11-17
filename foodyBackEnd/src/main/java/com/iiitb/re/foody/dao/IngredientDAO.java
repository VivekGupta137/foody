package com.iiitb.re.foody.dao;

import com.iiitb.re.foody.entity.Ingredients;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IngredientDAO extends JpaRepository<Ingredients, Integer> {
}
