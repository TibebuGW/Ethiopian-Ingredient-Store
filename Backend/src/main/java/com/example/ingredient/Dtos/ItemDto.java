package com.example.ingredient.Dtos;


import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;

@NoArgsConstructor
@Data
public class ItemDto {
    @NotBlank
    private String name;

    @NotBlank
    private String description;

    @NotBlank
    private Double price;

}
