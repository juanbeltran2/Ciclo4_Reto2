package Reto2.Reto2.interfaces;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import Reto2.Reto2.modelo.Order;

public interface InterfaceOrder extends MongoRepository<Order,Integer> {
    List<Order> findBySalesManZone(String zone);
}
