package hackathon.QueryModels;

import java.util.Date;

/**
 * Created by boyanbonev on 11/03/2017.
 */
public class TicketQueryModel {
    private final int id;
    private final int userId;
    private final Date datePosted;
    private final Date dateEvent;
    private final double price;

    public TicketQueryModel(int id, int userId, Date datePosted, Date dateEvent, double price){
        this.id = id;
        this.userId = userId;
        this.datePosted = datePosted;
        this.dateEvent = dateEvent;
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public int getUserId() {
        return userId;
    }

    public Date getDatePosted() {
        return datePosted;
    }

    public Date getDateEvent() {
        return dateEvent;
    }

    public double getPrice() {
        return price;
    }

}
