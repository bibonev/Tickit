package hackathon.Builders;

import hackathon.QueryModels.TicketQueryModel;
import hackathon.ViewModels.TicketViewModel;

import java.util.List;

/**
 * Created by boyanbonev on 11/03/2017.
 */
public interface ITicketViewModelBuilder {
    List<TicketViewModel> Build(TicketQueryModel query);
}
