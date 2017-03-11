package hackathon.Repositories;

import hackathon.Entities.Ticket;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

/**
 * Created by boyanbonev on 11/03/2017.
 */
@Transactional
public interface TicketDao extends CrudRepository<Ticket, Long> {
    Ticket findById(long id);
}
