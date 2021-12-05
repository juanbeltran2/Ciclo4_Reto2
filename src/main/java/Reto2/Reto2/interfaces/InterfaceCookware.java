package Reto2.Reto2.interfaces;

import org.springframework.data.mongodb.repository.MongoRepository;
import Reto2.Reto2.modelo.Cookware;

public interface InterfaceCookware extends MongoRepository<Cookware, String>{
    
}
