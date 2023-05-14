package com.example.ingredient.Model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(
        name = "orders"
)
@Data
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @OneToMany
    private List<SingleOrder> Items;

    @NotBlank
    private String deliveryStreet;

    @NotBlank
    @ManyToOne
    private Address address;

    @NotBlank
    @ManyToOne
    private User orderedBy;

    @NotBlank
    private Date orderedAt;

    private Date deliveredAt;
}
