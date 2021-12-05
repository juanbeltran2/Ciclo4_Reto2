package Reto2.Reto2.interfaces;

import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;

import Reto2.Reto2.modelo.User;

public interface InterfaceUser extends MongoRepository<User, Integer> {
    Optional<User> findByEmail(String email);
    Optional<User> findByEmailAndPassword(String email,String password);
    
}
