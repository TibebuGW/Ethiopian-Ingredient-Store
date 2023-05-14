package com.example.ingredient.Service;

import com.example.ingredient.Dtos.ItemDto;
import com.example.ingredient.Model.Item;
import com.example.ingredient.Repository.ItemRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ItemService {

    private final ItemRepository itemRepository;
    private final CloudinaryService cloudinaryService;

    public ResponseEntity<?> getAll(){
        return ResponseEntity.ok(itemRepository.findAll());
    }

    public ResponseEntity<?> get(Long id){
        Optional<Item> item = itemRepository.findById(id);
        if(item.isPresent()){
            return ResponseEntity.ok(item.get());
        }else{
            return new ResponseEntity<>( "Not Found",HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<?> add(MultipartFile image,ItemDto itemDto){
        try{
            String imagePath = cloudinaryService.uploadFile(image);
            Item newItem = new Item();
            newItem.setDescription(itemDto.getDescription());
            newItem.setImage(imagePath);
            newItem.setPrice(itemDto.getPrice());
            newItem.setName(itemDto.getName());
            Item savedItem = itemRepository.save(newItem);
            return ResponseEntity.ok(savedItem);
        }catch (Exception exception){
            return new ResponseEntity<>( "Unable to Save",HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<?> edit(Item item){
        try{
            Item savedItem = itemRepository.save(item);
            return ResponseEntity.ok(savedItem);
        }catch (Exception exception){
            return new ResponseEntity<>( "Unable to Edit",HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<?> delete(Long id){
        Optional<Item> item = itemRepository.findById(id);
        if(item.isPresent()){
            itemRepository.deleteById(id);
            return ResponseEntity.ok("Deleted");
        }else{
            return new ResponseEntity<>( "Not Found",HttpStatus.BAD_REQUEST);
        }
    }

}
