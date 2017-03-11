package hackathon;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Created by boyanbonev on 11/03/2017.
 */

@SpringBootApplication
@EntityScan({"hackathon.Entities"})
@EnableJpaRepositories({"hackathon.Repositories"})
@EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class,  HibernateJpaAutoConfiguration.class})
public class Application {
    public static void main(String[] args) throws Exception {
        SpringApplication.run(Application.class, args);
        Thread.currentThread().join();
    }
}
