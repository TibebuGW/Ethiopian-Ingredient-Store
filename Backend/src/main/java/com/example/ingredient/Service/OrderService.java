package com.example.ingredient.Service;

import com.example.ingredient.Model.Order;
import com.example.ingredient.Repository.OrderRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;

    public ResponseEntity<?> getAll(){
        return ResponseEntity.ok(orderRepository.findAll());
    }

    public ResponseEntity<?> get(Long id){
        Optional<Order> order = orderRepository.findById(id);
        if(order.isPresent()){
            return ResponseEntity.ok(order.get());
        }else{
            return new ResponseEntity<>( "Not Found", HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<?> add(Order order){
        try{
            Order savedItem = orderRepository.save(order);
            return ResponseEntity.ok(savedItem);
        }catch (Exception exception){
            return new ResponseEntity<>( "Unable to Save",HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<?> edit(Order order){
        try{
            Order savedItem = orderRepository.save(order);
            return ResponseEntity.ok(savedItem);
        }catch (Exception exception){
            return new ResponseEntity<>( "Unable to Edit",HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<?> delete(Long id){
        Optional<Order> order = orderRepository.findById(id);
        if(order.isPresent()){
            orderRepository.deleteById(id);
            return ResponseEntity.ok("Deleted");
        }else{
            return new ResponseEntity<>( "Not Found",HttpStatus.BAD_REQUEST);
        }
    }
}
