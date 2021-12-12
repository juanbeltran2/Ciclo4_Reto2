package Reto2.Reto2.interfaces;

import java.util.Date;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import Reto2.Reto2.modelo.Order;

public interface InterfaceOrder extends MongoRepository<Order,Integer> {
    List<Order> findBySalesManZone(String zone);
    List<Order> findBySalesManId(int id);
    List<Order> findBySalesManIdAndStatus(int id, String status);
    List<Order> findByRegisterDayAndSalesManId(Date registerDay, Integer id);
    
}
