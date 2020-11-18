package com.iiitb.re.dao;

import com.iiitb.re.entity.Recipes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodDAO extends JpaRepository<Recipes, Integer> {
}
