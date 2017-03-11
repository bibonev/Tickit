package hackathon.ViewModels;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by boyanbonev on 11/03/2017.
 */
public class TicketViewModel {
    private final long id;
    private final int userId;
    private final int typeId;
    private final String name;
    private final String description;
    private final double price;
    private final Date dateOfEvent;
    private final Date datePosted;

    public TicketViewModel(
        long id,
        int userId,
        int typeId,
        String name,
        String description,
        double price,
        Date dateOfEvent,
        Date datePosted
    ) {
        this.id = id;
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

    public int getUserId() {
        return userId;
    }

    public int getTypeId() {
        return typeId;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public double getPrice() {
        return price;
    }

    public String getDateOfEvent() {
        return new SimpleDateFormat("yyyy/MM/dd HH:mm:ss").format(dateOfEvent);
    }

    public String getDatePosted() {
        return new SimpleDateFormat("yyyy/MM/dd HH:mm:ss").format(datePosted);
    }

}
