package com.hackathon;

import com.hackathon.Controllers.DatabaseController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Created by boyanbonev on 11/03/2017.
 */

@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        DatabaseController.connect();
        SpringApplication.run(Application.class, args);
        //Thread.currentThread().join();
    }
}
