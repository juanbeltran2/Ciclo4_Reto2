package Reto2.Reto2.repositorio;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import Reto2.Reto2.interfaces.InterfaceOrder;
import Reto2.Reto2.modelo.Order;

@Repository
public class OrderRepositorio {
    @Autowired
    private InterfaceOrder OrderCrudRepository;

    public List<Order> getAll(){
        return OrderCrudRepository.findAll();
    }

    public Optional<Order> getOrder(int id){
        return OrderCrudRepository.findById(id);
    }

    public Order create(Order order) {
        return OrderCrudRepository.save(order);
    }

    public void update(Order order) {
        OrderCrudRepository.save(order);
    }

    public void delete(Order order) {
        OrderCrudRepository.delete(order);
    }

    public List<Order> getOrderByZone(String zone){
        return OrderCrudRepository.findBySalesManZone(zone);
    }

    public List<Order> getBySalesManId(int id){
        return OrderCrudRepository.findBySalesManId(id);
    }

    public List<Order> getBySalesManIdAndStatus(int id, String status){
        return OrderCrudRepository.findBySalesManIdAndStatus(id, status);
    }

    public List<Order> getByRegisterDayAndSalesManId(String registerDay, Integer id){
        try {
            return OrderCrudRepository.findByRegisterDayAndSalesManId(new SimpleDateFormat("yyyy-MM-dd").parse(registerDay), id);
        } catch (ParseException e) {
            e.printStackTrace();
            return null;
        }
    }

}
