package hackathon.Models;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by Boyan Bonev on 11/03/2017.
 */
public class Heartbeat {
    private Date currentDate;
    public DateFormat dateFormat;

    public Heartbeat(){
        this.currentDate = new Date();
        this.dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
    }

    public String getCurrentDate() {
        return dateFormat.format(currentDate);
    }
}
