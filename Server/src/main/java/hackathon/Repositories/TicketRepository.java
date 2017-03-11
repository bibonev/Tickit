package hackathon.Repositories;

import hackathon.Entities.Ticket;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by boyanbonev on 11/03/2017.
 */
@RepositoryRestResource(collectionResourceRel = "ticket", path = "ticket")
public interface TicketRepository extends CrudRepository<Ticket, Long> {
    Ticket findById(long id);
}
