package com.iiitb.re.entity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class Recipes {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;
    String name;
    String description;
    String imagepath;

    @OneToMany(mappedBy = "recipe")
    List<Ingredients> ingredientsList;

    public Recipes() {
        this.ingredientsList = new ArrayList<>();
    }

    public Recipes(String name, String description, String imagepath) {
        this.name = name;
        this.description = description;
        this.imagepath = imagepath;
        this.ingredientsList = new ArrayList<>();
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImagepath() {
        return imagepath;
    }

    public void setImagepath(String imagepath) {
        this.imagepath = imagepath;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List<Ingredients> getIngredientsList() {
        return ingredientsList;
    }

    public void setIngredientsList(List<Ingredients> ingredientsList) {
        this.ingredientsList = ingredientsList;
    }
}
