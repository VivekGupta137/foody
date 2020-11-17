package com.iiitb.re.foody.dao;

import com.iiitb.re.foody.entity.Recipes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodDAO extends JpaRepository<Recipes, Integer> {
}
