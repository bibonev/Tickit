package hackathon.Controllers;

import hackathon.ViewModels.HeartbeatViewModel;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by boyanbonev on 11/03/2017.
 */
@RestController
public class HeartbeatController {
    @RequestMapping("/greeting")
    public HeartbeatViewModel heartbeat() {
        return new HeartbeatViewModel();
    }
}
