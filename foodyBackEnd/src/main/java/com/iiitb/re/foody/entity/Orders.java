package com.iiitb.re.foody.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;
    LocalDate date;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="userid")
    Users user;

    @OneToMany(mappedBy = "order")
    List<Ingredients> ingredientsList;

    public Orders() {
        this.ingredientsList = new ArrayList<>();
    }

    public Orders(LocalDate date, Users user) {
        this.date = date;
        this.user = user;
        this.ingredientsList = new ArrayList<>();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public List<Ingredients> getIngredientsList() {
        return ingredientsList;
    }

    public void setIngredientsList(List<Ingredients> ingredientsList) {
        this.ingredientsList.addAll(ingredientsList);
    }

}
