package com.example.ingredient;

import com.cloudinary.Cloudinary;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.HashMap;
import java.util.Map;

@SpringBootApplication
public class IngredientStoreApplication {


    @Value("${ingredient.app.cloudName}")
    private String cloudName;

    @Value("${ingredient.app.apiKey}")
    private String apiKey;

    @Value("${ingredient.app.apiSecret}")
    private String apiSecret;

    public static void main(String[] args) {
        SpringApplication.run(IngredientStoreApplication.class, args);
    }


    @Bean
    public Cloudinary cloudinaryConfig() {
        Cloudinary cloudinary = null;
        Map config = new HashMap();
        config.put("cloud_name", cloudName);
        config.put("api_key", apiKey);
        config.put("api_secret", apiSecret);
        cloudinary = new Cloudinary(config);
        return cloudinary;
    }
}
