package com.example.ingredient.Controller;

import com.example.ingredient.Dtos.ItemDto;
import com.example.ingredient.Model.Item;
import com.example.ingredient.Service.ItemService;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/item")
@AllArgsConstructor
public class ItemController {

    ItemService itemService;

    @GetMapping("/all")
    public ResponseEntity<?> getItems(@RequestParam(required = false)String searchQuery,
                                      @RequestParam(required = false)Double priceMin ,
                                      @RequestParam(required = false) Double priceMax,
                                      int pageStart){
        return itemService.getAll(searchQuery,priceMin,priceMax,pageStart);
    }

    @GetMapping()
    public ResponseEntity<?> getItem(Long id){
        return itemService.get(id);
    }

    @PostMapping(consumes= MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> addItem(@RequestParam("file") MultipartFile image, ItemDto itemDto){
        return itemService.add(image,itemDto);
    }

    @PutMapping()
    public ResponseEntity<?> editItem(Item item){
        return itemService.edit(item);
    }

    @DeleteMapping()
    public ResponseEntity<?> deleteItem(Long id){
        return itemService.delete(id);
    }

}
