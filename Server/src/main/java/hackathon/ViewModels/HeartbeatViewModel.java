package hackathon.ViewModels;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by Boyan Bonev on 11/03/2017.
 */
public class HeartbeatViewModel {
    private Date currentDate;
    private DateFormat dateFormat;

    public HeartbeatViewModel(){
        this.currentDate = new Date();
        this.dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
    }

    public String getCurrentDate() {
        return dateFormat.format(currentDate);
    }
}
