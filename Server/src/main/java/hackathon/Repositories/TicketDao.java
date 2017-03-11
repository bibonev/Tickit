package hackathon.Repositories;

import hackathon.Entities.Ticket;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

/**
 * Created by boyanbonev on 11/03/2017.
 */
@Transactional
@Repository
public interface TicketDao extends CrudRepository<Ticket, Long> {
    Ticket findById(long id);
}
