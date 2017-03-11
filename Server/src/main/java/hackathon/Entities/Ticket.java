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
    private long id;

    @NotNull
    private int userId;

    @NotNull
    private int typeId;

    @NotNull
    private String name;

    @NotNull
    private String description;

    @NotNull
    private double price;

    @NotNull
    private Date dateOfEvent;

    @NotNull
    private Date datePosted;

    public Ticket(
            int userId,
            int typeId,
            String name,
            String description,
            double price,
            Date dateOfEvent,
            Date datePosted
    ) {
        this.userId = userId;
        this.typeId = typeId;
        this.name = name;
        this.description = description;
        this.price = price;
        this.dateOfEvent = dateOfEvent;
        this.datePosted = datePosted;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getTypeId() {
        return typeId;
    }

    public void setTypeId(int typeId) {
        this.typeId = typeId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Date getDateOfEvent() {
        return dateOfEvent;
    }

    public void setDateOfEvent(Date dateOfEvent) {
        this.dateOfEvent = dateOfEvent;
    }

    public Date getDatePosted() {
        return datePosted;
    }

    public void setDatePosted(Date datePosted) {
        this.datePosted = datePosted;
    }

}
