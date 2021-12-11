package Reto2.Reto2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;

import Reto2.Reto2.interfaces.InterfaceCookware;
import Reto2.Reto2.interfaces.InterfaceOrder;
import Reto2.Reto2.interfaces.InterfaceUser;

@Component
@SpringBootApplication
public class Reto2Application implements CommandLineRunner {
	@Autowired
    private InterfaceCookware interfaceCookware;
    @Autowired
    private InterfaceUser interfaceUser;
    @Autowired
    private InterfaceOrder interfaceOrder; 

	public static void main(String[] args) {
		SpringApplication.run(Reto2Application.class, args);
	}

	@Override
    public void run(String... args) throws Exception {
        interfaceCookware.deleteAll();
        interfaceUser.deleteAll();
        interfaceOrder.deleteAll();
    }

}
