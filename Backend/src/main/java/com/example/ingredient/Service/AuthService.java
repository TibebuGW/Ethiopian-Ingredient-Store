package com.example.ingredient.Service;

import com.example.ingredient.Configs.security.JwtUtils;
import com.example.ingredient.Dtos.Auth.JwtResponse;
import com.example.ingredient.Dtos.Auth.LoginRequest;
import com.example.ingredient.Dtos.Auth.MessageResponse;
import com.example.ingredient.Dtos.Auth.SignUpRequest;
import com.example.ingredient.Model.ERole;
import com.example.ingredient.Model.Role;
import com.example.ingredient.Model.User;
import com.example.ingredient.Repository.RoleRepository;
import com.example.ingredient.Repository.UserRepository;
import com.example.ingredient.Service.UserDetail.UserDetailsImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class AuthService {
    private final AuthenticationManager authenticationManager;

    private final UserRepository userRepository;

    private final RoleRepository roleRepository;

    private final PasswordEncoder encoder;

    private final JwtUtils jwtUtils;

    private final CloudinaryService cloudinaryService;

    public void init(){
        Optional<User> admin= userRepository.findByEmail("admin@admin.com");
        Optional<Role> adminRole = roleRepository.findByName(ERole.ROLE_ADMIN);
        if(admin.isEmpty() && adminRole.isPresent()){
            User newAdmin = new User(
                    "",
                    "admin",
                    "admin",
                    "admin@admin.com",
                    encoder.encode("admin")
            );
            newAdmin.setRole(adminRole.get());
            userRepository.save(newAdmin);
        }
    }

    public ResponseEntity login(LoginRequest loginRequest){

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());



        return ResponseEntity.ok(new JwtResponse(
                jwt,
                userDetails.getId(),
                userDetails.getFirstName(),
                userDetails.getLastName(),
                userDetails.getEmail(),
                roles ));
    }

    public ResponseEntity signUp(MultipartFile image,SignUpRequest signUpRequest){
        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        String imagePath = cloudinaryService.uploadFile(image);
        // Create new user's account
        User user = new User(
                imagePath,
                signUpRequest.getFirstName(),
                signUpRequest.getFirstName(),
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()));

        String strRole = signUpRequest.getRole();
        if (strRole == null) {
            Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            user.setRole(userRole);
        } else {
            switch (signUpRequest.getRole().toLowerCase()) {
                case "district":
                    Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                            .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                    user.setRole(adminRole);
                    break;
                default:
                    Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                            .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                    user.setRole(userRole);
            }
        }

        userRepository.save(user);

        return ResponseEntity.ok("User registered successfully!");

    }

}
