package com.example.ingredient.Repository;

import com.example.ingredient.Model.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository  extends JpaRepository<Item, Long> {
}
