package hackathon.Entities;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

/**
 * Created by boyanbonev on 11/03/2017.
 */
@Entity
@Table(name = "Ticket")
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @NotNull
    private int userId;

    @NotNull
    private int typeId;

    @NotNull
    private String name;

    @NotNull
    private String description;

    @NotNull
    private int price;

    @NotNull
    private Date dateOfEvent;

    @NotNull
    private Date datePosted;
}
