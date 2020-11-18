package com.iiitb.re.dao;

import com.iiitb.re.entity.Ingredients;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IngredientDAO extends JpaRepository<Ingredients, Integer> {
}
