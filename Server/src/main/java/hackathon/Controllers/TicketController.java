package hackathon.Controllers;

import hackathon.Entities.Ticket;
import hackathon.Repositories.TicketDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by boyanbonev on 11/03/2017.
 */
@Controller
public class TicketController {
    /**
     * GET /get-by-id  --> Return the id for the ticket having the passed
     * id.
     */
    @RequestMapping("/get-by-id")
    @ResponseBody
    public String getByEmail(long id) {
        String ticketName = "";
        try {
            Ticket ticket = ticketDao.findById(id);
            ticketName = String.valueOf(ticket.getName());
        }
        catch (Exception ex) {
            return "Ticket not found";
        }
        return "The ticket name is: " + ticketName;
    }

    @Autowired
    private TicketDao ticketDao;
}
