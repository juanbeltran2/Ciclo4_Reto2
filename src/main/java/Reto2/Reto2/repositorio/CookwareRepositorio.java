package Reto2.Reto2.repositorio;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import Reto2.Reto2.interfaces.InterfaceCookware;
import Reto2.Reto2.modelo.Cookware;

@Repository
public class CookwareRepositorio {
    @Autowired
    private InterfaceCookware repository;

    public List<Cookware> getAll() {
        return repository.findAll();
    }

    public Optional<Cookware> getClothe(String reference) {
        return repository.findById(reference);
    }
    public Cookware create(Cookware clothe) {
        return repository.save(clothe);
    }

    public void update(Cookware clothe) {
        repository.save(clothe);
    }
    
    public void delete(Cookware clothe) {
        repository.delete(clothe);
    }
}
